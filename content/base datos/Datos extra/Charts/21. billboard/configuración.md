---
title: "Configuraci\xF3n"
weight: 3
---

```json
"charts/billboard_csv": {
  "generos": true,
  "type": "all",
  "force_update": false,
  "rate_limit": 1.5,
  "discogs_token": "",
  "musicbrainz_user_agent": "BillboardScraper/1.0 (tu_email@dominio.com)"
}
```
## Argumentos

|Argumento|Tipo|Descripción|Valores posibles|Por defecto|
|---|---|---|---|---|
|`generos`|boolean|Incluir información de géneros musicales|true/false|false|
|`type`|string|Tipo de datos a extraer|"yearend", "hot100", "country", "all"|"all"|
|`force_update`|boolean|Forzar actualización de datos existentes|true/false|false|
|`rate_limit`|float|Tiempo de espera entre requests (segundos)|Número decimal|1.5|
|`discogs_token`|string|Token de API de Discogs (opcional)|Token válido|""|
|`musicbrainz_user_agent`|string|User agent para MusicBrainz|Email válido|""|
|`year`|integer|Año específico a extraer|1950-2024|null|