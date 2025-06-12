---
title: "Configuraci\xF3n"
weight: 3
---

```json
"rateyourmusic/rym_albums_links": {
  "searxng_url": "https://searx.be/",
  "delay": 0.2,
  "max_retries": 3,
  "limit": "None",
  "skip_existing": true,
  "log_level": "INFO",
  "db_path": "/ruta/a/la/base/de/datos.sqlite"
}
```
## Argumentos

|Argumento|Tipo|Default|Descripción|
|---|---|---|---|
|`db_path`|string|null|Ruta a la base de datos SQLite (requerido)|
|`searxng_url`|string|null|URL de la instancia SearXNG (requerido)|
|`delay`|float|0.2|Retraso entre búsquedas en segundos|
|`max_retries`|integer|3|Máximo número de reintentos|
|`limit`|string/integer|"None"|Límite de artistas o álbumes a procesar|
|`skip_existing`|boolean|true|Saltar artistas que ya tienen álbumes RYM|
|`log_level`|string|"INFO"|Nivel de logging|