# ESPHome 2026.9 upgrade — validatieverslag (PR 1)

**Scope:** PR 1 `Migreer naar ESPHome 2026.9 met uniforme 10s-Modbuspolling` — onderdeel van #640.
**Status:** IMPLEMENTATIE GEREED, NOG NIET GETEST OF GEBOUWD. Validatie volgt apart op verzoek van Jeroen.

## Vastgelegde basis

```text
STARTCOMMIT: fac96d972be21eed86915d3493977dc6b2d3f881 (origin/dev)
KANDIDAATCOMMIT: (lokale branch upgrade/esphome-2026-9-pr1; zie diff — nog niet gepusht/gemerged)
ESPHOME BASELINE: 2026.8.2
ESPHOME KANDIDAAT: 2026.9.0b4 (beta — expliciet gepind; geen stable-claim)
BETA OF STABLE: BETA (releasepagina 2026.9 was op 15-09-2026 nog beta 2026.9.0b4; vóór vrijgave pin + tests op gekozen stable herhalen)
ESP-IDF / TOOLCHAIN: NOT RUN — uitgesteld op verzoek van Jeroen; aparte testfase volgt (framework.version: recommended ongewijzigd)
```

Werkplek: aparte worktree `../openquatt-esphome-2026-9`, branch `upgrade/esphome-2026-9-pr1` vanaf `origin/dev`.
Bestaande branch `upgrade/esphome-2026-9` is onaangeroerd gelaten (oude voorouder van `dev`); daarom de unieke `-pr1`-naam.

## Wat is geïmplementeerd (statisch nagelezen, niet gebouwd)

- Versiepin `.github/requirements-esphome.txt`: `esphome==2026.8.2` → `esphome==2026.9.0b4`.
- `esphome.min_version` in `openquatt/base/common.yaml`: `2026.8.2` → `2026.9.0b4`.
- Reguliere online polling: `oq_modbus_update_interval_s` `5` → `10`; `oq_modbus_offline_probe_interval_s` blijft `30`.
- Obsolete skip-substitutions verwijderd: `oq_modbus_telemetry_skip`, `oq_modbus_target_readback_skip`, `oq_modbus_control_readback_skip`.
- Alle `skip_updates:`-velden voor reguliere Modbus-entities verwijderd uit `openquatt/oq_HP_io.yaml`; `offline_skip_updates: 5` behouden.
- Range-migratie (ESPHome 2026.9 leidt breedte af uit datatype):
  - `register_count` actief verwijderd bij 2105, 2113, 2123, 2127, 2135, 2108 en 2115-raw.
  - `force_new_range: false` bij 2138 verwijderd (had geen effect).
  - `offset: 4` bij status-2115 verwijderd; fysiek adres expliciet `2115`.
  - `reuse_previous_range: true` op de volgende passende entity om bekende spans te behouden: 2107 (brug 2106), 2110 (brug 2109), 2115 (brug 2114), 2127 (brug 2124–2126), 2131 (brug 2128–2130), 2137 (brug 2136).
  - Beoogd wire-beeld per HP: één efficiënte 2099–2138-range (incl. bewezen gaten) plus aparte ranges voor 1999/2006/2010/2015/3999 → ca. 6 reguliere requests per HP per ronde (broncodeanalyse; wire-meting volgt later).
- Plannerlevenscyclus ongewijzigd: `modbus_controller.update_interval: never` behouden; OpenQuatt-intervalplanner blijft eigenaar van `.update()`; HP2-startup-offset 2500 ms behouden; UART 19200 8E1 en 500 ms turnaround behouden.
- Docs: `docs/development/system-overview.md` default `5s` → `10s` voor HP1-Modbus-basispoll.
- Compatibiliteit (broncodeanalyse): `url_to()` al in gebruik; geen relevant `wifi_ssid()`/`get_eth_mac_address_pretty()`/`set_timezone()`; geen relevant `custom_command`/`custom_pdu`; `write_lambda` alleen in CiC `modbus_server` (niet geraakt). Geen aanvullende PR-1-fix nodig gebleken; buildbewijs volgt later.
- Testcode aangepast, niet uitgevoerd:
  - `scripts/tests/test_pump_ipwm_contract.py`: 2115-contract naar adres 2115 zonder offset/count, met reuse.
  - `scripts/tests/test_v2_compressor_level_contract.py`: `skip_updates`-eindmarkers vervangen door volgende entity-id; asserts op afwezigheid `skip_updates`.
  - Nieuw `scripts/tests/test_modbus_2026_9_contract.py`: pin, 10 s/30 s, geen oude rangevelden, reuse-plaatsing, 2115-decoding, planner-eigendom, registeridentiteit.

