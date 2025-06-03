---
title: Datos
weight: 2
---

##### Tabla `scrobbles`
| Campo           | Tipo    | Descripción                                            |
| --------------- | ------- | ------------------------------------------------------ |
| `id`            | INTEGER | ID único (autoincremental)                             |
| `track_name`    | TEXT    | Nombre de la canción                                   |
| `album_name`    | TEXT    | Nombre del álbum                                       |
| `artist_name`   | TEXT    | Nombre del artista                                     |
| `timestamp`     | INTEGER | Timestamp Unix del scrobble                            |
| `scrobble_date` | TEXT    | Fecha y hora del scrobble en formato legible           |
| `lastfm_url`    | TEXT    | URL de Last.fm para el scrobble                        |
| `song_id`       | INTEGER | ID de referencia a la tabla `songs` (puede ser NULL)   |
| `album_id`      | INTEGER | ID de referencia a la tabla `albums` (puede ser NULL)  |
| `artist_id`     | INTEGER | ID de referencia a la tabla `artists` (puede ser NULL) |

##### Tabla `lastfm_config`
| Campo             | Tipo      | Descripción                   |
| ----------------- | --------- | ----------------------------- |
| `id`              | INTEGER   | ID único (siempre 1)          |
| `lastfm_username` | TEXT      | Nombre de usuario de Last.fm  |
| `last_timestamp`  | INTEGER   | Último timestamp procesado    |
| `last_updated`    | TIMESTAMP | Fecha de última actualización |

##### Tabla `artists`
| Campo        | Tipo | Descripción                       |
| ------------ | ---- | --------------------------------- |
| `name`       | TEXT | Nombre del artista                |
| `mbid`       | TEXT | ID de MusicBrainz                 |
| `tags`       | TEXT | Etiquetas separadas por comas     |
| `bio`        | TEXT | Biografía del artista             |
| `lastfm_url` | TEXT | URL de Last.fm para el artista    |
| `origen`     | TEXT | Origen de los datos ('scrobbles') |

##### Tabla `albums`
| Campo          | Tipo    | Descripción                       |
| -------------- | ------- | --------------------------------- |
| `artist_id`    | INTEGER | ID del artista                    |
| `name`         | TEXT    | Nombre del álbum                  |
| `year`         | INTEGER | Año de lanzamiento                |
| `lastfm_url`   | TEXT    | URL de Last.fm para el álbum      |
| `mbid`         | TEXT    | ID de MusicBrainz                 |
| `total_tracks` | INTEGER | Número total de pistas            |
| `origen`       | TEXT    | Origen de los datos ('scrobbles') |


##### Tabla `songs`
| Campo             | Tipo    | Descripción                              |
| ----------------- | ------- | ---------------------------------------- |
| `title`           | TEXT    | Título de la canción                     |
| `mbid`            | TEXT    | ID de MusicBrainz                        |
| `added_timestamp` | INTEGER | Timestamp de cuando se añadió la canción |
| `added_week`      | INTEGER | Semana en que se añadió la canción       |
| `added_month`     | INTEGER | Mes en que se añadió la canción          |
| `added_year`      | INTEGER | Año en que se añadió la canción          |
| `duration`        | INTEGER | Duración en segundos                     |
| `album`           | TEXT    | Nombre del álbum                         |
| `album_artist`    | TEXT    | Artista del álbum                        |
| `artist`          | TEXT    | Artista de la canción                    |
| `genre`           | TEXT    | Género musical                           |
| `origen`          | TEXT    | Origen de los datos ('scrobbles')        |

##### Tabla `song_links`
| Campo        | Tipo    | Descripción                    |
| ------------ | ------- | ------------------------------ |
| `song_id`    | INTEGER | ID de la canción               |
| `lastfm_url` | TEXT    | URL de Last.fm para la canción |