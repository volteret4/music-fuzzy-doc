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

#### Tabla artists

| Campo               | Tipo      | Descripción                                 |
| ------------------- | --------- | ------------------------------------------- |
| `spotify_url`       | TEXT      | URL del artista en Spotify                  |
| `youtube_url`       | TEXT      | URL del canal/tópico del artista en YouTube |
| `musicbrainz_url`   | TEXT      | URL del artista en MusicBrainz              |
| `discogs_url`       | TEXT      | URL del artista en Discogs                  |
| `rateyourmusic_url` | TEXT      | URL del artista en RateYourMusic            |
| `bandcamp_url`      | TEXT      | URL del artista en Bandcamp                 |
| `mbid`              | TEXT      | ID de MusicBrainz del artista               |
| `origin`            | TEXT      | Origen o país del artista                   |
| `formed_year`       | INTEGER   | Año de formación del artista                |
| `total_albums`      | INTEGER   | Número total de álbumes del artista         |
| `bio`               | TEXT      | Biografía del artista                       |
| `similar_artists`   | TEXT/JSON | Artistas similares                          |
| `tags`              | TEXT/JSON | Etiquetas o géneros                         |
| `aliases`           | TEXT/JSON | Nombres alternativos del artista            |
| `member_of`         | TEXT/JSON | Grupos a los que pertenece el artista       |
| `lastfm_url`        | TEXT      | URL del artista en Last.fm                  |
| `links_updated`     | TIMESTAMP | Fecha de la última actualización            |

##### Tabla albums
| Campo                 | Tipo      | Descripción                                       |
| --------------------- | --------- | ------------------------------------------------- |
| `spotify_url`         | TEXT      | URL del álbum en Spotify                          |
| `spotify_id`          | TEXT      | ID del álbum en Spotify                           |
| `youtube_url`         | TEXT      | URL de resultados o playlist del álbum en YouTube |
| `musicbrainz_url`     | TEXT      | URL del álbum en MusicBrainz                      |
| `discogs_url`         | TEXT      | URL del álbum en Discogs                          |
| `rateyourmusic_url`   | TEXT      | URL del álbum en RateYourMusic                    |
| `bandcamp_url`        | TEXT      | URL del álbum en Bandcamp                         |
| `mbid`                | TEXT      | ID de MusicBrainz del álbum                       |
| `producers`           | TEXT/JSON | Productores del álbum                             |
| `engineers`           | TEXT/JSON | Ingenieros de grabación                           |
| `mastering_engineers` | TEXT/JSON | Ingenieros de masterización                       |
| `credits`             | JSON      | Detalles de los créditos                          |
| `lastfm_url`          | TEXT      | URL del álbum en Last.fm                          |
| `links_updated`       | TIMESTAMP | Fecha de la última actualización                  |
|                       |           |                                                   |
##### Tabla songs
| Campo  | Tipo | Descripción                                    |
| ------ | ---- | ---------------------------------------------- |
| `mbid` | TEXT | Identificador de MusicBrainz para la grabación |
 
```tasks

tags include #enlaces_artista_album 
sort by due reverse
hide tags
```