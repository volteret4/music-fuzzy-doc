---
title: Datos
weight: 3
---

1. **album_links** (principal)
    - Crea la tabla si no existe
    - Actualiza los enlaces para cada álbum
2. **albums** (referencia)
    - Lee información sobre álbumes (id, name, artist_id)
    - No modifica directamente esta tabla

#### Archivos
| Archivo                                        | Descripción                                              | Detalles de Formato o Estructura                     |
| ---------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------- |
| `~/.cache/music_db/enlaces_albumes_cache.json` | Almacena resultados de búsquedas previas                 | `{"query_hash": {"url": "...", "timestamp": "..."}}` |
| `logs/enlaces_albumes.log`                     | Registra actividad, errores y resultados de la ejecución | `[FECHA] [NIVEL] [Mensaje]`                          |