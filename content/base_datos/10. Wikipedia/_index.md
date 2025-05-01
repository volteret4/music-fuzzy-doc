---
title: 10. Wikipedia
weight: 1
---

Obtiene enlaces a wikipedia desde musicbrainz, y extrae su contenido. En caso de no encontrarlo en wikimedia, se puede hacer manualmente con wikipedia.

#### Tabla `artists`
| Campo               | Tipo      | Descripción                                                         |
| ------------------- | --------- | ------------------------------------------------------------------- |
| `wikipedia_url`     | TEXT      | URL de la página de Wikipedia del artista                           |
| `wikipedia_content` | TEXT      | Contenido extraído de la página de Wikipedia                        |
| `wikipedia_updated` | TIMESTAMP | Timestamp de la última actualización de la información de Wikipedia |
| `links_updated`     | TIMESTAMP | Timestamp de la última actualización de los enlaces                 |
##### Tabla `albums`
| Campo               | Tipo      | Descripción                                                         |
| ------------------- | --------- | ------------------------------------------------------------------- |
| `wikipedia_url`     | TEXT      | URL de la página de Wikipedia del artista                           |
| `wikipedia_content` | TEXT      | Contenido extraído de la página de Wikipedia                        |
| `wikipedia_updated` | TIMESTAMP | Timestamp de la última actualización de la información de Wikipedia |
| `links_updated`     | TIMESTAMP | Timestamp de la última actualización de los enlaces                 |

##### Tabla labels
| Campo               | Tipo      | Descripción                                                         |
| ------------------- | --------- | ------------------------------------------------------------------- |
| `wikipedia_url`     | TEXT      | URL de la página de Wikipedia del sello discográfico                |
| `wikipedia_content` | TEXT      | Contenido extraído de la página de Wikipedia                        |
| `wikipedia_updated` | TIMESTAMP | Timestamp de la última actualización de la información de Wikipedia |
| `links_updated`     | TIMESTAMP | Timestamp de la última actualización de los enlaces                 |