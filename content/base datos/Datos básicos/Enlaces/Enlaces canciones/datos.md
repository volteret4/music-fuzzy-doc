---
title: Datos
weight: 4
---

**Tabla: song_links**

|Columna|Tipo|Descripción|
|---|---|---|
|`id`|INTEGER|ID único del registro (clave primaria)|
|`song_id`|INTEGER|ID de la canción (referencia a tabla songs)|
|`spotify_url`|TEXT|URL de la canción en Spotify|
|`spotify_id`|TEXT|ID único de la canción en Spotify|
|`preview_url`|TEXT|URL de previsualización de 30 segundos de Spotify|
|`youtube_url`|TEXT|URL de la canción en YouTube|
|`bandcamp_url`|TEXT|URL de la canción en Bandcamp|
|`soundcloud_url`|TEXT|URL de la canción en SoundCloud|
|`boomkat_url`|TEXT|URL de la canción en Boomkat|
|`lastfm_url`|TEXT|URL de la canción en Last.fm|
|`musicbrainz_url`|TEXT|URL de la canción en MusicBrainz|
|`musicbrainz_recording_id`|TEXT|ID de grabación en MusicBrainz|
|`links_updated`|TIMESTAMP|Fecha y hora de última actualización|