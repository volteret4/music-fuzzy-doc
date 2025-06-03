---
title: Argumentos
weight: 3
---

|Argumento|Descripción|Requerido|Valor por defecto / Tipo|
|---|---|---|---|
|`--config [config_file]`|Ruta al archivo de configuración JSON|Sí (si no se usa `--db-path`)|Archivo JSON|
|`--db-path [path]`|Ruta a la base de datos SQLite|Alternativa a `--config`|-|
|`--limit [n]`|Limita el número de lanzamientos a procesar|No|Entero|
|`--force-update`|Fuerza la actualización de entradas existentes|No|Bandera|
|`--mode [mode]`|Modo de operación: `'auto'` o `'manual'`|No|auto/manual|
|`--cache-file [path]`|Ruta al archivo de caché para reanudar procesamiento|No|Archivo JSON|
|`--skip-properties [ids]`|IDs de propiedades de Wikidata a omitir|No|Lista separada por comas|
|`--interactive`|Activa modo interactivo con más información y confirmaciones|No|Bandera|
|`--log-level [level]`|Nivel de detalle del log (`DEBUG`, `INFO`, `WARNING`, `ERROR`)|No|INFO|