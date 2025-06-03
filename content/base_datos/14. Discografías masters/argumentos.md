---
title: Argumentos
weight: 4
---

|Parámetro|Tipo|Valor por defecto|Descripción|
|---|---|---|---|
|`discogs_token`|string|`''` (vacío)|Token de autenticación para la API de Discogs (requerido)|
|`db_path`|string|`{PROJECT_ROOT}/db/sqlite/music.db`|Ruta completa a la base de datos SQLite|
|`force_update`|boolean|`False`|Si es `True`, actualiza registros existentes; si es `False`, solo procesa artistas nuevos|
|`accepted_formats`|list|`['album', 'ep']`|Lista de formatos de lanzamientos aceptados para importar|
|`rol_principal`|boolean|`False`|Si es `True`, solo importa lanzamientos donde el artista tiene rol 'Main'; si es `False`, importa todos los lanzamientos|