---
title: Argumentos
weight: 3
---

| Clave                 | Tipo            | Descripción                                                              |
| --------------------- | --------------- | ------------------------------------------------------------------------ |
| `freshrss_url`        | TEXT            | URL base del servidor FreshRSS                                           |
| `freshrss_username`   | TEXT            | Nombre de usuario para autenticación en FreshRSS                         |
| `freshrss_password`   | TEXT            | Contraseña para autenticación en FreshRSS                                |
| `db_path`             | TEXT            | Ruta al archivo de base de datos SQLite                                  |
| `freshrss_cache_path` | TEXT (opcional) | Ruta al archivo de caché                                                 |
| `categories`          | LIST            | Categorías a procesar (por defecto: `['Blogs', 'Revistas', 'Wallabag']`) |
| `search_entities`     | LIST            | Entidades a buscar (por ejemplo: `artists`, `albums`, `labels`)          |
| `search_short_terms`  | BOOLEAN         | Permitir o bloquear términos cortos (por defecto: `False`)               |
| `ignore_patterns`     | LIST            | Patrones a ignorar (por defecto incluye: `'mix-for-nts'`, etc.)          |