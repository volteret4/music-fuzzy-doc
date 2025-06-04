---
title: Datos
weight: 4
---

##### Tabla mb_release_group
| Campo                  | Tipo       | Descripción                                      |
| ---------------------- | ---------- | ------------------------------------------------ |
| `id`                   | INTEGER PK | Clave primaria                                   |
| `mbid`                 | TEXT       | ID de MusicBrainz                                |
| `title`                | TEXT       | Título del grupo de lanzamiento                  |
| `artist_credit`        | TEXT       | Créditos de artistas                             |
| `first_release_date`   | TEXT       | Fecha del primer lanzamiento                     |
| `primary_type`         | TEXT       | Tipo primario (álbum, single, etc.)              |
| `secondary_types`      | TEXT       | Tipos secundarios                                |
| `album_id`             | INTEGER    | Referencia al álbum                              |
| `artist_id`            | INTEGER    | Referencia al artista                            |
| `genre`                | TEXT       | Géneros musicales                                |
| `associated_singles`   | TEXT       | Singles asociados                                |
| `discogs_url`          | TEXT       | Enlace a Discogs                                 |
| `rateyourmusic_url`    | TEXT       | Enlace a RateYourMusic                           |
| `allmusic_url`         | TEXT       | Enlace a AllMusic                                |
| `wikidata_id`          | TEXT       | ID de Wikidata                                   |
| `last_updated`         | TIMESTAMP  | Fecha de la última actualización                 |
| `[columnas dinámicas]` | Variado    | Columnas generadas desde propiedades de Wikidata |
##### Tabla mb_wikidata
| Campo                | Tipo       | Descripción                                 |
| -------------------- | ---------- | ------------------------------------------- |
| `id`                 | INTEGER PK | Clave primaria                              |
| `wikidata_id`        | TEXT       | ID de la entidad en Wikidata                |
| `release_group_mbid` | TEXT       | Referencia al MBID del grupo de lanzamiento |
| `album_id`           | INTEGER    | Referencia al álbum                         |
| `artist_id`          | INTEGER    | Referencia al artista                       |
| `label_id`           | INTEGER    | Referencia al sello discográfico            |
| `property_id`        | TEXT       | ID de la propiedad de Wikidata              |
| `property_label`     | TEXT       | Etiqueta legible de la propiedad            |
| `property_value`     | TEXT       | Valor de la propiedad                       |
| `last_updated`       | TIMESTAMP  | Fecha de la última actualización            |
| `value_type`         | TEXT       | Tipo de valor                               |
| `is_link`            | INTEGER    | Indica si el valor es un enlace (`0` o `1`) |