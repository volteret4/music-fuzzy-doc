---
title: Datos
weight: 2
---

##### Tabla: `discogs_discography`

|Columna|Tipo|Restricciones|Descripción|
|---|---|---|---|
|`id`|INTEGER|PRIMARY KEY|Identificador único del registro|
|`artist_id`|INTEGER|NOT NULL, FOREIGN KEY → artists(id)|ID del artista en la tabla local|
|`album_id`|INTEGER|FOREIGN KEY → albums(id)|ID del álbum en la tabla local (puede ser NULL)|
|`album_name`|TEXT|NOT NULL|Nombre del álbum/lanzamiento|
|`type`|TEXT||Tipo de lanzamiento (album, single, etc.)|
|`main_release`|INTEGER||ID del lanzamiento principal en Discogs|
|`role`|TEXT||Rol del artista en el lanzamiento|
|`resource_url`|TEXT||URL del recurso en la API de Discogs|
|`year`|INTEGER||Año de lanzamiento|
|`thumb`|TEXT||URL de la imagen en miniatura|
|`stats_comm_wantlist`|INTEGER||Número de usuarios que lo tienen en wishlist|
|`stats_comm_coll`|INTEGER||Número de usuarios que lo tienen en colección|
|`user_wantlist`|INTEGER|DEFAULT 0|Si el usuario lo tiene en wishlist|
|`user_coll`|INTEGER|DEFAULT 0|Si el usuario lo tiene en colección|
|`format`|TEXT||Información del formato (almacenado como JSON)|
|`label`|TEXT||Información del sello discográfico (almacenado como JSON)|
|`status`|TEXT||Estado del lanzamiento|
|`discogs_id`|INTEGER||ID único del lanzamiento en Discogs|
|`last_updated`|TIMESTAMP|DEFAULT CURRENT_TIMESTAMP|Fecha de última actualización|

##### Índices creados

|Nombre del índice|Columna(s)|Descripción|
|---|---|---|
|`idx_disco_artist_id`|`artist_id`|Mejora consultas por artista|
|`idx_disco_album_id`|`album_id`|Mejora consultas por álbum|
|`idx_disco_discogs_id`|`discogs_id`|Mejora consultas por ID de Discogs|