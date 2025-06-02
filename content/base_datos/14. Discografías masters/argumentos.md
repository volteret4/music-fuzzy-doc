---
title: Argumentos
weight: 3
---

|Parámetro|Tipo|Valor por defecto|Descripción|
|---|---|---|---|
|`discogs_token`|string|`''` (vacío)|Token de autenticación para la API de Discogs (requerido)|
|`db_path`|string|`{PROJECT_ROOT}/db/sqlite/music.db`|Ruta completa a la base de datos SQLite|
|`force_update`|boolean|`False`|Si es `True`, actualiza registros existentes; si es `False`, solo procesa artistas nuevos|
|`accepted_formats`|list|`['album', 'ep']`|Lista de formatos de lanzamientos aceptados para importar|
|`rol_principal`|boolean|`False`|Si es `True`, solo importa lanzamientos donde el artista tiene rol 'Main'; si es `False`, importa todos los lanzamientos|

## Notas adicionales

- El script busca artistas con enlaces a Discogs en dos tablas: `artists_networks` y `artists`
- Utiliza la API de Discogs con límites de velocidad (1.5 segundos entre peticiones)
- Procesa los lanzamientos página por página (100 elementos por página)
- Filtra lanzamientos según formato y rol del artista
- Maneja tanto inserción de nuevos registros como actualización de existentes