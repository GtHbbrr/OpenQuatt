# Web-app gebruiken

De OpenQuatt web-app is de lokale bedienings- en instellingenpagina van je OpenQuatt-module. Zodra de controller online is, is dit de eerste plek waar je naartoe gaat: open `http://openquatt.local` en rond Quick Start af. Home Assistant komt eventueel daarna.

## Wanneer gebruik je de web-app?

Gebruik de web-app voor alles wat direct op OpenQuatt zelf hoort:

- eerste ingebruikname via Quick Start;
- controleren of OpenQuatt online is en logisch meet;
- verwarmingsstrategie en flowregeling kiezen;
- koeling en dauwpuntbeveiliging instellen;
- firmware-updatekanaal en updates beheren;
- backup en restore van OpenQuatt-instellingen;
- web-login, API-beveiliging, logboek en herstarten.

De web-app blijft altijd de plek waar je OpenQuatt inricht, beheert en controleert als er iets niet klopt. Gebruik je Home Assistant, dan is dat daarnaast een prettige plek voor dagelijks meekijken, dashboards en automatisering.

## Wat doe je waar?

| Plek | Gebruik je vooral voor |
|---|---|
| Q-edition-handleiding | Een voorgeïnstalleerde Heatpump Controller Q aansluiten, online brengen en juist configureren. |
| Installer | Een bestaande Waveshare- of Heatpump Listener-module flashen, Wi-Fi op een nieuwe HCQ instellen of een HCQ herstellen. |
| Web-app | Quick Start, installatiekeuzes, instellingen, updates, backup en beveiliging. |
| Optioneel: Home Assistant | Dagelijks meekijken, dashboards, bronselectie en dynamische bronnen. |

