---
title: Datos
weight: 4
---

**Tabla: billboard_yearend_singles**

|Campo|Tipo|Descripción|
|---|---|---|
|id|INTEGER|Clave primaria autoincremental|
|año|INTEGER|Año del chart|
|posición|INTEGER|Posición en el ranking|
|título|TEXT|Título de la canción|
|artista|TEXT|Nombre del artista|
|género|TEXT|Género musical (si está habilitado)|
|artist_id|INTEGER|Referencia a tabla artists|
|song_id|INTEGER|Referencia a tabla songs|
|created_at|TIMESTAMP|Fecha de creación del registro|

**Tabla: billboard_hot100_topten**

|Campo|Tipo|Descripción|
|---|---|---|
|id|INTEGER|Clave primaria autoincremental|
|año|INTEGER|Año del chart|
|título|TEXT|Título de la canción|
|artista|TEXT|Nombre del artista|
|posición_pico|INTEGER|Posición pico alcanzada|
|fecha_entrada|TEXT|Fecha de entrada al chart|
|semanas_chart|INTEGER|Semanas en el chart|
|género|TEXT|Género musical (si está habilitado)|
|artist_id|INTEGER|Referencia a tabla artists|
|song_id|INTEGER|Referencia a tabla songs|
|created_at|TIMESTAMP|Fecha de creación del registro|

**Tabla: billboard_country_albums**

| Campo        | Tipo      | Descripción                         |
| ------------ | --------- | ----------------------------------- |
| id           | INTEGER   | Clave primaria autoincremental      |
| año          | INTEGER   | Año del chart                       |
| fecha        | TEXT      | Fecha específica del chart          |
| álbum        | TEXT      | Nombre del álbum                    |
| artista      | TEXT      | Nombre del artista                  |
| semanas_en_1 | INTEGER   | Semanas en posición #1              |
| posición     | INTEGER   | Posición en el ranking              |
| género       | TEXT      | Género musical (si está habilitado) |
| artist_id    | INTEGER   | Referencia a tabla artists          |
| album_id     | INTEGER   | Referencia a tabla albums           |
| created_at   | TIMESTAMP | Fecha de creación del registro      |
|