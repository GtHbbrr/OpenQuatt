import esphome.codegen as cg
import esphome.config_validation as cv
from esphome.components import spi
from esphome.const import CONF_ID

DEPENDENCIES = ["spi"]

openquatt_w5500_power_down_ns = cg.esphome_ns.namespace(
    "openquatt_w5500_power_down"
)
OpenQuattW5500PowerDown = openquatt_w5500_power_down_ns.class_(
    "OpenQuattW5500PowerDown", cg.Component, spi.SPIDevice
)

CONFIG_SCHEMA = (
    cv.Schema(
        {
            cv.GenerateID(): cv.declare_id(OpenQuattW5500PowerDown),
        }
    )
    .extend(cv.COMPONENT_SCHEMA)
    .extend(
        spi.spi_device_schema(
            cs_pin_required=True,
            default_data_rate="8MHz",
            default_mode="mode0",
        )
    )
)


async def to_code(config):
    cg.add_global(openquatt_w5500_power_down_ns.using)
    var = cg.new_Pvariable(config[CONF_ID])
    await cg.register_component(var, config)
    await spi.register_spi_device(var, config)
