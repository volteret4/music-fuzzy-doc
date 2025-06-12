---
title: Argumentos
weight: 2
---

| Argumento                   | Tipo    | Descripción                                                                         | Valor por Defecto        |
| --------------------------- | ------- | ----------------------------------------------------------------------------------- | ------------------------ |
| `config`                    | `dict`  | Diccionario con la configuración                                                    | —                        |
| `config.db_path`            | `str`   | Ruta al archivo de la base de datos SQLite (obligatorio)                            | —                        |
| `config.discogs_token`      | `str`   | Token para la API de Discogs (obligatorio)                                          | —                        |
| `config.rate_limit`         | `float` | Tiempo de espera entre solicitudes (por defecto: `1.0`)                             | `1.0`                    |
| `config.max_retries`        | `int`   | Número máximo de reintentos para solicitudes fallidas (por defecto: `3`)            | `3`                      |
| `config.batch_size`         | `int`   | Cantidad de artistas a procesar por lote (por defecto: `50`)                        | `50`                     |
| `config.force_update`       | `bool`  | Forzar actualización incluso si ya existen datos (por defecto: `False`)             | `False`                  |
| `config.missing_only`       | `bool`  | Procesar solo artistas sin registro de redes sociales (por defecto: `True`)         | `True`                   |
| `config.concurrent_workers` | `int`   | Número de hilos para procesamiento en paralelo (por defecto: `1`)                   | `1`                      |
| `config.user_agent`         | `str`   | Agente de usuario para las solicitudes HTTP (por defecto: `'MusicDatabaseApp/1.0'`) | `'MusicDatabaseApp/1.0'` |