import esphome.codegen as cg
import esphome.config_validation as cv
from esphome.core import CORE
from esphome.components import binary_sensor, sensor
from esphome.components.esp32 import add_idf_component, idf_version, include_builtin_idf_component
from esphome.const import CONF_ID

CONF_BOOTSTRAP_BROKER = "bootstrap_broker"
CONF_BOOTSTRAP_PORT = "bootstrap_port"
CONF_BOOTSTRAP_USERNAME = "bootstrap_username"
CONF_BOOTSTRAP_PASSWORD = "bootstrap_password"
CONF_DEW_POINT_TOPIC = "dew_point_topic"
CONF_DEW_POINT_STALE = "dew_point_stale"
CONF_DEW_POINT_SENSOR = "dew_point_sensor"
CONF_DEW_POINT_AGE_SENSOR = "dew_point_age_sensor"
CONF_DEW_POINT_VALID_BINARY_SENSOR = "dew_point_valid_binary_sensor"
CONF_DEFAULT_ENABLED = "default_enabled"

openquatt_mqtt_config_ns = cg.esphome_ns.namespace("openquatt_mqtt_config")
OpenQuattMqttConfig = openquatt_mqtt_config_ns.class_("OpenQuattMqttConfig", cg.Component)

AUTO_LOAD = ["web_server_base"]

CONFIG_SCHEMA = cv.Schema(
    {
        cv.GenerateID(): cv.declare_id(OpenQuattMqttConfig),
        cv.Optional(CONF_BOOTSTRAP_BROKER, default=""): cv.All(cv.string_strict, cv.Length(max=64)),
        cv.Optional(CONF_BOOTSTRAP_PORT, default=1883): cv.port,
        cv.Optional(CONF_BOOTSTRAP_USERNAME, default=""): cv.All(cv.string_strict, cv.Length(max=64)),
        cv.Optional(CONF_BOOTSTRAP_PASSWORD, default=""): cv.sensitive(
            cv.All(cv.string_strict, cv.Length(max=128))
        ),
        cv.Required(CONF_DEW_POINT_TOPIC): cv.All(cv.subscribe_topic, cv.Length(max=96)),
        cv.Required(CONF_DEW_POINT_SENSOR): cv.use_id(sensor.Sensor),
        cv.Required(CONF_DEW_POINT_AGE_SENSOR): cv.use_id(sensor.Sensor),
        cv.Required(CONF_DEW_POINT_VALID_BINARY_SENSOR): cv.use_id(binary_sensor.BinarySensor),
        cv.Optional(CONF_DEW_POINT_STALE, default="900s"): cv.positive_time_period_milliseconds,
        cv.Optional(CONF_DEFAULT_ENABLED, default=False): cv.boolean,
    }
).extend(cv.COMPONENT_SCHEMA)


async def to_code(config):
    if CORE.is_esp32:
        if idf_version() >= cv.Version(6, 0, 0):
            add_idf_component(name="espressif/mqtt", ref="1.0.0")
        else:
            include_builtin_idf_component("mqtt")
        include_builtin_idf_component("json")

    cg.add_global(openquatt_mqtt_config_ns.using)
    var = cg.new_Pvariable(config[CONF_ID])
    await cg.register_component(var, config)

    cg.add(var.set_bootstrap_broker(config[CONF_BOOTSTRAP_BROKER]))
    cg.add(var.set_bootstrap_port(config[CONF_BOOTSTRAP_PORT]))
    cg.add(var.set_bootstrap_username(config[CONF_BOOTSTRAP_USERNAME]))
    cg.add(var.set_bootstrap_password(config[CONF_BOOTSTRAP_PASSWORD]))
    cg.add(var.set_dew_point_topic(config[CONF_DEW_POINT_TOPIC]))
    cg.add(var.set_dew_point_stale_ms(config[CONF_DEW_POINT_STALE].total_milliseconds))
    dew_point_sensor = await cg.get_variable(config[CONF_DEW_POINT_SENSOR])
    cg.add(var.set_dew_point_sensor(dew_point_sensor))
    dew_point_age_sensor = await cg.get_variable(config[CONF_DEW_POINT_AGE_SENSOR])
    cg.add(var.set_dew_point_age_sensor(dew_point_age_sensor))
    dew_point_valid_binary_sensor = await cg.get_variable(config[CONF_DEW_POINT_VALID_BINARY_SENSOR])
    cg.add(var.set_dew_point_valid_binary_sensor(dew_point_valid_binary_sensor))
    cg.add(var.set_default_enabled(config[CONF_DEFAULT_ENABLED]))
