---
title: Argumentos
weight: 3
---

|Parámetro|Tipo|Valor por defecto|Descripción|
|---|---|---|---|
|`db_path`|string|`{PROJECT_ROOT}/music.db`|Ruta completa a la base de datos SQLite|
|`discogs_token`|string|`''` (vacío)|Token de autenticación para la API de Discogs (requerido)|
|`delay_between_requests`|float|`1.5`|Tiempo de espera en segundos entre peticiones a la API|
|`force_update`|boolean|`False`|Si es `True`, actualiza todos los registros; si es `False`, solo actualiza registros sin datos|