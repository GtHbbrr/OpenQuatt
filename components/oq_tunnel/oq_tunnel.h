#pragma once

#include "esphome/core/component.h"
#include "esphome/core/helpers.h"
#include <string>

namespace esphome {
namespace oq_tunnel {

enum FrameType : uint8_t {
    FRAME_HELLO     = 0x01,
    FRAME_HELLO_ACK = 0x02,
    FRAME_REQ_HEAD  = 0x10,
    FRAME_RES_HEAD  = 0x20,
    FRAME_RES_BODY  = 0x21,
    FRAME_RES_END   = 0x22,
    FRAME_RESET     = 0x30
};

class OQTunnelComponent : public Component {
 public:
    void setup() override;
    void loop() override;
    float get_setup_priority() const override { return setup_priority::AFTER_WIFI; }
    
    void set_relay_host(const std::string &host) { relay_host_ = host; }
    void set_pump_secret(const std::string &secret) { pump_secret_ = secret; }
    void send_frame(FrameType type, uint32_t stream_id, const uint8_t *payload, size_t payload_len);

 private:
    std::string relay_host_;
    std::string pump_secret_;
    void *client_{nullptr}; // Opaque pointer to isolate websocket structs from global scope
    
    bool is_connected_{false};
    unsigned long last_reconnect_attempt_{0};
    
    static const size_t MAX_FRAME_SIZE = 4096;
    uint8_t *tx_frame_buffer_{nullptr};
    
    void connect_to_relay();
};

} // namespace oq_tunnel
} // namespace esphome
