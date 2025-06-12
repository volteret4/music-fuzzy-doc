---
title: Datos
weight: 4
---

**Tabla: uk_indie_charts** (Creada y gestionada)

|Campo|Tipo|Descripción|
|---|---|---|
|`id`|INTEGER|Clave primaria autoincremental|
|`año`|INTEGER|Año del chart|
|`fecha_chart`|TEXT|Fecha específica del chart|
|`artista`|TEXT|Nombre del artista|
|`single`|TEXT|Título del single|
|`sello_discográfico`|TEXT|Sello discográfico|
|`semanas_numero_uno`|INTEGER|Número de semanas en el número 1|
|`posicion_main_chart`|INTEGER|Posición en el chart principal oficial|
|`notas`|TEXT|Notas adicionales|
|`género`|TEXT|Género musical|
|`artist_id`|INTEGER|FK hacia artists.id|
|`song_id`|INTEGER|FK hacia songs.id|
|`created_at`|TIMESTAMP|Fecha de creación del registro|

**Tabla: nme_charts** (Creada y gestionada)

|Campo|Tipo|Descripción|
|---|---|---|
|`id`|INTEGER|Clave primaria autoincremental|
|`década`|TEXT|Década del chart (1960s, 1970s, 1980s)|
|`año`|INTEGER|Año específico si disponible|
|`fecha_chart`|TEXT|Fecha del chart|
|`artista`|TEXT|Nombre del artista|
|`single`|TEXT|Título del single|
|`semanas_numero_uno`|INTEGER|Número de semanas en el número 1|
|`notas`|TEXT|Notas sobre el chart|
|`diferencias_chart_oficial`|TEXT|Diferencias con el chart oficial|
|`género`|TEXT|Género musical|
|`artist_id`|INTEGER|FK hacia artists.id|
|`song_id`|INTEGER|FK hacia songs.id|
|`created_at`|TIMESTAMP|Fecha de creación del registro|