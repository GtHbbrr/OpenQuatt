# Ontwikkelen Op Mac

Deze repo gebruikt macOS als primaire lokale ontwikkelomgeving.
De GitHub Actions blijven op Linux draaien; lokaal gebruik je dezelfde Python- en shell-entrypoints.

## Setup

1. Clone de repo in je normale home-directory.
2. Zorg dat `python3` beschikbaar is.
3. Maak de lokale ESPHome-omgeving aan:

```bash
python3 scripts/dev.py bootstrap
```

De `bootstrap`-stap maakt een lokale `.venv` aan en installeert de gepinde ESPHome-versie uit de repo.
Voer `python3 scripts/dev.py bootstrap` opnieuw uit nadat `/.github/requirements-esphome.txt`
is aangepast; de bootstrap ververst een bestaande `.venv` dan opnieuw naar de gepinde versie.

## Hoofdworkflow

Gebruik deze commando's als primaire lokale workflow:

```bash
python3 scripts/dev.py validate
python3 scripts/dev.py validate --config-only
python3 scripts/dev.py preview-pages --no-serve
```

De bash-wrappers blijven beschikbaar voor de meest gebruikte taken:

```bash
./scripts/bootstrap_esphome_local.sh
./scripts/validate_local.sh --config-only
./scripts/preview_pages_local.sh --no-serve
```

## Parallel Bouwen

Je kunt parallel bouwen met bijvoorbeeld:

```bash
python3 scripts/dev.py validate --jobs 2
```

Begin bij voorkeur met `--jobs 2`. Meer parallelisme kan sneller zijn, maar gebruikt ook meer CPU, RAM en schijfcache.
De eerste full-validate na een lege of opgeschoonde cache kan tijdelijk sequentieel lopen; de helper doet dat automatisch om ESP-IDF component-cache races te vermijden.

## Flashen En Hardware

Gebruik voor ESPHome upload- en logtaken de ESPHome executable uit de lokale venv:

```bash
.venv/bin/esphome upload configs/waveshare/duo_wifi.yaml
.venv/bin/esphome logs configs/waveshare/duo_wifi.yaml
```

Voor browser-based flashen kun je de lokale Pages preview of de gepubliceerde installer gebruiken.
