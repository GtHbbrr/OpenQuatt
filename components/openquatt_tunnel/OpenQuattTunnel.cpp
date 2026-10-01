#include "OpenQuattTunnel.h"
#include "esphome/core/log.h"
#include "esp_websocket_client.h"

namespace esphome {
namespace openquatt_tunnel_tunnel {

static const char *const TAG = "openquatt_tunnel";

void OpenQuattTunnel::setup() {
    esp_log_level_set("esp_websocket_client", ESP_LOG_DEBUG);
    esp_log_level_set("openquatt_tunnel", ESP_LOG_DEBUG);
    ESP_LOGI(TAG, "🔍 [TRACE 01] setup(): Tunnel component succesvol opgestart in ESPHome.");
    ESP_LOGI(TAG, "🔍 [TRACE 02] Gecachte Relay Host: %s", this->relay_host_.c_str());
    ESP_LOGI(TAG, "🔍 [TRACE 03] Gecachte Initial Token Lengte: %d", this->pump_secret_.length());
    
    tx_frame_buffer_ = (uint8_t *) malloc(MAX_FRAME_SIZE + 5);
    if (tx_frame_buffer_ == nullptr) {
        ESP_LOGE(TAG, "Critical heap allocation failure for tunnel buffers.");
        this->mark_failed();
        return;
    }
    this->connect_to_relay();
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
    ESP_LOGI(TAG, "🚀 [TRACE 07] connect_to_relay() IS NÙ LIVE GETRIGGERD OP DE ESP32!");
    ESP_LOGI(TAG, "🔍 [TRACE 08] Actuele Relay Host: %s", this->relay_host_.c_str());
    ESP_LOGI(TAG, "🔍 [TRACE 09] Actuele Token in C++ RAM: %s (Lengte: %d)", this->pump_secret_.c_str(), this->pump_secret_.length());
    
    if (this->pump_secret_.empty() || this->pump_secret_ == "—") {
      ESP_LOGE(TAG, "🛑 [TRACE 09-ERROR] connect_to_relay afgebroken! pump_secret_ is leeg of ongedefinieerd.");
      return;
    }

    esp_websocket_client_config_t ws_cfg = {};
    static std::string uri;
    uri = "wss://" + relay_host_ + "/device";
    ws_cfg.uri = uri.c_str();
    ws_cfg.subprotocol = "openquatt-tunnel.v1";
    
    static std::string auth_header;
    auth_header = "Authorization: Bearer " + pump_secret_;
    ws_cfg.headers = auth_header.c_str();
    
    ESP_LOGI(TAG, "🔍 [TRACE 10] Geformatteerde URI voor handshake: %s", ws_cfg.uri);
    ESP_LOGI(TAG, "🔍 [TRACE 11] Geformatteerde Authorization Header: %s", ws_cfg.headers);

    if (client_ != nullptr) {
      ESP_LOGI(TAG, "⚠️ [TRACE 12] Bestaande tunnel-client actief. Geforceerd stoppen en opschonen...");
      esp_websocket_client_stop((esp_websocket_client_handle_t)client_);
      esp_websocket_client_destroy((esp_websocket_client_handle_t)client_);
      client_ = nullptr;
    }

    ESP_LOGI(TAG, "🚀 [TRACE 13] Aanroepen van esp_websocket_client_init()...");
    esp_websocket_client_handle_t ws_client = esp_websocket_client_init(&ws_cfg);
    
    if (ws_client != nullptr) {
        ESP_LOGI(TAG, "🚀 [TRACE 14] Initialisatie geslaagd! Starten van esp_websocket_client_start()...");
        esp_err_t ret = esp_websocket_client_start(ws_client);
        ESP_LOGI(TAG, "🔍 [TRACE 15] esp_websocket_client_start status-code resultaat: %d (0 = OK)", ret);
        client_ = (void *)ws_client;
        is_connected_ = true;
    } else {
        ESP_LOGE(TAG, "🚨 [TRACE 14-ERROR] esp_websocket_client_init retourneerde NULL!");
    }
}

void OpenQuattTunnel::send_frame(FrameType type, uint32_t stream_id, const uint8_t *payload, size_t payload_len) {
    if (!is_connected_ || client_ == nullptr || payload_len > MAX_FRAME_SIZE) return;

    esp_websocket_client_handle_t ws_client = (esp_websocket_client_handle_t)client_;

    // Enforce strict Big-Endian network byte order header assembly (Section 5)
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
