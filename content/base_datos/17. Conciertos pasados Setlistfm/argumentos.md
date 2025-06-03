---
title: Argumentos
weight: 4
---

|Argumento|Tipo|Descripción|Valor por defecto|Requerido|
|---|---|---|---|---|
|`setlistfm_apikey`|string|API key de setlist.fm|Variable de entorno `SETLISTFM_APIKEY`|✅|
|`db_path`|string|Ruta de la base de datos SQLite|-|✅|
|`interactive`|boolean|Modo interactivo para confirmaciones|`False`|❌|
|`force_update`|boolean|Forzar actualización de datos existentes|`False`|❌|
|`limit`|integer|Límite de artistas a procesar (para pruebas)|`0` (sin límite)|❌|
|`artist_names`|list|Lista de nombres de artistas específicos a procesar|`[]` (todos)|❌|
|`artist_ids`|list|Lista de IDs de artistas específicos a procesar|`[]` (todos)|❌|
|`year`|integer|Año específico para filtrar setlists|`0` (todos los años)|❌|
|`process_places`|boolean|Procesar información de lugares de conciertos|`False`|❌|
|`setlistfm_id`|boolean|Solo actualizar IDs de setlist.fm (no buscar setlists)|`False`|❌|
|`update_ids`|boolean|Actualizar IDs de setlist.fm antes de buscar setlists|`False`|❌|