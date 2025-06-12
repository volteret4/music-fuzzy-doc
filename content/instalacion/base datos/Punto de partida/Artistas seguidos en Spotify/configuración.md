---
title: "Configuraci\xF3n"
weight: 3
---

```json
{
  "db_musica_spotify": {
    "skip_existing_artists": true,
    "force_update": false,
    "spotify_client_id": "",
    "spotify_client_secret": "",
    "spotify_redirect_uri": "http://localhost:8998",
    "spotify_cache_path": ".content/cache/.spotify_token.json",
    "user_id": ""
  }
}
```

## Argumentos

|Argumento|Tipo|Descripción|Valor por defecto|
|---|---|---|---|
|`skip_existing_artists`|boolean|Omite artistas que ya existen con origen 'local'|`true`|
|`force_update`|boolean|Fuerza actualización de datos existentes|`false`|
|`spotify_client_id`|string|ID de cliente de Spotify API|-|
|`spotify_client_secret`|string|Secreto de cliente de Spotify API|-|
|`spotify_redirect_uri`|string|URI de redirección para autenticación|`"http://localhost:8998"`|
|`spotify_cache_path`|string|Ruta para almacenar token de Spotify|`".content/cache/.spotify_token.json"`|
|`user_id`|string|ID de usuario de Spotify (opcional)|-|