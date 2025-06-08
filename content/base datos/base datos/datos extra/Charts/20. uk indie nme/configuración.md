---
title: "Configuraci\xF3n"
weight: 3
---

```json
{
  "charts/uk_indie_nme": {
    "generos": true,
    "force_update": false,
    "rate_limit": 1.5,
    "indie_years": [1999, 2000, 2001, 2002, 2007, 2020, 2021, 2022, 2023],
    "nme_decades": ["60s", "70s", "80s"],
    "include_indie": true,
    "include_nme": true
  }
}
```

## Argumentos

|Argumento|Tipo|Descripción|Por defecto|
|---|---|---|---|
|`generos`|boolean|Habilita la extracción de géneros musicales|`true`|
|`force_update`|boolean|Fuerza la actualización de datos existentes|`false`|
|`rate_limit`|float|Tiempo de espera entre peticiones HTTP (segundos)|`1.5`|
|`indie_years`|list|Años específicos para procesar del UK Independent Chart|`[1999, 2000, 2001, 2002, 2007]`|
|`nme_decades`|list|Décadas para procesar del NME Chart|`["60s", "70s", "80s"]`|
|`include_indie`|boolean|Incluir procesamiento de UK Independent Charts|`true`|
|`include_nme`|boolean|Incluir procesamiento de NME Charts|`true`|