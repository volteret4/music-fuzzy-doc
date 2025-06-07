---
title: Datos
weight: 4
---

**Tabla: spain_charts_singles** (Creada por este script)

|Campo|Tipo|Descripción|Ejemplo|
|---|---|---|---|
|`id`|INTEGER|Identificador único autoincremental|1, 2, 3...|
|`año`|INTEGER|Año del chart|2024, 1959|
|`semana`|TEXT|Número de semana (opcional)|"Week 1", "N/A"|
|`fecha`|TEXT|Fecha de emisión|"January 1", "1959-01-15"|
|`título`|TEXT|Título de la canción|"Song Title"|
|`artista`|TEXT|Nombre del artista|"Artist Name"|
|`tipo_chart`|TEXT|Tipo de chart|"Streaming/Sales", "Radio", "Singles"|
|`posición`|INTEGER|Posición en el chart|1|
|`género`|TEXT|Género musical (opcional)|"Pop", "Rock"|
|`artist_id`|INTEGER|FK a tabla artists|123|
|`song_id`|INTEGER|FK a tabla songs|456|
|`created_at`|TIMESTAMP|Fecha de creación del registro|CURRENT_TIMESTAMP|

**Tabla: spain_charts_albums** (Creada por este script)

|Campo|Tipo|Descripción|Ejemplo|
|---|---|---|---|
|`id`|INTEGER|Identificador único autoincremental|1, 2, 3...|
|`año`|INTEGER|Año del chart|2024, 1995|
|`semana`|TEXT|Número de semana (opcional)|"Week 1"|
|`fecha`|TEXT|Fecha de emisión|"January 1"|
|`título`|TEXT|Título del álbum|"Album Title"|
|`artista`|TEXT|Nombre del artista|"Artist Name"|
|`posición`|INTEGER|Posición en el chart|1|
|`género`|TEXT|Género musical (opcional)|"Pop", "Rock"|
|`artist_id`|INTEGER|FK a tabla artists|123|
|`album_id`|INTEGER|FK a tabla albums|789|
|`created_at`|TIMESTAMP|Fecha de creación del registro|CURRENT_TIMESTAMP|