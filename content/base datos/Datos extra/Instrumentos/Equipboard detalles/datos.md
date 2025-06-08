---
title: Datos
weight: 4
---

**Tabla: equipboard_details** (CREADA)

|Campo|Tipo|Descripción|
|---|---|---|
|`id`|INTEGER|Clave primaria autoincremental|
|`instrument_id`|INTEGER|Referencia al ID en equipboard_instruments|
|`equipment_id`|TEXT|ID único del equipo en equipboard|
|`equipment_name`|TEXT|Nombre completo del instrumento|
|`equipment_url`|TEXT|URL específica del equipo|
|`min_price`|REAL|Precio mínimo encontrado|
|`average_price`|REAL|Precio promedio|
|`max_price`|REAL|Precio máximo|
|`price_tier`|TEXT|Categoría de precio: Budget, Standard, High-end|
|`stores_available`|INTEGER|Número de tiendas que lo venden|
|`total_reviews`|INTEGER|Total de reviews de usuarios|
|`review_score`|REAL|Puntuación promedio (escala 1-5)|
|`used_by_artists_count`|INTEGER|Número de artistas que lo usan|
|`detailed_description`|TEXT|Descripción detallada del producto|
|`specifications`|TEXT|Especificaciones técnicas en JSON|
|`pros`|TEXT|Lista de ventajas en JSON|
|`cons`|TEXT|Lista de desventajas en JSON|
|`user_comments`|TEXT|Comentarios de usuarios en JSON|
|`genre_usage`|TEXT|Géneros musicales asociados en JSON|
|`related_artists`|TEXT|Artistas relacionados en JSON|
|`analog_digital`|TEXT|Tipo: Analog, Digital, o Hybrid|
|`polyphony`|INTEGER|Número de voces de polifonía|
|`oscillators`|INTEGER|Número de osciladores|
|`year_made`|INTEGER|Año de fabricación|
|`data_quality_score`|INTEGER|Puntuación de calidad (0-100)|
|`extraction_date`|TIMESTAMP|Fecha de extracción|
|`extraction_method`|TEXT|Método usado para extraer|

---

[[equipboard_details.py]]: Finalmente obtienes los datos de dichos instrumentos