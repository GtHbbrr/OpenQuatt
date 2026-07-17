# Web-app gebruiken

De OpenQuatt web-app is de lokale bedienings- en instellingenpagina van je OpenQuatt-module. Na de installer is dit de eerste plek waar je naartoe gaat: open `http://openquatt.local`, rond Quick Start af en voeg daarna pas Home Assistant toe.

## Wanneer gebruik je de web-app?

Gebruik de web-app voor alles wat direct op OpenQuatt zelf hoort:

- eerste ingebruikname via Quick Start;
- controleren of OpenQuatt online is en logisch meet;
- verwarmingsstrategie en flowregeling kiezen;
- koeling en dauwpuntbeveiliging instellen;
- firmware-updatekanaal en updates beheren;
- backup en restore van OpenQuatt-instellingen;
- web-login, API-beveiliging, logboek en herstarten.

Home Assistant blijft de prettigste plek voor dagelijks meekijken en dashboards. De web-app is de plek waar je de module zelf inricht, beheert en veilig terugvindt als er iets niet klopt.

## Wat doe je waar?

| Plek | Gebruik je vooral voor |
|---|---|
| Installer | Eerste flash, keuze voor `Single` of `Duo`, hardwareprofiel en verbinding. |
| Web-app | Quick Start, installatiekeuzes, instellingen, updates, backup en beveiliging. |
| Home Assistant | Dagelijks meekijken, dashboards, bronselectie en optionele dynamische bronnen. |

De normale volgorde is dus: installer, web-app, daarna Home Assistant.

## Openen

Probeer eerst:

```text
http://openquatt.local
```

Lukt dat niet, zoek dan het IP-adres van OpenQuatt in je router of in Home Assistant en open:

```text
http://<ip-adres>
```

De web-app draait lokaal op je eigen netwerk. Je gebruikt dus geen cloudaccount en hoeft niets externs open te zetten.

