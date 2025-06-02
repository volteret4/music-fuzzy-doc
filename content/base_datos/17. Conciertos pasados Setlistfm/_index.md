---
title: 17. Conciertos pasados Setlistfm
weight: 1
---

<

#### Tabla: `artists_setlistfm`

|Columna|Tipo|Descripción|Restricciones|
|---|---|---|---|
|`id`|INTEGER|ID único del registro|PRIMARY KEY AUTOINCREMENT|
|`artist_id`|INTEGER|ID del artista (referencia a tabla artists)|NOT NULL|
|`artist_name`|TEXT|Nombre del artista|NOT NULL|
|`setlist_id`|TEXT|ID único del setlist en setlist.fm|NOT NULL UNIQUE|
|`eventDate`|TEXT|Fecha del evento/concierto|-|
|`artist_url`|TEXT|URL del artista en setlist.fm|-|
|`venue_id`|TEXT|ID del lugar del concierto|-|
|`venue_name`|TEXT|Nombre del lugar del concierto|-|
|`city_name`|TEXT|Nombre de la ciudad|-|
|`city_state`|TEXT|Estado/provincia de la ciudad|-|
|`coords`|TEXT|Coordenadas geográficas (lat,long)|-|
|`country_name`|TEXT|Nombre del país|-|
|`country_code`|TEXT|Código del país|-|
|`url`|TEXT|URL del setlist específico|-|
|`tour`|TEXT|Nombre de la gira|-|
|`sets`|TEXT|Información de los sets (JSON)|-|
|`last_updated`|TIMESTAMP|Fecha de última actualización|DEFAULT CURRENT_TIMESTAMP|

##### Tabla: `artists_setlistfm_searches`

|Columna|Tipo|Descripción|Restricciones|
|---|---|---|---|
|`id`|INTEGER|ID único del registro|PRIMARY KEY AUTOINCREMENT|
|`artist_id`|INTEGER|ID del artista (referencia a tabla artists)|NOT NULL UNIQUE|
|`artist_name`|TEXT|Nombre del artista|NOT NULL|
|`last_search_date`|TIMESTAMP|Fecha de la última búsqueda|DEFAULT CURRENT_TIMESTAMP|
|`found_setlists`|INTEGER|Número de setlists encontrados|DEFAULT 0|
|`search_method`|TEXT|Método de búsqueda utilizado (MBID, nombre, etc.)|-|

##### Tabla: `places_setlistfm`

|Columna|Tipo|Descripción|Restricciones|
|---|---|---|---|
|`id`|INTEGER|ID único del registro|PRIMARY KEY AUTOINCREMENT|
|`venue_id`|TEXT|ID único del lugar|NOT NULL UNIQUE|
|`venue_name`|TEXT|Nombre del lugar|-|
|`city_name`|TEXT|Nombre de la ciudad|-|
|`city_state`|TEXT|Estado/provincia de la ciudad|-|
|`coords`|TEXT|Coordenadas geográficas (lat,long)|-|
|`country_name`|TEXT|Nombre del país|-|
|`country_code`|TEXT|Código del país|-|
|`artists_num`|INTEGER|Número de artistas distintos que han tocado|-|
|`conciertos_num`|INTEGER|Número total de conciertos en el lugar|-|
|`artists_names`|TEXT|Lista de nombres de artistas (separados por comas)|-|
|`last_updated`|TIMESTAMP|Fecha de última actualización|DEFAULT CURRENT_TIMESTAMP|

##### Modificación en tabla existente: `artists`

|Columna añadida|Tipo|Descripción|Restricciones|
|---|---|---|---|
|`setlistfm_id`|TEXT|ID del artista en setlist.fm|-|