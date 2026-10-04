# Dwing CMake om de esp_websocket_client component te koppelen aan dit component
idf_component_register(SRCS "openquatt_tunnel.cpp"
                       INCLUDE_DIRS "."
                       REQUIRES esp_websocket_client)
