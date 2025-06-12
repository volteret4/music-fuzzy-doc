---
title: Datos
weight: 5
---

**Tabla: uk_charts_singles**

|Campo|Tipo|Descripción|
|---|---|---|
|id|INTEGER|Clave primaria|
|año|INTEGER|Año del chart|
|posición|INTEGER|Posición en el chart|
|título|TEXT|Título del single|
|artista|TEXT|Nombre del artista|
|fecha_pico|TEXT|Fecha de máxima posición|
|género|TEXT|Género musical (si generos=true)|
|artist_id|INTEGER|FK a tabla artists|
|song_id|INTEGER|FK a tabla songs|
|created_at|TIMESTAMP|Fecha de creación|

**Tabla: uk_charts_bestselling**

|Campo|Tipo|Descripción|
|---|---|---|
|id|INTEGER|Clave primaria|
|tipo|TEXT|'decada' o 'anual'|
|década|TEXT|Década (para tipo='decada')|
|año|TEXT|Año específico|
|posición|TEXT|Posición en lista bestselling|
|título|TEXT|Título del single|
|artista|TEXT|Nombre del artista|
|ventas|TEXT|Información de ventas|
|género|TEXT|Género musical (si generos=true)|
|artist_id|INTEGER|FK a tabla artists|
|song_id|INTEGER|FK a tabla songs|
|created_at|TIMESTAMP|Fecha de creación|

**Tabla: uk_vinyl_charts**

|Campo|Tipo|Descripción|
|---|---|---|
|id|INTEGER|Clave primaria|
|chart_type|TEXT|'albums' o 'singles'|
|década|TEXT|Década del chart|
|artista|TEXT|Nombre del artista|
|título|TEXT|Título del álbum/single|
|fecha_numero_uno|TEXT|Fecha de #1|
|semanas_numero_uno|INTEGER|Semanas en #1|
|género|TEXT|Género musical|
|artist_id|INTEGER|FK a tabla artists|
|album_id|INTEGER|FK a tabla albums|
|song_id|INTEGER|FK a tabla songs|
|created_at|TIMESTAMP|Fecha de creación|

**Tabla: uk_streaming_charts**

|Campo|Tipo|Descripción|
|---|---|---|
|id|INTEGER|Clave primaria|
|chart_type|TEXT|'albums'|
|año|INTEGER|Año del chart|
|artista|TEXT|Nombre del artista|
|álbum|TEXT|Título del álbum|
|posición|INTEGER|Posición en chart|
|semanas_en_chart|INTEGER|Semanas en chart|
|género|TEXT|Género musical|
|artist_id|INTEGER|FK a tabla artists|
|album_id|INTEGER|FK a tabla albums|
|created_at|TIMESTAMP|Fecha de creación|

**Tabla: uk_downloads_charts**

|Campo|Tipo|Descripción|
|---|---|---|
|id|INTEGER|Clave primaria|
|chart_type|TEXT|'singles'|
|año|INTEGER|Año del chart|
|artista|TEXT|Nombre del artista|
|single|TEXT|Título del single|
|posición|INTEGER|Posición en chart|
|semanas_en_chart|INTEGER|Semanas en chart|
|ventas_totales|TEXT|Información de ventas|
|género|TEXT|Género musical|
|artist_id|INTEGER|FK a tabla artists|
|song_id|INTEGER|FK a tabla songs|
|created_at|TIMESTAMP|Fecha de creación|

**Tabla: uk_indie_charts**

|Campo|Tipo|Descripción|
|---|---|---|
|id|INTEGER|Clave primaria|
|año|INTEGER|Año del chart|
|fecha_chart|TEXT|Fecha específica del chart|
|artista|TEXT|Nombre del artista|
|single|TEXT|Título del single|
|sello_discográfico|TEXT|Sello discográfico|
|semanas_numero_uno|INTEGER|Semanas en #1|
|posicion_main_chart|INTEGER|Posición en chart principal|
|notas|TEXT|Notas adicionales|
|género|TEXT|Género musical|
|artist_id|INTEGER|FK a tabla artists|
|song_id|INTEGER|FK a tabla songs|
|created_at|TIMESTAMP|Fecha de creación|

**Tabla: nme_charts**

|Campo|Tipo|Descripción|
|---|---|---|
|id|INTEGER|Clave primaria|
|década|TEXT|Década del chart|
|año|INTEGER|Año específico|
|fecha_chart|TEXT|Fecha del chart|
|artista|TEXT|Nombre del artista|
|single|TEXT|Título del single|
|semanas_numero_uno|INTEGER|Semanas en #1|
|notas|TEXT|Notas adicionales|
|diferencias_chart_oficial|TEXT|Diferencias con chart oficial|
|género|TEXT|Género musical|
|artist_id|INTEGER|FK a tabla artists|
|song_id|INTEGER|FK a tabla songs|
|created_at|TIMESTAMP|Fecha de creación|