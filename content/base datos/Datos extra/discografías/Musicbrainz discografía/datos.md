---
title: Datos
weight: 4
---

**Tabla: musicbrainz_discography** (CREADA)

|Campo|Tipo|Descripción|
|---|---|---|
|`id`|INTEGER|Clave primaria autoincremental|
|`artist_id`|INTEGER|Referencia al ID del artista en tabla artists|
|`album_id`|INTEGER|Referencia al álbum local si existe coincidencia|
|`discogs_discography_id`|INTEGER|Referencia a discogs_discography si existe|
|`mbid`|TEXT|ID único del release group en MusicBrainz|
|`title`|TEXT|Nombre del álbum/release|
|`release_type`|TEXT|Tipo: Album, EP, Single, Compilation, etc.|
|`first_release_date`|TEXT|Fecha de primer lanzamiento|
|`secondary_types`|TEXT|Tipos secundarios separados por comas|
|`last_updated`|TIMESTAMP|Fecha de última actualización|