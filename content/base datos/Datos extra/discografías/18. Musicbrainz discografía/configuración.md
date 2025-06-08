---
title: "Configuraci\xF3n"
weight: 3
---

```json
"musicbrainz/mb_discografia": {
  "force_update": false,
  "artist_limit": null,
  "interactive": false,
  "db_path": "/ruta/a/la/base/de/datos.sqlite"
}
```
## Argumentos

|Argumento|Tipo|Default|Descripción|
|---|---|---|---|
|`db_path`|string|"music_database.db"|Ruta a la base de datos SQLite|
|`force_update`|boolean|false|Forzar actualización de artistas ya procesados|
|`artist_limit`|integer|null|Límite de artistas a procesar|
|`interactive`|boolean|true|Solicitar confirmación antes de procesar|