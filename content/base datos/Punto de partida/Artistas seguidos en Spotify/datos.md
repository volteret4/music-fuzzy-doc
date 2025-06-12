---
title: Datos
weight: 4
---

**Tabla: artists**

|Campo|Descripción|
|---|---|
|`name`|Nombre del artista|
|`spotify_url`|URL de Spotify del artista|
|`spotify_popularity`|Popularidad en Spotify (0-100)|
|`last_updated`|Timestamp de última actualización|
|`origen`|Marcado como `spotify_{user_id}`|
|`added_timestamp`|Timestamp de adición|
|`added_day`|Día de adición|
|`added_week`|Semana de adición|
|`added_month`|Mes de adición|
|`added_year`|Año de adición|

**Tabla: albums**

|Campo|Descripción|
|---|---|
|`artist_id`|ID del artista asociado|
|`name`|Nombre del álbum|
|`year`|Año de lanzamiento|
|`label`|Sello discográfico|
|`genre`|Géneros del álbum|
|`total_tracks`|Número total de pistas|
|`spotify_url`|URL de Spotify del álbum|
|`spotify_id`|ID de Spotify del álbum|
|`album_art_path`|URL de la portada|
|`last_updated`|Timestamp de última actualización|
|`origen`|Marcado como `spotify_{user_id}`|
|`added_timestamp`|Timestamp de adición|
|`added_day`|Día de adición|
|`added_week`|Semana de adición|
|`added_month`|Mes de adición|
|`added_year`|Año de adición|

**Tabla: songs**

|Campo|Descripción|
|---|---|
|`title`|Título de la canción|
|`track_number`|Número de pista|
|`artist`|Artista principal|
|`album_artist`|Artista del álbum|
|`album`|Nombre del álbum|
|`duration`|Duración en segundos|
|`last_modified`|Timestamp de modificación|
|`origen`|Marcado como `spotify_{user_id}`|
|`added_timestamp`|Timestamp de adición|
|`added_day`|Día de adición|
|`added_week`|Semana de adición|
|`added_month`|Mes de adición|
|`added_year`|Año de adición|

**Tabla: song_links**

|Campo|Descripción|
|---|---|
|`song_id`|ID de la canción asociada|
|`spotify_url`|URL de Spotify de la canción|
|`spotify_id`|ID de Spotify de la canción|
|`links_updated`|Timestamp de actualización de enlaces|

**Tabla: genres**

|Campo|Descripción|
|---|---|
|`name`|Nombre del género (insertado desde géneros de Spotify)|