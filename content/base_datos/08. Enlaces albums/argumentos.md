---
title: Argumentos
weight: 3
---

| Argumento        | Descripción                                | Tipo / Valor por Defecto                         | Obligatorio |
| ---------------- | ------------------------------------------ | ------------------------------------------------ | ----------- |
| `--db-path`      | Ruta a la base de datos SQLite             | Cadena                                           | Sí          |
| `--missing-only` | Solo procesa álbumes con enlaces faltantes | Bandera (booleano)                               | No          |
| `--delay`        | Retraso entre solicitudes en segundos      | `float`, por defecto: `1.0`                      | No          |
| `--cache-dir`    | Directorio para el archivo de caché        | Cadena, por defecto: `~/.cache/music_db`         | No          |
| `--user-agent`   | Agente de usuario para solicitudes HTTP    | Cadena, por defecto: `'MusicLibraryManager/1.0'` | No          |
| `--log-level`    | Nivel de logging                           | Cadena, por defecto: `INFO`                      | No          |
| `--batch-size`   | Número de álbumes a procesar en cada lote  | Entero, por defecto: `50`                        | No          |