import esphome.codegen as cg
import esphome.config_validation as cv
from esphome.components import switch, time
from esphome.const import CONF_ID

AUTO_LOAD = ["time", "switch", "web_server_base"]

CONF_CLOCK = "clock"
CONF_FLASH_SWITCH = "flash_switch"
CONF_EVENT_CAPACITY = "event_capacity"
CONF_EVENT_FALLBACK_CAPACITY = "event_fallback_capacity"
CONF_HOUR_BUCKETS = "hour_buckets"
CONF_HOUR_BUCKETS_FALLBACK = "hour_buckets_fallback"

openquatt_decision_log_ns = cg.esphome_ns.namespace("openquatt_decision_log")
OpenQuattDecisionLog = openquatt_decision_log_ns.class_("OpenQuattDecisionLog", cg.Component)


CONFIG_SCHEMA = cv.Schema(
    {
        cv.GenerateID(): cv.declare_id(OpenQuattDecisionLog),
        cv.Required(CONF_CLOCK): cv.use_id(time.RealTimeClock),
        cv.Required(CONF_FLASH_SWITCH): cv.use_id(switch.Switch),
        cv.Optional(CONF_EVENT_CAPACITY, default=5120): cv.positive_int,
        cv.Optional(CONF_EVENT_FALLBACK_CAPACITY, default=128): cv.positive_int,
        cv.Optional(CONF_HOUR_BUCKETS, default=168): cv.positive_int,
        cv.Optional(CONF_HOUR_BUCKETS_FALLBACK, default=24): cv.positive_int,
    }
).extend(cv.COMPONENT_SCHEMA)


async def to_code(config):
    cg.add_global(openquatt_decision_log_ns.using)
    var = cg.new_Pvariable(config[CONF_ID])
    await cg.register_component(var, config)

    clock = await cg.get_variable(config[CONF_CLOCK])
    cg.add(var.set_clock(clock))
    flash_switch = await cg.get_variable(config[CONF_FLASH_SWITCH])
    cg.add(var.set_flash_switch(flash_switch))
    cg.add(var.set_event_capacity(config[CONF_EVENT_CAPACITY]))
    cg.add(var.set_event_fallback_capacity(config[CONF_EVENT_FALLBACK_CAPACITY]))
    cg.add(var.set_hour_bucket_capacity(config[CONF_HOUR_BUCKETS]))
    cg.add(var.set_hour_bucket_fallback_capacity(config[CONF_HOUR_BUCKETS_FALLBACK]))
