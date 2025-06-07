---
title: "Configuraci\xF3n"
weight: 3
---

Datos que leerá del JSON de configuración:

- **lastfm_user**: Nombre de usuario de Last.fm
- **lastfm_api_key**: Clave de API de Last.fm
- **db_path**: Ruta a la base de datos SQLite
- **output_json**: Archivo JSON opcional para exportar los scrobbles
- **cache_dir**: Directorio para archivos de caché (por defecto: `.content/cache/lastfm`)
- **force_update**: Forzar actualización completa ignorando el último timestamp
- **interactive**: Modo interactivo (no usado actualmente)

## Argumentos

|Argumento|Tipo|Descripción|Requerido|
|---|---|---|---|
|`lastfm_user`|string|Nombre de usuario de Last.fm|Sí|
|`lastfm_api_key`|string|Clave de API de Last.fm|Sí|
|`db_path`|string|Ruta al archivo de la base de datos SQLite|Sí|
|`output_json`|string|Ruta para guardar scrobbles en formato JSON|No|
|`cache_dir`|string|Directorio para archivos de caché|No|
|`force_update`|bool|Forzar actualización completa|No|