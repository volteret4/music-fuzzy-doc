---
title: Datos
weight: 4
---

**Tabla: orpheus_torrents** _(Creada)_

|Columna|Tipo|Descripción|
|---|---|---|
|`id`|INTEGER PRIMARY KEY|ID único del registro|
|`artist_id`|INTEGER|ID del artista (FK a artists.id)|
|`album_id`|INTEGER|ID del álbum local (FK a albums.id)|
|`musicbrainz_discography_id`|INTEGER|ID de discografía MB (FK a musicbrainz_discography.id)|
|`artist_name`|TEXT|Nombre del artista|
|`album_name`|TEXT|Nombre del álbum/grupo|
|`torrent_name`|TEXT|Nombre completo del torrent|
|`torrent_id`|INTEGER|ID único del torrent en Orpheus|
|`group_id`|INTEGER|ID del grupo/álbum en Orpheus|
|`post_url`|TEXT|URL del post en Orpheus|
|`torrent_url`|TEXT|URL de descarga del torrent|
|`media`|TEXT|Tipo de medio (CD, Vinyl, WEB, etc.)|
|`format`|TEXT|Formato del audio (FLAC, MP3, etc.)|
|`encoding`|TEXT|Codificación/bitrate|
|`size`|INTEGER|Tamaño del torrent en bytes|
|`seeders`|INTEGER|Número de seeders|
|`leechers`|INTEGER|Número de leechers|
|`snatched`|INTEGER|Número de descargas completadas|
|`year`|INTEGER|Año de lanzamiento|
|`record_label`|TEXT|Sello discográfico|
|`catalogue_number`|TEXT|Número de catálogo|
|`scene`|BOOLEAN|Si es un release scene|
|`has_log`|BOOLEAN|Si incluye archivo log|
|`has_cue`|BOOLEAN|Si incluye archivo cue|
|`log_score`|INTEGER|Puntuación del log|
|`freeTorrent`|BOOLEAN|Si es un torrent gratuito|
|`last_updated`|TIMESTAMP|Última actualización|