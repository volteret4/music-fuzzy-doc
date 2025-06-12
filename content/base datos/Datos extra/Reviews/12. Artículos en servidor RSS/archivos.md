---
title: Archivos
weight: 2
---

|Tipo|Ruta por Defecto / Configurada|Formato|Descripción / Contenido Principal|
|---|---|---|---|
|**Caché**|`cache/freshrss_cache.json`|JSON|Guarda artículos ya procesados para evitar duplicados.|
||||**Estructura**: Identificadores únicos y metadatos de los artículos|
|**Log**|Determinada por configuración de logging|Texto plano|Registra eventos del proceso con nivel `INFO` por defecto. Incluye:|
||||- Inicio y finalización del proceso|
||||- Errores de conexión o autenticación|
||||- Entidades encontradas en artículos|
||||- Errores al procesar artículos|