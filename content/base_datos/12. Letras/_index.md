---
title: 12. Letras
weight: 1
---

Módulo para gestionar los enlaces de canciones en servicios de música en línea.

Este script actualiza los enlaces de diversos servicios de música (Spotify, YouTube, 
Bandcamp, etc.) para las canciones en la base de datos. Se puede ejecutar directamente 
o como parte de la cadena de scripts de db_creator.py.

> 4 horas en 5140 canciones, Media de una canción cada 2.82 segundos


#### Tabla `lyrics`
| Campo          | Tipo      | Descripción                                                               |
| -------------- | --------- | ------------------------------------------------------------------------- |
| `id`           | INTEGER   | Identificador único de la letra                                           |
| `track_id`     | INTEGER   | ID de la canción asociada (clave foránea a `songs.id`)                    |
| `lyrics`       | TEXT      | El texto completo de la letra                                             |
| `source`       | TEXT      | La fuente de la letra (ej. 'Genius', 'lyrics.ovh', 'Happi', 'Musixmatch') |
| `last_updated` | TIMESTAMP | Fecha y hora de la última actualización                                   |