---
title: Datos
weight: 4
---

##### Tabla albums

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `mbid` | TEXT | Campo mbid (detectado en operación DML) |

##### Tabla songs

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `mbid` | TEXT | Campo mbid (detectado en operación DML) |

##### Configuración

```json
{
  "spotify": {
    "client_id": "tu_spotify_client_id",
    "client_secret": "tu_spotify_client_secret"
  },
  "lastfm": {
    "api_key": "tu_lastfm_api_key",
    "api_secret": "tu_lastfm_secret"
  },
  "logging": {
    "level": "INFO",
    "file": "app.log",
    "format": "%(asctime)s - %(levelname)s - %(message)s"
  },
  "variables_entorno": {
    "descripcion": "Variables de entorno utilizadas",
    "variables": [
      "SPOTIFY_CLIENT_ID",
      "GOOGLE_API_KEY",
      "LASTFM_API_KEY",
      "DISCOGS_TOKEN",
      "SPOTIFY_CLIENT_SECRET",
      "LASTFM_USER",
      "DB_PATH"
    ]
  }
}
```

#### Tabla artists

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `mbid` | TEXT | Campo mbid (detectado en operación DML) |