#include "openquatt_tunnel.h"
#include "esphome/core/log.h"
#include "esp_websocket_client.h"
#include "esp_heap_caps.h"

namespace esphome {
  openquatt_tunnel_tunnel::OpenQuattTunnel *openquatt_tunnel_service = nullptr;
}

namespace esphome {
namespace openquatt_tunnel_tunnel {

static const char *const TAG = "openquatt_tunnel_poc";

void OpenQuattTunnel::setup() {
    esphome::openquatt_tunnel_service = this;
    this->is_connected_ = false;
    this->last_reconnect_attempt_ = millis() - 16000;
    
    tx_frame_buffer_ = (uint8_t *) heap_caps_malloc(MAX_FRAME_SIZE + 5, MALLOC_CAP_SPIRAM);
}

void OpenQuattTunnel::loop() {
    bool active = false;
    if (client_ != nullptr) {
        active = esp_websocket_client_is_connected((esp_websocket_client_handle_t)client_);
    }
    this->is_connected_ = active;

    if (!this->is_connected_) {
        unsigned long now = millis();
        if (now - last_reconnect_attempt_ > 10000) { // Probeer elke 10 seconden
            this->connect_to_relay();
        }
    }
}

void OpenQuattTunnel::set_pump_secret(const std::string &pump_secret) {
    // Schakel de REST-prikkel bypass in: we negeren de web-switch voor deze test
}

void OpenQuattTunnel::set_connecting_false() {}

void OpenQuattTunnel::connect_to_relay() {
    last_reconnect_attempt_ = millis();
    ESP_LOGI(TAG, "🔓 [PoC BYPASS] Starten van onbeveiligde, directe tunnel-connectie...");

    memset(&this->ws_cfg_storage_, 0, sizeof(esp_websocket_client_config_t));
    
    // Kale URI zonder query strings of header mappingfouten
    this->ws_cfg_storage_.uri = "wss://quatt.openheatpumps.nl/device";
    this->ws_cfg_storage_.buffer_size = 4096;

    if (client_ != nullptr) {
        esp_websocket_client_stop((esp_websocket_client_handle_t)client_);
        esp_websocket_client_destroy((esp_websocket_client_handle_t)client_);
        client_ = nullptr;
    }

    esp_websocket_client_handle_t ws_client = esp_websocket_client_init(&this->ws_cfg_storage_);
    if (ws_client != nullptr) {
        esp_websocket_client_start(ws_client);
        client_ = (void *)ws_client;
        ESP_LOGI(TAG, "🚀 [TUNNEL] Kale PoC socket afgevuurd.");
    }
}

void OpenQuattTunnel::send_frame(FrameType type, uint32_t stream_id, const uint8_t *payload, size_t payload_len) {
    if (client_ == nullptr) return;
    esp_websocket_client_handle_t ws_client = (esp_websocket_client_handle_t)client_;
    esp_websocket_client_send_bin(ws_client, (char *)payload, payload_len, portMAX_DELAY);
}

void OpenQuattTunnel::on_websocket_data(uint8_t *data, size_t len) {}

} // namespace openquatt_tunnel_tunnel
} // namespace esphome
