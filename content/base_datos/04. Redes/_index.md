---
title: 04. Redes
weight: 1
---

Este módulo forma parte del sistema de base de datos musical y se encarga de:
- Recopilar URLs de redes sociales y plataformas web para artistas
- Obtener datos desde múltiples fuentes como Discogs, MusicBrainz y páginas web oficiales
- Almacenar y actualizar información en la tabla artists_networks de la base de datos

#### Tabla `artists_networks`
| Campo              | Tipo      | Descripción                                         |
| ------------------ | --------- | --------------------------------------------------- |
| `id`               | INTEGER   | Clave primaria                                      |
| `artist_id`        | INTEGER   | ID del artista (clave foránea a la tabla `artists`) |
| `allmusic`         | TEXT      | URL de AllMusic                                     |
| `bandcamp`         | TEXT      | URL de Bandcamp                                     |
| `boomkat`          | TEXT      | URL de Boomkat                                      |
| `facebook`         | TEXT      | URL de Facebook                                     |
| `twitter`          | TEXT      | URL de Twitter                                      |
| `mastodon`         | TEXT      | URL de Mastodon                                     |
| `bluesky`          | TEXT      | URL de Bluesky                                      |
| `instagram`        | TEXT      | URL de Instagram                                    |
| `spotify`          | TEXT      | URL de Spotify                                      |
| `lastfm`           | TEXT      | URL de Last.fm                                      |
| `wikipedia`        | TEXT      | URL de Wikipedia                                    |
| `juno`             | TEXT      | URL de Juno                                         |
| `soundcloud`       | TEXT      | URL de SoundCloud                                   |
| `youtube`          | TEXT      | URL de YouTube                                      |
| `imdb`             | TEXT      | URL de IMDb                                         |
| `progarchives`     | TEXT      | URL de ProgArchives                                 |
| `setlist_fm`       | TEXT      | URL de Setlist.fm                                   |
| `who_sampled`      | TEXT      | URL de WhoSampled                                   |
| `vimeo`            | TEXT      | URL de Vimeo                                        |
| `genius`           | TEXT      | URL de Genius                                       |
| `myspace`          | TEXT      | URL de MySpace                                      |
| `tumblr`           | TEXT      | URL de Tumblr                                       |
| `resident_advisor` | TEXT      | URL de Resident Advisor                             |
| `rateyourmusic`    | TEXT      | URL de RateYourMusic                                |
| `enlaces`          | TEXT      | JSON con enlaces adicionales no categorizados       |
| `last_updated`     | TIMESTAMP | Fecha y hora de la última actualización             |