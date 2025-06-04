---
title: Datos
weight: 4
---

Rellena las tablas artists, álbums y songs con:

| Campo                    | Origen   | Descripción                                               |
| ------------------------ | -------- | --------------------------------------------------------- |
| `file_path`              | Metadata | Ruta completa al archivo de audio                         |
| `title`                  | Metadata | Título de la canción                                      |
| `track_number`           | Metadata | Número de pista dentro del álbum                          |
| `artist`                 | Metadata | Artista principal                                         |
| `album_artist`           | Metadata | Artista del álbum (puede diferir del artista de la pista) |
| `album`                  | Metadata | Nombre del álbum                                          |
| `date`                   | Metadata | Año de publicación o grabación                            |
| `genre`                  | Metadata | Género musical                                            |
| `label`                  | Metadata | Sello discográfico                                        |
| `mbid`                   | Metadata | Identificador MusicBrainz                                 |
| `last_modified`          | Archivo  | Fecha de última modificación del archivo                  |
| `added_timestamp`        | Sistema  | Momento exacto en que fue añadido a la base de datos      |
| `added_week`             | Derivado | Semana del año en la que fue añadido                      |
| `added_month`            | Derivado | Mes en que fue añadido                                    |
| `added_year`             | Derivado | Año en que fue añadido                                    |
| `folder_path`            | Sistema  | Carpeta donde se encuentra el archivo                     |
| `replay_gain_album_gain` | Metadata | Ganancia de volumen del álbum (ReplayGain)                |
| `replay_gain_album_peak` | Metadata | Pico de volumen del álbum (ReplayGain)                    |
| `replay_gain_track_gain` | Metadata | Ganancia de volumen de la pista (ReplayGain)              |
| `replay_gain_track_peak` | Metadata | Pico de volumen de la pista (ReplayGain)                  |

![[db_music_path_module.py]]