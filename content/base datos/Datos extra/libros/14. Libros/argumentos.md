---
title: Argumentos
weight: 3
---

|Argumento|Tipo|Por defecto|Descripción|
|---|---|---|---|
|`--epub-folder`|string|-|Carpeta que contiene los archivos EPUB a procesar (requerido en modo standalone)|
|`--db-path`|string|-|Ruta a la base de datos SQLite (requerido en modo standalone)|
|`--force-update`|boolean|false|Forzar actualización eliminando registros existentes|
|`--min-context`|int|100|Mínimo número de caracteres de contexto a extraer|
|`--max-context`|int|500|Máximo número de caracteres de contexto a extraer|
|`--case-sensitive`|boolean|false|Realizar búsqueda sensible a mayúsculas y minúsculas|