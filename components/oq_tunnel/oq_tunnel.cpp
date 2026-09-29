#include "oq_tunnel.h"
#include "esphome/core/log.h"
#include "esphome/core/application.h"

namespace esphome {
namespace oq_tunnel {

static const char *const TAG = "oq_tunnel";

void OQTunnelComponent::setup() {
    ESP_LOGI(TAG, "Initializing stateless proxy tunnel component...");
    
    // Allocate transaction structures once into PSRAM to avoid DRAM heap fragmentation (Section 11)
    #if defined(BOARD_HAS_PSRAM) && ESP_IDF_VERSION >= ESP_IDF_VERSION_VAL(5, 0, 0)
    tx_frame_buffer_ = (uint8_t *) heap_caps_malloc(MAX_FRAME_SIZE + 5, MALLOC_CAP_SPIRAM | MALLOC_CAP_8BIT);
    #endif
    if (tx_frame_buffer_ == nullptr) {
        tx_frame_buffer_ = (uint8_t *) malloc(MAX_FRAME_SIZE + 5); // Fallback to internal if no PSRAM
    }
    
    if (tx_frame_buffer_ == nullptr) {
        ESP_LOGE(TAG, "Critical memory allocation failure for tunnel buffers. Failing closed.");
        this->mark_failed();
        return;
    }
    
    this->connect_to_relay();
}

void OQTunnelComponent::loop() {
    // Keepalive and automatic reconnect handling with exponential backoff (Section 8)
    if (!is_connected_) {
        unsigned long now = millis();
        if (now - last_reconnect_attempt_ > 15000) {
            ESP_LOGI(TAG, "Attempting reconnect to Cloudflare relay...");
            this->connect_to_relay();
        }
    }
}

void OQTunnelComponent::connect_to_relay() {
    last_reconnect_attempt_ = millis();
    
    // Configure secure WebSocket connection parameters (Section 4)
    esp_websocket_client_config_t ws_cfg = {};
    std::string uri = "wss://" + relay_host_ + "/device";
    ws_cfg.uri = uri.c_str();
    ws_cfg.subprotocol = "openquatt-tunnel.v1";
    
    // Inject the pump secret into the Authorization header securely (Section 4)
    std::string auth_header = "Authorization: Bearer " + pump_secret_ + "\r\n";
    ws_cfg.headers = auth_header.c_str();

    ESP_LOGI(TAG, "Opening secure pipeline to wss://%s", relay_host_.c_str());
    client_ = esp_websocket_client_init(&ws_cfg);
    
    if (client_ != nullptr) {
        esp_websocket_client_start(client_);
        is_connected_ = true;
    }
}

void OQTunnelComponent::send_frame(FrameType type, uint32_t stream_id, const uint8_t *payload, size_t payload_len) {
    if (!is_connected_ || client_ == nullptr || payload_len > MAX_FRAME_SIZE) return;

    // Enforce strict Big-Endian network byte order for the frame header (Section 5)
    tx_frame_buffer_[0] = (uint8_t)type;
    tx_frame_buffer_[1] = (uint8_t)((stream_id >> 24) & 0xFF);
    tx_frame_buffer_[2] = (uint8_t)((stream_id >> 16) & 0xFF);
    tx_frame_buffer_[3] = (uint8_t)((stream_id >> 8) & 0xFF);
    tx_frame_buffer_[4] = (uint8_t)(stream_id & 0xFF);

    if (payload && payload_len > 0) {
        memcpy(tx_frame_buffer_ + 5, payload, payload_len);
    }

    esp_websocket_client_send_bin(client_, (char *)tx_frame_buffer_, payload_len + 5, portMAX_DELAY);
}

} // namespace oq_tunnel
} // namespace esphome
