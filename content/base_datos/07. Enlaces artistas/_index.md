---
title: 07. Enlaces artistas
weight: 1
---

#### Configuración JSON
```json
{
  "db_path": "ruta/a/tu/base_de_datos.db",
  "log_path": "logs/",
  "cache_path": "cache/",
  "cache_duration": 30,
  "rate_limit": 0.5,
  "spotify": {
    "client_id": "tu_spotify_client_id",
    "client_secret": "tu_spotify_client_secret"
  },
  "lastfm": {
    "api_key": "tu_lastfm_api_key",
    "api_secret": "tu_lastfm_api_secret"
  },
  "discogs": {
    "token": "tu_discogs_token"
  },
  "user_agent": "MusicDatabaseEnricher/1.0 (contacto@ejemplo.com)"
}
```

##### Variables de entorno alternativas
- SPOTIFY_CLIENT_ID
- SPOTIFY_CLIENT_SECRET
- LASTFM_API_KEY
- LASTFM_API_SECRET
- DISCOGS_TOKEN

