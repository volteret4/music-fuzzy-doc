---
title: Datos
weight: 2
---

##### Tabla: `songs`

|Columna|Tipo|Restricciones|Descripción|
|---|---|---|---|
|id|INTEGER|PRIMARY KEY|Identificador único de la canción|
|file_path|TEXT|-|Ruta del archivo (NULL para Spotify)|
|title|TEXT|-|Título de la canción|
|track_number|INTEGER|-|Número de pista en el álbum|
|artist|TEXT|-|Artista principal|
|album_artist|TEXT|-|Artista del álbum|
|album|TEXT|-|Nombre del álbum|
|date|TEXT|-|Fecha de lanzamiento|
|genre|TEXT|-|Género musical|
|label|TEXT|-|Sello discográfico|
|mbid|TEXT|-|MusicBrainz ID|
|bitrate|INTEGER|-|Bitrate del archivo|
|bit_depth|INTEGER|-|Profundidad de bits|
|sample_rate|INTEGER|-|Frecuencia de muestreo|
|last_modified|TIMESTAMP|-|Última modificación|
|added_timestamp|TIMESTAMP|-|Timestamp de cuando se añadió|
|added_day|INTEGER|-|Día del mes cuando se añadió|
|added_week|INTEGER|-|Semana del año cuando se añadió|
|added_month|INTEGER|-|Mes cuando se añadió|
|added_year|INTEGER|-|Año cuando se añadió|
|duration|REAL|-|Duración en segundos|
|lyrics_id|INTEGER|-|ID de las letras asociadas|
|replay_gain_track_gain|REAL|-|Ganancia ReplayGain de pista|
|replay_gain_track_peak|REAL|-|Pico ReplayGain de pista|
|replay_gain_album_gain|REAL|-|Ganancia ReplayGain de álbum|
|replay_gain_album_peak|REAL|-|Pico ReplayGain de álbum|
|album_art_path_denorm|TEXT|-|Ruta de la portada del álbum|
|has_lyrics|INTEGER|DEFAULT 0|Indica si tiene letras|
|origen|TEXT|DEFAULT 'spotify'|Fuente de los datos|

##### Tabla: `artists`

|Columna|Tipo|Restricciones|Descripción|
|---|---|---|---|
|id|INTEGER|PRIMARY KEY|Identificador único del artista|
|name|TEXT|UNIQUE|Nombre del artista|
|bio|TEXT|-|Biografía del artista|
|tags|TEXT|-|Etiquetas/géneros asociados|
|similar_artists|TEXT|-|Artistas similares|
|last_updated|TIMESTAMP|-|Última actualización|
|origin|TEXT|-|Origen de los datos|
|formed_year|INTEGER|-|Año de formación|
|total_albums|INTEGER|-|Total de álbumes|
|spotify_url|TEXT|-|URL de Spotify|
|youtube_url|TEXT|-|URL de YouTube|
|musicbrainz_url|TEXT|-|URL de MusicBrainz|
|discogs_url|TEXT|-|URL de Discogs|
|rateyourmusic_url|TEXT|-|URL de Rate Your Music|
|links_updated|TIMESTAMP|-|Última actualización de enlaces|
|wikipedia_url|TEXT|-|URL de Wikipedia|
|wikipedia_content|TEXT|-|Contenido de Wikipedia|
|wikipedia_updated|TIMESTAMP|-|Última actualización de Wikipedia|
|mbid|TEXT|-|MusicBrainz ID|
|bandcamp_url|TEXT|-|URL de Bandcamp|
|member_of|TEXT|-|Miembro de (bandas/grupos)|
|aliases|TEXT|-|Alias del artista|
|lastfm_url|TEXT|-|URL de Last.fm|
|origen|TEXT|DEFAULT 'spotify'|Fuente de los datos|
|added_timestamp|TIMESTAMP|-|Timestamp de cuando se añadió|
|added_day|INTEGER|-|Día del mes cuando se añadió|
|added_week|INTEGER|-|Semana del año cuando se añadió|
|added_month|INTEGER|-|Mes cuando se añadió|
|added_year|INTEGER|-|Año cuando se añadió|
|spotify_popularity|INTEGER|-|Popularidad en Spotify (0-100)|

##### Tabla: `albums`

