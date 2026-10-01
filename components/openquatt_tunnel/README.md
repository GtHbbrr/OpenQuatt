De context van de openquatt_tunnel met de bestanden in deze folder is:
1. De Frontend (security.js, security-actions.js): Genereert bij het omzetten van de switch een dynamisch geheim en redirect de browser met een 5-seconden time-out en de postfix /pair# naar Cloudflare.
2. De Cloudflare Worker (index.ts): Vangt het verzoek op de postfix /pair# op, controleert de online status van de warmtepomp, bakt een stateless cookie en sluis het HTTP-verzoek door naar de WebSocket-tunnel.
3. De YAML Component (oq_tunnel.yaml): Vangt de /control API-aanroep op via de web_server en geeft het dynamische geheim door aan C++.
4. De C++ Core (OpenQuattTunnel.cpp, .h, __init__.py): Bevat de uitgaande WebSocket-pijplijn naar de postfix /device met de juiste Authorization header, die we nu qua namespaces en static RAM-geheugen volledig sluitend hebben gemaakt.
