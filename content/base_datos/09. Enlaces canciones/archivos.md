---
title: Archivos
weight: 4
---

| Tipo                  | Ruta Típica                                   | Descripción                                               |
| --------------------- | --------------------------------------------- | --------------------------------------------------------- |
| Caché de enlaces      | `{checkpoint_path}/song_links_cache.json`     | Guarda el estado de los enlaces procesados                |
| Registro de actividad | `{log_dir}/enlaces_canciones_{timestamp}.log` | Log de ejecución con marcas de tiempo                     |
| Caché por servicio    | `{cache_dir}/spotify_cache.json`, etc.        | Resultados de consultas individuales a servicios externos |