Wil je de interface eerst rustig bekijken zonder echte hardware, open dan de [web-app demo op GitHub Pages](https://jeroen85.github.io/OpenQuatt/demo/). Die gebruikt dezelfde look-and-feel in mockmodus.

## Eerste keer: Quick Start

Na de eerste installatie opent de web-app Quick Start zolang de basisinstallatie nog niet is afgerond.

Quick Start begint voor de Heatpump Controller Q met een controle van de firmware-setup. Daarna volgen de bestaande configuratiestappen:

| Stap | Wat kies je? | Waarom? |
|---|---|---|
| `Kies je setup` | `Single` of `Duo`, via `Wi-Fi` of `Ethernet` | Installeert zo nodig direct de passende Q-edition-firmware voordat je verder configureert. |
| `Kies je Quatt Hybrid` | V1, V1.5 of V2 | OpenQuatt gebruikt hiermee de juiste basislogica. |
| `Flowmeting configureren` | De flowbron voor jouw Quatt-versie en controller | Zorgt dat de regeling de juiste flowmeting gebruikt. |
| `Thermostaatgegevens configureren` | Eén bron voor kamertemperatuur en kamer-setpoint | Voorkomt dat de regeling waarden uit verschillende bronnen combineert. |
| `CV-ketel of boiler` | Wel of geen ondersteuning door de ketel of boiler | Bepaalt of OpenQuatt aanvullende warmte mag inzetten. |
| `Kies de verwarmingsstrategie` | `Power House` of `Water Temperature Control` | Dit bepaalt hoe OpenQuatt warmtevraag maakt. |
| `Werk de regeling uit` | Strategie-instellingen | Je ziet alleen velden die bij de gekozen strategie horen. |
| `Flowregeling en afstelling` | Automatische flow of vaste pompstand, plus Kp/Ki | Hiermee blijft de waterdoorstroming beheersbaar. |
| `Watertemperatuur beveiligen` | Maximale watertemperatuur | OpenQuatt regelt terug voordat water te warm wordt. |
| `Stille uren en niveaus` | Tijdvenster en maximale compressorstand | Handig voor nacht of geluidsgevoelige momenten. |
| `Bevestigen en afronden` | Controle en afronden | Daarna ziet OpenQuatt de basisconfiguratie als klaar. |

Je hoeft niet meteen perfecte waardes te kiezen. Het doel van Quick Start is een veilige, begrijpelijke basis. Fijnregelen kan later.

## Hoofdschermen

De web-app heeft zes hoofdschermen.

| Scherm | Gebruik |
|---|---|
| `Overzicht` | Live zien wat OpenQuatt nu doet en of de belangrijkste waarden logisch zijn. |
| `Energie` | Vermogen, energie, COP en EER bekijken. |
| `Resultaten` | Opgeslagen energie- en resultaathistorie over een langere periode bekijken. |
| `Beslislog` | Terugzien welke regelbeslissingen OpenQuatt nam en waarom. Deze functie is nog beta. |
| `Diagnose` | Live waarden en korte trendhistorie naast elkaar bekijken om gedrag te onderzoeken. |
| `Instellingen` | OpenQuatt configureren, bijwerken en beheren. |

Voor dagelijks kijken is `Overzicht` meestal genoeg. Ga pas naar `Instellingen` als je bewust iets wilt veranderen.

## Overzicht

Begin hier als je wilt weten of alles normaal oogt.

Let vooral op:

- OpenQuatt is online;
- Quatt-data wordt ververst;
- flow, aanvoertemperatuur, buitentemperatuur en kamertemperatuur zijn geloofwaardig;
- er is geen onverwachte override actief;
- de gekozen strategie past bij wat je in huis verwacht.

Zie je hier al vreemde waarden, ga dan niet meteen tunen. Controleer eerst de bronkeuze in Home Assistant of in de instellingen.

## Resultaten

`Resultaten` bundelt opgeslagen resultaten en historie. Gebruik dit scherm om prestaties over een langere periode te vergelijken. Voor een snelle diagnose van het actuele regelgedrag is `Diagnose` geschikter.

## Diagnose

`Diagnose` combineert actuele waarden met korte historie. Dat helpt bij vragen zoals:

- loopt de aanvoertemperatuur rustig op;
- blijft de flow stabiel;
- schakelt het systeem vaak;
- reageert de regeling logisch op setpoint en kamertemperatuur.

Trendopslag kan onder `Instellingen -> Systeem` worden beheerd. Als trendopslag uit staat, stopt OpenQuatt met nieuwe trendpunten bijhouden en kan de tab minder of geen historie tonen. Bestaande flashhistorie wordt daarbij niet gewist.

OpenQuatt bewaart de korte trendhistorie in PSRAM en kan aanvullend tot 30 dagen trendhistorie in flash bewaren. Als je flashopslag uitzet, blijft bestaande flashhistorie staan; OpenQuatt stopt dan alleen met nieuwe trenddata naar flash schrijven. Alle ondersteunde OpenQuatt-profielen gebruiken PSRAM; ontbrekende PSRAM wijst dus op een hardware- of profielprobleem.

Via `Instellingen -> Gegevens bewaren` zijn Diagnose, Beslislog en Energie afzonderlijk te beheren. De Beslislog bewaart maximaal zeven dagen exacte gebeurtenissen en redenen na een herstart. Nieuwe gebeurtenissen worden per uur gebundeld naar flash geschreven. Met `Nu opslaan` kunnen nog niet opgeslagen gebeurtenissen vóór een update of herstart alvast worden vastgelegd.

## Beslislog

`Beslislog` laat zien welke regelkeuze OpenQuatt maakte en welke signalen daarbij meespeelden. Gebruik dit scherm vooral om een onverwachte omschakeling of begrenzing te verklaren. De functie is nog beta; combineer de uitleg daarom met de actuele waarden in `Diagnose`.

## Energie

`Energie` geeft inzicht in vermogen en rendement. Gebruik dit vooral om richting te krijgen, niet als gecertificeerde energiemeter.

Voorbeelden:

- elektrisch vermogen van de warmtepomp;
- thermisch vermogen;
- COP bij verwarmen;
- EER bij koelen, als koeling actief en ondersteund is;
- dag- en totaalwaarden wanneer die entiteiten beschikbaar zijn.

## Instellingen

Onder `Instellingen` staan de onderdelen bewust gescheiden. Het idee is: eerst de gewone installatie-instellingen, daarna pas de scherpere gereedschappen.

### Installatie

Hier staan basiskeuzes zoals Quatt Hybrid-versie, flowregeling, boiler- of CV-ondersteuning, stille uren, watergrenzen en compressorinstellingen.

Gebruik dit deel vooral tijdens de eerste inrichting of als je installatie later verandert.

### Verwarmen

Hier kies en verfijn je de verwarmingsstrategie:

- `Power House`;
- `Water Temperature Control`.

`Power House` probeert de warmtevraag van je woning te schatten. `Water Temperature Control` werkt meer als een stooklijnregeling. Begin bij [Verwarmen en koelen uitgelegd](verwarmen-en-koelen.md) als je nog niet zeker weet welke strategie bij je past.

### Koelen

Hier staan de instellingen voor koeling en dauwpuntbeveiliging.

Koeling is gevoeliger dan verwarming, omdat condensrisico een echte beperking is. Normaal gebruikt OpenQuatt een dauwpuntbron plus veiligheidsmarge. Zonder goede dauwpuntinformatie blijft koeling standaard geblokkeerd.

Bij `Dauwpuntsbenadering` gebruikt OpenQuatt een echte dauwpuntmeting zodra die beschikbaar is. Alleen als die meting ontbreekt, gebruikt OpenQuatt een conservatieve benadering op basis van buitentemperatuur, nachtminimum en kamertemperatuur.

Bij `Expliciet toestaan` gebruikt OpenQuatt geen dauwpuntgrens: ook een beschikbare dauwpuntmeting wordt dan genegeerd. Alleen de ingestelde minimale koel-aanvoer blijft gelden. Gebruik dit alleen als je de installatie zelf bewaakt en het condensrisico bewust accepteert.

Wil je dauwpuntbronnen uit Home Assistant gebruiken, kijk dan bij [Dashboard installeren](dashboard/README.md#optioneel-dynamische-koelbronnen-via-home-assistant). De web-app kiest daarna welke koelingsdauwpuntbron OpenQuatt gebruikt: `Auto`, `Home Assistant` of `MQTT`. In `Auto` gebruikt OpenQuatt de hoogste geldige dauwpuntwaarde.

Wil je externe bronwaarden of toestemmingssignalen via MQTT aanleveren, configureer dan eerst de broker bij **Bronnen / integraties -> MQTT inputbronnen**. In **MQTT sensoren** kun je per topic zien wat OpenQuatt verwacht en ongebruikte topics uitzetten. Zie [MQTT inputbronnen](mqtt.md) voor topics, payload en geldigheid.

### Bronnen / integraties

Hier beheer je de directe gegevensbronnen en integraties:

- `OpenTherm`: zet de lokale OpenTherm-thermostaatkoppeling aan of uit;
- `CIC-polling`: zet het uitlezen van een externe CIC JSON-feed aan of uit en pas de feed-URL aan;
- `MQTT inputbronnen`: configureer een broker voor externe MQTT-bronwaarden zoals dauwpunt, buiten- en kamerwaarden en toestemmingssignalen, en zet ongebruikte topics uit;
- `CiC-compatibiliteit`: gebruik dit alleen als de Quatt app via de CiC moet blijven meekijken.

Dezelfde groep toont compacte diagnostiek voor OpenTherm en CIC, zoals linkstatus, JSON-feedstatus, kamertemperatuur, setpoint en flow wanneer de firmware die signalen exposeert.

Laat dit met rust zolang OpenQuatt logisch werkt. Verander liever een instelling per keer en kijk daarna wat het systeem doet.

### Service

Hier staan commissioning, tests, kalibratie en andere servicetaken. Gebruik deze groep alleen voor een gerichte controle of afstelling en volg de aanwijzingen in de web-app.

### Systeem

Hier vind je beheerfuncties:

- Quick Start opnieuw openen;
- opslag voor Diagnose, Beslislog en Energie;
- firmware-updates en updatekanaal;
- web-login en API-beveiliging;
- backup en restore;
- systeemstatus;
- logboek;
- herstarten.

## Backup en restore

Maak een backup voordat je grotere wijzigingen doet of voordat je een factory-update uitvoert.

De backup bevat de instellingen die de web-app beheert. Bij restore vergelijkt OpenQuatt de backup met de huidige installatie, zodat je verschillen kunt controleren voordat je ze terugzet.

Een backup is vooral handig bij:

- nieuwe release testen;
- overstap naar een nieuw bordje;
- factory-bin update;
- terugzetten na experimenteren met instellingen.

## Updates

De web-app toont update-informatie via de firmware-updatefunctie. Normaal volg je het stabiele kanaal.

Gebruik een dev-kanaal alleen als je bewust test en weet dat de firmware nog kan veranderen. Voor releasegebruik is het stabiele kanaal de route.

Bij de Heatpump Controller Q kan Quick Start vóór de verdere configuratie direct wisselen tussen `Single Wi-Fi`, `Single Ethernet`, `Duo Wi-Fi` en `Duo Ethernet`. De OTA-modal kan later nog steeds de verbinding of opstelling afzonderlijk wisselen. Dit zijn geen gewone updates: de web-app installeert de firmware voor de gekozen setup. Controleer bij Ethernet eerst of de netwerkkabel is aangesloten en bij Duo of de tweede warmtepomp bij deze controller hoort.

Als de verbinding voor de firmwaredownload niet kan worden geopend, probeert OpenQuatt dit eenmaal automatisch opnieuw. Mislukt ook die poging of wordt de installatie afgebroken, dan stopt de voortgang en kun je de setupwissel opnieuw starten.

## Web-login en API-beveiliging

Onder `Instellingen -> Systeem -> Toegang & Beveiliging` kun je de web-login en ESPHome API-encryptie aanpassen.

Vanaf de ESPHome 2026.7-build gebruikt de web-login HTTP Digest-authenticatie. De browserlogin blijft hetzelfde, maar losse REST-clients moeten Digest ondersteunen en kunnen niet meer met Basic-authenticatie aanmelden.

Wijzigingen aan beveiliging kunnen een herstart nodig hebben. Bewaar nieuwe gegevens goed, want Home Assistant moet dezelfde API-sleutel gebruiken als API-encryptie actief is.

## Bij problemen

Als de web-app niet opent:

- controleer of OpenQuatt online is in je router;
- probeer het IP-adres in plaats van `openquatt.local`;
- controleer of je telefoon of laptop op hetzelfde netwerk zit;
- kijk of OpenQuatt nog op het fallback access point zit;
- herstart OpenQuatt als het apparaat wel online is maar de web-app niet reageert.

Als Quick Start niet verschijnt terwijl je nog niet klaar bent, open `Instellingen -> Systeem -> Quick Start` en reset de setupstatus.

Ga daarna verder met [Dashboard installeren](dashboard/README.md) en [Dashboard gebruiken](dashboardoverzicht.md).
