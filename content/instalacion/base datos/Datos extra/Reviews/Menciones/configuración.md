---
title: "Configuraci\xF3n"
weight: 3
---

```json
"posts/menciones": {
  "force_update": false,
  "db_path": "/ruta/a/la/base/de/datos.sqlite"
}
```

## Argumentos

|Argumento|Tipo|Default|Descripción|
|---|---|---|---|
|`db_path`|string|"data/music_library.db"|Ruta a la base de datos SQLite|
|`force_update`|boolean|false|Eliminar menciones existentes y recalcular todas|