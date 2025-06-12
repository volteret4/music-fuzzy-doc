---
title: "Configuraci\xF3n"
weight: 3
---

```json
"rateyourmusic/rym_artists_links": {
  "searxng_url": "https://searx.be/",
  "delay": 0.1,
  "max_retries": 3,
  "limit": 5000,
  "skip_existing": false,
  "log_level": "INFO",
  "db_path": "/ruta/a/la/base/de/datos.sqlite"
}
```
## Argumentos

|Argumento|Tipo|Default|Descripción|
|---|---|---|---|
|`db_path`|string|"data/music.db"|Ruta a la base de datos SQLite|
|`searxng_url`|string|"[https://searx.tiekoetter.com](https://searx.tiekoetter.com)"|URL de la instancia SearXNG|
|`delay`|float|5.0|Retraso entre búsquedas en segundos|
|`max_retries`|integer|3|Máximo número de reintentos para rate limiting|
|`limit`|integer|null|Límite de artistas a procesar|
|`skip_existing`|boolean|true|Saltar artistas que ya tienen URL|
|`log_level`|string|"INFO"|Nivel de logging: DEBUG, INFO, WARNING, ERROR|