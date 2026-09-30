idf_component_register(
    SRCS "openquatt_tunnel.cpp"
    INCLUDE_DIRS "."
    REQUIRES esp_websocket_client json
)
