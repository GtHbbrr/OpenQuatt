import esphome.codegen as cg
import esphome.config_validation as cv
from esphome.core import CORE
from esphome.components.esp32 import include_builtin_idf_component
from esphome.const import CONF_ID

AUTO_LOAD = ["network"]

# We zetten de namespace strak conform de ESPHome-mapnaam mapping
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
    if CORE.is_esp32:
        # 1. Zorg dat de IDF component gecompileerd wordt
        include_builtin_idf_component("esp_websocket_client")
        include_builtin_idf_component("json")
        
        # 2. Dwing CMake om het header-pad van de ESP-IDF component vindbaar te maken
        cg.add_build_flag("-I$IDF_PATH/components/esp_websocket_client/include")
        cg.add_build_flag("-D_GLIBCXX_USE_C99")

    var = cg.new_Pvariable(config[CONF_ID])
    await cg.register_component(var, config)
    
    cg.add(var.set_relay_host(config["relay_host"]))
    cg.add(var.set_pump_secret(config["pump_secret"]))
