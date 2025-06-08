---
title: 14. Libros
weight: 1
---

## Definición:

Este script busca menciones de artistas de la base de datos dentro del contenido de libros en formato EPUB, extrayendo el contexto donde aparece cada artista mencionado para crear una base de datos de referencias literarias.

#### Parámetros del JSON de configuración:

```json
{
  "libros/epubs": {
    "epub_folder": "/ruta/a/archivos/epub/",
    "force_update": false,
    "min_context_chars": 100,
    "max_context_chars": 500,
    "case_sensitive": false
  }
}
```

|Parámetro|Tipo|Por defecto|Descripción|
|---|---|---|---|
|`epub_folder`|string|-|Carpeta base donde buscar archivos EPUB|
|`force_update`|boolean|false|Si true, elimina registros existentes antes de procesar|
|`min_context_chars`|int|100|Caracteres mínimos de contexto para considerar válida una mención|
|`max_context_chars`|int|500|Caracteres máximos de contexto a extraer por mención|
|`case_sensitive`|boolean|false|Búsqueda sensible a mayúsculas/minúsculas|

### Configuración común utilizada:

- `db_path`: Ruta a la base de datos SQLite

**Notas especiales:**

- El script filtra automáticamente artistas con nombres problemáticos (palabras comunes como "and", "yes", "no", etc.)
- Busca palabras completas, no subcadenas
- Detecta separaciones de párrafos para extraer contexto coherente
- Estima páginas basándose en ~250 palabras por página

