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
        copy: "Zonder thermostaat kan de stooklijn verwarmen terwijl de kamer al warm is. Met een thermostaat als toestemming voorkom je dat.",
        recommended,
        deviant,
      };
    }
    if (deviant) {
      return {
        tone: "info",
        title: "Andere toestemming dan aanbevolen",
        copy: `Voor stooklijn adviseren we ${recommended}. Je gebruikt nu ${current || "onbekend"}.`,
        recommended,
        deviant,
      };
    }
    return {
      tone: "info",
      title: "Goed zo — thermostaat en stooklijn vullen elkaar aan",
      copy: "Thermostaat bepaalt óf er verwarmd wordt, de stooklijn hoe warm.",
      recommended,
      deviant: false,
    };
  }
  // Power House
  if (current !== "Disabled" && current) {
    return {
      tone: "warning",
      title: "Externe toestemming bij Power House",
      copy: "Power House bepaalt zelf of verwarmen nodig is. Een extra thermostaat als harde schakelaar laat de pomp vaker aan en uit gaan. Alleen handig bij zone-verwarming.",
      recommended,
      deviant,
    };
  }
  return {
    tone: "info",
    title: "Goed zo — Power House regelt de warmtevraag zelf",
    copy: "Geen extra toestemming nodig. Power House kijkt zelf naar kamer en buitentemperatuur.",
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
