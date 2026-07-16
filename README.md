# OpenQuatt

<img src="docs/assets/openquatt_logo.svg" alt="OpenQuatt logo" width="400" />

OpenQuatt is open-source ESPHome-firmware voor Quatt Hybrid `Single`- en `Duo`-installaties. Het project geeft je lokaal inzicht, lokale controle, een uitgebreide web-app en optionele Home Assistant-integratie bovenop de bestaande Quatt-hardware.

> [!IMPORTANT]
> OpenQuatt is momenteel een **open-sourceproject op best-effortbasis**. Ontwikkeling, documentatie en ondersteuning worden door de community geleverd op basis van beschikbare tijd; er is geen gegarandeerde responstijd of individuele ondersteuning.
>
> Voor gebruiksvragen en hulp bij diagnose kun je terecht in het [OpenQuatt Discord-kanaal](https://discord.com/channels/1176602554885492786/1464174190788874427). Een reproduceerbare bug meld je als [GitHub-issue](https://github.com/jeroen85/OpenQuatt/issues/new/choose).

> [!WARNING]
> OpenQuatt is community-firmware voor gebruikers met enig technisch inzicht. Gebruik het bewust en test wijzigingen stap voor stap.
>
> Gebruik van OpenQuatt kan gevolgen hebben voor Quatts commerciële garantie. Raadpleeg de [actuele Quatt-voorwaarden](https://www.quatt.io/algemene-voorwaarden); wettelijke rechten staan daar los van.

## Wat is OpenQuatt?

OpenQuatt is bedoeld voor gebruikers van een Quatt Hybrid `Single` of `Duo` die:

- meer inzicht willen in wat de installatie doet;
- lokale controle willen via een uitgebreide web-app;
- instellingen en verwarmingsstrategie zelf willen beheren;
- koeling willen kunnen gebruiken waar hun installatie dat ondersteunt;
- Home Assistant willen gebruiken voor dashboards en automatisering;
- via de installer de juiste firmware voor hun opstelling, hardware en verbinding willen kiezen.

OpenQuatt richt zich niet op Quatt All-Electric, Quatt Chill of koppeling met Quatt HomeBattery.

Je hoeft voor de eerste installatie niet eerst alle technische achtergronddocumenten te lezen. De hoofdroute is: installer openen, je opstelling, hardware en verbinding kiezen, flashen, `openquatt.local` openen en Quick Start afronden. Home Assistant is optioneel voor OpenQuatt zelf en aanbevolen voor dashboards en automatisering.

## Ondersteunde combinaties

OpenQuatt ondersteunt momenteel Quatt Hybrid `Single` en `Duo` (V1, V1.5 en V2).

Voor nieuwe installaties is de [`Electropaultje Heatpump Controller Q-edition`](https://electropaultje.nl/product/heatpump-controller-q-edition/) de aanbevolen en volledig ondersteunde module. Deze hardware is speciaal voor OpenQuatt gemaakt en is de primaire focus voor support en nieuwe ontwikkeling.

`Waveshare ESP32-S3-Relay-1CH` en `Electropaultje Heatpump Listener` blijven beschikbaar met limited/best-effort support. Ze blijven waarschijnlijk gewoon functioneren, maar actieve ontwikkeling en support richten zich op de Heatpump Controller Q-edition.

Alle Wi-Fi-combinaties van bovenstaande opstelling en hardware zijn beschikbaar. Voor de Heatpump Controller Q zijn daarnaast Ethernet-builds beschikbaar voor `Single` en `Duo`. Ethernet en Wi-Fi zijn nu nog aparte firmware-builds; een Ethernet-build verwacht dus een werkende kabel/netwerkroute en heeft geen automatische Wi-Fi fallback of captive portal.

## Snel starten

1. Open de [OpenQuatt installer](https://jeroen85.github.io/OpenQuatt/install/).
2. Kies exact de combinatie die past bij jouw Quatt-opstelling, hardware en verbinding.
3. Flash de firmware via USB in Chrome of Edge.
4. Rond Wi-Fi-configuratie af, of sluit bij een Ethernet-build de netwerkkabel aan.
5. Open `http://openquatt.local` en loop de Quick Start door.
6. Gebruik OpenQuatt daarna via de geïntegreerde web-app.
7. Optioneel: voeg OpenQuatt toe in Home Assistant. Selecteer tijdens het toevoegen nog geen area; wacht tot de entiteiten zijn aangemaakt, ken daarna de area toe en importeer eventueel het dashboard.

Alleen de nieuwste stabiele eerste-installatiebestanden worden standaard via de installer aangeboden.

Voor de volledige installatiestappen en eerste controle:

- [Heatpump Controller Q-edition aansluiten en in gebruik nemen](docs/q-edition.md)
- [Installatie en ingebruikname](docs/installatie-en-ingebruikname.md)
- [Web-app gebruiken](docs/web-app.md)
- [Web-app demo](https://jeroen85.github.io/OpenQuatt/demo/)
- [Dashboard installeren](docs/dashboard/README.md)
- [Dashboard gebruiken](docs/dashboardoverzicht.md)
- [Problemen oplossen](docs/problemen-oplossen.md)

## Mogelijkheden

OpenQuatt biedt:

- lokale controle en inzicht zonder afhankelijk te zijn van een cloud-dashboard;
- een uitgebreide geïntegreerde web-app voor installatie, instellingen, updates, backup en beheer;
- `Power House` als aanbevolen verwarmingsstrategie voor normale ingebruikname;
- koeling als bewuste OpenQuatt-functie waar de installatie dat ondersteunt;
- optionele Home Assistant-integratie met dashboards;
- OpenTherm-thermostaatuitlezing op Heatpump Controller Q-edition.

## Ondersteunde hardware

OpenQuatt richt zich nu bewust op drie hardwareprofielen:

- [Electropaultje Heatpump Controller Q-edition](https://electropaultje.nl/product/heatpump-controller-q-edition/)
- [Waveshare ESP32-S3-Relay-1CH](https://www.waveshare.com/esp32-s3-relay-1ch.htm)
- [Electropaultje Heatpump Listener](https://electropaultje.nl/product/heatpump-listener/)

Voor nieuwe installaties is de Heatpump Controller Q-edition de voorkeursmodule. Waveshare en Heatpump Listener zijn beschikbaar met limited/best-effort support.

Alle ondersteunde OpenQuatt-profielen gebruiken PSRAM. De firmware zet `psram.ignore_not_found: false`, zodat ontbrekende PSRAM direct zichtbaar wordt als hardware- of profielprobleem in plaats van stil tot beperkte functionaliteit te leiden.

## Beperkingen

Belangrijke beperkingen voor deze fase:

- OpenQuatt is bedoeld voor Quatt Hybrid `Single` en `Duo`, niet voor Quatt All-Electric, Quatt Chill of Quatt HomeBattery.
- De Heatpump Controller Q-edition is de support- en ontwikkelfocus; Waveshare en Heatpump Listener zijn limited/best-effort.
- OpenTherm betekent nu: thermostaat uitlezen op de Heatpump Controller Q-edition. OpenTherm-aansturing van de ketel staat op de roadmap.
- Ethernet en Wi-Fi zijn nu nog aparte firmware-builds.
- CV-assist in Heating Curve, CV/boiler-only mode en uitgebreidere storingsafhandeling staan op de roadmap.
- OpenQuatt is geen officiële Quatt-helpdesk of individuele installatieservice.

## Roadmap

Compacte roadmap:

- OpenTherm-aansturing van de ketel;
- gecombineerde Ethernet/Wi-Fi firmware, afhankelijk van ESPHome-ontwikkelingen;
- CV-assist in Heating Curve;
- CV/boiler-only mode;
- betere storingsafhandeling en herstelroutes.

## Documentatie

Belangrijkste pagina's voor gebruikers:

- [Installatie en ingebruikname](docs/installatie-en-ingebruikname.md) voor installeren en controle na de eerste start
- [Web-app gebruiken](docs/web-app.md) voor Quick Start, instellingen, updates, backup en beveiliging
- [Dashboard installeren](docs/dashboard/README.md) voor het importeren van dashboards
- [Dashboard gebruiken](docs/dashboardoverzicht.md) voor dagelijkse controle in Home Assistant
- [Verwarmen en koelen uitgelegd](docs/verwarmen-en-koelen.md) voor een eenvoudige uitleg van `Power House`, stooklijnregeling, koeling, `Single` en `Duo`
- [MQTT inputbronnen](docs/mqtt.md) voor externe MQTT-bronwaarden zoals dauwpunt, buiten- en kamerwaarden en toestemmingssignalen
- [Problemen oplossen](docs/problemen-oplossen.md) voor diagnose zonder meteen te gaan tunen

Meer heb je voor normaal gebruik meestal niet nodig.

## Licentie

Dit project bevat een `LICENSE`-bestand in de root van de repository.

Built with [ESPHome](https://esphome.io/).
