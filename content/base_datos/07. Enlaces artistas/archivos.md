---
title: Archivos
weight: 5
---

|Tipo|Ruta|Descripción|
|---|---|---|
|Logs|`logs/enlaces_artista_album_{timestamp}.log`|Registros de ejecución del script|
|Caché|`cache/spotify_{artist_name}.json`|Respuestas cacheadas de la API de Spotify|
||`cache/lastfm_{artist_name}.json`|Respuestas cacheadas de la API de Last.fm|
||`cache/musicbrainz_{artist_name}.json`|Respuestas cacheadas de la API de MusicBrainz|
||`cache/discogs_{artist_name}.json`|Respuestas cacheadas de la API de Discogs|
|Depuración|`debug_screenshots/{timestamp}_{service}_{artist_name}.png`|Capturas de pantalla en modo debug|