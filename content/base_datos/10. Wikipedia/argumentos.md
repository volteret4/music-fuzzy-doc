---
title: Argumentos
weight: 3
---

| Argumento        | Tipo   | Descripción                                                                                                         | Valor por Defecto |
| ---------------- | ------ | ------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `--config`       | `str`  | Ruta al archivo de configuración JSON (obligatorio)                                                                 | —                 |
| `--log-file`     | `str`  | Archivo de registro para seguimiento del progreso                                                                   | —                 |
| `--db-path`      | `str`  | Ruta a la base de datos SQLite                                                                                      | —                 |
| `--type`         | `str`  | Tipo de entidad a actualizar (`artists`, `albums`, `artists_content`, `albums_content`, `labels`, `labels_content`) | —                 |
| `--user-agent`   | `str`  | User-Agent para las peticiones a MusicBrainz                                                                        | —                 |
| `--modo`         | `str`  | Tipo de lanzamiento: `auto` o `manual`                                                                              | —                 |
| `--force-update` | `bool` | Flag para forzar la actualización de todos los elementos                                                            | `False`           |