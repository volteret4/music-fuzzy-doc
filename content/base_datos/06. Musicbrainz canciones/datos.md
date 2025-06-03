---
title: Datos
weight: 2
---

| Campo                    | Tipo         | Descripción                                        |
| ------------------------ | ------------ | -------------------------------------------------- |
| `id`                     | INTEGER (PK) | Identificador único autoincremental                |
| `song_id`                | INTEGER      | ID de la canción en la tabla `songs`               |
| `relationship_type`      | TEXT         | Tipo de relación (ej. _sample_, _remix_, etc.)     |
| `related_mbid`           | TEXT         | ID de MusicBrainz del elemento relacionado         |
| `related_title`          | TEXT         | Título del elemento relacionado                    |
| `related_artist`         | TEXT         | Artista del elemento relacionado                   |
| `relationship_direction` | TEXT         | Dirección de la relación (_entrante_ o _saliente_) |
| `last_updated`           | TIMESTAMP    | Fecha y hora de la última actualización            |