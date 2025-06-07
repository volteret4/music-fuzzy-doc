---
title: "Configuraci\xF3n"
weight: 3
---

```json
"charts/spain_charts": {
  "generos": true,
  "type": "all",
  "force_update": false,
  "rate_limit": 1.5,
  "country": "spain",
  "start_year": 1959,
  "end_year": 2024,
  "year": null
}
```

## Argumentos

|Argumento|Tipo|Descripción|Valores posibles|Valor por defecto|
|---|---|---|---|---|
|`generos`|boolean|Añadir información de géneros musicales|true/false|false|
|`type`|string|Tipo de extracción a realizar|"all", "year"|"all"|
|`force_update`|boolean|Reemplazar datos existentes|true/false|false|
|`rate_limit`|float|Pausa entre peticiones (segundos)|> 0|1.5|
|`country`|string|País objetivo (fijo para este script)|"spain"|"spain"|
|`start_year`|integer|Año inicial para extracción completa|1959-2024|1959|
|`end_year`|integer|Año final para extracción completa|1959-2024|2024|
|`year`|integer|Año específico a procesar|1959-2024|null|