# Heatpump Controller Q-edition (HCQ) — I/O-overzicht

Referentie voor alle van buitenaf bereikbare I/O van de Heatpump Controller Q-edition (HCQ) en de koppeling aan de ESP32-S3. De toewijzing komt uit het hardwareprofiel `openquatt/profiles/heatpump_controller_q.yaml` en de daarin opgenomen packages. De print is gebaseerd op een ESP32-S3 (`esp32-s3-devkitc-1`, 16 MB flash, octal PSRAM).

## 1. Overzicht externe aansluitingen

| Aansluiting | Functie | Signaal |
|---|---|---|
| `Q` | Quatt-sensorkabel | PT1000 (aanvoertemperatuur) én flowmeter-puls (V1) |
| `R1` | CV-ketel aan/uit | Potentiaalvrij relais (`COM` + `NO`) |
| `R2` | Reserve wisselrelais | Potentiaalvrij relais (`NC` / `COM` / `NO`), geen functie |
| `T` | Optionele temperatuursensor | 1-Wire Dallas/DS18B20 (`+3.3V`, `GND`, `DATA`) |
| `OTT` | Kamerthermostaat | OpenTherm slave (twee aders) |
| `OTB` | CV-ketel | OpenTherm-route (fysiek aanwezig, niet actief in firmware) |
| `M1` | Quatt-buitenunit(s) | RS485 Modbus (`GND` / `A` / `B`) |
| `M2` | CiC-compatibiliteit (optioneel) | RS485 Modbus (`GND` / `A` / `B`) |
| Ethernet | Netwerk (alleen Ethernet-builds) | W5500, RJ45 |
| USB | Voeding + provisioning | USB |

Zie ook [q-edition.md](../q-edition.md) voor de aansluitprocedure en het referentiebeeld.

## 2. Pin-toewijzing ESP32-S3

| Functie | Aansluiting | ESP32-interface | Pinnen |
|---|---|---|---|
| PT1000 | `Q` | SPI3 via MAX31865 | MOSI `GPIO7`, MISO `GPIO4`, CLK `GPIO6`, CS `GPIO5` |
| Flowmeter-puls | `Q` | GPIO-ingang (pullup) | `GPIO15` |
| CV-ketelrelais | `R1` | GPIO-uitgang | `GPIO16` |
| Reserverelais | `R2` | GPIO-uitgang (niet gebruikt) | `GPIO3` |
| DS18B20 1-Wire | `T` | 1-Wire GPIO | `GPIO18` |
| OpenTherm thermostaat | `OTT` | GPIO in/uit | `GPIO21` (in), `GPIO14` (uit) |
| Modbus buitenunit | `M1` | UART + RS485 DE/RE | TX `GPIO40`, RX `GPIO42`, DE/RE `GPIO41` |
| Modbus CiC-compatibiliteit | `M2` | UART + RS485 DE/RE | TX `GPIO45`, RX `GPIO39`, DE/RE `GPIO38` |
| Ethernet W5500 | RJ45 | SPI | MOSI `GPIO10`, MISO `GPIO11`, CLK `GPIO12`, CS `GPIO13`, INT `GPIO9` |
| Status-LED geel | front | GPIO-uitgang | `GPIO1` |
| Status-LED rood | front | GPIO-uitgang | `GPIO2` |
| Boot-/recoveryknop | front | GPIO-ingang (pullup) | `GPIO46` |

## 3. Interfaces in detail

### Q — PT1000 en flowmeter

De Quatt-sensorstekker op `Q` draagt twee sensoren:

- **PT1000 (aanvoertemperatuur):** gelezen door een MAX31865 op SPI3 (`oq_hpcq_pt1000_spi`, `interface: spi3`). Referentieweerstand 1500 Ω, nominale weerstand 1000 Ω, 2-draadsbedrading. De meetwaarde is beschikbaar als `water_supply_temp_pt1000`.
- **Flowmeter (V1):** pulslezer (`pulse_meter`) op `GPIO15` met interne pullup en `internal_filter: 100us`. De DN15-flowmeter heeft een kalibratiefactor van 0,05 l/min per Hz; de pulsjes worden omgerekend naar l/h (`flow_rate_controller`). Bij V1.5/V2 zit de flowmeter in de buitenunit en wordt de lokale pulsmeting niet gebruikt; de bron wordt gekozen via `oq_q_flow_source` (Auto / Local / Buitenunit).

