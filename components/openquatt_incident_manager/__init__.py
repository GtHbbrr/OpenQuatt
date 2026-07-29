import esphome.codegen as cg
import esphome.config_validation as cv
from esphome.components import globals as globals_component, time
from esphome.const import CONF_ID

AUTO_LOAD = ["globals", "time", "web_server_base"]
DEPENDENCIES = [
    "web_server",
    "openquatt_decision_log",
    "openquatt_web_auth",
]

CONF_CLOCK = "clock"
CONF_CONTROL_MODE_CODE = "control_mode_code"
CONF_DECISION_LOG = "decision_log"
CONF_WEB_AUTH = "web_auth"

openquatt_incident_manager_ns = cg.esphome_ns.namespace(
    "openquatt_incident_manager"
)
OpenQuattIncidentManager = openquatt_incident_manager_ns.class_(
    "OpenQuattIncidentManager", cg.Component
)

openquatt_decision_log_ns = cg.esphome_ns.namespace("openquatt_decision_log")
OpenQuattDecisionLog = openquatt_decision_log_ns.class_(
    "OpenQuattDecisionLog", cg.Component
)

openquatt_web_auth_ns = cg.esphome_ns.namespace("openquatt_web_auth")
OpenQuattWebAuth = openquatt_web_auth_ns.class_(
    "OpenQuattWebAuth", cg.Component
)

CONFIG_SCHEMA = cv.Schema(
    {
        cv.GenerateID(): cv.declare_id(OpenQuattIncidentManager),
        cv.Required(CONF_CLOCK): cv.use_id(time.RealTimeClock),
        cv.Required(CONF_CONTROL_MODE_CODE): cv.use_id(
            globals_component.GlobalsComponent
        ),
        cv.Required(CONF_DECISION_LOG): cv.use_id(OpenQuattDecisionLog),
        cv.Required(CONF_WEB_AUTH): cv.use_id(OpenQuattWebAuth),
    }
).extend(cv.COMPONENT_SCHEMA)


async def to_code(config):
    cg.add_global(openquatt_incident_manager_ns.using)
    var = cg.new_Pvariable(config[CONF_ID])
    await cg.register_component(var, config)

    clock = await cg.get_variable(config[CONF_CLOCK])
    cg.add(var.set_clock(clock))
    control_mode_code = await cg.get_variable(config[CONF_CONTROL_MODE_CODE])
    cg.add(var.set_control_mode_code(control_mode_code))
    decision_log = await cg.get_variable(config[CONF_DECISION_LOG])
    cg.add(var.set_decision_log(decision_log))
    web_auth = await cg.get_variable(config[CONF_WEB_AUTH])
    cg.add(var.set_web_auth(web_auth))
