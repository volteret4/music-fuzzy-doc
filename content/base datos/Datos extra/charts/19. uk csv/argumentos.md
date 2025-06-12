---
title: Argumentos
weight: 3
---

|Argumento|Tipo|Descripción|Valores posibles|
|---|---|---|---|
|`type`|string|Tipo de datos a extraer|singles, albums, bestselling, numberones, vinyl, streaming, downloads, indie, nme|
|`decade`|string|Década específica a extraer|50s, 60s, 70s, 80s, 90s, 00s, 10s, 20s|
|`year`|integer|Año específico a extraer|1952-2024|
|`all`|boolean|Extraer todos los datos disponibles|true/false|
|`generos`|boolean|Incluir información de géneros musicales|true/false|
|`specialized`|boolean|Incluir charts especializados|true/false|
|`force_update`|boolean|Forzar actualización de datos existentes|true/false|
|`rate_limit`|float|Pausa entre peticiones en segundos|número decimal|