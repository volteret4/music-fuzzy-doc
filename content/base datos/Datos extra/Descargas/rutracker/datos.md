---
title: Datos
weight: 4
---

**Tabla: rutracker_torrents** _(Creada)_

|Columna|Tipo|Descripción|
|---|---|---|
|`id`|INTEGER PRIMARY KEY|ID único del registro|
|`artist_id`|INTEGER|ID del artista (FK a artists.id)|
|`album_id`|INTEGER|ID del álbum local (FK a albums.id)|
|`mb_discography_id`|INTEGER|ID de discografía MB (FK a musicbrainz_discography.id)|
|`artist_name`|TEXT|Nombre del artista|
|`album_name`|TEXT|Nombre del álbum|
|`torrent_title`|TEXT|Título completo del torrent|
|`torrent_id`|TEXT|ID único del torrent en RuTracker|
|`post_url`|TEXT|URL del post en RuTracker|
|`download_url`|TEXT|URL de descarga del torrent|
|`format`|TEXT|Información de formato del torrent|
|`quality`|TEXT|Calidad del audio (FLAC, MP3, etc.)|
|`size`|INTEGER|Tamaño del torrent en bytes|
|`seeders`|INTEGER|Número de seeders|
|`leechers`|INTEGER|Número de leechers|
|`year`|INTEGER|Año de lanzamiento|
|`is_available`|BOOLEAN|Si el torrent está disponible|
|`last_checked`|TIMESTAMP|Última verificación de disponibilidad|
|`last_updated`|TIMESTAMP|Última actualización de datos|
|`first_found`|TIMESTAMP|Primera vez que se encontró|
|`times_unavailable`|INTEGER|Veces que se encontró no disponible|