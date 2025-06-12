---
title: Datos
weight: 4
---

**Tabla: uk_vinyl_charts**

|Campo|Tipo|Descripción|
|---|---|---|
|`id`|INTEGER|Clave primaria autoincremental|
|`chart_type`|TEXT|Tipo de chart ('albums', 'singles')|
|`década`|TEXT|Década del chart (2010s, 2020s)|
|`artista`|TEXT|Nombre del artista|
|`título`|TEXT|Título del álbum o single|
|`fecha_numero_uno`|TEXT|Fecha cuando llegó al número 1|
|`semanas_numero_uno`|INTEGER|Semanas en la posición número 1|
|`género`|TEXT|Género musical (si generos=true)|
|`artist_id`|INTEGER|FK a tabla artists|
|`album_id`|INTEGER|FK a tabla albums|
|`song_id`|INTEGER|FK a tabla songs|
|`created_at`|TIMESTAMP|Fecha de creación del registro|

**Tabla: uk_streaming_charts**

|Campo|Tipo|Descripción|
|---|---|---|
|`id`|INTEGER|Clave primaria autoincremental|
|`chart_type`|TEXT|Tipo de chart ('albums')|
|`año`|INTEGER|Año del registro|
|`artista`|TEXT|Nombre del artista|
|`álbum`|TEXT|Título del álbum|
|`posición`|INTEGER|Posición en el chart|
|`semanas_en_chart`|INTEGER|Número de semanas en el chart|
|`género`|TEXT|Género musical (si generos=true)|
|`artist_id`|INTEGER|FK a tabla artists|
|`album_id`|INTEGER|FK a tabla albums|
|`created_at`|TIMESTAMP|Fecha de creación del registro|

**Tabla: uk_downloads_charts**

|Campo|Tipo|Descripción|
|---|---|---|
|`id`|INTEGER|Clave primaria autoincremental|
|`chart_type`|TEXT|Tipo de chart ('singles')|
|`año`|INTEGER|Año del registro|
|`artista`|TEXT|Nombre del artista|
|`single`|TEXT|Título del single|
|`posición`|INTEGER|Posición en el chart|
|`semanas_en_chart`|INTEGER|Número de semanas en el chart|
|`ventas_totales`|TEXT|Información de ventas totales|
|`género`|TEXT|Género musical (si generos=true)|
|`artist_id`|INTEGER|FK a tabla artists|
|`song_id`|INTEGER|FK a tabla songs|
|`created_at`|TIMESTAMP|Fecha de creación del registro|