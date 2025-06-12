---
title: Datos
weight: 4
---

#### Nuevas columnas agregadas automáticamente

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

##### Columnas actualizadas (ya existentes)

|Columna|Tipo|Descripción|
|---|---|---|
|`status`|TEXT|Estado actualizado del release|
|`year`|INTEGER|Año de lanzamiento actualizado|
|`thumb`|TEXT|URL de imagen en miniatura actualizada|
|`last_updated`|TIMESTAMP|Fecha de última actualización (se actualiza automáticamente)|