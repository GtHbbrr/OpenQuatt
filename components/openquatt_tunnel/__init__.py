import esphome.codegen as cg
import esphome.config_validation as cv
from esphome.const import CONF_ID

AUTO_LOAD = ["network"]

# Dwing ESPHome om de externe ESP-IDF component te linken in CMake
cg.add_library("esp_websocket_client", None)

openquatt_tunnel_ns = cg.esphome_ns.namespace("openquatt_tunnel_tunnel")
OpenQuattTunnel = openquatt_tunnel_ns.class_("OpenQuattTunnel", cg.Component)

CONFIG_SCHEMA = cv.Schema({
    cv.GenerateID(): cv.declare_id(OpenQuattTunnel),
    cv.Required("relay_host"): cv.string,
    cv.Required("pump_secret"): cv.string,
}).extend(cv.COMPONENT_SCHEMA)

async def to_code(config):
    var = cg.new_Pvariable(config[CONF_ID])
    await cg.register_component(var, config)
    cg.add(var.set_relay_host(config["relay_host"]))
    cg.add(var.set_pump_secret(config["pump_secret"]))
