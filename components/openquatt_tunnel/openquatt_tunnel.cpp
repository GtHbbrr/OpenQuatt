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
    if (!this->pump_secret_.empty() && this->pump_secret_ != "—") return;
    this->pump_secret_ = pump_secret;
    ESP_LOGI(TAG, "🔒 [LOCK] Token verankerd in RAM: %s", pump_secret.c_str());
}

void OpenQuattTunnel::set_connecting_false() {
    this->is_connecting_ = false;
}

void OpenQuattTunnel::connect_to_relay() {
    if (this->pump_secret_.empty() || this->pump_secret_ == "—") return;

    this->is_connecting_ = true;
    last_reconnect_attempt_ = millis();

    // Moderne, foutloze URI string-opbouw met ingebouwd query-token
    std::string full_uri = "wss://quatt.openheatpumps.nl/device?token=" + this->pump_secret_;

    esp_websocket_client_config_t ws_cfg = {};
    ws_cfg.uri = full_uri.c_str();
    ws_cfg.buffer_size = 4096;

    if (client_ != nullptr) {
        esp_websocket_client_stop((esp_websocket_client_handle_t)client_);
        esp_websocket_client_destroy((esp_websocket_client_handle_t)client_);
        client_ = nullptr;
    }

    esp_websocket_client_handle_t ws_client = esp_websocket_client_init(&ws_cfg);
    if (ws_client != nullptr) {
        esp_websocket_client_start(ws_client);
        client_ = (void *)ws_client;
        ESP_LOGI(TAG, "🚀 [TUNNEL] WebSocket client succesvol gestart over beveiligde cloud-pijplijn.");
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

void OpenQuattTunnel::on_websocket_data(uint8_t *data, size_t len) {}

} // namespace openquatt_tunnel_tunnel
} // namespace esphome