Voor de lokale aanvoertemperatuur kan `oq_local_supply_temp_source` kiezen tussen PT1000 (standaard) en DS18B20.

### R1 — CV-ketelrelais

Potentiaalvrij relais op `GPIO16` (in `oq_boiler_control.yaml` als `boiler_relay_out`). Stuurt de CV-ketel via de aan/uit-route (`on_off`). Bij herstart staat het relais standaard uit (`RESTORE_DEFAULT_OFF`).

### R2 — reservewisselrelais

Relais-uitgang op `GPIO3` is gedefinieerd in het hardwareprofiel (`controller_aux_relay_pin`) maar er is geen functie aan gekoppeld; laat de aansluiting vrij.

### T — DS18B20

1-Wire-bus op `GPIO18` (`oq_local_temp_bus`) voor een optionele Dallas/DS18B20-temperatuursensor (`water_supply_temp_ds18b20`). Wordt gebruikt als de lokale aanvoertemperatuurbron op DS18B20 staat in plaats van PT1000.

### OTT en OTB — OpenTherm

- **OTT (thermostaat):** de HCQ gedraagt zich als OpenTherm **slave** tegenover de kamerthermostaat. De custom component `openquatt_ot_slave` gebruikt `GPIO21` (thermostat in) en `GPIO14` (thermostat out). De polariteit van de twee aders maakt niet uit.
- **OTB (CV-ketel):** de OpenTherm-route naar de CV-ketel is fysiek aanwezig, maar er is **geen OpenTherm master** in de firmware geïmplementeerd. De ketel wordt in de huidige firmware uitsluitend via `R1` (aan/uit) gestuurd. In de telemetrie wordt de ketelverbinding daarom altijd als `on_off` gerapporteerd; kies dus óf `OTB` óf `R1`, gebruik beide routes niet tegelijk.

### M1 — Modbus buitenunit

Primaire RS485-poort voor de Quatt-buitenunit(s). UART in `oq_common.yaml` (`uart_bus`) met 19200 baud, 8 data-bits, even pariteit en DE/RE op de flow-controlepin (`GPIO41`). De HCQ is hier Modbus-master (`mod_bus`); zie `oq_HP_io.yaml` voor de registers.

### M2 — Modbus CiC-compatibiliteit

Optionele tweede RS485-poort voor CiC-compatibiliteit. UART in `heatpump_controller_q_cic_compatibility.yaml` (`cic_compat_uart_bus`): 19200 baud, 8E1, DE/RE op `GPIO38`. Hier is de HCQ Modbus-**server** (`cic_compat_modbus`) en geeft HP1/HP2-data door aan de CiC (adressen 0x01/0x02), zodat de Quatt-app via de CiC kan blijven meekijken.

### Ethernet — W5500

De W5500 Ethernet-PHY zit op SPI (`GPIO10–GPIO13` en interrupt `GPIO9`):

- in de **Ethernet-build** worden deze pinnen door de ESPHome W5500-driver gebruikt (`connection/eth.yaml`);
- in de **Wi-Fi-build** staan dezelfde pinnen op SPI2 (`oq_w5500_power_down_spi`) en wordt de W5500 in power-down gezet om stroom te besparen (`connection/wifi_w5500_power_down.yaml`).

### USB, status-LEDs en bootknop

- **USB:** voedt de HCQ (5 V) en dient voor Wi-Fi provisioning, firmwarewissel en herstel.
- **Status-LEDs:** geel op `GPIO1` (netwerk verbonden), rood op `GPIO2` (actieve fout), zie `heatpump_controller_q_status_leds.yaml`.
- **Boot-/recoveryknop:** `GPIO46` (`web_auth_recovery_pin`) opent na 5 s ingedrukt houden een herstelvenster voor de web-login (`oq_web_access.yaml`).

## 4. Samenvatting per ESP32-interface

| Interface | Gebruik | Pinnen |
|---|---|---|
| SPI2 | W5500 Ethernet (Wi-Fi-build: power-down) | `GPIO10`–`GPIO13`, `GPIO9` |
| SPI3 | MAX31865 PT1000 | `GPIO7`, `GPIO4`, `GPIO6`, `GPIO5` |
| UART (Modbus M1) | Buitenunit, master | `GPIO40`, `GPIO42`, `GPIO41` |
| UART (Modbus M2) | CiC-compatibiliteit, server | `GPIO45`, `GPIO39`, `GPIO38` |
| GPIO | Flowmeter, relais, 1-Wire, OpenTherm, LEDs, bootknop | zie tabel 2 |
