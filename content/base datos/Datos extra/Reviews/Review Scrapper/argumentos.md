---
title: Argumentos
weight: 3
---

|Parámetro|Tipo|Por defecto|Descripción|
|---|---|---|---|
|`force_update`|boolean|false|Si es true, reprocesa álbumes ya procesados|
|`content_service`|string|"readability"|Servicio para extraer contenido: "readability", "mercury", "five_filters"|
|`tamano_lote`|integer|100|Número de álbumes a procesar por lote|
|`pausa`|integer|3|Segundos de pausa entre búsquedas|
|`inicio_id`|integer|0|ID de álbum desde donde comenzar el procesamiento|
|`archivo_errores`|string|null|Ruta para guardar errores de enlaces|
|`include_metacritic`|boolean|true|Incluir búsqueda en Metacritic|
|`include_aoty`|boolean|true|Incluir búsqueda en Album of the Year|
|`google_api_key`|string|null|API key de Google para búsquedas en AOTY|
|`google_cx`|string|null|Custom Search Engine ID de Google|