---
title: Datos
weight: 4
---

**Tabla: equipboard_artists** (CREADA)

|Campo|Tipo|Descripción|
|---|---|---|
|`id`|INTEGER|Clave primaria autoincremental|
|`artist_id`|INTEGER|Referencia al ID del artista en tabla artists|
|`artist_name`|TEXT|Nombre del artista o "Banda (Miembro)" para miembros|
|`equipboard_url`|TEXT|URL de equipboard.com del artista|
|`found_date`|TIMESTAMP|Fecha cuando se encontró la URL|
|`last_checked`|TIMESTAMP|Última vez que se verificó|
|`status`|TEXT|Estado: "found", "not_found", "error"|
|`equipment_count`|INTEGER|Contador de equipos (por defecto 0)|

[[equipboard_artists.py]]: Encargado de buscar los enlaces de equipboard para los artistas

TODO: script que filtrará entre colaboradores y miembros de la banda.