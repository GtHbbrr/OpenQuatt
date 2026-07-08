let energyHistoryRequestQueryProvider = null;

export function setEnergyHistoryRequestQueryProvider(provider) {
  energyHistoryRequestQueryProvider = typeof provider === "function" ? provider : null;
}

export function getEnergyHistoryRequestQuery() {
  return energyHistoryRequestQueryProvider ? energyHistoryRequestQueryProvider() : "?meta=1";
}