Kies bij een eerste installatie eerst de passende route in het [projectoverzicht](../README.md#kies-je-route). Beide installatieroutes komen uit bij de web-app; Home Assistant is geen onderdeel van de basisinstallatie.

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

Quick Start begint op de Heatpump Controller Q met een controle van de firmware-setup. Op Waveshare en Heatpump Listener wordt deze eerste stap overgeslagen, omdat `Single` of `Duo` daar al vastligt in de geïnstalleerde firmware. Daarna volgen de configuratiestappen:

| Stap | Wat kies je? | Waarom? |
|---|---|---|
| `Kies je setup` | `Single` of `Duo`, via `Wi-Fi` of `Ethernet` | Alleen op de HCQ; installeert zo nodig direct de passende firmware. |
| `Kies je Quatt Hybrid` | V1, V1.5 of V2 | Selecteert de juiste basislogica voor jouw warmtepompgeneratie. |
| `Flowmeting configureren` | De juiste flowbron | Zorgt dat de regeling de juiste meting gebruikt. |
| `Thermostaatgegevens configureren` | Eén bron voor kamertemperatuur en setpoint | Voorkomt dat OpenQuatt waarden uit verschillende bronnen combineert. |
| `CV-ketel of boiler` | Ondersteuning wel of niet toestaan | Bepaalt of OpenQuatt aanvullende warmte mag inzetten. |
| `Kies de verwarmingsstrategie` | `Power House` of `Water Temperature Control` | Bepaalt hoe OpenQuatt warmtevraag maakt. |
| `Werk de regeling uit` | Strategie-instellingen | Toont alleen de instellingen die bij de gekozen strategie horen. |
| `Flowregeling en afstelling` | Automatische flow of vaste pompstand | Bepaalt hoe OpenQuatt de waterdoorstroming regelt. |
| `Watertemperatuur beveiligen` | Maximale watertemperatuur | Laat OpenQuatt terugregelen voordat het water te warm wordt. |
| `Stille uren en niveaus` | Tijdvenster en compressorlimieten | Begrenst de compressor bijvoorbeeld 's nachts. |
| `Gebruiksstatistieken` | Wel of niet beperkte technische systeemstatus en feature-instellingen delen | Delen staat standaard aan en kan tijdens Quick Start worden uitgezet. |
| `Bevestigen en afronden` | Je keuzes controleren | Markeert de basisconfiguratie als klaar. |

Gebruik je Waveshare of Heatpump Listener? Begin dan inhoudelijk bij **Kies je Quatt Hybrid**; Quick Start toont alleen de stappen die voor jouw hardware van toepassing zijn.

Je hoeft niet meteen perfecte waardes te kiezen. Het doel van Quick Start is een veilige, begrijpelijke basis. Fijnregelen kan later.

De installatie is klaar zodra Quick Start is afgerond, `openquatt.local` stabiel bereikbaar blijft en de belangrijkste warmtepompwaarden logisch worden bijgewerkt. Home Assistant en het dashboard zijn optionele vervolgstappen.

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

Zie je hier al vreemde waarden, ga dan niet meteen tunen. Controleer eerst de bronkeuze onder **Instellingen → Bronnen / integraties → Sensorselectie** en, als je Home Assistant gebruikt, de aangeleverde Home Assistant-bronnen.

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

Via `Instellingen → Systeem → Gegevens bewaren` zijn Diagnose, Beslislog en Energie afzonderlijk te beheren. De Beslislog bewaart maximaal zeven dagen exacte gebeurtenissen en redenen na een herstart. Nieuwe gebeurtenissen worden per uur gebundeld naar flash geschreven. Met `Nu opslaan` kunnen nog niet opgeslagen gebeurtenissen vóór een update of herstart alvast worden vastgelegd.

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
- de keuze voor gebruiksstatistieken;
- backup en restore;
- systeemstatus;
- logboek;
- herstarten.

#### Gebruiksstatistieken en privacy

Delen staat standaard aan en de opt-out verschijnt tijdens Quick Start, vóór het afronden. Je kunt de keuze later wijzigen via **Instellingen → Systeem → Gebruiksstatistieken**. De eerste verzendtimer start pas nadat Quick Start is afgerond. Als delen dan nog aan staat, verstuurt OpenQuatt na een willekeurige startvertraging en daarna ongeveer elk uur één klein MQTT-bericht. Door de willekeurige spreiding ligt het werkelijke interval tussen ongeveer 45 en 75 minuten. De huidige centrale brokerverbinding op poort 1883 gebruikt nog geen TLS; credentials en payload zijn onderweg daarom niet versleuteld. De gedeelde brokercredential beperkt alleen de toegang en bewijst niet dat een bericht authentiek van een specifieke controller komt; de ontvanger moet deze gegevens daarom als niet-vertrouwd behandelen.

Bij een upgrade van een installatie die Quick Start al had afgerond, ontbreekt nog een opgeslagen telemetrykeuze. Zo'n bestaande installatie start daarom eenmalig met delen uit; de gebruiker kan delen later onder **Instellingen → Systeem → Gebruiksstatistieken** aanzetten. Alleen nieuwe installaties die Quick Start nog moeten doorlopen gebruiken de standaard-aan opt-out.

Het bericht bevat uitsluitend:

- een willekeurig installatie-ID;
- uptime;
- firmwareversie en releasekanaal;
- hardwareprofiel en, als beschikbaar, hardwarerevisie;
- `Single` of `Duo` en `Wi-Fi` of `Ethernet`;
- vrij heapgeheugen, het minimum sinds de start, het grootste vrije heapblok en vrij PSRAM;
- maximale looptijd van de firmwareloop, ESP-chiptemperatuur en reden van de laatste herstart;
- bij Wi-Fi: de signaalsterkte in dBm;
- of CiC-polling, CiC-compatibiliteitsmodus en de OpenTherm-thermostaatkoppeling aanstaan;
- `boiler_assist_enabled`: of CV-ketel-/boilerondersteuning aanstaat;
- `boiler_connection`: `on_off` voor de `R1`-aansluiting en `opentherm` voor OTB; firmware zonder OTB-keuze rapporteert automatisch `on_off`;
- of MQTT inputbronnen als geheel aanstaan;
- of RAM-trends, flashtrends, beslisloghistorie, lifetime-energiehistorie en RAM-loghistorie aanstaan.

Een niet-ondersteunde functie, tijdelijk nog niet geïnitialiseerde keuze of niet-beschikbare sensor krijgt de waarde `null`; `false` betekent dat de functie beschikbaar maar uitgeschakeld is. Zo is de Wi-Fi-signaalsterkte bij Ethernet `null`. `boiler_connection` is alleen `null` wanneer de OTB-select bestaat maar tijdelijk nog geen geldige toestand heeft, of een onbekende optie bevat.

Het bericht bevat geen MAC-adres, lokaal IP-adres, SSID, MQTT-brokergegevens, credentials, topics, ontvangen MQTT-waarden, ingestelde temperaturen of grenzen, verwarmingsmetingen, regelwaarden of loginhoud. De MQTT-broker ziet bij een netwerkverbinding technisch wel het bron-IP-adres, maar dit staat niet in de payload.

Wanneer delen voor het eerst actief wordt, maakt de controller met de hardware-randomgenerator een UUIDv4 aan en bewaart die lokaal. Een UUIDv4 heeft 122 willekeurige bits; zelfs bij één miljoen installaties is de kans op minstens één dubbel ID kleiner dan ongeveer `10^-25`. Dit ID blijft gelijk na een OTA-update en wanneer je delen tijdelijk uitzet. Een fabrieksreset maakt een nieuw ID. De keuze en het ID worden niet via een instellingenbackup naar een andere controller gekopieerd. Uitzetten stopt nieuwe berichten direct; er wordt geen wachtrij voor later opgeslagen. Na een mislukte verzending maakt iedere retry een verse momentopname, maar behoudt binnen dezelfde retryreeks het `message_id` zodat een verloren QoS 1-bevestiging kan worden gededupliceerd.

De statistiekenclient staat los van de configureerbare [MQTT inputbronnen](mqtt.md): hij publiceert alleen dit ene bericht, subscribed nergens op en schakelt ESPHome MQTT-discovery, entiteitspublicaties en logexport niet in. Het JSON-bericht wordt met QoS 1 retained gepubliceerd op `devices/<installation-id>/telemetry`, zodat de broker per installatie alleen de laatste payload bewaart. Een build zonder geconfigureerde centrale broker maakt ook wanneer delen aanstaat geen externe verbinding.

#### Debugopname voor support

Bij een reproduceerbaar probleem kun je tijdelijk supportgegevens opnemen:

1. Open **Instellingen → Systeem → Systeemstatus → Debugopname**.
2. Start de opname voordat je het probleem opnieuw veroorzaakt. Gebruik rolling debug als het probleem maar af en toe optreedt.
3. Stop de opname nadat het probleem zichtbaar is en download het supportbestand.
4. Voeg het gedownloade `.oqdebug.json`-bestand toe aan je Discord-vraag of GitHub-issue.

De opname wordt lokaal in het apparaatgeheugen opgeslagen en niets wordt automatisch verzonden. Deel het bestand alleen binnen het supportverzoek waarvoor je het hebt gemaakt.

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

Wil je OpenQuatt ook aan Home Assistant toevoegen? Ga dan optioneel verder met [Dashboard installeren](dashboard/README.md) en [Dashboard gebruiken](dashboardoverzicht.md).
