---
title: "Configuraci\xF3n"
weight: 3
---

```json
{
  "orpheus": {
    "db_path": "/ruta/a/musica.sqlite",
    "orpheus_url": "https://orpheus.network",
    "orpheus_username": "tu_usuario",
    "orpheus_password": "tu_contraseña",
    "orpheus_api_token": "tu_token_api",
    "rate_limit": 2.1,
    "force_update": false,
    "limit": 0,
    "log_level": "INFO"
  }
}
```

## Argumentos

|Argumento|Tipo|Descripción|Valor por defecto|
|---|---|---|---|
|`--config`|str|Archivo de configuración JSON|-|
|`--username`|str|Usuario de Orpheus Network|-|
|`--password`|str|Contraseña de Orpheus Network|-|
|`--api-token`|str|Token API de Orpheus Network|-|
|`--limit`|int|Límite de artistas a procesar (0 = sin límite)|0|
|`--force-update`|bool|Forzar actualización de torrents existentes|false|