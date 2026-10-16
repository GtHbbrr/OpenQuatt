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

// De officiële Espressif Event Handler om de protocol-handshake (HELLO) direct na SSL-succes af te vuren
static void websocket_event_handler(void *handler_args, esp_event_base_t base, int32_t event_id, void *event_data) {
    OpenQuattTunnel *tunnel = (OpenQuattTunnel *)handler_args;
    if (tunnel == nullptr) return;

    switch (event_id) {
        case WEBSOCKET_EVENT_CONNECTED:
            tunnel->set_connecting_false();
            ESP_LOGI(TAG, "🟢 [WEBSOCKET] TLS Handshake geslaagd! Starten van Wire Protocol v2.0 HELLO...");
            
            // Zend het binaire HELLO frame (Type 0x01, Stream ID 0) conform Sectie 5 & 6 van de specificatie
            {
                std::string hello_json = "{\"v\":2,\"fw\":\"0.54.1\",\"max_frame\":4096}";
                tunnel->send_frame(FRAME_HELLO, 0, (const uint8_t *)hello_json.c_str(), hello_json.length());
                ESP_LOGI(TAG, "📡 [TUNNEL] FRAME_HELLO (0x01) succesvol over de beveiligde socket gestuurd!");
            }
            break;
            
        case WEBSOCKET_EVENT_DISCONNECTED:
            tunnel->set_connecting_false();
            ESP_LOGW(TAG, "🔴 [WEBSOCKET] Verbinding met Cloudflare verbroken.");
            break;
            
        case WEBSOCKET_EVENT_DATA:
            break;
            
        case WEBSOCKET_EVENT_ERROR:
            tunnel->set_connecting_false();
            ESP_LOGE(TAG, "🚨 [WEBSOCKET] Netwerk transportfout gedetecteerd.");
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

    // Wis en initialiseer de stabiele klasse-buffer in het RAM
    memset(&this->ws_cfg_storage_, 0, sizeof(esp_websocket_client_config_t));
    
    // 1. Pure, standaard URI zonder query-string conflicten
    this->ws_cfg_storage_.uri = "wss://quatt.openheatpumps.nl/device";
    
    // 2. Gebruik het OFFICIËLE subprotocol-veld van Espressif (voorkomt header-corruptie!)
    this->ws_cfg_storage_.subprotocol = "openquatt-tunnel.v1";
    
    // 3. Veranker de pure Authorization header zonder handmatige regeleinden (\r\n)
    this->auth_header_storage_ = "Authorization: Bearer " + this->pump_secret_;
    this->ws_cfg_storage_.headers = this->auth_header_storage_.c_str();
    
    this->ws_cfg_storage_.user_context = this;
    this->ws_cfg_storage_.skip_cert_common_name_check = true;
    this->ws_cfg_storage_.buffer_size = 8192; // Behoud de ruime 8KB buffer

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
        ESP_LOGI(TAG, "🚀 [TUNNEL] WebSocket client gestart met native structuurvelden.");
    }
}

void OpenQuattTunnel::send_frame(FrameType type, uint32_t stream_id, const uint8_t *payload, size_t payload_len) {
    if (client_ == nullptr || payload_len > MAX_FRAME_SIZE) return;
    esp_websocket_client_handle_t ws_client = (esp_websocket_client_handle_t)client_;

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
