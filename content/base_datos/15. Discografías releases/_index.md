---
title: "15. Discograf\xEDas releases"
weight: 1
---

## Archivos que crea/edita el script

|Archivo|Tipo|Descripción|Ubicación por defecto|
|---|---|---|---|
|`music.db`|Base de datos SQLite|Modifica la tabla `discogs_discography` existente añadiendo información detallada|`{PROJECT_ROOT}/music.db`|

## Argumentos de configuración que puede recibir

|Parámetro|Tipo|Valor por defecto|Descripción|
|---|---|---|---|
|`db_path`|string|`{PROJECT_ROOT}/music.db`|Ruta completa a la base de datos SQLite|
|`discogs_token`|string|`''` (vacío)|Token de autenticación para la API de Discogs (requerido)|
|`delay_between_requests`|float|`1.5`|Tiempo de espera en segundos entre peticiones a la API|
|`force_update`|boolean|`False`|Si es `True`, actualiza todos los registros; si es `False`, solo actualiza registros sin datos|

## Columnas que añade a la tabla `discogs_discography`

### Nuevas columnas agregadas automáticamente

|Columna|Tipo|Descripción|
|---|---|---|
|`uri_release`|TEXT|URI única del release en Discogs|
|`labels`|JSON|Información de los sellos discográficos (almacenado como JSON)|
|`companies`|JSON|Información de las compañías relacionadas (almacenado como JSON)|
|`formats`|JSON|Información detallada de formatos (almacenado como JSON)|
|`rating_count`|INTEGER|Número total de valoraciones del release|
|`rate_average`|REAL|Puntuación promedio del release|
|`num_for_sale`|INTEGER|Número de copias disponibles para venta|
|`lowest_price`|REAL|Precio más bajo de venta disponible|
|`release_title`|TEXT|Título completo del release|
|`released`|TEXT|Fecha de lanzamiento específica|
|`notes`|TEXT|Notas adicionales del release|
|`genres`|JSON|Géneros musicales (almacenado como JSON)|
|`styles`|JSON|Estilos musicales específicos (almacenado como JSON)|
|`tracklist`|JSON|Lista completa de pistas (almacenado como JSON)|
|`extraartists`|JSON|Artistas adicionales y colaboradores (almacenado como JSON)|
|`estimated_weight`|REAL|Peso estimado del formato físico|
|`blocked_from_sale`|INTEGER|Indicador si está bloqueado para venta (0/1)|
|`is_offensive`|INTEGER|Indicador si contiene contenido ofensivo (0/1)|
|`images`|JSON|URLs de imágenes del release (almacenado como JSON)|

### Columnas actualizadas (ya existentes)

|Columna|Tipo|Descripción|
|---|---|---|
|`status`|TEXT|Estado actualizado del release|
|`year`|INTEGER|Año de lanzamiento actualizado|
|`thumb`|TEXT|URL de imagen en miniatura actualizada|
|`last_updated`|TIMESTAMP|Fecha de última actualización (se actualiza automáticamente)|

## Funcionalidades principales del script

### Gestión de Rate Limiting

|Característica|Descripción|
|---|---|
|**Rate limit adaptativo**|Ajusta automáticamente el tiempo entre peticiones según las cabeceras de respuesta|
|**Manejo de error 429**|Detecta cuando se supera el límite y espera el tiempo indicado por Discogs|
|**Reintentos con backoff**|Implementa reintentos con delays exponenciales (5, 10, 20 segundos)|
|**Pausa por errores**|Si hay más de 5 errores consecutivos, pausa 2 minutos|

### Sistema de Delays

|Condición|Delay aplicado|Descripción|
|---|---|---|
|`remaining < 10`|5.0 segundos|Pocas peticiones restantes|
|`remaining < 20`|3.0 segundos|Peticiones limitadas|
|`remaining >= 20`|1.5 segundos|Condiciones normales|
|**Error 429**|Retry-After + 5 seg|Tiempo indicado por Discogs más margen|

### Proceso de actualización

|Etapa|Descripción|
|---|---|
|**1. Conexión DB**|Establece conexión con factory de filas para mejor acceso|
|**2. Verificación columnas**|Añade automáticamente columnas faltantes si no existen|
|**3. Selección registros**|Identifica releases que necesitan actualización|
|**4. Procesamiento**|Obtiene datos de API y actualiza base de datos|
|**5. Manejo errores**|Implementa reintentos y pausas automáticas|

## Criterios de selección de registros

|Modo|Condición SQL|Descripción|
|---|---|---|
|**Normal** (`force_update=False`)|`WHERE (main_release IS NOT NULL OR resource_url IS NOT NULL) AND (uri_release IS NULL OR uri_release = '')`|Solo registros sin información detallada|
|**Forzado** (`force_update=True`)|`WHERE (main_release IS NOT NULL OR resource_url IS NOT NULL)`|Todos los registros con referencia a Discogs|

## Información de monitoreo

El script proporciona información detallada durante la ejecución:

- Progreso de procesamiento (X/Y releases)
- Estado de rate limiting (peticiones restantes)
- Tiempo de espera entre peticiones
- Número de reintentos por release
- Estadísticas finales de éxito/error

## Notas importantes

- **Dependencia**: Requiere que el primer script (`discografia_masters.py`) haya ejecutado previamente
- **Robustez**: Diseñado para manejar interrupciones y errores de red
- **Eficiencia**: Usa delays adaptativos para optimizar el uso de la API
- **Seguridad**: Implementa múltiples niveles de protección contra rate limiting