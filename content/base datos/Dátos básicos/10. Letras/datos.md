---
title: Datos
weight: 3
---

##### Tabla `lyrics`
| Campo          | Tipo      | Descripción                                                               |
| -------------- | --------- | ------------------------------------------------------------------------- |
| `id`           | INTEGER   | Identificador único de la letra                                           |
| `track_id`     | INTEGER   | ID de la canción asociada (clave foránea a `songs.id`)                    |
| `lyrics`       | TEXT      | El texto completo de la letra                                             |
| `source`       | TEXT      | La fuente de la letra (ej. 'Genius', 'lyrics.ovh', 'Happi', 'Musixmatch') |
| `last_updated` | TIMESTAMP | Fecha y hora de la última actualización                                   |