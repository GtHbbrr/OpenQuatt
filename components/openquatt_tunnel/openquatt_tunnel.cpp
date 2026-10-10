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

void OpenQuattTunnel::setup() {
    esphome::openquatt_tunnel_service = this;
    esp_log_level_set("esp_websocket_client", ESP_LOG_DEBUG);
    esp_log_level_set("openquatt_tunnel", ESP_LOG_DEBUG);
    ESP_LOGI(TAG, "🔍 [TRACE 01] setup(): Tunnel gestart.");
    
    tx_frame_buffer_ = (uint8_t *) heap_caps_malloc(MAX_FRAME_SIZE + 5, MALLOC_CAP_SPIRAM);
    if (tx_frame_buffer_ == nullptr) {
        this->mark_failed();
        return;
    }
}

void OpenQuattTunnel::loop() {
    if (!is_connected_) {
        unsigned long now = millis();
        if (now - last_reconnect_attempt_ > 15000) {
            this->connect_to_relay();
        }
    }
}

void OpenQuattTunnel::connect_to_relay() {
    last_reconnect_attempt_ = millis();
    if (this->pump_secret_.empty() || this->pump_secret_ == "—") return;

    esp_websocket_client_config_t ws_cfg = {};
    static std::string uri, auth;
    uri = "wss://" + relay_host_ + "/device";
    ws_cfg.uri = uri.c_str();
    ws_cfg.subprotocol = "openquatt-tunnel.v1";
    auth = "Authorization: Bearer " + pump_secret_;
    ws_cfg.headers = auth.c_str();

    if (client_ != nullptr) {
        esp_websocket_client_stop((esp_websocket_client_handle_t)client_);
        esp_websocket_client_destroy((esp_websocket_client_handle_t)client_);
        client_ = nullptr;
    }

    esp_websocket_client_handle_t ws_client = esp_websocket_client_init(&ws_cfg);
    if (ws_client != nullptr) {
        esp_websocket_client_start(ws_client);
        client_ = (void *)ws_client;
        is_connected_ = true;
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

} // namespace openquatt_tunnel_tunnel
} // namespace esphome
