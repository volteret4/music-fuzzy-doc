---
title: "19. Im\xE1genes"
weight: 1
---

### Archivos

| Archivo o Carpeta                                   | Descripción                                            |
| --------------------------------------------------- | ------------------------------------------------------ |
| `artists.img` (columna en DB)                       | Ruta a una imagen principal del artista.               |
| `artists.img_paths` (columna en DB)                 | Lista JSON con rutas locales a imágenes del artista.   |
| `artists.img_urls` (columna en DB)                  | Lista JSON con URLs de imágenes descargadas.           |
| `.content/artistas_img/<artista>/image_N.jpg`       | Imágenes de artistas guardadas localmente.             |
| `.content/albums_img/<artista>_-_<álbum>/cover.jpg` | Carátulas de álbumes guardadas localmente.             |
| Carpeta temporal: `.../temp/`                       | Usada para descargas temporales y eliminar duplicados. |
| Archivo de estadísticas (`--stats_file`)            | JSON opcional con las estadísticas del proceso.        |

### Argumentos
| Argumento                  | Tipo | Valores posibles | Descripción                                                          |
| -------------------------- | ---- | ---------------- | -------------------------------------------------------------------- |
| `--db_path`                | str  | Ruta válida      | Ruta a la base de datos SQLite (obligatorio).                        |
| `--project_root`           | str  | Ruta válida      | Ruta raíz del proyecto. Opcional, afecta a la ubicación de carpetas. |
| `--descargar_img_artistas` | str  | `true` / `false` | Descargar imágenes de artistas.                                      |
| `--guardar_url_artistas`   | str  | `true` / `false` | Guardar URLs de imágenes de artistas en la base de datos.            |
| `--descargar_img_albums`   | str  | `true` / `false` | Descargar imágenes de álbumes.                                       |
| `--guardar_url_albums`     | str  | `true` / `false` | Guardar URLs de carátulas en la base de datos.                       |
| `--force_update`           | str  | `true` / `false` | Forzar descarga incluso si ya existen imágenes/URLs.                 |
| `--spotify_client_id`      | str  | ID válido        | Credencial para autenticar con la API de Spotify.                    |
| `--spotify_client_secret`  | str  | Secret válido    | Credencial para autenticar con la API de Spotify.                    |
| `--discogs_token`          | str  | Token válido     | Token de autenticación para Discogs.                                 |
| `--lastfm_api_key`         | str  | API Key válida   | API key para acceder a Last.fm.                                      |
| `--stats_file`             | str  | Ruta a archivo   | Si se proporciona, se guarda un archivo JSON con estadísticas.       |


### Tablas

#### Artistas

| Columna     | Tipo      | Descripción                                                         |
| ----------- | --------- | ------------------------------------------------------------------- |
| `id`        | int       | ID del artista (clave primaria).                                    |
| `name`      | str       | Nombre del artista.                                                 |
| `mbid`      | str       | MusicBrainz ID opcional.                                            |
| `img`       | str       | Ruta a una imagen principal del artista.                            |
| `img_paths` | TEXT/JSON | Lista JSON de rutas locales de imágenes descargadas.                |
| `img_urls`  | TEXT/JSON | Lista JSON con URLs e información adicional (fuente, tamaño, etc.). |

#### Albums
| Columna          | Tipo      | Descripción                                  |
| ---------------- | --------- | -------------------------------------------- |
| `id`             | int       | ID del álbum (clave primaria).               |
| `name`           | str       | Nombre del álbum.                            |
| `artist_id`      | int       | ID del artista (clave foránea).              |
| `album_art_path` | str       | Ruta a la imagen local de la carátula.       |
| `album_art_urls` | TEXT/JSON | Lista JSON con URLs de imágenes de carátula. |
| `mbid`           | str       | MusicBrainz ID opcional para el álbum.       |

### Artists networks
| Columna     | Tipo | Descripción                      |
| ----------- | ---- | -------------------------------- |
| `artist_id` | int  | Relación con la tabla `artists`. |
| `spotify`   | str  | URL de Spotify del artista.      |

### Requisitos 
| Librería / Script          | Obligatoria    | Descripción                                                  |
| -------------------------- | -------------- | ------------------------------------------------------------ |
| `requests`                 | ✅              | Realiza solicitudes HTTP a APIs (Spotify, Discogs, Last.fm). |
| `PIL (Pillow)`             | ✅              | Manipulación de imágenes (validación, tamaño).               |
| `sqlite3`                  | ✅              | Acceso a la base de datos SQLite.                            |
| `cv2 (OpenCV)`             | ⚠️ Recomendado | Detección de duplicados visuales mediante hash perceptual.   |
| `numpy`                    | ✅              | Procesamiento de matrices de imágenes.                       |
| `argparse`                 | ✅              | Manejo de argumentos por línea de comandos.                  |
| `base_module.PROJECT_ROOT` | ⚠️             | Variable importada con el /root del proyecto.                |