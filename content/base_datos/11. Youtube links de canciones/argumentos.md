---
title: Argumentos
weight: 2
---

| Argumento            | Descripción                                        | Valor por Defecto                                      |
| -------------------- | -------------------------------------------------- | ------------------------------------------------------ |
| `db_path`            | Ruta a la base de datos SQLite                     | —                                                      |
| `youtube_api_key`    | Clave de API de YouTube                            | —                                                      |
| `lastfm_api_key`     | Clave de API de Last.fm                            | —                                                      |
| `rate_limit`         | Tiempo entre solicitudes API (segundos)            | `1.0`                                                  |
| `user_agent`         | Agente de usuario para solicitudes HTTP            | `'MusicDB/1.0'`                                        |
| `missing_only`       | Solo procesar elementos sin enlaces                | `True`                                                 |
| `cache_file`         | Ruta del archivo de caché                          | `PROJECT_ROOT/.content/cache/youtube_links_cache.json` |
| `force_update`       | Forzar actualización incluso si hay datos en caché | `False`                                                |
| `batch_size`         | Número de elementos a procesar por lote            | `100`                                                  |
| `max_retries`        | Máximo de reintentos para solicitudes fallidas     | `3`                                                    |
| `use_scrapers`       | Usar scraping si falla la API                      | `True`                                                 |
| `entity_types`       | Tipos de entidades a procesar                      | `['songs']`                                            |
| `log_file`           | Ruta del archivo de log                            | `PROJECT_ROOT/.content/logs/youtube_links.log`         |
| `log_level`          | Nivel de detalle del registro                      | `'INFO'`                                               |
| `concurrent_workers` | Número de procesos simultáneos                     | `4`                                                    |
| `query_template`     | Plantilla de búsqueda en YouTube                   | `"{artist} - {title} official"`                        |
| `max_results`        | Número máximo de resultados por búsqueda           | `5`                                                    |
| `min_match_score`    | Puntuación mínima para considerar coincidencia     | `0.7`                                                  |