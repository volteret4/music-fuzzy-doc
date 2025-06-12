---
title: Datos
weight: 4
---

**Tabla: songs**

|Campo|Tipo|Descripción|
|---|---|---|
|`id`|INTEGER|Clave primaria|
|`file_path`|TEXT|Ruta completa del archivo de audio|
|`title`|TEXT|Título de la canción|
|`track_number`|INTEGER|Número de pista|
|`artist`|TEXT|Artista principal|
|`album_artist`|TEXT|Artista del álbum|
|`album`|TEXT|Nombre del álbum|
|`date`|TEXT|Fecha/año de lanzamiento|
|`genre`|TEXT|Género musical|
|`label`|TEXT|Sello discográfico|
|`mbid`|TEXT|MusicBrainz Track ID|
|`bitrate`|INTEGER|Bitrate en kbps|
|`bit_depth`|INTEGER|Profundidad de bits|
|`sample_rate`|INTEGER|Frecuencia de muestreo|
|`duration`|REAL|Duración en segundos|
|`last_modified`|TIMESTAMP|Última modificación del archivo|
|`added_timestamp`|TIMESTAMP|Fecha de adición a la BD|
|`added_day`|INTEGER|Día de adición|
|`added_week`|INTEGER|Semana de adición|
|`added_month`|INTEGER|Mes de adición|
|`added_year`|INTEGER|Año de adición|
|`lyrics_id`|INTEGER|FK a tabla lyrics|
|`replay_gain_track_gain`|REAL|Ganancia ReplayGain de pista|
|`replay_gain_track_peak`|REAL|Pico ReplayGain de pista|
|`replay_gain_album_gain`|REAL|Ganancia ReplayGain de álbum|
|`replay_gain_album_peak`|REAL|Pico ReplayGain de álbum|
|`album_art_path_denorm`|TEXT|Ruta de la portada del álbum|
|`has_lyrics`|INTEGER|Indica si tiene letras (0/1)|
|`origen`|TEXT|Origen de los datos ('local')|
|`musicbrainz_artistid`|TEXT|MusicBrainz Artist ID|
|`musicbrainz_recordingid`|TEXT|MusicBrainz Recording ID|
|`musicbrainz_albumartistid`|TEXT|MusicBrainz Album Artist ID|
|`musicbrainz_releasegroupid`|TEXT|MusicBrainz Release Group ID|

**Tabla: artists**

|Campo|Tipo|Descripción|
|---|---|---|
|`id`|INTEGER|Clave primaria|
|`name`|TEXT|Nombre del artista|
|`bio`|TEXT|Biografía|
|`tags`|TEXT|Etiquetas/géneros|
|`similar_artists`|TEXT|Artistas similares|
|`last_updated`|TIMESTAMP|Última actualización|
|`origin`|TEXT|Origen/país del artista|
|`formed_year`|INTEGER|Año de formación|
|`total_albums`|INTEGER|Total de álbumes|
|`spotify_url`|TEXT|URL de Spotify|
|`youtube_url`|TEXT|URL de YouTube|
|`musicbrainz_url`|TEXT|URL de MusicBrainz|
|`discogs_url`|TEXT|URL de Discogs|
|`rateyourmusic_url`|TEXT|URL de RateYourMusic|
|`links_updated`|TIMESTAMP|Última actualización de enlaces|
|`wikipedia_url`|TEXT|URL de Wikipedia|
|`wikipedia_content`|TEXT|Contenido de Wikipedia|
|`wikipedia_updated`|TIMESTAMP|Última actualización de Wikipedia|
|`mbid`|TEXT|MusicBrainz Artist ID|
|`aliases`|TEXT|Alias del artista|
|`member_of`|TEXT|Grupos de los que es miembro|
|`added_timestamp`|TIMESTAMP|Fecha de adición a la BD|
|`added_day`|INTEGER|Día de adición|
|`added_week`|INTEGER|Semana de adición|
|`added_month`|INTEGER|Mes de adición|
|`added_year`|INTEGER|Año de adición|
|`origen`|TEXT|Origen de los datos ('local')|

**Tabla: albums**

