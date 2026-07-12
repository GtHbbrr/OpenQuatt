import assert from "node:assert/strict";
import test from "node:test";

globalThis.__OQ_PREVIEW__ = false;
globalThis.localStorage = { getItem: () => null };

const { getEnergyHistoryBucketTooltip, getEnergyHistorySummaryRecords } = await import("../js/src/views/energy.js");

test("energy history tooltip exposes the inputs used by COP and EER", () => {
  const tooltip = getEnergyHistoryBucketTooltip({
    label: "Zo",
    dateKey: 20260712,
    electricalInputWh: 4879,
    heatingInputWh: 0,
    coolingInputWh: 4252,
    heatpumpHeatOutputWh: 0,
    heatpumpCoolingOutputWh: 21025,
    boilerHeatOutputWh: 0,
  });

  assert.match(tooltip, /Elektrisch totaal: 4\.9 kWh/);
  assert.match(tooltip, /Elektrisch koelen: 4\.3 kWh/);
  assert.match(tooltip, /EER koelen: 4\.94/);
  assert.doesNotMatch(tooltip, /Output \/ elektrisch/);
});

test("day summary uses the authoritative day record instead of partial hour buckets", () => {
  const dayRecord = { dateKey: 20260712, electricalInputWh: 4879, heatpumpCoolingOutputWh: 21025 };
  const hourBuckets = [{ dateKey: 20260712, electricalInputWh: 4400, heatpumpCoolingOutputWh: 19000 }];

  assert.deepEqual(getEnergyHistorySummaryRecords([dayRecord], hourBuckets, "day", "20260712"), [dayRecord]);
  assert.deepEqual(getEnergyHistorySummaryRecords([dayRecord], hourBuckets, "week", "20260706"), hourBuckets);
});
