---
title: "Configuraci\xF3n"
weight: 3
---

Datos que leerá del JSON de configuración:

- **db_path**: Ruta a la base de datos SQLite
- **checkpoint_path**: Archivo JSON para guardar el progreso del procesamiento
- **services**: Lista de servicios a buscar ("spotify", "youtube", "bandcamp", "soundcloud", "boomkat")
- **limit**: Límite de canciones a procesar (opcional)
- **force_update**: Actualizar enlaces existentes
- **delete_old**: Eliminar enlaces antiguos si no se encuentra uno nuevo
- **spotify_client_id**: Client ID para la API de Spotify
- **spotify_client_secret**: Client Secret para la API de Spotify
- **google_api_key**: Clave de API de Google para búsquedas
- **google_cx**: ID de motor de búsqueda personalizado de Google
- **lastfm_api_key**: Clave de API de Last.fm

## Argumentos

|Argumento|Tipo|Descripción|Requerido|
|---|---|---|---|
|`db_path`|string|Ruta al archivo de la base de datos SQLite|Sí|
|`checkpoint_path`|string|Archivo JSON para guardar el progreso|Sí|
|`services`|list/set|Servicios a buscar enlaces|Sí|
|`limit`|int|Límite de canciones a procesar|No|
|`force_update`|bool|Actualizar enlaces incluso si ya existen|No|
|`delete_old`|bool|Eliminar enlaces existentes si no se encuentra uno nuevo|No|
|`spotify_client_id`|string|Client ID para la API de Spotify|No|
|`spotify_client_secret`|string|Client Secret para la API de Spotify|No|
|`google_api_key`|string|Clave de API de Google|No|
|`google_cx`|string|ID de motor de búsqueda personalizado de Google|No|
|`lastfm_api_key`|string|Clave de API de Last.fm|No|