|Columna|Tipo|Restricciones|Descripción|
|---|---|---|---|
|id|INTEGER|PRIMARY KEY|Identificador único del álbum|
|artist_id|INTEGER|FOREIGN KEY|ID del artista|
|name|TEXT|-|Nombre del álbum|
|year|TEXT|-|Año de lanzamiento|
|label|TEXT|-|Sello discográfico|
|genre|TEXT|-|Género del álbum|
|total_tracks|INTEGER|-|Número total de pistas|
|album_art_path|TEXT|-|Ruta de la portada|
|last_updated|TIMESTAMP|-|Última actualización|
|spotify_url|TEXT|-|URL de Spotify|
|spotify_id|TEXT|-|ID de Spotify|
|youtube_url|TEXT|-|URL de YouTube|
|musicbrainz_url|TEXT|-|URL de MusicBrainz|
|discogs_url|TEXT|-|URL de Discogs|
|rateyourmusic_url|TEXT|-|URL de Rate Your Music|
|links_updated|TIMESTAMP|-|Última actualización de enlaces|
|wikipedia_url|TEXT|-|URL de Wikipedia|
|wikipedia_content|TEXT|-|Contenido de Wikipedia|
|wikipedia_updated|TIMESTAMP|-|Última actualización de Wikipedia|
|mbid|TEXT|-|MusicBrainz ID|
|folder_path|TEXT|-|Ruta de la carpeta|
|bitrate_range|TEXT|-|Rango de bitrate|
|bandcamp_url|TEXT|-|URL de Bandcamp|
|producers|TEXT|-|Productores|
|engineers|TEXT|-|Ingenieros|
|mastering_engineers|TEXT|-|Ingenieros de masterización|
|credits|JSON|-|Créditos en formato JSON|
|lastfm_url|TEXT|-|URL de Last.fm|
|origen|TEXT|DEFAULT 'spotify'|Fuente de los datos|
|added_timestamp|TIMESTAMP|-|Timestamp de cuando se añadió|
|added_day|INTEGER|-|Día del mes cuando se añadió|
|added_week|INTEGER|-|Semana del año cuando se añadió|
|added_month|INTEGER|-|Mes cuando se añadió|
|added_year|INTEGER|-|Año cuando se añadió|

##### Tabla: `genres`

|Columna|Tipo|Restricciones|Descripción|
|---|---|---|---|
|id|INTEGER|PRIMARY KEY|Identificador único del género|
|name|TEXT|UNIQUE|Nombre del género|
|description|TEXT|-|Descripción del género|
|related_genres|TEXT|-|Géneros relacionados|
|origin_year|INTEGER|-|Año de origen del género|

##### Tabla: `lyrics`

|Columna|Tipo|Restricciones|Descripción|
|---|---|---|---|
|id|INTEGER|PRIMARY KEY|Identificador único de las letras|
|track_id|INTEGER|FOREIGN KEY|ID de la canción|
|lyrics|TEXT|-|Texto de las letras|
|source|TEXT|DEFAULT 'Genius'|Fuente de las letras|
|last_updated|TIMESTAMP|-|Última actualización|

##### Tabla: `song_links`

|Columna|Tipo|Restricciones|Descripción|
|---|---|---|---|
|id|INTEGER|PRIMARY KEY|Identificador único|
|song_id|INTEGER|FOREIGN KEY|ID de la canción|
|spotify_url|TEXT|-|URL de Spotify|
|spotify_id|TEXT|-|ID de Spotify|
|lastfm_url|TEXT|-|URL de Last.fm|
|links_updated|TIMESTAMP|-|Última actualización de enlaces|
|youtube_url|TEXT|-|URL de YouTube|
|musicbrainz_url|TEXT|-|URL de MusicBrainz|
|musicbrainz_recording_id|TEXT|-|ID de grabación en MusicBrainz|
|bandcamp_url|TEXT|-|URL de Bandcamp|
|soundcloud_url|TEXT|-|URL de SoundCloud|
|boomkat_url|TEXT|-|URL de Boomkat|

##### Tablas FTS (Full Text Search)

|Tabla|Descripción|
|---|---|
|`songs_fts`|Búsqueda de texto completo en canciones|
|`lyrics_fts`|Búsqueda de texto completo en letras|
|`song_fts`|Búsqueda de texto completo general en canciones|
|`artist_fts`|Búsqueda de texto completo en artistas|
|`album_fts`|Búsqueda de texto completo en álbumes|

##### Índices Creados

- `idx_songs_artist` - Índice en `songs.artist`
- `idx_songs_album` - Índice en `songs.album`
- `idx_songs_genre` - Índice en `songs.genre`
- `idx_albums_artist_id` - Índice en `albums.artist_id`
- `idx_lyrics_track_id` - Índice en `lyrics.track_id`
- `idx_song_links_song_id` - Índice en `song_links.song_id`