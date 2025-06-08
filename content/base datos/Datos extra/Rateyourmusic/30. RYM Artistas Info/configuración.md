---
title: "Configuraci\xF3n"
weight: 3
---

```json
"rateyourmusic/rym_artist_info": {
  "delay": 2.0,
  "limit": null,
  "headless": true,
  "force_update": false,
  "max_retries": 3,
  "log_level": "INFO",
  "min_delay": 2,
  "max_delay": 5,
  "db_path": "/ruta/a/la/base/de/datos.sqlite"
}
```
## Argumentos

|Argumento|Tipo|Default|Descripción|
|---|---|---|---|
|`db_path`|string|null|Ruta a la base de datos SQLite (requerido)|
|`limit`|integer|null|Límite de artistas a procesar|
|`headless`|boolean|false|Ejecutar navegador en modo headless|
|`force_update`|boolean|false|Forzar actualización de artistas ya procesados|
|`min_delay`|float|2.0|Delay mínimo entre requests en segundos|
|`max_delay`|float|5.0|Delay máximo entre requests en segundos|
|`max_retries`|integer|3|Máximo número de reintentos|
|`log_level`|string|"INFO"|Nivel de logging|