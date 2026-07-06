# MQTT inputbronnen

OpenQuatt heeft geen volledige MQTT-export. De firmware gebruikt wel een kleine set MQTT inputbronnen voor externe meetwaarden. Op dit moment gaat dat om:

- koelingsdauwpunt;
- buitentemperatuur;
- kamertemperatuur;
- kamer-setpoint;
- warmtetoestemming;
- koeltoestemming.

Gebruik voor normale monitoring en bediening bij voorkeur de web-app en, als je die gebruikt, Home Assistant via de native ESPHome API.

## Waar stel je MQTT in?

Open de OpenQuatt web-app en ga naar **Instellingen -> Integratie -> MQTT inputbronnen**.

Daar stel je de broker in:

- MQTT inputbronnen aan of uit;
- per MQTT-topic of OpenQuatt dit topic gebruikt;
- brokernaam of IP-adres;
- poort;
- optionele gebruikersnaam en wachtwoord.

Als MQTT inputbronnen uit staan, gebruikt OpenQuatt geen MQTT-bronwaarden en worden de MQTT-sensoren in de web-app niet getoond.
Als je een los topic uitzet, bewaart OpenQuatt de brokerconfiguratie en het topic, maar subscribed de firmware niet op dat topic en telt die bron niet mee in de geldigheid.

## Topics

De subscribe-topics staan vast en volgen de device-naam:

```text
openquatt/<device_name>/input/cooling/dew_point
openquatt/<device_name>/input/weather/outdoor_temperature
openquatt/<device_name>/input/thermostat/room_temperature
openquatt/<device_name>/input/thermostat/room_setpoint
openquatt/<device_name>/input/thermostat/heating_enable
openquatt/<device_name>/input/thermostat/cooling_enable
```

Bij de standaard device-naam is dat meestal:

```text
openquatt/openquatt/input/cooling/dew_point
openquatt/openquatt/input/weather/outdoor_temperature
openquatt/openquatt/input/thermostat/room_temperature
openquatt/openquatt/input/thermostat/room_setpoint
openquatt/openquatt/input/thermostat/heating_enable
openquatt/openquatt/input/thermostat/cooling_enable
```

De web-app toont de uiteindelijke topics bij **Instellingen -> Integratie -> MQTT sensoren**. Gebruik bij voorkeur die getoonde topics, omdat daar de actuele device-naam al in verwerkt is.
In hetzelfde scherm kun je per topic **Topic gebruiken** uitzetten als je maar een deel van de MQTT-bronnen wilt inzetten.

## Payload

Publiceer temperatuurwaarden in graden Celsius. Deze vormen worden geaccepteerd:

```text
15.6
15,6
15.6°C
15.6 °C
{"value":15.6}
{"value":"15,6 °C"}
```

Gebruik bij voorkeur een punt als decimaalteken, bijvoorbeeld `15.6`. Een komma wordt ook geaccepteerd voor systemen die lokale notatie gebruiken.

Publiceer warmtetoestemming en koeltoestemming als boolean. Deze vormen worden geaccepteerd:

```text
true
false
1
0
on
off
yes
no
{"value":true}
{"value":"off"}
```

Waarden buiten de geldige range worden genegeerd en maken die MQTT-bron ongeldig:

- koelingsdauwpunt: `-20..35°C`;
- buitentemperatuur: `-40..60°C`;
- kamertemperatuur: `0..50°C`;
- kamer-setpoint: `5..35°C`.

## Geldigheid

Een geldige MQTT-waarde blijft beperkt geldig. Komt er in die tijd geen nieuwe MQTT-publicatie binnen, dan wordt die MQTT-bron ongeldig en gebruikt OpenQuatt die waarde niet meer.

- koelingsdauwpunt: 15 minuten;
- buitentemperatuur: 30 minuten;
- kamertemperatuur: 10 minuten;
- kamer-setpoint: 30 minuten;
- warmtetoestemming: 10 minuten;
- koeltoestemming: 10 minuten.

Publiceer daarom periodiek, bijvoorbeeld elke minuut of telkens wanneer de bronwaarde verandert.

## Bronselectie

Ga in de web-app naar **Instellingen -> Bronnen / Sensorselectie**.

Bij `Koelingsdauwpunt` kies je:

- `Auto`: gebruik de hoogste geldige waarde van Home Assistant en MQTT;
- `Home Assistant`: vereis de Home Assistant-dauwpuntbron;
- `MQTT`: vereis de MQTT-dauwpuntbron.

In `Auto` is de hoogste geldige dauwpuntwaarde bewust leidend, omdat die voor koeling de veiligste ondergrens geeft.

Bij `Buitentemperatuur` gebruikt `Auto` de laagste geldige waarde uit buitenunit, Home Assistant en MQTT. Dat houdt verwarming en vorstbeveiliging conservatief. Bij `Kamertemperatuur` en `Kamer setpoint` kies je MQTT expliciet als bron.

Bij `Warmtetoestemming` en `Koeltoestemming` kun je MQTT ook expliciet als bron kiezen. Een MQTT-enable telt alleen mee als de waarde recent en geldig is. Handmatige koeltoestemming blijft daarnaast een override.

## Voorbeeld

Met `mosquitto_pub`:

```sh
mosquitto_pub -h mqtt.local -t openquatt/openquatt/input/cooling/dew_point -m '15.6'
```

Met JSON:

```sh
mosquitto_pub -h mqtt.local -t openquatt/openquatt/input/cooling/dew_point -m '{"value":15.6}'
```

Voor warmtetoestemming:

```sh
mosquitto_pub -h mqtt.local -t openquatt/openquatt/input/thermostat/heating_enable -m 'true'
```

## Verder lezen

- [Web-app gebruiken](web-app.md)
- [Instellingen en meetwaarden](instellingen-en-meetwaarden.md)
- [Problemen oplossen](problemen-oplossen.md)
- [Verwarmen en koelen uitgelegd](verwarmen-en-koelen.md)
