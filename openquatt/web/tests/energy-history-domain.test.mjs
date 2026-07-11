import assert from "node:assert/strict";
import test from "node:test";

import {
  getEnergyHistoryDateInputValue,
  parseEnergyHistoryCurrentLine,
  parseEnergyHistoryDateInputValue,
  parseEnergyHistoryDateKey,
  parseEnergyHistoryHourLine,
  parseEnergyHistoryLine,
  parseEnergyHistoryMetadata,
} from "../js/src/core/energy-history-domain.js";

test("energy history date parsing rejects impossible calendar dates", () => {
  assert.equal(parseEnergyHistoryDateKey(20240229)?.key, 20240229);
  assert.equal(parseEnergyHistoryDateKey(20230229), null);
  assert.equal(parseEnergyHistoryDateKey(20240431), null);
  assert.equal(parseEnergyHistoryDateInputValue("2024-02-29")?.key, 20240229);
  assert.equal(parseEnergyHistoryDateInputValue("2023-02-29"), null);
  assert.equal(getEnergyHistoryDateInputValue(20240229), "2024-02-29");
});

test("energy history protocol parsers normalize daily and current records", () => {
  const daily = parseEnergyHistoryLine("7|20240229|1|100|90|10|300|20|40|340");
  assert.deepEqual(
    { sequence: daily?.sequence, dateKey: daily?.dateKey, partial: daily?.partial, electricalInputWh: daily?.electricalInputWh },
    { sequence: 7, dateKey: 20240229, partial: true, electricalInputWh: 100 },
  );

  const current = parseEnergyHistoryCurrentLine("@current|20240229|100|90|10|300|20|40|340");
  assert.equal(current?.source, "current");
  assert.equal(current?.systemHeatOutputWh, 340);
  assert.equal(parseEnergyHistoryLine("7|20240230|1|100|90|10|300|20|40|340"), null);
});

test("energy history hour parser validates hour and formats its range", () => {
  const record = parseEnergyHistoryHourLine("@hour|3|20240229|23|10|9|1|30|2|4|34");
  assert.equal(record?.sortKey, 2024022923);
  assert.equal(record?.tooltipLabel, "23:00 - 00:00");
  assert.equal(parseEnergyHistoryHourLine("@hour|3|20240229|24|10|9|1|30|2|4|34"), null);
});

test("energy history metadata parser reads retention records", () => {
  const metadata = parseEnergyHistoryMetadata([
    "@bounds|14|20240201|20240214|3|20240212|20240214",
    "@day_retention|1|96|8|1707900000",
    "@hour_retention|7|168|1|72|12|48|1707901000",
  ].join("\n"));
  assert.equal(metadata.storedDayCount, 14);
  assert.equal(metadata.hourPartitionAvailable, true);
  assert.equal(metadata.hourRecordCount, 72);
  assert.equal(metadata.dayStorageKb, 96);
});
