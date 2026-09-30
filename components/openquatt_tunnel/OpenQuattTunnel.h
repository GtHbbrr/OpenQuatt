#pragma once

#include "esphome/core/component.h"
#include "esphome/core/helpers.h"
#include <string>

namespace esphome {
namespace openquatt_tunnel {

enum FrameType : uint8_t {
    FRAME_HELLO     = 0x01,
    FRAME_HELLO_ACK = 0x02,
    FRAME_REQ_HEAD  = 0x10,
    FRAME_RES_HEAD  = 0x20,
    FRAME_RES_BODY  = 0x21,
    FRAME_RES_END   = 0x22,
    FRAME_RESET     = 0x30
};

class OpenQuattTunnel : public Component {
 private:
    std::string relay_host_;
    std::string pump_secret_;

 public:
    void setup() override;
    void loop() override;
    float get_setup_priority() const override { return setup_priority::AFTER_WIFI; }
    
    void set_relay_host(const std::string &relay_host) { this->relay_host_ = relay_host; }
    void set_pump_secret(const std::string &pump_secret) { this->pump_secret_ = pump_secret; }
};

}  // namespace openquatt_tunnel
}  // namespace esphome
