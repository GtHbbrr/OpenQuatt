import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

globalThis.__OQ_PREVIEW__ = false;
globalThis.window = {
  location: { pathname: "/dev.html" },
  setTimeout,
  clearTimeout,
  localStorage: { getItem: () => null },
};

const {
  getOduEepromDumpEndpoint,
  getOduEepromDumpHpIndexes,
  getOduEepromCrcLabel,
  normalizeOduEepromDumpStatus,
} = await import("../js/src/features/odu-eeprom-dump.js");
const { state } = await import("../js/src/core/state.js");

test("ODU EEPROM endpoint blijft per HP en onder het actuele webpad", () => {
  assert.equal(getOduEepromDumpEndpoint(1, "status"), "/openquatt/odu-eeprom/hp1/status");
  assert.equal(getOduEepromDumpEndpoint(2, "start?extended=1"), "/openquatt/odu-eeprom/hp2/start?extended=1");
});

test("Duo-detectie gebruikt de installatie-topologie voordat optionele HP2-entities geladen zijn", () => {
  state.entities = {
    installationTopology: { state: "duo", value: "duo" },
  };
  state.optionalMissingEntities = {};
  assert.deepEqual(getOduEepromDumpHpIndexes(), [1, 2]);
});

test("ODU EEPROM status normaliseert voortgang, CRC en identiteit", () => {
  const status = normalizeOduEepromDumpStatus({
    hp: 2,
    active: true,
    progress_percent: 130,
    registers_read: 220,
    register_count: 512,
    phase: "reading EEPROM shadow",
    crc: { calculated: "0xB191", stored: "0xB191", matches_stored_eeprom: true, retry_count: 1 },
    identity: {
      extended_supported: true,
      model: "QUATT ODU V2",
      core_available: true,
      pcb_program_raw: 0x0204,
      pcb_program: "V002_T04",
      eeprom_program_raw: 0x0032,
    },
  });

  assert.equal(status.hp, 2);
  assert.equal(status.progress, 100);
  assert.equal(status.registersRead, 220);
  assert.equal(status.crc.matchesStoredEeprom, true);
  assert.equal(status.crc.retryCount, 1);
  assert.equal(status.identity.model, "QUATT ODU V2");
  assert.equal(status.identity.pcbProgram, "V002_T04");
});

test("CRC-tekst onderscheidt runtimewijzigingen van een ongeldige uitlezing", () => {
  const status = normalizeOduEepromDumpStatus({
    dump_ready: true,
    crc: { calculated: "0x9DD5", stored: "0xB191", matches_stored_eeprom: false },
  });
  assert.equal(
    getOduEepromCrcLabel(status),
    "Runtimewaarden wijken af van opgeslagen EEPROM (runtime 0x9DD5, EEPROM 0xB191)",
  );
});

test("firmware gebruikt sheet minus een en blokkeert de frequentietabel tijdens export", async () => {
  const [componentHeader, componentSource, hpPackage, frequencyHelper] = await Promise.all([
    readFile(new URL("../../../components/openquatt_odu_eeprom_dump/OpenQuattOduEepromDump.h", import.meta.url), "utf8"),
    readFile(new URL("../../../components/openquatt_odu_eeprom_dump/OpenQuattOduEepromDump.cpp", import.meta.url), "utf8"),
    readFile(new URL("../../oq_HP_io.yaml", import.meta.url), "utf8"),
    readFile(new URL("../../includes/experimental/oq_odu_runtime_frequency_table.h", import.meta.url), "utf8"),
  ]);

  assert.match(componentHeader, /EEPROM_START_ADDRESS = 2999/);
  assert.match(componentHeader, /EEPROM_REGISTER_COUNT = 512/);
  assert.match(componentHeader, /EEPROM_CRC_DATA_COUNT = 510/);
  assert.match(componentHeader, /request_is_authenticated/);
  assert.match(componentSource, /request_token/);
  assert.match(componentSource, /captured_at_epoch_/);
  assert.match(componentSource, /runtime_shadow_differs_from_stored_eeprom/);
  assert.match(hpPackage, /id\(\$\{hp_id\}_odu_eeprom_dump\)\.is_active\(\)/);
  assert.match(frequencyHelper, /BLOCKED: EEPROM dump active/);
});

test("mock exporteert 512 woorden en bewaart de bekende fabrieksfrequenties", async () => {
  const mockSource = await readFile(new URL("../js/mock-device.js", import.meta.url), "utf8");
  assert.match(mockSource, /Array\.from\(\{ length: 512 \}/);
  assert.match(mockSource, /words\[510\] = crc & 0xff/);
  assert.match(mockSource, /frequency\.cooling\.forEach/);
  assert.match(mockSource, /format: "openquatt-odu-eeprom-v1"/);
});
