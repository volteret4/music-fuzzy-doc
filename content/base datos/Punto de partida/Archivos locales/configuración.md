---
title: "Configuraci\xF3n"
weight: 3
---

```json
{
  "path/db_musica_path": {
    "root_path": "/mnt/NFS/moode/moode/",
    "force_update": false,
    "update_replay_gain": false,
    "update_schema": false,
    "update_bitrates": false,
    "quick_scan": false,
    "optimize": false
  }
}
```

## Argumentos

|Argumento|Tipo|Default|Descripción|
|---|---|---|---|
|`root_path`|string|-|Ruta raíz donde se encuentran los archivos de música|
|`force_update`|boolean|false|Fuerza la actualización de todos los archivos, incluso si no han cambiado|
|`update_replay_gain`|boolean|false|Actualiza solo los valores de ReplayGain de todos los archivos|
|`update_schema`|boolean|false|Actualiza el esquema de la base de datos con nuevas tablas e índices|
|`update_bitrates`|boolean|false|Actualiza los rangos de bitrate para todos los álbumes|
|`quick_scan`|boolean|false|Realiza un escaneo rápido identificando álbumes ausentes|
|`optimize`|boolean|false|Aplica optimizaciones de rendimiento a la base de datos|