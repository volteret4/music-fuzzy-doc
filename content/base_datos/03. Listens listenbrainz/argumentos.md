---
title: Argumentos
weight: 2
---

| Argumento              | Tipo   | Descripción                                                                                 | Valor por Defecto |
| ---------------------- | ------ | ------------------------------------------------------------------------------------------- | ----------------- |
| `--config`             | `str`  | Ruta al archivo de configuración JSON                                                       | —                 |
| `--user`               | `str`  | Nombre de usuario en ListenBrainz                                                           | —                 |
| `--token`              | `str`  | Token de autenticación para ListenBrainz                                                    | —                 |
| `--db-path`            | `str`  | Ruta al archivo de base de datos SQLite                                                     | —                 |
| `--force-update`       | `bool` | Si se debe forzar una actualización completa (ignorando el último timestamp)                | `False`           |
| `--output-json`        | `str`  | Ruta para guardar los listens en formato JSON (opcional)                                    | —                 |
| `--max-items`          | `int`  | Número máximo de listens a obtener por llamada                                              | `1000`            |
| `--limit-process`      | `int`  | Número máximo de listens a procesar (opcional)                                              | —                 |
| `--reprocess-existing` | `bool` | Si se deben reprocesar los listens existentes con los métodos de coincidencia seleccionados | `False`           |
| `--normalize-strings`  | `bool` | Si se deben normalizar las cadenas para mejorar coincidencias                               | `False`           |
| `--enhanced-matching`  | `bool` | Si se deben crear y usar tablas normalizadas para buscar coincidencias                      | `False`           |
| `--mbid-matching`      | `bool` | Si se debe intentar coincidencia por MusicBrainz IDs                                        | `False`           |
| `--fuzzy-matching`     | `bool` | Si se debe usar coincidencia difusa para encontrar canciones                                | `False`           |
| `--analyze-mismatches` | `bool` | Si se deben analizar las razones de discrepancias                                           | `False`           |
| `--use-all-matching`   | `bool` | Si se deben utilizar todas las técnicas de coincidencia mejoradas                           | `False`           |