Strikt buiten scope gelaten (PR 2/3/4): provisioning/netwerkteksten, ODU-transactiemigratie (`ModbusCommandItem`/`queue_command` blijven legacy-compatibel in 2026.9), certificaat/dependency-cleanup, OTA-encryptie, refactors/optimalisaties.

## Validatiestatus (latere testfase — nu niet uitvoeren)

```text
TARGETS EN BUILDSTATUS: NOT RUN — uitgesteld op verzoek van Jeroen; aparte testfase volgt
CONFIGVALIDATIE: NOT RUN — uitgesteld op verzoek van Jeroen; aparte testfase volgt
HOSTTESTS: NOT RUN — uitgesteld op verzoek van Jeroen; aparte testfase volgt
PYTHONCONTRACTS: NOT RUN — uitgesteld op verzoek van Jeroen; aparte testfase volgt
WEB-/DOCSCHECKS: NOT RUN — uitgesteld op verzoek van Jeroen; aparte testfase volgt
HIL-HARNESSCHECKS: NOT RUN — uitgesteld op verzoek van Jeroen; aparte testfase volgt
ECHTE HARDWARETESTS: NOT RUN — uitgesteld op verzoek van Jeroen; aparte testfase volgt

REGULIERE REQUESTRANGES VOOR/NA: analyse gedaan (zie boven); wire-vergelijking NOT RUN — uitgesteld op verzoek van Jeroen; aparte testfase volgt
REQUESTS PER HP PER RONDE: verwacht ca. 6 (1x 2099–2138 + 5x control/target); meting NOT RUN — uitgesteld op verzoek van Jeroen
ONLINE CADENCE: bedoeld 10 s; bewijs (M05/M06) NOT RUN — uitgesteld op verzoek van Jeroen
OFFLINE PROBES: bedoeld 30 s via 2099-probe + bestaande busvoorwaarden; bewijs (M07/M08) NOT RUN
WRITE-LATENCY EN READBACK: paden behouden; bewijs (M13/M14) NOT RUN — uitgesteld op verzoek van Jeroen
PAUZE / SERVICE / OTA: paden behouden; bewijs (M10/M11/M12) NOT RUN — uitgesteld op verzoek van Jeroen
GEHEUGENRESULTATEN: nog niet gemeten — NOT RUN — uitgesteld op verzoek van Jeroen; aparte testfase volgt

BEKENDE BASELINEFOUTEN: geen nieuwe baselinebuild gedaan; geen baselinefouten vastgesteld in deze ronde
NIEUWE FOUTEN: geen (geen builds/tests gedraaid)
NIET UITGEVOERDE TESTS EN REDEN: alle M01–M16, N-serie, OTA/OpenTherm/HA/MQTT, duur/geheugen — NOT RUN, uitgesteld op verzoek van Jeroen; aparte testfase volgt
RESTERENDE DEPRECATIONS: skip_updates-acceptatie (tot 2027.3), force_new_range/register_count-migratievenster (tot 2027.3), ModbusCommandItem/queue_command-legacy (tot 2027.3, PR 3); bewust in PR 1 gelaten zolang 2026.9.0b4 legacy compatibel ondersteunt
WERK VOOR PR 2: provisioning/netwerkherstel-validatie + eventuele gerichte fixes uit latere tests
WERK VOOR PR 3: ODU-transactiemigratie naar nieuwe Modbus-API (identificatie, frequentietabellen, probe, EEPROM-dump, settings)
WERK VOOR PR 4: resterende cleanup/buildhygiëne (certificaten, deps, guards) indien zinvol
ONAFHANKELIJKE REVIEW: nog niet aangevraagd/uitgevoerd
OPLEVERSTATUS: IMPLEMENTATIE GEREED / NOG NIET GETEST OF GEBOUWD
VALIDATIE: NOT RUN — uitgesteld op verzoek van Jeroen
VRIJGAVESTATUS: NIET VRIJGAVEKLAAR — validatiefase volgt
```

Later testprotocol: zie handover bij issue #640 (M01–M16, N01–N12, OTA/OpenTherm/HA/MQTT, busbudget, geheugen) + commando's:

```bash
python scripts/dev.py validate --config-only --venv-dir .venv-esphome-candidate --config configs/heatpump_controller_q/single.yaml --config configs/heatpump_controller_q/duo.yaml
npm run check:python-contracts
bash scripts/run_host_regression_tests.sh
npm run check:cpp-format
npm run check:hil
npm run check:web
npm run check:docs
python scripts/dev.py validate --venv-dir .venv-esphome-candidate --config configs/heatpump_controller_q/single.yaml --config configs/heatpump_controller_q/duo.yaml
git diff --check
git diff --stat
```

Geen van bovenstaande is in deze ronde uitgevoerd.
