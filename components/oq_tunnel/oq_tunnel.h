#pragma once

#include "esphome/core/component.h"
#include <string>

namespace esphome {
namespace oq_tunnel {

class OQTunnelComponent : public Component {
 public:
  void setup() override;
  void loop() override;
  float get_setup_priority() const override { return 45.0f; } // Schone float priority

  void set_relay_host(const std::string &host) { relay_host_ = host; }
  void set_pump_secret(const std::string &secret) { pump_secret_ = secret; }

  void handle_websocket_data(uint8_t *data, int len);

 private:
  std::string relay_host_;
  std::string pump_secret_;
  void *client_{nullptr}; // Gebruik void* om de esp_websocket_client_handle_t te verbergen voor esphome.h
  bool is_connected_{false};
  bool is_handshaked_{false};
  unsigned long last_reconnect_attempt_{0};
  unsigned long backoff_delay_{5000};

  void connect_to_relay();
  void send_hello();
  void process_request(uint32_t stream_id, const std::string &payload_json);
  void send_frame(uint8_t type, uint32_t stream_id, const uint8_t *payload, size_t payload_len);
};

}  // namespace oq_tunnel
}  // namespace esphome
