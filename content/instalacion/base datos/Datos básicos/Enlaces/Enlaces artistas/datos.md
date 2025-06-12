---
title: Datos
weight: 4
---

##### Tabla artists

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `spotify_url` | UNKNOWN | Campo detectado en operación DML |
| `youtube_url` | UNKNOWN | Campo detectado en operación DML |
| `musicbrainz_url` | UNKNOWN | Campo detectado en operación DML |
| `discogs_url` | UNKNOWN | Campo detectado en operación DML |
| `rateyourmusic_url` | UNKNOWN | Campo detectado en operación DML |
| `bandcamp_url` | UNKNOWN | Campo detectado en operación DML |
| `origin` | UNKNOWN | Campo detectado en operación DML |
| `formed_year` | UNKNOWN | Campo detectado en operación DML |
| `total_albums` | UNKNOWN | Campo detectado en operación DML |
| `bio` | UNKNOWN | Campo detectado en operación DML |

##### Tabla albums

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `mbid` | UNKNOWN | Campo detectado en operación DML |

##### Tabla songs

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `mbid` | UNKNOWN | Campo detectado en operación DML |

##### Tabla current

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `spotify_url': None` | UNKNOWN | Campo detectado en operación DML |
| `youtube_url': None` | UNKNOWN | Campo detectado en operación DML |
| `musicbrainz_url': None` | UNKNOWN | Campo detectado en operación DML |
| `discogs_url': None` | UNKNOWN | Campo detectado en operación DML |
| `rateyourmusic_url': None` | UNKNOWN | Campo detectado en operación DML |
| `bandcamp_url': None` | UNKNOWN | Campo detectado en operación DML |
| `origin': None` | UNKNOWN | Campo detectado en operación DML |
| `formed_year': None` | UNKNOWN | Campo detectado en operación DML |
| `total_albums': None` | UNKNOWN | Campo detectado en operación DML |
| `bio': None` | UNKNOWN | Campo detectado en operación DML |

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
      "DISCOGS_TOKEN",
      "LASTFM_USER",
      "GOOGLE_API_KEY",
      "SPOTIFY_CLIENT_SECRET",
      "SPOTIFY_CLIENT_ID",
      "DB_PATH",
      "LASTFM_API_KEY"
    ]
  }
}
```

#### Tabla sqlite_master

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `name` | UNKNOWN | Campo detectado en SELECT |