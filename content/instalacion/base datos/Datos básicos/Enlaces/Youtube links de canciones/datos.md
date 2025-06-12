---
title: Datos
weight: 5
---

##### Tabla `song_links`
|Campo|Tipo|Descripción|
|---|---|---|
|`song_id`|INTEGER|ID de la canción|
|`youtube_url`|TEXT|URL del video en YouTube|
|`youtube_id`|TEXT|ID del video en YouTube|
|`video_title`|TEXT|Título del video|
|`channel_name`|TEXT|Nombre del canal de YouTube|
|`view_count`|INTEGER|Número de vistas (si disponible)|
|`match_score`|REAL|Puntuación de coincidencia (0.0 - 1.0)|
|`last_updated`|TIMESTAMP|Fecha de última actualización|
##### Otras tablas
| Tabla     | Campo         | Descripción                                  |
| --------- | ------------- | -------------------------------------------- |
| `albums`  | `youtube_url` | URL de canal o playlist del álbum en YouTube |
| `artists` | `youtube_url` | URL del canal oficial del artista en YouTube |