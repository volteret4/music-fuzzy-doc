---
title: "Configuraci\xF3n"
weight: 3
---

```json
{
  "rutracker": {
    "db_path": "/ruta/a/musica.sqlite",
    "rutracker_url": "https://rutracker.org",
    "rutracker_username": "tu_usuario",
    "rutracker_password": "tu_contraseña",
    "use_jackett": false,
    "jackett_url": "http://localhost:9117",
    "jackett_api_key": "tu_api_key_jackett",
    "jackett_indexer": "rutracker",
    "rate_limit": 3.0,
    "force_update": false,
    "force_initial_mode": false,
    "update_mode": false,
    "limit": 0,
    "log_level": "INFO",
    "max_retries": 3,
    "retry_delay": 5,
    "availability_check_limit": 100,
    "max_unavailable_days": 30,
    "max_unavailable_times": 5,
    "verify_ssl": true,
    "proxy": {
      "http": "socks5://127.0.0.1:1080",
      "https": "socks5://127.0.0.1:1080"
    }
  }
}
```

## Argumentos

|Argumento|Tipo|Descripción|Valor por defecto|
|---|---|---|---|
|`--config`|str|Archivo de configuración JSON|-|
|`--username`|str|Usuario de RuTracker|-|
|`--password`|str|Contraseña de RuTracker|-|
|`--jackett-url`|str|URL del servidor Jackett|-|
|`--jackett-api-key`|str|Clave API de Jackett|-|
|`--use-jackett`|bool|Usar Jackett en lugar de acceso directo|false|
|`--limit`|int|Límite de artistas a procesar (0 = sin límite)|0|
|`--force-update`|bool|Forzar actualización de todos los artistas|false|
|`--proxy-http`|str|Proxy HTTP (ej: socks5://127.0.0.1:1080)|-|
|`--proxy-https`|str|Proxy HTTPS (ej: socks5://127.0.0.1:1080)|-|