# OpenQuatt

<img src="docs/assets/openquatt_logo.svg" alt="OpenQuatt logo" width="400" />

OpenQuatt is open-source ESPHome-firmware voor Quatt Hybrid `Single`- en `Duo`-installaties. Het project geeft je lokaal inzicht, lokale controle, een uitgebreide web-app en optionele Home Assistant-integratie bovenop de bestaande Quatt-hardware.

> [!IMPORTANT]
> OpenQuatt is momenteel een **open-sourceproject op best-effortbasis**. Ontwikkeling, documentatie en ondersteuning worden door de community geleverd op basis van beschikbare tijd; er is geen gegarandeerde responstijd of individuele ondersteuning.
>
> Voor gebruiksvragen en hulp bij diagnose kun je terecht in het [OpenQuatt Discord-kanaal](https://discord.com/channels/1176602554885492786/1464174190788874427). Een reproduceerbare bug meld je als [GitHub-issue](https://github.com/OpenQuatt/OpenQuatt/issues/new/choose).

> [!WARNING]
> OpenQuatt is community-firmware voor gebruikers met enig technisch inzicht. Gebruik het bewust en test wijzigingen stap voor stap.
>
> Gebruik van OpenQuatt kan gevolgen hebben voor Quatts commerciële garantie. Raadpleeg de [actuele Quatt-voorwaarden](https://www.quatt.io/algemene-voorwaarden); wettelijke rechten staan daar los van.

## Kies je route

Kies alleen de route die bij jouw huidige hardware en situatie hoort. Home Assistant is geen onderdeel van de basisinstallatie.

| Jouw situatie | Begin hier | Wat je gaat doen |
|---|---|---|
| Nieuwe Heatpump Controller Q-edition met OpenQuatt voorgeïnstalleerd | [Q-edition aansluiten en in gebruik nemen](docs/q-edition.md) | Controller aansluiten, online brengen en Quick Start afronden. Zelf firmware flashen is normaal niet nodig. |
| Bestaande Waveshare- of Heatpump Listener-module | [Andere modules installeren](docs/installatie-en-ingebruikname.md) | Exact hardwareprofiel kiezen, firmware flashen en Quick Start afronden. Deze modules hebben limited/best-effort support. |
| OpenQuatt draait al | [Web-app gebruiken](docs/web-app.md) | Instellingen beheren, updaten, backups maken en diagnose uitvoeren via `openquatt.local`. |
| Eerst alleen rondkijken | [Web-app demo](https://openquatt.github.io/OpenQuatt/demo/) | De interface bekijken zonder hardware of wijzigingen aan je installatie. |

## Wat is OpenQuatt?

OpenQuatt is bedoeld voor gebruikers van een Quatt Hybrid `Single` of `Duo` die:

- meer inzicht willen in wat de installatie doet;
- lokale controle willen via een uitgebreide web-app;
- instellingen en verwarmingsstrategie zelf willen beheren;
- koeling willen kunnen gebruiken waar hun installatie dat ondersteunt;
- Home Assistant willen gebruiken voor dashboards en automatisering;
- de juiste installatie- of beheerroute voor hun hardware willen volgen.

OpenQuatt richt zich niet op Quatt All-Electric, Quatt Chill of koppeling met Quatt HomeBattery.

Je hoeft voor de eerste installatie niet eerst alle technische achtergronddocumenten te lezen. De routekiezer hierboven brengt je direct bij de juiste handleiding. Home Assistant is optioneel voor OpenQuatt zelf en aanbevolen voor dashboards en automatisering.

## Ondersteunde combinaties

OpenQuatt ondersteunt momenteel Quatt Hybrid `Single` en `Duo` (V1, V1.5 en V2).

Voor nieuwe installaties is de [`Electropaultje Heatpump Controller Q-edition`](https://electropaultje.nl/product/heatpump-controller-q-edition/) de aanbevolen en volledig ondersteunde module. Deze hardware is speciaal voor OpenQuatt gemaakt en is de primaire focus voor support en nieuwe ontwikkeling.

`Waveshare ESP32-S3-Relay-1CH` en `Electropaultje Heatpump Listener` blijven beschikbaar met limited/best-effort support. Ze blijven waarschijnlijk gewoon functioneren, maar actieve ontwikkeling en support richten zich op de Heatpump Controller Q-edition.

Alle Wi-Fi-combinaties van bovenstaande opstelling en hardware zijn beschikbaar. Voor de Heatpump Controller Q zijn daarnaast Ethernet-builds beschikbaar voor `Single` en `Duo`. Ethernet en Wi-Fi zijn nu nog aparte firmware-builds; een Ethernet-build verwacht dus een werkende kabel/netwerkroute en heeft geen automatische Wi-Fi fallback of captive portal.

## Wanneer is de installatie klaar?

De basisinstallatie is afgerond wanneer:

- `http://openquatt.local` stabiel bereikbaar is;
- Quick Start volledig is afgerond;
- de warmtepompgegevens worden bijgewerkt;
- aanvoertemperatuur, flow en buitentemperatuur aannemelijke waarden tonen.

Home Assistant en het meegeleverde dashboard zijn optionele vervolgstappen. Ze zijn niet nodig om OpenQuatt zelf te installeren of via de web-app te gebruiken.

Voor bestaande Waveshare- en Heatpump Listener-modules biedt de [installer](https://openquatt.github.io/OpenQuatt/install/) de nieuwste stabiele eerste-installatiebestanden. Bij een HCQ gebruik je de installer alleen om Wi-Fi via USB in te stellen of als herstelroute. Ga bij problemen naar [Problemen oplossen](docs/problemen-oplossen.md).

## Mogelijkheden

OpenQuatt biedt:

- lokale controle en inzicht zonder afhankelijk te zijn van een cloud-dashboard;
- een uitgebreide geïntegreerde web-app voor installatie, instellingen, updates, backup en beheer;
- `Power House` als aanbevolen verwarmingsstrategie voor normale ingebruikname;
- koeling als bewuste OpenQuatt-functie waar de installatie dat ondersteunt;
- optionele Home Assistant-integratie met dashboards;
- OpenTherm-thermostaat- en ketelkoppeling op de Heatpump Controller Q-edition.

## Beperkingen

Belangrijke beperkingen voor deze fase:

- OpenQuatt is bedoeld voor Quatt Hybrid `Single` en `Duo`, niet voor Quatt All-Electric, Quatt Chill of Quatt HomeBattery.
- De Heatpump Controller Q-edition is de support- en ontwikkelfocus; Waveshare en Heatpump Listener zijn limited/best-effort.
- OpenTherm-aansturing van de ketel via `OTB` is alleen beschikbaar op de Heatpump Controller Q-edition.
- Ethernet en Wi-Fi zijn nu nog aparte firmware-builds.
- CV-assist in Heating Curve, CV/boiler-only mode en uitgebreidere storingsafhandeling staan op de roadmap.
- OpenQuatt is geen officiële Quatt-helpdesk of individuele installatieservice.

## Roadmap

Compacte roadmap:

- gecombineerde Ethernet/Wi-Fi firmware, afhankelijk van ESPHome-ontwikkelingen;
- CV-assist in Heating Curve;
- CV/boiler-only mode;
- betere storingsafhandeling en herstelroutes.

## Documentatie

Belangrijkste pagina's voor gebruikers:

- [Heatpump Controller Q-edition aansluiten en in gebruik nemen](docs/q-edition.md) voor de normale route met nieuwe OpenQuatt-hardware
- [Andere modules installeren](docs/installatie-en-ingebruikname.md) voor een bestaande Waveshare- of Heatpump Listener-module
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
