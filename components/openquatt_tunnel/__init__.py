import esphome.codegen as cg
import esphome.config_validation as cv
from esphome.core import CORE
from esphome.const import CONF_ID

# Zorg dat de basis netwerk- en webserver-structuren bekend zijn
AUTO_LOAD = ["network", "web_server_base"]

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
    # Dit is de MAGISCHE Schakelaar voor ESPHome 2026.x:
    if CORE.is_esp32:
        from esphome.components.esp32 import include_builtin_idf_component
        # Dit dwingt het ESP-IDF framework om de websockets native te laden én te linken
        include_builtin_idf_component("esp_websocket_client")
        cg.add_build_flag("-D_GLIBCXX_USE_C99")

    cg.add_global(openquatt_tunnel_ns.using)
    var = cg.new_Pvariable(config[CONF_ID])
    await cg.register_component(var, config)
    cg.add(var.set_relay_host(config["relay_host"]))
    cg.add(var.set_pump_secret(config["pump_secret"]))
