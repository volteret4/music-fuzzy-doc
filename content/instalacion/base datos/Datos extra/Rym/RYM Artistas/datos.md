---
title: Datos
weight: 4
---

**Tabla: rym_artists** (CREADA)

|Campo|Tipo|Descripción|
|---|---|---|
|`id`|INTEGER|Clave primaria autoincremental|
|`artist_id`|INTEGER|Referencia al ID del artista en tabla artists|
|`artist_name`|TEXT|Nombre del artista|
|`rym_url`|TEXT|URL de RateYourMusic del artista|
|`found_date`|TIMESTAMP|Fecha cuando se encontró la URL|
|`last_checked`|TIMESTAMP|Última vez que se verificó|
|`status`|TEXT|Estado: "found", "not_found", "error"|
|`album_count`|INTEGER|Número de álbumes en RYM (por defecto 0)|
|`rating_count`|INTEGER|Número de ratings (por defecto 0)|
|`avg_rating`|REAL|Rating promedio (por defecto 0)|

**Tabla: artists** (ACTUALIZADA)

|Campo|Descripción|
|---|---|
|`rateyourmusic_url`|Campo actualizado con URL encontrada|