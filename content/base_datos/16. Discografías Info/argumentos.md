---
title: Argumentos
weight: 3
---

|Parámetro|Tipo|Valor por defecto|Descripción|
|---|---|---|---|
|`db_path`|string|`{PROJECT_ROOT}/music.db`|Ruta completa a la base de datos SQLite|
|`force_update`|boolean|`False`|Si es `True`, actualiza todos los artistas; si es `False`, solo procesa artistas sin información|
|`sleep_time`|int/float|`1`|Tiempo de espera en segundos entre peticiones a la API|
|`discogs_token`|string|`''` (vacío)|Token de autenticación para la API de Discogs (opcional pero recomendado)|



## Procesamiento de datos de la API

### Campos extraídos de la API de Discogs

|Campo API|Campo DB|Procesamiento|
|---|---|---|
|`realname`|`realname`|Directo|
|`profile`|`profile`|Directo|
|`namevariations`|`namevariations`|Convertido a JSON|
|`aliases`|`aliases`|Extrae nombres y convierte a JSON|
|`groups`|`groups`|Extrae nombres y convierte a JSON|
|`uri`|`url`|Directo|
|`uri`|`discogs_id`|Extrae ID numérico de la URL|

### Conversión de URL

El script maneja automáticamente la conversión entre formatos de URL:

|Formato de entrada|Formato API|
|---|---|
|`https://www.discogs.com/artist/123-ArtistName`|`https://api.discogs.com/artists/123`|
|`https://api.discogs.com/artists/123`|Sin cambios|

## Criterios de selección de artistas

### Modo Normal (`force_update=False`)

```sql
SELECT a.id, a.name, COALESCE(an.discogs, a.discogs_url) as discogs_source
FROM artists a
LEFT JOIN artists_networks an ON a.id = an.artist_id
LEFT JOIN artists_discogs_info adi ON a.id = adi.artist_id
WHERE (an.discogs IS NOT NULL OR a.discogs_url IS NOT NULL)
AND adi.artist_id IS NULL
```

**Resultado**: Solo artistas que tienen URL de Discogs pero NO tienen información en `artists_discogs_info`

### Modo Forzado (`force_update=True`)

```sql
SELECT a.id, a.name, COALESCE(an.discogs, a.discogs_url) as discogs_source
FROM artists a
LEFT JOIN artists_networks an ON a.id = an.artist_id
WHERE an.discogs IS NOT NULL OR a.discogs_url IS NOT NULL
```

**Resultado**: Todos los artistas que tienen URL de Discogs (actualiza información existente)

## Manejo de errores y límites

### Rate Limiting

|Característica|Valor|Descripción|
|---|---|---|
|**Delay por defecto**|1 segundo|Tiempo entre peticiones consecutivas|
|**User-Agent**|`MusicDBUpdater/1.0`|Requerido por la API de Discogs|
|**Autenticación**|Token opcional|Mejora los límites de rate si se proporciona|

### Gestión de errores

|Tipo de error|Manejo|
|---|---|
|**URL vacía**|Salta el artista y continúa|
|**Error de API**|Registra error y continúa con siguiente|
|**Error de parseo**|Maneja graciosamente, continúa procesamiento|

## Estadísticas del proceso

El script proporciona información de monitoreo:

- **Inicio**: Número total de artistas a procesar
- **Progreso**: Nombre del artista actual y URL siendo procesada
- **Final**: Resumen con artistas actualizados vs errores

## Operación de base de datos

### Inserción/Actualización

- Utiliza `INSERT OR REPLACE` para manejar tanto nuevos registros como actualizaciones
- La restricción `UNIQUE(artist_id)` previene duplicados
- Actualiza automáticamente `last_updated` en cada operación

## Dependencias y relaciones

### Tablas requeridas (deben existir previamente)

- `artists` - Tabla principal de artistas
- `artists_networks` - Enlaces de redes sociales y plataformas (opcional)

### Independencia

- Este script puede ejecutarse independientemente de los otros
- No requiere que se hayan ejecutado los scripts de discografía previamente
- Crea su propia tabla sin modificar estructuras existentes