---
title: Datos
weight: 4
---

**Tabla: rym_albums** (CREADA/ACTUALIZADA)

|Campo|Tipo|Descripción|
|---|---|---|
|`id`|INTEGER|Clave primaria autoincremental|
|`album_id`|INTEGER|Referencia al ID del álbum en tabla albums|
|`artist_id`|INTEGER|Referencia al ID del artista en tabla artists|
|`rym_url`|TEXT|URL del álbum en RateYourMusic|
|`actualizado`|TIMESTAMP|Fecha de última actualización|