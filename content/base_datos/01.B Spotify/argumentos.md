---
title: Argumentos
weight: 3
---

| Argumento                 | Tipo   | Valor por Defecto                    | Descripción                                     | Requerido |
| ------------------------- | ------ | ------------------------------------ | ----------------------------------------------- | --------- |
| `--db-path`               | string | -                                    | Ruta al archivo de la base de datos SQLite      | ✅ Sí      |
| `--spotify-client-id`     | string | Variable de entorno/config           | ID de cliente de Spotify                        | ❌ No      |
| `--spotify-client-secret` | string | Variable de entorno/config           | Secreto de cliente de Spotify                   | ❌ No      |
| `--spotify-redirect-uri`  | string | `http://localhost:8888/callback`     | URI de redirección para autenticación           | ❌ No      |
| `--spotify-cache-path`    | string | `.content/cache/.spotify_token.json` | Ruta para almacenar el token de Spotify         | ❌ No      |
| `--force-update`          | flag   | `False`                              | Fuerza la actualización de datos existentes     | ❌ No      |
| `--no-skip-existing`      | flag   | `False`                              | No omite artistas existentes con origen "local" | ❌ No      |
| `--user-id`               | string | Usuario autenticado                  | ID de usuario de Spotify específico             | ❌ No      |
| `--config`                | string | -                                    | Archivo de configuración JSON                   | ❌ No      |