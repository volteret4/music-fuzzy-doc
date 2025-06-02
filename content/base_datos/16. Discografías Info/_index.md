---
title: "16. Discograf\xEDas Info"
weight: 1
---

#### Tabla: `artists_discogs_info`

|Columna|Tipo|Restricciones|Descripción|
|---|---|---|---|
|`id`|INTEGER|PRIMARY KEY AUTOINCREMENT|Identificador único del registro|
|`artist_id`|INTEGER|NOT NULL, UNIQUE|ID del artista en la tabla local `artists`|
|`artist_name`|TEXT||Nombre del artista (copia de la tabla artists)|
|`realname`|TEXT||Nombre real del artista según Discogs|
|`profile`|TEXT||Biografía/perfil completo del artista|
|`namevariations`|TEXT||Variaciones del nombre (almacenado como JSON)|
|`aliases`|TEXT||Alias y pseudónimos del artista (almacenado como JSON)|
|`groups`|TEXT||Grupos musicales relacionados (almacenado como JSON)|
|`url`|TEXT||URL completa del perfil en Discogs|
|`discogs_id`|INTEGER||ID único del artista en Discogs|
|`last_updated`|TIMESTAMP|DEFAULT CURRENT_TIMESTAMP|Fecha de última actualización|

#### Fuentes de datos de artistas

El script busca artistas con enlaces a Discogs en dos ubicaciones:

##### Tabla `artists_networks`

|Campo utilizado|Descripción|
|---|---|
|`discogs`|URL de la API o web de Discogs|

##### Tabla `artists`

|Campo utilizado|Descripción|
|---|---|
|`discogs_url`|URL directa de Discogs del artista|