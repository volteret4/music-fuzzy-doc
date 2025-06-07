---
title: Datos
weight: 4
---

**Tabla: scrobbles_{username}**

|Columna|Tipo|Descripción|
|---|---|---|
|`id`|INTEGER|ID único del registro (clave primaria)|
|`artist_name`|TEXT|Nombre del artista (requerido)|
|`artist_mbid`|TEXT|MusicBrainz ID del artista|
|`name`|TEXT|Nombre de la canción (requerido)|
|`album_name`|TEXT|Nombre del álbum|
|`album_mbid`|TEXT|MusicBrainz ID del álbum|
|`timestamp`|INTEGER|Timestamp Unix del scrobble más reciente (requerido)|
|`fecha_scrobble`|TIMESTAMP|Fecha del scrobble más reciente (requerido)|
|`lastfm_url`|TEXT|URL de la canción en Last.fm|
|`fecha_adicion`|TIMESTAMP|Fecha de inserción en la base de datos|
|`reproducciones`|INTEGER|Número total de reproducciones (por defecto: 1)|
|`fecha_reproducciones`|TEXT|JSON con array de todas las fechas de reproducción|

**Tabla: lastfm_config**

|Columna|Tipo|Descripción|
|---|---|---|
|`id`|INTEGER|ID único (siempre 1, clave primaria con CHECK)|
|`lastfm_username`|TEXT|Nombre de usuario de Last.fm|
|`last_timestamp`|INTEGER|Timestamp del último scrobble procesado|
|`last_updated`|TIMESTAMP|Fecha de última actualización|