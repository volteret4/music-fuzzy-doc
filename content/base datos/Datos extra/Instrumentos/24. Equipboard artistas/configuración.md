---
title: "Configuraci\xF3n"
weight: 3
---

```json
"posts/equipboard_artists": {
  "action": "search",
  "limit": null,
  "force_update": false,
  "headless": true,
  "db_path": "/ruta/a/la/base/de/datos.sqlite"
}
```

## Argumentos

|Argumento|Tipo|Default|Descripción|
|---|---|---|---|
|`action`|string|"search"|Acción a realizar: "search", "search-selenium", "stats", "debug", "debug-selenium"|
|`db_path`|string|"db/sqlite/musica.sqlite"|Ruta a la base de datos SQLite|
|`limit`|integer|null|Límite de artistas a procesar|
|`force_update`|boolean|false|Forzar actualización de artistas ya procesados|
|`headless`|boolean|true|Ejecutar navegador en modo headless (solo para Selenium)|
|`artist`|string|null|Nombre específico de artista para debug|