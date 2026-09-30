import esphome.codegen as cg
import esphome.config_validation as cv
from esphome.const import CONF_ID

AUTO_LOAD = ["network"]

# Namespace en klasse exact gelijnd met de mapstructuur
openquatt_tunnel_ns = cg.esphome_ns.namespace("openquatt_tunnel")
OpenQuattTunnel = openquatt_tunnel_ns.class_("OpenQuattTunnel", cg.Component)

CONFIG_SCHEMA = cv.Schema(
    {
        cv.GenerateID(): cv.declare_id(OpenQuattTunnel),
        cv.Required("relay_host"): cv.string,
        cv.Required("pump_secret"): cv.string,
    }
).extend(cv.COMPONENT_SCHEMA)

async def to_code(config):
    # Dit dwingt de CMake-generator om de ingebouwde ESP-IDF component mee te compileren
    cg.add_build_macro("USE_ESP_WEBSOCKET_CLIENT")
    cg.add_library("esp_websocket_client", None)
    
    cg.add_global(openquatt_tunnel_ns.using)
    var = cg.new_Pvariable(config[CONF_ID])
    await cg.register_component(var, config)
    cg.add(var.set_relay_host(config["relay_host"]))
    cg.add(var.set_pump_secret(config["pump_secret"]))
