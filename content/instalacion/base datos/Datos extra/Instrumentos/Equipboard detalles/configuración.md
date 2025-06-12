---
title: "Configuraci\xF3n"
weight: 3
---

```json
"posts/equipboard_details": {
  "action": "extract",
  "headless": false,
  "limit": null,
  "force_update": false,
  "db_path": "/ruta/a/la/base/de/datos.sqlite",
  "output": "equipboard_details.json"
}
```
## Argumentos

|Argumento|Tipo|Default|Descripción|
|---|---|---|---|
|`action`|string|"extract"|Acción a realizar: "extract", "stats", "search", "export"|
|`db_path`|string|"db/sqlite/musica.sqlite"|Ruta a la base de datos SQLite|
|`limit`|integer|null|Límite de instrumentos a procesar|
|`force_update`|boolean|false|Forzar actualización de instrumentos ya procesados|
|`headless`|boolean|true|Ejecutar navegador en modo headless|
|`visible`|boolean|false|Forzar modo visible para debug (sobrescribe headless)|
|`search_term`|string|null|Término de búsqueda para acción "search"|
|`output`|string|"equipboard_details.json"|Archivo de salida para acción "export"|