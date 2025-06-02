---
title: "14. Discograf\xEDas masters"
weight: 1
---

## Archivos que crea/edita el script

|Archivo|Tipo|Descripción|Ubicación por defecto|
|---|---|---|---|
|`music.db`|Base de datos SQLite|Base de datos principal donde se almacenan todos los datos|`{PROJECT_ROOT}/db/sqlite/music.db`|

## Argumentos de configuración que puede recibir

|Parámetro|Tipo|Valor por defecto|Descripción|
|---|---|---|---|
|`discogs_token`|string|`''` (vacío)|Token de autenticación para la API de Discogs (requerido)|
|`db_path`|string|`{PROJECT_ROOT}/db/sqlite/music.db`|Ruta completa a la base de datos SQLite|
|`force_update`|boolean|`False`|Si es `True`, actualiza registros existentes; si es `False`, solo procesa artistas nuevos|
|`accepted_formats`|list|`['album', 'ep']`|Lista de formatos de lanzamientos aceptados para importar|
|`rol_principal`|boolean|`False`|Si es `True`, solo importa lanzamientos donde el artista tiene rol 'Main'; si es `False`, importa todos los lanzamientos|

## Tablas y columnas que crea en la base de datos

### Tabla: `discogs_discography`

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

### Índices creados

|Nombre del índice|Columna(s)|Descripción|
|---|---|---|
|`idx_disco_artist_id`|`artist_id`|Mejora consultas por artista|
|`idx_disco_album_id`|`album_id`|Mejora consultas por álbum|
|`idx_disco_discogs_id`|`discogs_id`|Mejora consultas por ID de Discogs|

## Notas adicionales

- El script busca artistas con enlaces a Discogs en dos tablas: `artists_networks` y `artists`
- Utiliza la API de Discogs con límites de velocidad (1.5 segundos entre peticiones)
- Procesa los lanzamientos página por página (100 elementos por página)
- Filtra lanzamientos según formato y rol del artista
- Maneja tanto inserción de nuevos registros como actualización de existentes