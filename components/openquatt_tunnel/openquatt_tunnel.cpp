#include "openquatt_tunnel.h"
#include "esphome/core/log.h"
#include "esp_websocket_client.h"
#include "esp_heap_caps.h"
#include "esp_crt_bundle.h" 
#include "esp_http_client.h" 

namespace esphome {
  openquatt_tunnel_tunnel::OpenQuattTunnel *openquatt_tunnel_service = nullptr;
}

namespace esphome {
namespace openquatt_tunnel_tunnel {

static const char *const TAG = "openquatt_tunnel";

static void websocket_event_handler(void *handler_args, esp_event_base_t base, int32_t event_id, void *event_data) {
    OpenQuattTunnel *tunnel = (OpenQuattTunnel *)handler_args;
    if (tunnel == nullptr) return;

    switch (event_id) {
        case WEBSOCKET_EVENT_CONNECTED:
            tunnel->set_connecting_false();
            ESP_LOGI(TAG, "🟢 [WEBSOCKET] TLS Handshake geslaagd! Verbonden met Cloudflare.");
            tunnel->send_hello();
            break;
        case WEBSOCKET_EVENT_DISCONNECTED:
            tunnel->set_connecting_false();
            ESP_LOGW(TAG, "🔴 [WEBSOCKET] Verbinding met Cloudflare verbroken.");
            break;
        case WEBSOCKET_EVENT_DATA:
            if (event_data) {
                esp_websocket_event_data_t *data = (esp_websocket_event_data_t *)event_data;
                if (data->op_code == 0x02) { 
                    tunnel->on_websocket_data((uint8_t *)data->data_ptr, data->data_len);
                }
            }
            break;
        case WEBSOCKET_EVENT_ERROR:
            tunnel->set_connecting_false();
            if (event_data) {
                esp_websocket_event_data_t *data = (esp_websocket_event_data_t *)event_data;
                ESP_LOGE(TAG, "🚨 [WEBSOCKET] Fout details -> esp_tls_err=%d, sock_errno=%d",
                    data->error_handle.esp_tls_last_esp_err,
                    data->error_handle.esp_transport_sock_errno);
            }
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
    if (this->pump_secret_ != pump_secret) {
        this->pump_secret_ = pump_secret;
        ESP_LOGI(TAG, "🔒 [LOCK] Token succesvol overschreven en verankerd in RAM: %s", pump_secret.c_str());
        
        if (client_ != nullptr) {
            esp_websocket_client_stop((esp_websocket_client_handle_t)client_);
            esp_websocket_client_destroy((esp_websocket_client_handle_t)client_);
            client_ = nullptr;
        }
        
        this->is_connected_ = false;
        this->is_connecting_ = false;
        this->last_reconnect_attempt_ = millis() - 16000; 
    }
}

void OpenQuattTunnel::set_connecting_false() {
    this->is_connecting_ = false;
}

void OpenQuattTunnel::connect_to_relay() {
    if (this->is_connected_ || this->is_connecting_) return;
    if (this->pump_secret_.empty() || this->pump_secret_ == "—") return;

    if (client_ != nullptr) {
        esp_websocket_client_stop((esp_websocket_client_handle_t)client_);
        esp_websocket_client_destroy((esp_websocket_client_handle_t)client_);
        client_ = nullptr;
    }

    // FIX 1: Underscore toegevoegd conform klasse-definitie
    this->is_connecting_ = true;
    last_reconnect_attempt_ = millis();

    memset(&this->ws_cfg_storage_, 0, sizeof(esp_websocket_client_config_t));
    
    this->ws_cfg_storage_.host = "quatt.openheatpumps.nl";
    this->ws_cfg_storage_.port = 443;
    this->ws_cfg_storage_.transport = WEBSOCKET_TRANSPORT_OVER_SSL; 
    this->ws_cfg_storage_.subprotocol = "openquatt-tunnel.v1";
    this->ws_cfg_storage_.user_context = this;

    static std::string static_path_buffer;
    static_path_buffer = "/device?token=" + this->pump_secret_;
    this->ws_cfg_storage_.path = static_path_buffer.c_str();
    
    static std::string static_header_buffer;
    static_header_buffer = "User-Agent: OpenQuatt/2.0 ESP32-S3\r\n";
    this->ws_cfg_storage_.headers = static_header_buffer.c_str();
    
    this->ws_cfg_storage_.crt_bundle_attach = esp_crt_bundle_attach;
    this->ws_cfg_storage_.skip_cert_common_name_check = false;

    this->ws_cfg_storage_.buffer_size = 4608;
    this->ws_cfg_storage_.task_stack = 16384; 

    esp_websocket_client_handle_t ws_client = esp_websocket_client_init(&this->ws_cfg_storage_);
    if (ws_client != nullptr) {
        esp_websocket_register_events(ws_client, WEBSOCKET_EVENT_ANY, websocket_event_handler, (void *)this);
        esp_websocket_client_start(ws_client);
        client_ = (void *)ws_client;
        ESP_LOGI(TAG, "🚀 [TUNNEL] Veilige WSS Secure TLS Handshake gestart via 16KB stack.");
    } else {
        this->is_connecting_ = false;
        ESP_LOGE(TAG, "🚨 [TUNNEL] Allocatiefout tijdens initialisatie.");
    }
}

void OpenQuattTunnel::send_hello() {
    if (client_ == nullptr || tx_frame_buffer_ == nullptr) return;
    esp_websocket_client_handle_t ws_client = (esp_websocket_client_handle_t)client_;

    const char *hello_json = "{\"v\":1,\"max_frame\":4096,\"max_streams\":2}";
    size_t payload_len = strlen(hello_json);

    tx_frame_buffer_[0] = 0x01; 
    tx_frame_buffer_[1] = 0x00;
    tx_frame_buffer_[2] = 0x00;
    tx_frame_buffer_[3] = 0x00;
    tx_frame_buffer_[4] = 0x00;

    memcpy(tx_frame_buffer_ + 5, hello_json, payload_len);
    esp_websocket_client_send_bin(ws_client, (char *)tx_frame_buffer_, payload_len + 5, portMAX_DELAY);
    ESP_LOGI(TAG, "🚀 [TUNNEL] Binaire HELLO handshake succesvol verzonden.");
}

void OpenQuattTunnel::on_websocket_data(uint8_t *data, size_t len) {
    if (len < 5 || client_ == nullptr) return;
    
    uint8_t type = data[0];
    uint32_t stream_id = ((uint32_t)data[1] << 24) | ((uint32_t)data[2] << 16) | ((uint32_t)data[3] << 8) | data[4];
    
    if (type != 0x10) return; 
    
    std::string json_str((char *)(data + 5), len - 5);
    
    size_t path_start = json_str.find("\"p\":\"");
    if (path_start == std::string::npos) return;
    path_start += 5;
    size_t path_end = json_str.find("\"", path_start);
    if (path_end == std::string::npos) return;
    std::string path = json_str.substr(path_start, path_end - path_start);

    std::string local_url = "http://127.0.0.1" + path;

    esp_http_client_config_t config = {};
    config.url = local_url.c_str();
    config.timeout_ms = 8000; 

    esp_http_client_handle_t http_client = esp_http_client_init(&config);
    if (http_client == nullptr) {
        std::string reset_json = "{\"code\":6}";
        this->send_frame((FrameType)0x30, stream_id, (const uint8_t *)reset_json.c_str(), reset_json.length());
        return;
    }

    esp_err_t err = esp_http_client_open(http_client, 0);
    if (err == ESP_OK) {
        esp_http_client_fetch_headers(http_client);
        int http_code = esp_http_client_get_status_code(http_client);

        std::string res_head_json = "{\"s\":" + std::to_string(http_code) + ",\"h\":{\"content-type\":\"text/html\"}}";
        this->send_frame((FrameType)0x20, stream_id, (const uint8_t *)res_head_json.c_str(), res_head_json.length());

        uint8_t *static_chunk_buffer = (uint8_t *) heap_caps_malloc(2048, MALLOC_CAP_SPIRAM);
        if (static_chunk_buffer != nullptr) {
            int bytes_read;
            while ((bytes_read = esp_http_client_read(http_client, (char *)static_chunk_buffer, 2048)) > 0) {
                this->send_frame((FrameType)0x21, stream_id, static_chunk_buffer, bytes_read);
                vTaskDelay(pdMS_TO_TICKS(1)); 
            }
            heap_caps_free(static_chunk_buffer);
        }

        this->send_frame((FrameType)0x22, stream_id, nullptr, 0);
        // FIX 3: %u hersteld naar %lu om te voldoen aan uint32_t logging-eisen
        ESP_LOGI(TAG, "📤 [TUNNEL] Streaming succesvol afgerond voor stream=%lu", stream_id);
    } else {
        std::string reset_json = "{\"code\":6}";
        this->send_frame((FrameType)0x30, stream_id, (const uint8_t *)reset_json.c_str(), reset_json.length());
        ESP_LOGE(TAG, "🚨 [TUNNEL] Lokale HTTP weigering op path: %s", path.c_str());
    }

    esp_http_client_cleanup(http_client);
}

void OpenQuattTunnel::send_frame(FrameType type, uint32_t stream_id, const uint8_t *payload, size_t payload_len) {
    if (!is_connected_ || client_ == nullptr || payload_len > MAX_FRAME_SIZE || tx_frame_buffer_ == nullptr) return;
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

// FIX 2: Oude, dubbele placeholder-functie onderaan is nu volledig gewist!

} // namespace openquatt_tunnel_tunnel
} // namespace esphome
