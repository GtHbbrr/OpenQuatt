# MQTT inputbronnen

OpenQuatt heeft geen volledige MQTT-export. De firmware gebruikt wel een kleine set MQTT inputbronnen voor externe meetwaarden. Op dit moment gaat dat om het koelingsdauwpunt.

Gebruik voor normale monitoring en bediening bij voorkeur de web-app en, als je die gebruikt, Home Assistant via de native ESPHome API.

## Waar stel je MQTT in?

Open de OpenQuatt web-app en ga naar **Instellingen -> Integratie -> MQTT inputbronnen**.

Daar stel je de broker in:

- MQTT inputbronnen aan of uit;
- brokernaam of IP-adres;
- poort;
- optionele gebruikersnaam en wachtwoord.

Als MQTT inputbronnen uit staan, gebruikt OpenQuatt geen MQTT-dauwpunt en worden de MQTT-sensoren in de web-app niet getoond.

## Topic voor koelingsdauwpunt

Het subscribe-topic staat vast en volgt de device-naam:

```text
openquatt/<device_name>/input/cooling/dew_point
```

Bij de standaard device-naam is dat meestal:

```text
openquatt/openquatt/input/cooling/dew_point
```

De web-app toont het uiteindelijke topic bij **Instellingen -> Integratie -> MQTT sensoren**. Gebruik bij voorkeur dat getoonde topic, omdat daar de actuele device-naam al in verwerkt is.

## Payload

Publiceer het dauwpunt in graden Celsius. Deze vormen worden geaccepteerd:

```text
15.6
15,6
15.6°C
15.6 °C
{"value":15.6}
{"value":"15,6 °C"}
```

Gebruik bij voorkeur een punt als decimaalteken, bijvoorbeeld `15.6`. Een komma wordt ook geaccepteerd voor systemen die lokale notatie gebruiken.

Waarden buiten `-20..35°C` worden genegeerd.

## Geldigheid

Een geldige MQTT-waarde blijft 15 minuten geldig. Komt er in die tijd geen nieuwe MQTT-publicatie binnen, dan wordt de MQTT-dauwpuntbron ongeldig en gebruikt OpenQuatt die waarde niet meer.

Publiceer daarom periodiek, bijvoorbeeld elke minuut of telkens wanneer de bronwaarde verandert.

## Bronselectie

Ga in de web-app naar **Instellingen -> Bronnen / Sensorselectie -> Koelingsdauwpunt**.

Daar kies je:

- `Auto`: gebruik de hoogste geldige waarde van Home Assistant en MQTT;
- `Home Assistant`: vereis de Home Assistant-dauwpuntbron;
- `MQTT`: vereis de MQTT-dauwpuntbron.

In `Auto` is de hoogste geldige dauwpuntwaarde bewust leidend, omdat die voor koeling de veiligste ondergrens geeft.

## Voorbeeld

Met `mosquitto_pub`:

```sh
mosquitto_pub -h mqtt.local -t openquatt/openquatt/input/cooling/dew_point -m '15.6'
```

Met JSON:

```sh
mosquitto_pub -h mqtt.local -t openquatt/openquatt/input/cooling/dew_point -m '{"value":15.6}'
```

## Verder lezen

- [Web-app gebruiken](web-app.md)
- [Instellingen en meetwaarden](instellingen-en-meetwaarden.md)
- [Problemen oplossen](problemen-oplossen.md)
- [Verwarmen en koelen uitgelegd](verwarmen-en-koelen.md)
