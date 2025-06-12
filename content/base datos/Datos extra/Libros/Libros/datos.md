---
title: Datos
weight: 5
---

##### Tabla: `artists_books` (creada)

|Campo|Tipo|Descripción|
|---|---|---|
|`id`|INTEGER PRIMARY KEY|Identificador único del registro|
|`artist_id`|INTEGER|ID del artista mencionado (FK a artists.id)|
|`book_title`|TEXT|Título del libro EPUB|
|`book_author`|TEXT|Autor del libro|
|`genre`|TEXT|Género del libro|
|`filename`|TEXT|Nombre del archivo EPUB|
|`page_count`|INTEGER|Número estimado de páginas del libro|
|`char_count`|INTEGER|Número total de caracteres del libro|
|`content`|TEXT|Párrafo o contexto donde se menciona al artista|
|`updated_at`|TIMESTAMP|Fecha de última actualización|

**Índices creados:**

- `idx_artists_books_artist_id` en `artist_id`
- `idx_artists_books_filename` en `filename`