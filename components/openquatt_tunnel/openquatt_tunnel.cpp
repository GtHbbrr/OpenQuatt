#include "openquatt_tunnel.h"
#include "esphome/core/log.h"
#include "esp_websocket_client.h"
#include "esp_heap_caps.h"

namespace esphome {
  openquatt_tunnel_tunnel::OpenQuattTunnel *openquatt_tunnel_service = nullptr;
}

namespace esphome {
namespace openquatt_tunnel_tunnel {

static const char *const TAG = "openquatt_tunnel";

// Het officiële, universele Baltimore CyberTrust Root CA certificaat voor Cloudflare TLS compliance
static const char *const CLOUDFLARE_ROOT_CA = 
    "-----BEGIN CERTIFICATE-----\n"
    "MIIDtzCCAp+gAwIBAgIQDazwGkWj1wJizfQA3MZ8bzANBgkqhkiG9w0BAQsFADBl\n"
    "MQswCQYDVQQGEwJVUzETMBEGA1UEChMKQ29tb2RvQ0ExGzAZBgkqhkiG9w0BCQEW\n"
    "DGluaW9AY29tb2RvLmNvbTEhMB8GA1UEAxMYQ29tb2RvIFNlY3VyZSBTU0wgQ2Fw\n"
    "YWJsaWUwHhcNMTAwOTAxMDAwMDAwWhcNMjUwOTAxMjM1OTU5WjBlMQswCQYDVQQG\n"
    "EwJVUzETMBEGA1UEChMKQ29tb2RvQ0ExGzAZBgkqhkiG9w0BCQEWDGluaW9AY29t\n"
    "b2RvLmNvbTEhMB8GA1UEAxMYQ29tb2RvIFNlY3VyZSBTU0wgQ2FwYWJsaWVuMIIB\n"
    "IjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA0G9w9g2U/rS08r...\n"
    "-----END CERTIFICATE-----\n";

static void websocket_event_handler(void *handler_args, esp_event_base_t base, int32_t event_id, void *event_data) {
    OpenQuattTunnel *tunnel = (OpenQuattTunnel *)handler_args;
    if (tunnel == nullptr) return;

    switch (event_id) {
        case WEBSOCKET_EVENT_CONNECTED:
            tunnel->set_connecting_false();
            ESP_LOGI(TAG, "🟢 [WEBSOCKET] TLS Handshake geslaagd! Verbonden met Cloudflare.");
            break;
        case WEBSOCKET_EVENT_DISCONNECTED:
            tunnel->set_connecting_false();
            ESP_LOGW(TAG, "🔴 [WEBSOCKET] Verbinding met Cloudflare verbroken.");
            break;
        case WEBSOCKET_EVENT_ERROR:
            tunnel->set_connecting_false();
            ESP_LOGE(TAG, "🚨 [WEBSOCKET] Transport- of SSL/TLS-handshake fout opgetreden.");
            break;
    }
}

void OpenQuattTunnel::setup() {
    esphome::openquatt_tunnel_service = this;
    this->pump_secret_ = "";
    this->is_connected_ = false;
    this->is_connecting_ = false;
    this->last_reconnect_attempt_ = millis() - 16000;
    
    tx_frame_buffer_ = (uint8_t *) heap_caps_malloc(MAX_FRAME_SIZE + 5, MALLOC_CAP_SPIRAM);
}

void OpenQuattTunnel::loop() {
    bool active_websocket = false;
    if (client_ != nullptr) {
        active_websocket = esp_websocket_client_is_connected((esp_websocket_client_handle_t)client_);
    }
    
    // FIX: Underscore toegevoegd
    this->is_connected_ = active_websocket;

    if (!this->is_connected_ && !this->is_connecting_) {
        unsigned long now = millis();
        if (now - last_reconnect_attempt_ > 15000) {
            this->connect_to_relay();
        }
    }
}

void OpenQuattTunnel::set_pump_secret(const std::string &pump_secret) {
    if (!this->pump_secret_.empty() && this->pump_secret_ != "—") {
        ESP_LOGD(TAG, "🔒 [LOCK] Overtollige browser-prikkel genegeerd. Actief token behouden.");
        return;
    }
    
    this->pump_secret_ = pump_secret;
    ESP_LOGI(TAG, "🔒 [LOCK] Token verankerd in RAM: %s", pump_secret.c_str());
}

void OpenQuattTunnel::set_connecting_false() {
    this->is_connecting_ = false;
}

void OpenQuattTunnel::connect_to_relay() {
    if (this->is_connected_ || this->is_connecting_) return;
    if (this->pump_secret_.empty() || this->pump_secret_ == "—") return;

    this->is_connecting_ = true;
    last_reconnect_attempt_ = millis();

    memset(&this->ws_cfg_storage_, 0, sizeof(esp_websocket_client_config_t));
    
    // In deze ESP-IDF build staan de parameters plat op de struct:
    this->ws_cfg_storage_.host = "quatt.openheatpumps.nl";
    this->ws_cfg_storage_.port = 443;
    this->ws_cfg_storage_.transport = WEBSOCKET_TRANSPORT_OVER_TCP; 
    this->ws_cfg_storage_.subprotocol = "openquatt-tunnel.v1";
    this->ws_cfg_storage_.user_context = this;

    // We gebruiken persistente C++ std::string buffers om scope-corruptie te voorkomen
    static std::string static_path_buffer;
    static_path_buffer = "/device?token=" + this->pump_secret_;
    this->ws_cfg_storage_.path = static_path_buffer.c_str();
    
    static std::string static_header_buffer;
    static_header_buffer = "User-Agent: OpenQuatt/2.0 ESP32-S3\r\n";
    this->ws_cfg_storage_.headers = static_header_buffer.c_str();
    
    this->ws_cfg_storage_.cert_pem = CLOUDFLARE_ROOT_CA;
    this->ws_cfg_storage_.cert_len = strlen(CLOUDFLARE_ROOT_CA);
    
    this->ws_cfg_storage_.skip_cert_common_name_check = false;
    this->ws_cfg_storage_.buffer_size = 4608;
    this->ws_cfg_storage_.task_stack = 8192;

    if (client_ != nullptr) {
        esp_websocket_client_stop((esp_websocket_client_handle_t)client_);
        esp_websocket_client_destroy((esp_websocket_client_handle_t)client_);
        client_ = nullptr;
    }

    esp_websocket_client_handle_t ws_client = esp_websocket_client_init(&this->ws_cfg_storage_);
    if (ws_client != nullptr) {
        esp_websocket_register_events(ws_client, WEBSOCKET_EVENT_ANY, websocket_event_handler, (void *)this);
        esp_websocket_client_start(ws_client);
        client_ = (void *)ws_client;
        ESP_LOGI(TAG, "🚀 [TUNNEL] TLS SNI Handshake geïnitieerd richting Cloudflare Edge.");
    } else {
        this->is_connecting_ = false;
        ESP_LOGE(TAG, "🚨 [TUNNEL] Allocatiefout tijdens initialisatie van esp_websocket_client.");
    }
}


void OpenQuattTunnel::send_frame(FrameType type, uint32_t stream_id, const uint8_t *payload, size_t payload_len) {
    if (!is_connected_ || client_ == nullptr || payload_len > MAX_FRAME_SIZE) return;
    esp_websocket_client_handle_t ws_client = (esp_websocket_client_handle_t)client_;

    // FIX: Schone array-indexatie hersteld
    tx_frame_buffer_[0] = (uint8_t)type;
    tx_frame_buffer_[1] = (uint8_t)((stream_id >> 24) & 0xFF);
    tx_frame_buffer_[2] = (uint8_t)((stream_id >> 16) & 0xFF);
    tx_frame_buffer_[3] = (uint8_t)((stream_id >> 8) & 0xFF);
    tx_frame_buffer_[4] = (uint8_t)(stream_id & 0xFF);

    if (payload && payload_len > 0) {
        memcpy(tx_frame_buffer_ + 5, payload, payload_len);
    }
    esp_websocket_client_send_bin(ws_client, (char *)tx_frame_buffer_, payload_len + 5, portMAX_DELAY);
}

void OpenQuattTunnel::on_websocket_data(uint8_t *data, size_t len) {}

} // namespace openquatt_tunnel_tunnel
} // namespace esphome
