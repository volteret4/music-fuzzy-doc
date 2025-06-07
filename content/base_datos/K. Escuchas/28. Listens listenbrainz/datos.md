---
title: Datos
weight: 3
---

##### Tabla listenbrainz_backfill

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `id` | INTEGER | Campo id (clave primaria) |

##### Tabla listenbrainz_config

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `id` | INTEGER | Campo id (clave primaria) |

##### Tabla normalized_songs

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `song_id` | INTEGER | Campo song_id (clave primaria) |
| `normalized_title` | TEXT | Campo normalized_title |
| `normalized_artist` | TEXT | Campo normalized_artist |
| `normalized_album` | TEXT | Campo normalized_album |

##### Tabla song_links

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `links_updated` | TEXT | Campo links_updated (detectado en operación DML) |