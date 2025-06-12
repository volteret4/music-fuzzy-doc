---
title: Datos
weight: 4
---

**Tabla: equipboard_instruments** (CREADA)

|Campo|Tipo|Descripción|
|---|---|---|
|`id`|INTEGER|Clave primaria autoincremental|
|`artist_id`|INTEGER|Referencia al ID del artista en tabla artists|
|`artist_name`|TEXT|Nombre del artista|
|`equipment_id`|TEXT|ID único del equipo en equipboard|
|`equipment_name`|TEXT|Nombre completo del instrumento/equipo|
|`equipment_url`|TEXT|URL específica del equipo en equipboard|
|`brand`|TEXT|Marca del equipo (extraída automáticamente)|
|`model`|TEXT|Modelo del equipo (extraído automáticamente)|
|`equipment_type`|TEXT|Tipo de equipo: electric_guitar, bass_guitar, amplifier, effect_pedal, synthesizer, software, microphone, drums, unknown|
|`extraction_date`|TIMESTAMP|Fecha de extracción|
|`processed`|BOOLEAN|Indicador de procesamiento (por defecto 0)|