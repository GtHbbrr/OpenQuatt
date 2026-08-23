# Hardware-in-the-loop: retained crashtelemetrie

`crash_telemetry_q_duo_wifi.yaml` is opzettelijk onveilige testfirmware en staat
niet in `build_targets.yaml`. De drie standaard uitgeschakelde knoppen wekken
een `abort()`, een echte pointerfout en een watchdog op.

Controleer per test minimaal:

1. gebruiksstatistieken staat aan en Quick Start is afgerond;
2. na de herstart verschijnt een retained bericht op
   `openquatt/devices/<installation-id>/crash`;
3. een nieuwe subscriber ontvangt dit bericht direct;
4. het bericht bevat het technische crashrapport, firmwareversie,
   bronrepository, volledige commit-SHA, exact buildtarget, ESPHome-versie,
   hardwareprofiel/topologie/verbinding, buildtijd en de volledige ELF-SHA256;
5. adressen worden alleen tegen een opnieuw gebouwd ELF gebruikt als de SHA256
   exact overeenkomt met `reporting_build_id`;
6. na uitschakelen van gebruiksstatistieken wordt hetzelfde retained topic met
   een lege payload gewist, ook wanneer de broker tijdens het uitschakelen
   tijdelijk offline is;
7. herstart de broker en controleer dat zijn retained opslag de crash werkelijk
   heeft behouden.
