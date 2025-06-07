---
title: "15. Discograf\xEDas Discogs releases"
weight: 1
---

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

