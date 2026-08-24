import { hasEntity } from "./app-shared.js";
import { isCurveMode } from "./domain-helpers.js";
import { getEntityValue } from "./entity-store.js";

export const HEATING_ENABLE_RECOMMENDED_POWER_HOUSE = "Disabled";
export const HEATING_ENABLE_RECOMMENDED_CURVE_OT = "OT thermostat";
export const HEATING_ENABLE_RECOMMENDED_CURVE_FALLBACK = "CIC";

export function getHeatingEnableRecommendation(strategyValue = getEntityValue("strategy")) {
  const isCurve = isCurveMode(strategyValue);
  const otAvailable = hasEntity("otEnabled");
  const cicAvailable = hasEntity("cicPollingEnabled");
  if (isCurve) {
    // OT heeft altijd voorkeur (Q-edition). Fallback naar CIC op remote.
    if (otAvailable) {
      return HEATING_ENABLE_RECOMMENDED_CURVE_OT;
    }
    if (cicAvailable) {
      return HEATING_ENABLE_RECOMMENDED_CURVE_FALLBACK;
    }
    return HEATING_ENABLE_RECOMMENDED_CURVE_FALLBACK;
  }
  return HEATING_ENABLE_RECOMMENDED_POWER_HOUSE;
}

export function getHeatingEnableCurrent() {
  return String(getEntityValue("heatingEnableSource") || "").trim();
}

export function isHeatingEnableRecommendationDeviant(strategyValue = getEntityValue("strategy")) {
  const recommended = getHeatingEnableRecommendation(strategyValue);
  const current = getHeatingEnableCurrent();
  if (!current) {
    return false;
  }
  return current !== recommended;
}

export function getHeatingEnableAdvice(strategyValue = getEntityValue("strategy")) {
  const isCurve = isCurveMode(strategyValue);
  const recommended = getHeatingEnableRecommendation(strategyValue);
  const current = getHeatingEnableCurrent();
  const deviant = current && current !== recommended;
  if (isCurve) {
    if (current === "Disabled") {
      return {
        tone: "warning",
        title: "Warmtetoestemming staat op Niet gebruiken",
        copy: "Bij Water Temperature Control bepaalt normaal de thermostaat óf er verwarmd wordt; OpenQuatt bepaalt met de stooklijn hoe warm. Met Niet gebruiken kan de stooklijn ook verwarmen terwijl de kamer al boven setpoint is. Voor een installatie met kamerthermostaat adviseren we meestal de thermostaat als warmtetoestemming.",
        recommended,
        deviant,
      };
    }
    if (deviant && recommended === HEATING_ENABLE_RECOMMENDED_CURVE_OT && current !== HEATING_ENABLE_RECOMMENDED_CURVE_OT) {
      return {
        tone: "info",
        title: "Warmtetoestemming wijkt af van advies",
        copy: `Aanbevolen voor stooklijn met kamerthermostaat is ${recommended}. Je gebruikt nu ${current || "onbekend"}.`,
        recommended,
        deviant,
      };
    }
    return {
      tone: "info",
      title: "Thermostaat bepaalt warmtevraag, stooklijn de watertemperatuur",
      copy: recommended === HEATING_ENABLE_RECOMMENDED_CURVE_OT
        ? "Aanbevolen: laat de OpenTherm-thermostaat bepalen wanneer warmte nodig is; OpenQuatt regelt daarna met de stooklijn de gewenste aanvoertemperatuur. Kies Volledig weersafhankelijk (Niet gebruiken) alleen bij een permanent open afgiftesysteem zonder kamerthermostaat."
        : "Aanbevolen: laat de thermostaat/zonevraag bepalen wanneer warmte nodig is; OpenQuatt regelt daarna met de stooklijn de gewenste aanvoertemperatuur.",
      recommended,
      deviant: false,
    };
  }
  // Power House
  if (current !== "Disabled" && current) {
    return {
      tone: "warning",
      title: "Externe warmtetoestemming actief bij Power House",
      copy: "Power House bepaalt zelf de warmtevraag uit buitentemperatuur, kamertemperatuur, setpoint en het huismodel. Met een externe thermostaat als harde gate krijg je twee regelaars achter elkaar; dat kan extra stop/start geven. Gebruik een externe gate alleen bewust, bijvoorbeeld bij zone-regeling.",
      recommended,
      deviant,
    };
  }
  return {
    tone: "info",
    title: "OpenQuatt bepaalt de warmtevraag",
    copy: "Aanbevolen voor Power House: geen externe warmtetoestemming (Niet gebruiken). Power House bouwt de vraag zelf op en af op basis van kamer en huismodel. Kies een externe thermostaat/zonevraag alleen als je bewust een harde warmte-gate wilt.",
    recommended,
    deviant: false,
  };
}

export const STRATEGY_CONFIG_MATRIX = {
  roomTemp: { powerHouse: "vereist", curve: "aanbevolen" },
  roomSetpoint: { powerHouse: "vereist", curve: "aanbevolen" },
  outsideTemp: { powerHouse: "vereist", curve: "vereist" },
  waterSupply: { powerHouse: "nodig voor begrenzing", curve: "vereist" },
  flow: { powerHouse: "vereist", curve: "vereist" },
  heatingEnable: { powerHouse: "meestal Niet gebruiken", curve: "meestal externe thermostaat/zonevraag" },
};