|Campo|Tipo|Descripción|
|---|---|---|
|`id`|INTEGER|Clave primaria|
|`artist_id`|INTEGER|FK a tabla artists|
|`name`|TEXT|Nombre del álbum|
|`year`|TEXT|Año de lanzamiento|
|`label`|TEXT|Sello discográfico|
|`genre`|TEXT|Género musical|
|`total_tracks`|INTEGER|Número total de pistas|
|`album_art_path`|TEXT|Ruta de la portada|
|`last_updated`|TIMESTAMP|Última actualización|
|`spotify_url`|TEXT|URL de Spotify|
|`spotify_id`|TEXT|ID de Spotify|
|`youtube_url`|TEXT|URL de YouTube|
|`musicbrainz_url`|TEXT|URL de MusicBrainz|
|`discogs_url`|TEXT|URL de Discogs|
|`rateyourmusic_url`|TEXT|URL de RateYourMusic|
|`links_updated`|TIMESTAMP|Última actualización de enlaces|
|`wikipedia_url`|TEXT|URL de Wikipedia|
|`wikipedia_content`|TEXT|Contenido de Wikipedia|
|`wikipedia_updated`|TIMESTAMP|Última actualización de Wikipedia|
|`mbid`|TEXT|MusicBrainz Release ID|
|`folder_path`|TEXT|Ruta de la carpeta del álbum|
|`bitrate_range`|TEXT|Rango de bitrates (ej: "320-320")|
|`added_timestamp`|TIMESTAMP|Fecha de adición a la BD|
|`added_day`|INTEGER|Día de adición|
|`added_week`|INTEGER|Semana de adición|
|`added_month`|INTEGER|Mes de adición|
|`added_year`|INTEGER|Año de adición|
|`origen`|TEXT|Origen de los datos ('local')|
|`musicbrainz_albumid`|TEXT|MusicBrainz Album ID|
|`musicbrainz_albumartistid`|TEXT|MusicBrainz Album Artist ID|
|`musicbrainz_releasegroupid`|TEXT|MusicBrainz Release Group ID|
|`catalognumber`|TEXT|Número de catálogo|
|`media`|TEXT|Tipo de medio|
|`discnumber`|TEXT|Número de disco|
|`releasecountry`|TEXT|País de lanzamiento|
|`originalyear`|INTEGER|Año original de lanzamiento|
|`producers`|TEXT|Productores|
|`engineers`|TEXT|Ingenieros|
|`mastering_engineers`|TEXT|Ingenieros de masterización|
|`credits`|TEXT|Créditos adicionales|

**Tabla: song_links**

|Campo|Tipo|Descripción|
|---|---|---|
|`id`|INTEGER|Clave primaria|
|`song_id`|INTEGER|FK a tabla songs|
|`spotify_url`|TEXT|URL de Spotify|
|`spotify_id`|TEXT|ID de Spotify|
|`lastfm_url`|TEXT|URL de Last.fm|
|`links_updated`|TIMESTAMP|Última actualización|
|`youtube_url`|TEXT|URL de YouTube|
|`musicbrainz_url`|TEXT|URL de MusicBrainz|
|`musicbrainz_recording_id`|TEXT|ID de grabación MusicBrainz|
|`bandcamp_url`|TEXT|URL de Bandcamp|
|`soundcloud_url`|TEXT|URL de SoundCloud|
|`boomkat_url`|TEXT|URL de Boomkat|

**Tabla: genres**

|Campo|Tipo|Descripción|
|---|---|---|
|`id`|INTEGER|Clave primaria|
|`name`|TEXT|Nombre del género|
|`description`|TEXT|Descripción del género|
|`related_genres`|TEXT|Géneros relacionados|
|`origin_year`|INTEGER|Año de origen|

**Tabla: lyrics**

|Campo|Tipo|Descripción|
|---|---|---|
|`id`|INTEGER|Clave primaria|
|`track_id`|INTEGER|FK a tabla songs|
|`lyrics`|TEXT|Letras de la canción|
|`source`|TEXT|Fuente de las letras|
|`last_updated`|TIMESTAMP|Última actualización|

[[db_music_path_module.py]]