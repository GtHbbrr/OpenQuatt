#include "openquatt_tunnel.h"
#include "esphome/core/log.h"
#include "esp_websocket_client.h"
#include "esp_heap_caps.h"
#include "esp_tls.h"

namespace esphome {
  openquatt_tunnel_tunnel::OpenQuattTunnel *openquatt_tunnel_service = nullptr;
}

namespace esphome {
namespace openquatt_tunnel_tunnel {

static const char *const TAG = "openquatt_tunnel";

// Gecorrigeerde event handler conform de exacte ESP-IDF v5 structuurvelden
static void websocket_event_handler(void *handler_args, esp_event_base_t base, int32_t event_id, void *event_data) {
    esp_websocket_event_data_t *data = (esp_websocket_event_data_t *)event_data;
    
    switch (event_id) {
        case WEBSOCKET_EVENT_CONNECTED:
            ESP_LOGI("openquatt_tunnel", "🟢 [WEBSOCKET] TLS Handshake geslaagd! Verbonden met Cloudflare.");
            break;
        case WEBSOCKET_EVENT_DISCONNECTED:
            ESP_LOGW("openquatt_tunnel", "🔴 [WEBSOCKET] Verbinding met Cloudflare abrupt verbroken.");
            break;
        case WEBSOCKET_EVENT_DATA:
            if (data->data_ptr != nullptr && data->data_len > 0 && handler_args != nullptr) {
                OpenQuattTunnel *tunnel = (OpenQuattTunnel *)handler_args;
                tunnel->on_websocket_data((uint8_t *)data->data_ptr, data->data_len);
            }
            break;
        case WEBSOCKET_EVENT_ERROR:
            ESP_LOGE("openquatt_tunnel", "🚨 [WEBSOCKET ERROR METADATA]");
            if (data != nullptr) {
                ESP_LOGE("openquatt_tunnel", "  • Systeem Foutcode (esp_tls): %d", data->error_handle.esp_tls_last_esp_err);
                ESP_LOGE("openquatt_tunnel", "  • Cryptografische Foutcode (mbedtls stack): 0x%X (%d)", -data->error_handle.esp_tls_stack_err, data->error_handle.esp_tls_stack_err);
            }
            break;
    }
}

void OpenQuattTunnel::setup() {
    esphome::openquatt_tunnel_service = this;
    esp_log_level_set("esp_websocket_client", ESP_LOG_DEBUG);
    esp_log_level_set("openquatt_tunnel", ESP_LOG_DEBUG);
    
    this->pump_secret_ = "${oq_tunnel_pump_secret}";
    this->last_reconnect_attempt_ = millis() - 16000;
    
    tx_frame_buffer_ = (uint8_t *) heap_caps_malloc(MAX_FRAME_SIZE + 5, MALLOC_CAP_SPIRAM);
    if (tx_frame_buffer_ == nullptr) {
        this->mark_failed();
        return;
    }
}

void OpenQuattTunnel::loop() {
    bool active_websocket = false;
    if (client_ != nullptr) {
        // CORRECTION: client_ ipv client
        active_websocket = esp_websocket_client_is_connected((esp_websocket_client_handle_t)client_);
    }
    
    this->is_connected_ = active_websocket;

    if (!this->is_connected_) {
        unsigned long now = millis();
        if (now - last_reconnect_attempt_ > 15000) {
            this->connect_to_relay();
        }
    }
}

void OpenQuattTunnel::set_pump_secret(const std::string &pump_secret) {
    this->pump_secret_ = pump_secret;
    ESP_LOGI(TAG, "🔒 [TRACE 06] set_pump_secret() geactiveerd! Token in C++ RAM overschreven.");
}

void OpenQuattTunnel::connect_to_relay() {
    last_reconnect_attempt_ = millis();
    if (this->pump_secret_.empty() || this->pump_secret_ == "—") return;

    esp_websocket_client_config_t ws_cfg = {};
    
    // FIX: Forceer een 100% zuivere, statische URI-string zonder string-concatenatie risico's!
    ws_cfg.uri = "wss://quatt.openheatpumps.nl/device";
    ws_cfg.subprotocol = "openquatt-tunnel.v1";
    
    static std::string auth;
    auth = "Authorization: Bearer " + pump_secret_;
    ws_cfg.headers = auth.c_str();
    ws_cfg.user_context = this;
    ws_cfg.skip_cert_common_name_check = true;

    if (client_ != nullptr) {
        esp_websocket_client_stop((esp_websocket_client_handle_t)client_);
        esp_websocket_client_destroy((esp_websocket_client_handle_t)client_);
        client_ = nullptr;
    }

    esp_websocket_client_handle_t ws_client = esp_websocket_client_init(&ws_cfg);
    if (ws_client != nullptr) {
        esp_websocket_register_events(ws_client, WEBSOCKET_EVENT_ANY, websocket_event_handler, (void *)this);
        esp_websocket_client_start(ws_client);
        client_ = (void *)ws_client;
        ESP_LOGI(TAG, "📡 [DEBUG] esp_websocket_client_start() succesvol uitgevoerd!");
    }
}

void OpenQuattTunnel::send_frame(FrameType type, uint32_t stream_id, const uint8_t *payload, size_t payload_len) {
    if (!is_connected_ || client_ == nullptr || payload_len > MAX_FRAME_SIZE) return;
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

void OpenQuattTunnel::on_websocket_data(uint8_t *data, size_t len) {
    if (len < 5) return;
    uint8_t frame_type = data[0];
    uint32_t stream_id = ((uint32_t)data[1] << 24) | ((uint32_t)data[2] << 16) | ((uint32_t)data[3] << 8) | data[4];

    if (frame_type == 0x10) {
        std::string mock_response = "HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\nContent-Length: 2\r\n\r\nOK";
        this->send_frame((FrameType)0x11, stream_id, (const uint8_t *)mock_response.c_str(), mock_response.length());
        ESP_LOGI(TAG, "🟢 [DEBUG] Succesvol HTTP 200 OK frame teruggestuurd naar Cloudflare voor stream %lu", stream_id);
    }
}

} // namespace openquatt_tunnel_tunnel
} // namespace esphome
