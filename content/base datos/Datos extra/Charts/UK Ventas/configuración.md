---
title: "Configuraci\xF3n"
weight: 3
---

```json
"charts/uk_specialized": {
  "generos": true,
  "force_update": false,
  "rate_limit": 1.0
}
```

## Argumentos

|Argumento|Tipo|Descripción|Por defecto|
|---|---|---|---|
|`generos`|boolean|Habilita la asignación de géneros musicales|`false`|
|`force_update`|boolean|Fuerza la actualización de datos existentes|`false`|
|`rate_limit`|float|Tiempo de espera entre peticiones (segundos)|`1.0`|