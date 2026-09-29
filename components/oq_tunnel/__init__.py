import esphome.codegen as cg
import esphome.config_validation as cv
from esphome.const import CONF_ID

# Dit dwingt ESPHome om de core netwerk-pakketten te laden
AUTO_LOAD = ["network", "web_server"]

oq_tunnel_ns = cg.esphome_ns.namespace("oq_tunnel")
OQTunnelComponent = oq_tunnel_ns.class_("OQTunnelComponent", cg.Component)

CONFIG_SCHEMA = cv.Schema(
    {
        cv.GenerateID(): cv.declare_id(OQTunnelComponent),
        cv.Required("relay_host"): cv.string,
        cv.Required("pump_secret"): cv.string,
    }
).extend(cv.COMPONENT_SCHEMA)

async def to_code(config):
    var = cg.new_Pvariable(config[CONF_ID])
    await cg.register_component(var, config)
    
    # Vertel ESPHome's CMake generator dat dit component leunt op de core wifi/network infrastructuur
    # Dit is de officiele manier in ESPHome om ESP-IDF core componenten te koppelen
    cg.add_define("USE_ESP_WEBSOCKET_CLIENT")
    cg.add_build_flag("-DCONFIG_ESP_WEBSOCKET_CLIENT_ENABLE=1")
    
    cg.add(var.set_relay_host(config["relay_host"]))
    cg.add(var.set_pump_secret(config["pump_secret"]))
