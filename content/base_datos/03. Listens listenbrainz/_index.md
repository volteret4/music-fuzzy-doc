---
title: 03. Listens listenbrainz
weight: 1
---

Este script se encarga de obtener y procesar los registros de escuchas (listens) desde ListenBrainz, almacenándolos en una base de datos SQLite y enlazándolos con canciones, artistas y álbumes existentes en tu biblioteca.

Este script permite varios métodos para mejorar la búsqueda estricta:
- `normalize-strings` 
- `enhanced-matrching`
- `mbid-matching`
- `fuzzy-matching`
- `analyze-mismatches`
- `use-all-matching`

> Se recomienda realizar varias pasadas, una con cada argumento hasta que encuentre un porcentaje que parezca apropiado. Lo que tu comprendas que me decían

#### Tabla `listens`
| Campo              | Tipo    | Descripción                                                            |
| ------------------ | ------- | ---------------------------------------------------------------------- |
| `id`               | INTEGER | ID único para cada listen (clave primaria)                             |
| `track_name`       | TEXT    | Nombre de la pista/canción                                             |
| `album_name`       | TEXT    | Nombre del álbum (opcional)                                            |
| `artist_name`      | TEXT    | Nombre del artista                                                     |
| `timestamp`        | INTEGER | Timestamp en formato Unix de cuando se escuchó la canción              |
| `listen_date`      | TEXT    | Fecha y hora en formato legible de cuando se escuchó la canción        |
| `listenbrainz_url` | TEXT    | URL a la página de ListenBrainz del usuario                            |
| `song_id`          | INTEGER | ID de la canción correspondiente en la tabla `songs` (si se encuentra) |
| `album_id`         | INTEGER | ID del álbum correspondiente en la tabla `albums` (si se encuentra)    |
| `artist_id`        | INTEGER | ID del artista correspondiente en la tabla `artists` (si se encuentra) |
| `additional_data`  | TEXT    | Metadatos adicionales en formato JSON (añadido dinámicamente)          |
##### Tabla `listenbrainz_config`
| Campo            | Tipo      | Descripción                                 |
| ---------------- | --------- | ------------------------------------------- |
| `id`             | INTEGER   | ID único siempre 1 (solo una configuración) |
| `username`       | TEXT      | Nombre de usuario en ListenBrainz           |
| `last_timestamp` | INTEGER   | Último timestamp procesado                  |
| `last_updated`   | TIMESTAMP | Fecha y hora de la última actualización     |
##### Tabla `normalized_songs` (si se activa `enhanced_matching`)
| Campo               | Tipo    | Descripción         |
| ------------------- | ------- | ------------------- |
| `song_id`           | INTEGER | ID de la canción    |
| `normalized_title`  | TEXT    | Título normalizado  |
| `normalized_artist` | TEXT    | Artista normalizado |
| `normalized_album`  | TEXT    | Álbum normalizado   |