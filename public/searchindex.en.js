var relearn_searchindex = [
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos",
    "content": "Crea la base de datos leyendo metadata de los archivos flac y mp3.\nEste script es el único que leerá la ruta de archivos, desde aquí todos añaden información a a la base de datos basandose en los ya existentes. Si tienes diferentes rutas con música debes volver a ejecutar el script por cada ruta diferente antes de continuar añadiendo datos a la base de datos con el resto de scripts.\nTomará cada carpeta como un album. Se ha probado con:\n3160 discos en 1,4 TB en un servidor NFS: 8 horas 10 discos en 5 TB en local: 1 segundo",
    "description": "Crea la base de datos leyendo metadata de los archivos flac y mp3.\nEste script es el único que leerá la ruta de archivos, desde aquí todos añaden información a a la base de datos basandose en los ya existentes. Si tienes diferentes rutas con música debes volver a ejecutar el script por cada ruta diferente antes de continuar añadiendo datos a la base de datos con el resto de scripts.",
    "tags": [],
    "title": "01. Archivos locales",
    "uri": "/base_datos/01.-archivos-locales/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos",
    "content": "673940154\nObtiene scrobbles de lastfm para el usuario indicado\n27.000 scrobbles con 11.180 enlazados en 6 minutos\nTabla scrobbles Campo Tipo Descripción id INTEGER ID único (autoincremental) track_name TEXT Nombre de la canción album_name TEXT Nombre del álbum artist_name TEXT Nombre del artista timestamp INTEGER Timestamp Unix del scrobble scrobble_date TEXT Fecha y hora del scrobble en formato legible lastfm_url TEXT URL de Last.fm para el scrobble song_id INTEGER ID de referencia a la tabla songs (puede ser NULL) album_id INTEGER ID de referencia a la tabla albums (puede ser NULL) artist_id INTEGER ID de referencia a la tabla artists (puede ser NULL) Tabla lastfm_config Campo Tipo Descripción id INTEGER ID único (siempre 1) lastfm_username TEXT Nombre de usuario de Last.fm last_timestamp INTEGER Último timestamp procesado last_updated TIMESTAMP Fecha de última actualización Tabla artists Campo Tipo Descripción name TEXT Nombre del artista mbid TEXT ID de MusicBrainz tags TEXT Etiquetas separadas por comas bio TEXT Biografía del artista lastfm_url TEXT URL de Last.fm para el artista origen TEXT Origen de los datos (‘scrobbles’) Tabla albums Campo Tipo Descripción artist_id INTEGER ID del artista name TEXT Nombre del álbum year INTEGER Año de lanzamiento lastfm_url TEXT URL de Last.fm para el álbum mbid TEXT ID de MusicBrainz total_tracks INTEGER Número total de pistas origen TEXT Origen de los datos (‘scrobbles’) Tabla songs Campo Tipo Descripción title TEXT Título de la canción mbid TEXT ID de MusicBrainz added_timestamp INTEGER Timestamp de cuando se añadió la canción added_week INTEGER Semana en que se añadió la canción added_month INTEGER Mes en que se añadió la canción added_year INTEGER Año en que se añadió la canción duration INTEGER Duración en segundos album TEXT Nombre del álbum album_artist TEXT Artista del álbum artist TEXT Artista de la canción genre TEXT Género musical origen TEXT Origen de los datos (‘scrobbles’) Tabla song_links Campo Tipo Descripción song_id INTEGER ID de la canción lastfm_url TEXT URL de Last.fm para la canción",
    "description": "673940154\nObtiene scrobbles de lastfm para el usuario indicado\n27.000 scrobbles con 11.180 enlazados en 6 minutos\nTabla scrobbles Campo Tipo Descripción id INTEGER ID único (autoincremental) track_name TEXT Nombre de la canción album_name TEXT Nombre del álbum artist_name TEXT Nombre del artista timestamp INTEGER Timestamp Unix del scrobble scrobble_date TEXT Fecha y hora del scrobble en formato legible lastfm_url TEXT URL de Last.fm para el scrobble song_id INTEGER ID de referencia a la tabla songs (puede ser NULL) album_id INTEGER ID de referencia a la tabla albums (puede ser NULL) artist_id INTEGER ID de referencia a la tabla artists (puede ser NULL) Tabla lastfm_config Campo Tipo Descripción id INTEGER ID único (siempre 1) lastfm_username TEXT Nombre de usuario de Last.fm last_timestamp INTEGER Último timestamp procesado last_updated TIMESTAMP Fecha de última actualización Tabla artists Campo Tipo Descripción name TEXT Nombre del artista mbid TEXT ID de MusicBrainz tags TEXT Etiquetas separadas por comas bio TEXT Biografía del artista lastfm_url TEXT URL de Last.fm para el artista origen TEXT Origen de los datos (‘scrobbles’) Tabla albums Campo Tipo Descripción artist_id INTEGER ID del artista name TEXT Nombre del álbum year INTEGER Año de lanzamiento lastfm_url TEXT URL de Last.fm para el álbum mbid TEXT ID de MusicBrainz total_tracks INTEGER Número total de pistas origen TEXT Origen de los datos (‘scrobbles’) Tabla songs Campo Tipo Descripción title TEXT Título de la canción mbid TEXT ID de MusicBrainz added_timestamp INTEGER Timestamp de cuando se añadió la canción added_week INTEGER Semana en que se añadió la canción added_month INTEGER Mes en que se añadió la canción added_year INTEGER Año en que se añadió la canción duration INTEGER Duración en segundos album TEXT Nombre del álbum album_artist TEXT Artista del álbum artist TEXT Artista de la canción genre TEXT Género musical origen TEXT Origen de los datos (‘scrobbles’) Tabla song_links Campo Tipo Descripción song_id INTEGER ID de la canción lastfm_url TEXT URL de Last.fm para la canción",
    "tags": [],
    "title": "02. Scrobbles lastfm",
    "uri": "/base_datos/02.-scrobbles-lastfm/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos",
    "content": "Este script se encarga de obtener y procesar los registros de escuchas (listens) desde ListenBrainz, almacenándolos en una base de datos SQLite y enlazándolos con canciones, artistas y álbumes existentes en tu biblioteca.\nEste script permite varios métodos para mejorar la búsqueda estricta:\nnormalize-strings enhanced-matrching mbid-matching fuzzy-matching analyze-mismatches use-all-matching Se recomienda realizar varias pasadas, una con cada argumento hasta que encuentre un porcentaje que parezca apropiado. Lo que tu comprendas que me decían\nTabla listens Campo Tipo Descripción id INTEGER ID único para cada listen (clave primaria) track_name TEXT Nombre de la pista/canción album_name TEXT Nombre del álbum (opcional) artist_name TEXT Nombre del artista timestamp INTEGER Timestamp en formato Unix de cuando se escuchó la canción listen_date TEXT Fecha y hora en formato legible de cuando se escuchó la canción listenbrainz_url TEXT URL a la página de ListenBrainz del usuario song_id INTEGER ID de la canción correspondiente en la tabla songs (si se encuentra) album_id INTEGER ID del álbum correspondiente en la tabla albums (si se encuentra) artist_id INTEGER ID del artista correspondiente en la tabla artists (si se encuentra) additional_data TEXT Metadatos adicionales en formato JSON (añadido dinámicamente) Tabla listenbrainz_config Campo Tipo Descripción id INTEGER ID único siempre 1 (solo una configuración) username TEXT Nombre de usuario en ListenBrainz last_timestamp INTEGER Último timestamp procesado last_updated TIMESTAMP Fecha y hora de la última actualización Tabla normalized_songs (si se activa enhanced_matching) Campo Tipo Descripción song_id INTEGER ID de la canción normalized_title TEXT Título normalizado normalized_artist TEXT Artista normalizado normalized_album TEXT Álbum normalizado",
    "description": "Este script se encarga de obtener y procesar los registros de escuchas (listens) desde ListenBrainz, almacenándolos en una base de datos SQLite y enlazándolos con canciones, artistas y álbumes existentes en tu biblioteca.\nEste script permite varios métodos para mejorar la búsqueda estricta:\nnormalize-strings enhanced-matrching mbid-matching fuzzy-matching analyze-mismatches use-all-matching Se recomienda realizar varias pasadas, una con cada argumento hasta que encuentre un porcentaje que parezca apropiado. Lo que tu comprendas que me decían",
    "tags": [],
    "title": "03. Listens listenbrainz",
    "uri": "/base_datos/03.-listens-listenbrainz/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos",
    "content": "Este módulo forma parte del sistema de base de datos musical y se encarga de:\nRecopilar URLs de redes sociales y plataformas web para artistas Obtener datos desde múltiples fuentes como Discogs, MusicBrainz y páginas web oficiales Almacenar y actualizar información en la tabla artists_networks de la base de datos Tabla artists_networks Campo Tipo Descripción id INTEGER Clave primaria artist_id INTEGER ID del artista (clave foránea a la tabla artists) allmusic TEXT URL de AllMusic bandcamp TEXT URL de Bandcamp boomkat TEXT URL de Boomkat facebook TEXT URL de Facebook twitter TEXT URL de Twitter mastodon TEXT URL de Mastodon bluesky TEXT URL de Bluesky instagram TEXT URL de Instagram spotify TEXT URL de Spotify lastfm TEXT URL de Last.fm wikipedia TEXT URL de Wikipedia juno TEXT URL de Juno soundcloud TEXT URL de SoundCloud youtube TEXT URL de YouTube imdb TEXT URL de IMDb progarchives TEXT URL de ProgArchives setlist_fm TEXT URL de Setlist.fm who_sampled TEXT URL de WhoSampled vimeo TEXT URL de Vimeo genius TEXT URL de Genius myspace TEXT URL de MySpace tumblr TEXT URL de Tumblr resident_advisor TEXT URL de Resident Advisor rateyourmusic TEXT URL de RateYourMusic enlaces TEXT JSON con enlaces adicionales no categorizados last_updated TIMESTAMP Fecha y hora de la última actualización",
    "description": "Este módulo forma parte del sistema de base de datos musical y se encarga de:\nRecopilar URLs de redes sociales y plataformas web para artistas Obtener datos desde múltiples fuentes como Discogs, MusicBrainz y páginas web oficiales Almacenar y actualizar información en la tabla artists_networks de la base de datos Tabla artists_networks Campo Tipo Descripción id INTEGER Clave primaria artist_id INTEGER ID del artista (clave foránea a la tabla artists) allmusic TEXT URL de AllMusic bandcamp TEXT URL de Bandcamp boomkat TEXT URL de Boomkat facebook TEXT URL de Facebook twitter TEXT URL de Twitter mastodon TEXT URL de Mastodon bluesky TEXT URL de Bluesky instagram TEXT URL de Instagram spotify TEXT URL de Spotify lastfm TEXT URL de Last.fm wikipedia TEXT URL de Wikipedia juno TEXT URL de Juno soundcloud TEXT URL de SoundCloud youtube TEXT URL de YouTube imdb TEXT URL de IMDb progarchives TEXT URL de ProgArchives setlist_fm TEXT URL de Setlist.fm who_sampled TEXT URL de WhoSampled vimeo TEXT URL de Vimeo genius TEXT URL de Genius myspace TEXT URL de MySpace tumblr TEXT URL de Tumblr resident_advisor TEXT URL de Resident Advisor rateyourmusic TEXT URL de RateYourMusic enlaces TEXT JSON con enlaces adicionales no categorizados last_updated TIMESTAMP Fecha y hora de la última actualización",
    "tags": [],
    "title": "04. Redes",
    "uri": "/base_datos/04.-redes/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos",
    "content": "Este script recopila datos de grupos de lanzamientos (release groups) desde MusicBrainz y Wikidata, y los almacena en la base de datos SQLite para enriquecer la información musical.\nTabla mb_release_group Campo Tipo Descripción id INTEGER PK Clave primaria mbid TEXT ID de MusicBrainz title TEXT Título del grupo de lanzamiento artist_credit TEXT Créditos de artistas first_release_date TEXT Fecha del primer lanzamiento primary_type TEXT Tipo primario (álbum, single, etc.) secondary_types TEXT Tipos secundarios album_id INTEGER Referencia al álbum artist_id INTEGER Referencia al artista genre TEXT Géneros musicales associated_singles TEXT Singles asociados discogs_url TEXT Enlace a Discogs rateyourmusic_url TEXT Enlace a RateYourMusic allmusic_url TEXT Enlace a AllMusic wikidata_id TEXT ID de Wikidata last_updated TIMESTAMP Fecha de la última actualización [columnas dinámicas] Variado Columnas generadas desde propiedades de Wikidata Tabla mb_wikidata Campo Tipo Descripción id INTEGER PK Clave primaria wikidata_id TEXT ID de la entidad en Wikidata release_group_mbid TEXT Referencia al MBID del grupo de lanzamiento album_id INTEGER Referencia al álbum artist_id INTEGER Referencia al artista label_id INTEGER Referencia al sello discográfico property_id TEXT ID de la propiedad de Wikidata property_label TEXT Etiqueta legible de la propiedad property_value TEXT Valor de la propiedad last_updated TIMESTAMP Fecha de la última actualización value_type TEXT Tipo de valor is_link INTEGER Indica si el valor es un enlace (0 o 1)",
    "description": "Este script recopila datos de grupos de lanzamientos (release groups) desde MusicBrainz y Wikidata, y los almacena en la base de datos SQLite para enriquecer la información musical.\nTabla mb_release_group Campo Tipo Descripción id INTEGER PK Clave primaria mbid TEXT ID de MusicBrainz title TEXT Título del grupo de lanzamiento artist_credit TEXT Créditos de artistas first_release_date TEXT Fecha del primer lanzamiento primary_type TEXT Tipo primario (álbum, single, etc.) secondary_types TEXT Tipos secundarios album_id INTEGER Referencia al álbum artist_id INTEGER Referencia al artista genre TEXT Géneros musicales associated_singles TEXT Singles asociados discogs_url TEXT Enlace a Discogs rateyourmusic_url TEXT Enlace a RateYourMusic allmusic_url TEXT Enlace a AllMusic wikidata_id TEXT ID de Wikidata last_updated TIMESTAMP Fecha de la última actualización [columnas dinámicas] Variado Columnas generadas desde propiedades de Wikidata Tabla mb_wikidata Campo Tipo Descripción id INTEGER PK Clave primaria wikidata_id TEXT ID de la entidad en Wikidata release_group_mbid TEXT Referencia al MBID del grupo de lanzamiento album_id INTEGER Referencia al álbum artist_id INTEGER Referencia al artista label_id INTEGER Referencia al sello discográfico property_id TEXT ID de la propiedad de Wikidata property_label TEXT Etiqueta legible de la propiedad property_value TEXT Valor de la propiedad last_updated TIMESTAMP Fecha de la última actualización value_type TEXT Tipo de valor is_link INTEGER Indica si el valor es un enlace (0 o 1)",
    "tags": [],
    "title": "05. Musicbrainz album info",
    "uri": "/base_datos/05.-musicbrainz-album-info/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos",
    "content": "# mb_data_canciones Módulo para obtener y almacenar relaciones entre canciones desde MusicBrainz.\nEste script extrae información sobre relaciones entre canciones (samples, remixes, covers, etc.) utilizando la API de MusicBrainz y almacena estos datos en la tabla mb_data_songs de la base de datos.",
    "description": "# mb_data_canciones Módulo para obtener y almacenar relaciones entre canciones desde MusicBrainz.\nEste script extrae información sobre relaciones entre canciones (samples, remixes, covers, etc.) utilizando la API de MusicBrainz y almacena estos datos en la tabla mb_data_songs de la base de datos.",
    "tags": [],
    "title": "06. Musicbrainz canciones",
    "uri": "/base_datos/06.-musicbrainz-canciones/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos",
    "content": "Configuración JSON { \"db_path\": \"ruta/a/tu/base_de_datos.db\", \"log_path\": \"logs/\", \"cache_path\": \"cache/\", \"cache_duration\": 30, \"rate_limit\": 0.5, \"spotify\": { \"client_id\": \"tu_spotify_client_id\", \"client_secret\": \"tu_spotify_client_secret\" }, \"lastfm\": { \"api_key\": \"tu_lastfm_api_key\", \"api_secret\": \"tu_lastfm_api_secret\" }, \"discogs\": { \"token\": \"tu_discogs_token\" }, \"user_agent\": \"MusicDatabaseEnricher/1.0 (contacto@ejemplo.com)\" } Variables de entorno alternativas SPOTIFY_CLIENT_ID SPOTIFY_CLIENT_SECRET LASTFM_API_KEY LASTFM_API_SECRET DISCOGS_TOKEN Tabla artists Campo Tipo Descripción spotify_url TEXT URL del artista en Spotify youtube_url TEXT URL del canal/tópico del artista en YouTube musicbrainz_url TEXT URL del artista en MusicBrainz discogs_url TEXT URL del artista en Discogs rateyourmusic_url TEXT URL del artista en RateYourMusic bandcamp_url TEXT URL del artista en Bandcamp mbid TEXT ID de MusicBrainz del artista origin TEXT Origen o país del artista formed_year INTEGER Año de formación del artista total_albums INTEGER Número total de álbumes del artista bio TEXT Biografía del artista similar_artists TEXT/JSON Artistas similares tags TEXT/JSON Etiquetas o géneros aliases TEXT/JSON Nombres alternativos del artista member_of TEXT/JSON Grupos a los que pertenece el artista lastfm_url TEXT URL del artista en Last.fm links_updated TIMESTAMP Fecha de la última actualización Tabla albums Campo Tipo Descripción spotify_url TEXT URL del álbum en Spotify spotify_id TEXT ID del álbum en Spotify youtube_url TEXT URL de resultados o playlist del álbum en YouTube musicbrainz_url TEXT URL del álbum en MusicBrainz discogs_url TEXT URL del álbum en Discogs rateyourmusic_url TEXT URL del álbum en RateYourMusic bandcamp_url TEXT URL del álbum en Bandcamp mbid TEXT ID de MusicBrainz del álbum producers TEXT/JSON Productores del álbum engineers TEXT/JSON Ingenieros de grabación mastering_engineers TEXT/JSON Ingenieros de masterización credits JSON Detalles de los créditos lastfm_url TEXT URL del álbum en Last.fm links_updated TIMESTAMP Fecha de la última actualización Tabla songs Campo Tipo Descripción mbid TEXT Identificador de MusicBrainz para la grabación tags include #enlaces_artista_album sort by due reverse hide tags",
    "description": "Configuración JSON { \"db_path\": \"ruta/a/tu/base_de_datos.db\", \"log_path\": \"logs/\", \"cache_path\": \"cache/\", \"cache_duration\": 30, \"rate_limit\": 0.5, \"spotify\": { \"client_id\": \"tu_spotify_client_id\", \"client_secret\": \"tu_spotify_client_secret\" }, \"lastfm\": { \"api_key\": \"tu_lastfm_api_key\", \"api_secret\": \"tu_lastfm_api_secret\" }, \"discogs\": { \"token\": \"tu_discogs_token\" }, \"user_agent\": \"MusicDatabaseEnricher/1.0 (contacto@ejemplo.com)\" } Variables de entorno alternativas SPOTIFY_CLIENT_ID SPOTIFY_CLIENT_SECRET LASTFM_API_KEY LASTFM_API_SECRET DISCOGS_TOKEN Tabla artists Campo Tipo Descripción spotify_url TEXT URL del artista en Spotify youtube_url TEXT URL del canal/tópico del artista en YouTube musicbrainz_url TEXT URL del artista en MusicBrainz discogs_url TEXT URL del artista en Discogs rateyourmusic_url TEXT URL del artista en RateYourMusic bandcamp_url TEXT URL del artista en Bandcamp mbid TEXT ID de MusicBrainz del artista origin TEXT Origen o país del artista formed_year INTEGER Año de formación del artista total_albums INTEGER Número total de álbumes del artista bio TEXT Biografía del artista similar_artists TEXT/JSON Artistas similares tags TEXT/JSON Etiquetas o géneros aliases TEXT/JSON Nombres alternativos del artista member_of TEXT/JSON Grupos a los que pertenece el artista lastfm_url TEXT URL del artista en Last.fm links_updated TIMESTAMP Fecha de la última actualización Tabla albums Campo Tipo Descripción spotify_url TEXT URL del álbum en Spotify spotify_id TEXT ID del álbum en Spotify youtube_url TEXT URL de resultados o playlist del álbum en YouTube musicbrainz_url TEXT URL del álbum en MusicBrainz discogs_url TEXT URL del álbum en Discogs rateyourmusic_url TEXT URL del álbum en RateYourMusic bandcamp_url TEXT URL del álbum en Bandcamp mbid TEXT ID de MusicBrainz del álbum producers TEXT/JSON Productores del álbum engineers TEXT/JSON Ingenieros de grabación mastering_engineers TEXT/JSON Ingenieros de masterización credits JSON Detalles de los créditos lastfm_url TEXT URL del álbum en Last.fm links_updated TIMESTAMP Fecha de la última actualización Tabla songs Campo Tipo Descripción mbid TEXT Identificador de MusicBrainz para la grabación tags include #enlaces_artista_album sort by due reverse hide tags",
    "tags": [],
    "title": "07. Enlaces artistas",
    "uri": "/base_datos/07.-enlaces-artistas/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos",
    "content": "Limitaciones y Control de Tasa Retraso entre solicitudes: Configurable para evitar bloqueos de IP Reintentos: 3 intentos por solicitud fallida con incremento exponencial de espera Límite de tiempo de ejecución: Tiempo máximo de ejecución por defecto de 3600 segundos (configurable)",
    "description": "Limitaciones y Control de Tasa Retraso entre solicitudes: Configurable para evitar bloqueos de IP Reintentos: 3 intentos por solicitud fallida con incremento exponencial de espera Límite de tiempo de ejecución: Tiempo máximo de ejecución por defecto de 3600 segundos (configurable)",
    "tags": [],
    "title": "08. Enlaces albums",
    "uri": "/base_datos/08.-enlaces-albums/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos",
    "content": "Busca enlaces para cada canción en spotify y lastfm.\nMódulo para gestionar los enlaces de canciones en servicios de música en línea. Actualiza los enlaces de diversos servicios de música (Spotify, YouTube, Bandcamp, etc.) para las canciones en la base de datos. Se puede ejecutar directamente o como parte de la cadena de scripts de db_creator.py. Dependencias\nServicios usados: spotify: Enlaces a canciones en Spotify lastfm: Enlaces a canciones en Last.fm youtube: Enlaces a videos de canciones en YouTube musicbrainz: Enlaces a grabaciones en MusicBrainz bandcamp: Enlaces a canciones en Bandcamp soundcloud: Enlaces a canciones en SoundCloud boomkat: Enlaces a canciones en Boomkat",
    "description": "Busca enlaces para cada canción en spotify y lastfm.\nMódulo para gestionar los enlaces de canciones en servicios de música en línea. Actualiza los enlaces de diversos servicios de música (Spotify, YouTube, Bandcamp, etc.) para las canciones en la base de datos. Se puede ejecutar directamente o como parte de la cadena de scripts de db_creator.py. Dependencias\nServicios usados: spotify: Enlaces a canciones en Spotify lastfm: Enlaces a canciones en Last.fm youtube: Enlaces a videos de canciones en YouTube musicbrainz: Enlaces a grabaciones en MusicBrainz bandcamp: Enlaces a canciones en Bandcamp soundcloud: Enlaces a canciones en SoundCloud boomkat: Enlaces a canciones en Boomkat",
    "tags": [],
    "title": "09. Enlaces canciones",
    "uri": "/base_datos/09.-enlaces-canciones/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos",
    "content": "Obtiene enlaces a wikipedia desde musicbrainz, y extrae su contenido. En caso de no encontrarlo en wikimedia, se puede hacer manualmente con wikipedia.\nTabla artists Campo Tipo Descripción wikipedia_url TEXT URL de la página de Wikipedia del artista wikipedia_content TEXT Contenido extraído de la página de Wikipedia wikipedia_updated TIMESTAMP Timestamp de la última actualización de la información de Wikipedia links_updated TIMESTAMP Timestamp de la última actualización de los enlaces Tabla albums Campo Tipo Descripción wikipedia_url TEXT URL de la página de Wikipedia del artista wikipedia_content TEXT Contenido extraído de la página de Wikipedia wikipedia_updated TIMESTAMP Timestamp de la última actualización de la información de Wikipedia links_updated TIMESTAMP Timestamp de la última actualización de los enlaces Tabla labels Campo Tipo Descripción wikipedia_url TEXT URL de la página de Wikipedia del sello discográfico wikipedia_content TEXT Contenido extraído de la página de Wikipedia wikipedia_updated TIMESTAMP Timestamp de la última actualización de la información de Wikipedia links_updated TIMESTAMP Timestamp de la última actualización de los enlaces",
    "description": "Obtiene enlaces a wikipedia desde musicbrainz, y extrae su contenido. En caso de no encontrarlo en wikimedia, se puede hacer manualmente con wikipedia.\nTabla artists Campo Tipo Descripción wikipedia_url TEXT URL de la página de Wikipedia del artista wikipedia_content TEXT Contenido extraído de la página de Wikipedia wikipedia_updated TIMESTAMP Timestamp de la última actualización de la información de Wikipedia links_updated TIMESTAMP Timestamp de la última actualización de los enlaces Tabla albums Campo Tipo Descripción wikipedia_url TEXT URL de la página de Wikipedia del artista wikipedia_content TEXT Contenido extraído de la página de Wikipedia wikipedia_updated TIMESTAMP Timestamp de la última actualización de la información de Wikipedia links_updated TIMESTAMP Timestamp de la última actualización de los enlaces Tabla labels Campo Tipo Descripción wikipedia_url TEXT URL de la página de Wikipedia del sello discográfico wikipedia_content TEXT Contenido extraído de la página de Wikipedia wikipedia_updated TIMESTAMP Timestamp de la última actualización de la información de Wikipedia links_updated TIMESTAMP Timestamp de la última actualización de los enlaces",
    "tags": [],
    "title": "10. Wikipedia",
    "uri": "/base_datos/10.-wikipedia/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos",
    "content": "Este script obtiene y almacena información detallada sobre sellos discográficos desde MusicBrainz y fuentes adicionales como Wikipedia y Discogs.",
    "description": "Este script obtiene y almacena información detallada sobre sellos discográficos desde MusicBrainz y fuentes adicionales como Wikipedia y Discogs.",
    "tags": [],
    "title": "11. Musicbrainz sellos",
    "uri": "/base_datos/11.-musicbrainz-sellos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos",
    "content": "Este script busca videos de YouTube relacionados con las canciones en la base de datos y almacena los enlaces correspondientes. También actualiza información de enlaces para álbumes y artistas.\nTabla song_links Campo Tipo Descripción song_id INTEGER ID de la canción youtube_url TEXT URL del video en YouTube youtube_id TEXT ID del video en YouTube video_title TEXT Título del video channel_name TEXT Nombre del canal de YouTube view_count INTEGER Número de vistas (si disponible) match_score REAL Puntuación de coincidencia (0.0 - 1.0) last_updated TIMESTAMP Fecha de última actualización Otras tablas Tabla Campo Descripción albums youtube_url URL de canal o playlist del álbum en YouTube artists youtube_url URL del canal oficial del artista en YouTube",
    "description": "Este script busca videos de YouTube relacionados con las canciones en la base de datos y almacena los enlaces correspondientes. También actualiza información de enlaces para álbumes y artistas.\nTabla song_links Campo Tipo Descripción song_id INTEGER ID de la canción youtube_url TEXT URL del video en YouTube youtube_id TEXT ID del video en YouTube video_title TEXT Título del video channel_name TEXT Nombre del canal de YouTube view_count INTEGER Número de vistas (si disponible) match_score REAL Puntuación de coincidencia (0.0 - 1.0) last_updated TIMESTAMP Fecha de última actualización Otras tablas Tabla Campo Descripción albums youtube_url URL de canal o playlist del álbum en YouTube artists youtube_url URL del canal oficial del artista en YouTube",
    "tags": [],
    "title": "11. Youtube links de canciones",
    "uri": "/base_datos/11.-youtube-links-de-canciones/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos",
    "content": "Módulo para gestionar los enlaces de canciones en servicios de música en línea.\nEste script actualiza los enlaces de diversos servicios de música (Spotify, YouTube, Bandcamp, etc.) para las canciones en la base de datos. Se puede ejecutar directamente o como parte de la cadena de scripts de db_creator.py.\n4 horas en 5140 canciones, Media de una canción cada 2.82 segundos\nTabla lyrics Campo Tipo Descripción id INTEGER Identificador único de la letra track_id INTEGER ID de la canción asociada (clave foránea a songs.id) lyrics TEXT El texto completo de la letra source TEXT La fuente de la letra (ej. ‘Genius’, ’lyrics.ovh’, ‘Happi’, ‘Musixmatch’) last_updated TIMESTAMP Fecha y hora de la última actualización",
    "description": "Módulo para gestionar los enlaces de canciones en servicios de música en línea.\nEste script actualiza los enlaces de diversos servicios de música (Spotify, YouTube, Bandcamp, etc.) para las canciones en la base de datos. Se puede ejecutar directamente o como parte de la cadena de scripts de db_creator.py.\n4 horas en 5140 canciones, Media de una canción cada 2.82 segundos\nTabla lyrics Campo Tipo Descripción id INTEGER Identificador único de la letra track_id INTEGER ID de la canción asociada (clave foránea a songs.id) lyrics TEXT El texto completo de la letra source TEXT La fuente de la letra (ej. ‘Genius’, ’lyrics.ovh’, ‘Happi’, ‘Musixmatch’) last_updated TIMESTAMP Fecha y hora de la última actualización",
    "tags": [],
    "title": "12. Letras",
    "uri": "/base_datos/12.-letras/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos",
    "content": "# posts_fresh_rss El script posts_fresh_rss.py se encarga de recuperar artículos y publicaciones de un servidor FreshRSS relacionados con entidades musicales (artistas, álbumes, sellos discográficos) y guardarlos en la base de datos para su posterior consulta.\nTabla feeds Clave Tipo Descripción freshrss_url TEXT URL base del servidor FreshRSS freshrss_username TEXT Nombre de usuario para autenticación en FreshRSS freshrss_password TEXT Contraseña para autenticación en FreshRSS db_path TEXT Ruta al archivo de base de datos SQLite freshrss_cache_path TEXT (opcional) Ruta al archivo de caché categories LIST Categorías a procesar (por defecto: ['Blogs', 'Revistas', 'Wallabag']) search_entities LIST Entidades a buscar (por ejemplo: artists, albums, labels) search_short_terms BOOLEAN Permitir o bloquear términos cortos (por defecto: False) ignore_patterns LIST Patrones a ignorar (por defecto incluye: 'mix-for-nts', etc.)",
    "description": "# posts_fresh_rss El script posts_fresh_rss.py se encarga de recuperar artículos y publicaciones de un servidor FreshRSS relacionados con entidades musicales (artistas, álbumes, sellos discográficos) y guardarlos en la base de datos para su posterior consulta.\nTabla feeds Clave Tipo Descripción freshrss_url TEXT URL base del servidor FreshRSS freshrss_username TEXT Nombre de usuario para autenticación en FreshRSS freshrss_password TEXT Contraseña para autenticación en FreshRSS db_path TEXT Ruta al archivo de base de datos SQLite freshrss_cache_path TEXT (opcional) Ruta al archivo de caché categories LIST Categorías a procesar (por defecto: ['Blogs', 'Revistas', 'Wallabag']) search_entities LIST Entidades a buscar (por ejemplo: artists, albums, labels) search_short_terms BOOLEAN Permitir o bloquear términos cortos (por defecto: False) ignore_patterns LIST Patrones a ignorar (por defecto incluye: 'mix-for-nts', etc.)",
    "tags": [],
    "title": "13. Articulos",
    "uri": "/base_datos/13.-articulos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos",
    "content": "# 10. Optimización CONSEJOS DE USO: - Para búsquedas de texto rápidas, usa las tablas virtuales '_fts': SELECT * FROM songs WHERE id IN (SELECT id FROM song_fts WHERE song_fts MATCH 'palabra_clave') - Utiliza las vistas 'view_song_details', 'view_album_stats', 'view_artist_stats', 'view_label_stats' y 'view_country_stats' para consultas comunes - Aprovecha las columnas desnormalizadas para consultas más rápidas: - album_year - artist_origin - album_art_path_denorm - has_lyrics - album_label - decade - Tablas normalizadas: - genres_normalized: Para consultas relacionadas con géneros - countries: Normaliza países para estadísticas - decades: Facilita consultas por década - Búsqueda avanzada: - song_fts: Búsqueda de texto completo en canciones - artist_fts: Búsqueda de texto completo en artistas - album_fts: Búsqueda de texto completo en álbumes - lyrics_fts: Búsqueda de texto completo en letras",
    "description": "# 10. Optimización CONSEJOS DE USO: - Para búsquedas de texto rápidas, usa las tablas virtuales '_fts': SELECT * FROM songs WHERE id IN (SELECT id FROM song_fts WHERE song_fts MATCH 'palabra_clave') - Utiliza las vistas 'view_song_details', 'view_album_stats', 'view_artist_stats', 'view_label_stats' y 'view_country_stats' para consultas comunes - Aprovecha las columnas desnormalizadas para consultas más rápidas: - album_year - artist_origin - album_art_path_denorm - has_lyrics - album_label - decade - Tablas normalizadas: - genres_normalized: Para consultas relacionadas con géneros - countries: Normaliza países para estadísticas - decades: Facilita consultas por década - Búsqueda avanzada: - song_fts: Búsqueda de texto completo en canciones - artist_fts: Búsqueda de texto completo en artistas - album_fts: Búsqueda de texto completo en álbumes - lyrics_fts: Búsqueda de texto completo en letras",
    "tags": [],
    "title": "20. Optimización",
    "uri": "/base_datos/20.-optimizaci%C3%B3n/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  credenciales",
    "content": "Desde esta url puedes crear un token para usar con discogs. Debes tener una cuenta registrada anteriormente. E internet.",
    "description": "Desde esta url puedes crear un token para usar con discogs. Debes tener una cuenta registrada anteriormente. E internet.",
    "tags": [],
    "title": "discogs",
    "uri": "/credenciales/discogs/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  credenciales",
    "content": "En esta página puedes crear tus credenciales, copia client-id y client-secret en un lugar fresco y seco",
    "description": "En esta página puedes crear tus credenciales, copia client-id y client-secret en un lugar fresco y seco",
    "tags": [],
    "title": "genius",
    "uri": "/credenciales/genius/index.html"
  },
  {
    "breadcrumb": "mfuz",
    "content": "Inicio Este script [[music_padre.py]] se encarga de gestionar las pestañas en que se cargaran los modulos. Para ello lee configuración del [[base_module.py]] y carga los modulos indicados en [[config.json]] junto a los argumentos necesarios.\nDebido al carácter modular de esta aplicación puedes activar o desactivar las pestañas deseadas, teniendo en cuenta configurar los requisitos correspondientes en el [[config]]",
    "description": "Inicio Este script [[music_padre.py]] se encarga de gestionar las pestañas en que se cargaran los modulos. Para ello lee configuración del [[base_module.py]] y carga los modulos indicados en [[config.json]] junto a los argumentos necesarios.\nDebido al carácter modular de esta aplicación puedes activar o desactivar las pestañas deseadas, teniendo en cuenta configurar los requisitos correspondientes en el [[config]]",
    "tags": [],
    "title": "Introducción",
    "uri": "/introduccion/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  credenciales",
    "content": "Crea una accediendo a este enlace\nLuego copien en un lugar seguro su api key y secret\nCrea una accediendo a este enlace\nLuego copien en un lugar seguro su api key y secret",
    "description": "Crea una accediendo a este enlace\nLuego copien en un lugar seguro su api key y secret\nCrea una accediendo a este enlace\nLuego copien en un lugar seguro su api key y secret",
    "tags": [],
    "title": "lastfm",
    "uri": "/credenciales/lastfm/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  credenciales",
    "content": "No necesitas nada para poder aprovechar este gran proyecto",
    "description": "No necesitas nada para poder aprovechar este gran proyecto",
    "tags": [],
    "title": "lirycs_ovh",
    "uri": "/credenciales/lirycs_ovh/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Modulos de la app",
    "content": "Music-fuzzy [[music_fuzzy_module.py]]\nEncargado de mostrar:\nCajón de búsqueda que acepta filtros Además de los filtros en menús desplegables para encontrar la música añadida recientemente a la base de datos, se pueden usar los siguientes atajos en el cajón de búsqueda:\na: artista\nb: álbum\ng: género\nListado de coincidencias con la búsqueda Los resultados se muestran separando los álbumes con headers, los álbumes de las canciones.\nPanel informativo del elemento seleccionado Si es una canción contendrá la letra, y en todos los casos mostrará cuando la haya:\nInformación sobre el artista en lastfm y wikipedia Información sobre el álbum en lastfm y wikipedia Metadata como Sello discográfico, ruta a la carpeta, bitrate Enlaces a servicios con información sobre artista o álbum Botón para añadir canción a una playlist de spotify en su panel correspondiente Botones Play Reproducirá el album o canción seleccionada Open Abrirá la carpeta del elemento seleccionado Script 1-3 Permiten añadir scripts personales para esas canciones\nnot done tags include #m_fuzzy tags include #music-fuzzy hide tags sort by due sort by priority sort by scheduled",
    "description": "Music-fuzzy [[music_fuzzy_module.py]]\nEncargado de mostrar:\nCajón de búsqueda que acepta filtros Además de los filtros en menús desplegables para encontrar la música añadida recientemente a la base de datos, se pueden usar los siguientes atajos en el cajón de búsqueda:\na: artista\nb: álbum\ng: género\nListado de coincidencias con la búsqueda Los resultados se muestran separando los álbumes con headers, los álbumes de las canciones.",
    "tags": [],
    "title": "Modulo 01 music-fuzzy",
    "uri": "/modulos/modulo-01-music-fuzzy/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Modulos de la app",
    "content": "Módulo 2: Editor de la base de datos Parecido al primer tab, este se permite editar cualquier campo de la base de datos.\nScript: [[editor_module.py]]\nnot done tags include #m_fuzzy tags include #db_editor hide tags sort by due sort by priority sort by scheduled",
    "description": "Módulo 2: Editor de la base de datos Parecido al primer tab, este se permite editar cualquier campo de la base de datos.\nScript: [[editor_module.py]]\nnot done tags include #m_fuzzy tags include #db_editor hide tags sort by due sort by priority sort by scheduled",
    "tags": [],
    "title": "Modulo 02 Editor de la base de datos",
    "uri": "/modulos/modulo-02-editor-de-la-base-de-datos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Modulos de la app",
    "content": "Módulo 3: Blogs playlists Pensado para crear una playlist mensual de cada blog musical que sigo:\nObtiene las urls a los posts no leídos de mi servidor freshrss y las separa por meses de publicación Busca en cada post, enlaces a youtube, bandcamp y soundcloud y los añade a la playlist Busca con yt-dl el nombre de cada enlace y crea un archivo .txt llamado igual que la playlist para poder mostrar el nombre cuando se pueda. Se pueden añadir urls a post singulares para crear una playlist del mismo y guardarla en playlist locales.\nActualmente reproduce las canciones en mpv\nScript: [[menu_blogs_module.py]]\nnot done tags include #m_fuzzy tags include #blogs hide tags sort by due sort by priority sort by scheduled",
    "description": "Módulo 3: Blogs playlists Pensado para crear una playlist mensual de cada blog musical que sigo:\nObtiene las urls a los posts no leídos de mi servidor freshrss y las separa por meses de publicación Busca en cada post, enlaces a youtube, bandcamp y soundcloud y los añade a la playlist Busca con yt-dl el nombre de cada enlace y crea un archivo .txt llamado igual que la playlist para poder mostrar el nombre cuando se pueda. Se pueden añadir urls a post singulares para crear una playlist del mismo y guardarla en playlist locales.",
    "tags": [],
    "title": "Modulo 03 Blogs",
    "uri": "/modulos/modulo-03-blogs/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Modulos de la app",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Modulo 04 Conciertos",
    "uri": "/modulos/modulo-04-conciertos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Modulos de la app",
    "content": "Módulo 5: Scripts Este módulos se encarga de lanzar unos scripts con diversos argumentos configurado todo ello en un JSON.\nScripts: [[scripts_module.py]]\nnot done tags include #m_fuzzy tags include #scripts hide tags sort by due sort by priority sort by scheduled",
    "description": "Módulo 5: Scripts Este módulos se encarga de lanzar unos scripts con diversos argumentos configurado todo ello en un JSON.\nScripts: [[scripts_module.py]]\nnot done tags include #m_fuzzy tags include #scripts hide tags sort by due sort by priority sort by scheduled",
    "tags": [],
    "title": "Modulo 05 Scripts",
    "uri": "/modulos/modulo-05-scripts/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Modulos de la app",
    "content": "Módulo 6: Muspy Este módulo le el archivo de los artistas y realizar búsquedas de los mismos en muspy y lo muestra en un listado.\nEs posible ver que artistas ya existen en la base de datos.\nScript: [[muspy_releases_module.py]]\nnot done tags include #m_fuzzy tags include #muspy hide tags sort by due sort by priority sort by scheduled",
    "description": "Módulo 6: Muspy Este módulo le el archivo de los artistas y realizar búsquedas de los mismos en muspy y lo muestra en un listado.\nEs posible ver que artistas ya existen en la base de datos.\nScript: [[muspy_releases_module.py]]\nnot done tags include #m_fuzzy tags include #muspy hide tags sort by due sort by priority sort by scheduled",
    "tags": [],
    "title": "Modulo 06 Muspy",
    "uri": "/modulos/modulo-06-muspy/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Modulos de la app",
    "content": "Módulo 7: Estadísticas",
    "description": "Módulo 7: Estadísticas",
    "tags": [],
    "title": "Modulo 07 Estadisticas",
    "uri": "/modulos/modulo-07-estadisticas/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Modulos de la app",
    "content": "Módulo 7: Lastfm scrobbler Este módulo muestra información de la última canción scrobbleada en lastfm, obtenida de la base de datos si existe en ella, asi como una lista con el número variable de canciones scrobbleadas.\nnot done tags include #m_fuzzy tags include #scrobbler hide tags sort by due sort by priority sort by scheduled Script: [[lastfm_scrobbler.py]]\nEjemplo para añadir elementos [[Lastfm scrobbler, añadir items de la base de datos]]",
    "description": "Módulo 7: Lastfm scrobbler Este módulo muestra información de la última canción scrobbleada en lastfm, obtenida de la base de datos si existe en ella, asi como una lista con el número variable de canciones scrobbleadas.\nnot done tags include #m_fuzzy tags include #scrobbler hide tags sort by due sort by priority sort by scheduled Script: [[lastfm_scrobbler.py]]\nEjemplo para añadir elementos [[Lastfm scrobbler, añadir items de la base de datos]]",
    "tags": [],
    "title": "Modulo 07 Lastfm scrobbler",
    "uri": "/modulos/modulo-07-lastfm-scrobbler/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Modulos de la app",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Modulo 08 Jaangle",
    "uri": "/modulos/modulo-08-jaangle/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Modulos de la app",
    "content": "Módulo 9: Enlaces Desde aquí podrás buscar cualquier canción, álbum o artista para obtener enlaces a los múltiples servicios musicales ofrecidos.\nnot done tags include #m_fuzzy tags include #Enlaces hide tags sort by due sort by priority sort by scheduled",
    "description": "Módulo 9: Enlaces Desde aquí podrás buscar cualquier canción, álbum o artista para obtener enlaces a los múltiples servicios musicales ofrecidos.\nnot done tags include #m_fuzzy tags include #Enlaces hide tags sort by due sort by priority sort by scheduled",
    "tags": [],
    "title": "Modulo 09 Enlaces",
    "uri": "/modulos/modulo-09-enlaces/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Modulos de la app",
    "content": "Módulo 10: Listas Spotify Permite crear nuevas playlists, buscar canciones y añadirlas o cargarlas desde otras playlists.\nnot done tags include #m_fuzzy tags include #spotify hide tags sort by due sort by priority sort by scheduled",
    "description": "Módulo 10: Listas Spotify Permite crear nuevas playlists, buscar canciones y añadirlas o cargarlas desde otras playlists.\nnot done tags include #m_fuzzy tags include #spotify hide tags sort by due sort by priority sort by scheduled",
    "tags": [],
    "title": "Módulo 10 Listas Spotify",
    "uri": "/modulos/m%C3%B3dulo-10-listas-spotify/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Modulos de la app",
    "content": "Módulo 11: Widgets Permite la búsqueda en los servicios listados de artistas, álbumes o canciones.\nBandcamp Soundcloud not done tags include #m_fuzzy tags include #widgets hide tags sort by due sort by priority sort by scheduled",
    "description": "Módulo 11: Widgets Permite la búsqueda en los servicios listados de artistas, álbumes o canciones.\nBandcamp Soundcloud not done tags include #m_fuzzy tags include #widgets hide tags sort by due sort by priority sort by scheduled",
    "tags": [],
    "title": "Módulo 11 Widgets",
    "uri": "/modulos/m%C3%B3dulo-11-widgets/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Modulos de la app",
    "content": "Módulo 12: Reproductor Siguiendo la reproducción de, por ahora Deadbeef\nnot done tags include #m_fuzzy tags include #Reproductor hide tags sort by due sort by priority sort by scheduled",
    "description": "Módulo 12: Reproductor Siguiendo la reproducción de, por ahora Deadbeef\nnot done tags include #m_fuzzy tags include #Reproductor hide tags sort by due sort by priority sort by scheduled",
    "tags": [],
    "title": "Módulo 12 Reproductor",
    "uri": "/modulos/m%C3%B3dulo-12-reproductor/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Modulos de la app",
    "content": "Módulo 132: Configuración Este es el módulo encargado de crear una UI para la configuración y permite modificar cualquier argumento recibido por el resto de módulos.\nLas claves del json [[Spaces/Scripts/menus/musica/config.json|config.json]] con múltiples opciones se mostrarán como un menú desplegable.\nScript: [[config_editor_module.py]]",
    "description": "Módulo 132: Configuración Este es el módulo encargado de crear una UI para la configuración y permite modificar cualquier argumento recibido por el resto de módulos.\nLas claves del json [[Spaces/Scripts/menus/musica/config.json|config.json]] con múltiples opciones se mostrarán como un menú desplegable.\nScript: [[config_editor_module.py]]",
    "tags": [],
    "title": "Módulo 132 Configuración",
    "uri": "/modulos/m%C3%B3dulo-132-configuraci%C3%B3n/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  credenciales",
    "content": "Otra maravilla del código abierto, en su página puedes agregar manualmente tus artistas favoritos para poder estar al tanto por mail o RSS de sus lanzamientos.\nPuedes obtener su id tras crear una cuenta.\nPara obtener el id y usarlo en esta app puedes copiar el enlace del icono RSS:\nY quedate con la última parte tras id=\nhttps://muspy.com/feed?id=este_será_tu_id",
    "description": "Otra maravilla del código abierto, en su página puedes agregar manualmente tus artistas favoritos para poder estar al tanto por mail o RSS de sus lanzamientos.\nPuedes obtener su id tras crear una cuenta.\nPara obtener el id y usarlo en esta app puedes copiar el enlace del icono RSS:\nY quedate con la última parte tras id=",
    "tags": [],
    "title": "muspy",
    "uri": "/credenciales/muspy/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  credenciales",
    "content": "Primero accede con tu cuenta spotify aquí, que no, que era aquí\nLuego accede a tu dashboard\nCrean una app nueva especificando un nombre y una redirect-uri, copien esta última junto al client-id y client-secret\nTen en cuenta que Spotify permite un máximo de 20.000 consultas por día, tendrás que ajustar el lanzamiento del script si superas dicho número de elementos.\nSe realizará una consulta por cada artista, álbum y canción existente en la base de datos. Una vez usado el primer script [[db_musica_path.py]] puedes consultar cuantos elementos existen en tu base de datos usando [[Spaces/Scripts/menus/musica/base_datos/tools/consultar_items_db.py]]",
    "description": "Primero accede con tu cuenta spotify aquí, que no, que era aquí\nLuego accede a tu dashboard\nCrean una app nueva especificando un nombre y una redirect-uri, copien esta última junto al client-id y client-secret\nTen en cuenta que Spotify permite un máximo de 20.000 consultas por día, tendrás que ajustar el lanzamiento del script si superas dicho número de elementos.",
    "tags": [],
    "title": "spotify",
    "uri": "/credenciales/spotify/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  credenciales",
    "content": "google tiene el nivel gratuito más bajo de consultas diarias, 1000. Por lo que si necesitas realizar estas múltiples veces deberías planearlo con antelación. Quien avisa es avisador.",
    "description": "google tiene el nivel gratuito más bajo de consultas diarias, 1000. Por lo que si necesitas realizar estas múltiples veces deberías planearlo con antelación. Quien avisa es avisador.",
    "tags": [],
    "title": "youtube",
    "uri": "/credenciales/youtube/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  01. Archivos locales",
    "content": "Con estos argumentos puedes crear tu base de datos con el esquema necesario para todos los demás scripts.\nArgumento Tipo Descripción Ejemplo --root-path Obligatorio Carpeta con los archivos de música para añadir a la base de datos --root-path $HOME/Música --db-path Obligatorio Ruta a la base de datos --db_path $HOME/Musica/flac.db --lastfm_api_key Opcional Puedes añadir tu api key para obtener la bio de lastfm --lastfm_api_key 123456789qwerasdfzxcv --update-schema Opcional Actualiza la base de datos con las tablas necesarias para este programa --update-schema --update-bitrates Opcional Calcula un rango de bitrate por álbum --update-bitrates --update-replay-gain Opcional Actualiza replaygain para los elementos de la base de datos --update-replay-gain --optimize Opcional Mejora el rendimiento de la base de datos --optimize --quick-scan Alternativo Muestra un vistazo rápido de la base de datos --quick-scan --force-update Opcional Reescaneará de nuevo el directorio para añadir nuevos. Se puede combinar con –update-… --force-update --help Alternativo Muestra un panel informativo --help",
    "description": "Con estos argumentos puedes crear tu base de datos con el esquema necesario para todos los demás scripts.\nArgumento Tipo Descripción Ejemplo --root-path Obligatorio Carpeta con los archivos de música para añadir a la base de datos --root-path $HOME/Música --db-path Obligatorio Ruta a la base de datos --db_path $HOME/Musica/flac.db --lastfm_api_key Opcional Puedes añadir tu api key para obtener la bio de lastfm --lastfm_api_key 123456789qwerasdfzxcv --update-schema Opcional Actualiza la base de datos con las tablas necesarias para este programa --update-schema --update-bitrates Opcional Calcula un rango de bitrate por álbum --update-bitrates --update-replay-gain Opcional Actualiza replaygain para los elementos de la base de datos --update-replay-gain --optimize Opcional Mejora el rendimiento de la base de datos --optimize --quick-scan Alternativo Muestra un vistazo rápido de la base de datos --quick-scan --force-update Opcional Reescaneará de nuevo el directorio para añadir nuevos. Se puede combinar con –update-… --force-update --help Alternativo Muestra un panel informativo --help",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/01.-archivos-locales/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  02. Scrobbles lastfm",
    "content": "Argumento Descripción --config Ruta al archivo de configuración JSON --lastfm_user Nombre de usuario de Last.fm --lastfm-api-key Clave de API de Last.fm --db-path Ruta al archivo de base de datos SQLite --force-update Bandera para forzar una actualización completa (borra scrobbles existentes) --output-json Ruta para guardar todos los scrobbles en formato JSON (opcional) --interactive Modo interactivo para añadir nuevos elementos --cache-dir Directorio para archivos de caché",
    "description": "Argumento Descripción --config Ruta al archivo de configuración JSON --lastfm_user Nombre de usuario de Last.fm --lastfm-api-key Clave de API de Last.fm --db-path Ruta al archivo de base de datos SQLite --force-update Bandera para forzar una actualización completa (borra scrobbles existentes) --output-json Ruta para guardar todos los scrobbles en formato JSON (opcional) --interactive Modo interactivo para añadir nuevos elementos --cache-dir Directorio para archivos de caché",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/02.-scrobbles-lastfm/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  03. Listens listenbrainz",
    "content": "Argumento Tipo Descripción Valor por Defecto --config str Ruta al archivo de configuración JSON — --user str Nombre de usuario en ListenBrainz — --token str Token de autenticación para ListenBrainz — --db-path str Ruta al archivo de base de datos SQLite — --force-update bool Si se debe forzar una actualización completa (ignorando el último timestamp) False --output-json str Ruta para guardar los listens en formato JSON (opcional) — --max-items int Número máximo de listens a obtener por llamada 1000 --limit-process int Número máximo de listens a procesar (opcional) — --reprocess-existing bool Si se deben reprocesar los listens existentes con los métodos de coincidencia seleccionados False --normalize-strings bool Si se deben normalizar las cadenas para mejorar coincidencias False --enhanced-matching bool Si se deben crear y usar tablas normalizadas para buscar coincidencias False --mbid-matching bool Si se debe intentar coincidencia por MusicBrainz IDs False --fuzzy-matching bool Si se debe usar coincidencia difusa para encontrar canciones False --analyze-mismatches bool Si se deben analizar las razones de discrepancias False --use-all-matching bool Si se deben utilizar todas las técnicas de coincidencia mejoradas False",
    "description": "Argumento Tipo Descripción Valor por Defecto --config str Ruta al archivo de configuración JSON — --user str Nombre de usuario en ListenBrainz — --token str Token de autenticación para ListenBrainz — --db-path str Ruta al archivo de base de datos SQLite — --force-update bool Si se debe forzar una actualización completa (ignorando el último timestamp) False --output-json str Ruta para guardar los listens en formato JSON (opcional) — --max-items int Número máximo de listens a obtener por llamada 1000 --limit-process int Número máximo de listens a procesar (opcional) — --reprocess-existing bool Si se deben reprocesar los listens existentes con los métodos de coincidencia seleccionados False --normalize-strings bool Si se deben normalizar las cadenas para mejorar coincidencias False --enhanced-matching bool Si se deben crear y usar tablas normalizadas para buscar coincidencias False --mbid-matching bool Si se debe intentar coincidencia por MusicBrainz IDs False --fuzzy-matching bool Si se debe usar coincidencia difusa para encontrar canciones False --analyze-mismatches bool Si se deben analizar las razones de discrepancias False --use-all-matching bool Si se deben utilizar todas las técnicas de coincidencia mejoradas False",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/03.-listens-listenbrainz/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  04. Redes",
    "content": "Argumento Tipo Descripción Valor por Defecto config dict Diccionario con la configuración — config.db_path str Ruta al archivo de la base de datos SQLite (obligatorio) — config.discogs_token str Token para la API de Discogs (obligatorio) — config.rate_limit float Tiempo de espera entre solicitudes (por defecto: 1.0) 1.0 config.max_retries int Número máximo de reintentos para solicitudes fallidas (por defecto: 3) 3 config.batch_size int Cantidad de artistas a procesar por lote (por defecto: 50) 50 config.force_update bool Forzar actualización incluso si ya existen datos (por defecto: False) False config.missing_only bool Procesar solo artistas sin registro de redes sociales (por defecto: True) True config.concurrent_workers int Número de hilos para procesamiento en paralelo (por defecto: 1) 1 config.user_agent str Agente de usuario para las solicitudes HTTP (por defecto: 'MusicDatabaseApp/1.0') 'MusicDatabaseApp/1.0'",
    "description": "Argumento Tipo Descripción Valor por Defecto config dict Diccionario con la configuración — config.db_path str Ruta al archivo de la base de datos SQLite (obligatorio) — config.discogs_token str Token para la API de Discogs (obligatorio) — config.rate_limit float Tiempo de espera entre solicitudes (por defecto: 1.0) 1.0 config.max_retries int Número máximo de reintentos para solicitudes fallidas (por defecto: 3) 3 config.batch_size int Cantidad de artistas a procesar por lote (por defecto: 50) 50 config.force_update bool Forzar actualización incluso si ya existen datos (por defecto: False) False config.missing_only bool Procesar solo artistas sin registro de redes sociales (por defecto: True) True config.concurrent_workers int Número de hilos para procesamiento en paralelo (por defecto: 1) 1 config.user_agent str Agente de usuario para las solicitudes HTTP (por defecto: 'MusicDatabaseApp/1.0') 'MusicDatabaseApp/1.0'",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/04.-redes/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  05. Musicbrainz album info",
    "content": "Argumento Descripción Requerido Valor por defecto / Tipo --config [config_file] Ruta al archivo de configuración JSON Sí (si no se usa --db-path) Archivo JSON --db-path [path] Ruta a la base de datos SQLite Alternativa a --config - --limit [n] Limita el número de lanzamientos a procesar No Entero --force-update Fuerza la actualización de entradas existentes No Bandera --mode [mode] Modo de operación: 'auto' o 'manual' No auto/manual --cache-file [path] Ruta al archivo de caché para reanudar procesamiento No Archivo JSON --skip-properties [ids] IDs de propiedades de Wikidata a omitir No Lista separada por comas --interactive Activa modo interactivo con más información y confirmaciones No Bandera --log-level [level] Nivel de detalle del log (DEBUG, INFO, WARNING, ERROR) No INFO",
    "description": "Argumento Descripción Requerido Valor por defecto / Tipo --config [config_file] Ruta al archivo de configuración JSON Sí (si no se usa --db-path) Archivo JSON --db-path [path] Ruta a la base de datos SQLite Alternativa a --config - --limit [n] Limita el número de lanzamientos a procesar No Entero --force-update Fuerza la actualización de entradas existentes No Bandera --mode [mode] Modo de operación: 'auto' o 'manual' No auto/manual --cache-file [path] Ruta al archivo de caché para reanudar procesamiento No Archivo JSON --skip-properties [ids] IDs de propiedades de Wikidata a omitir No Lista separada por comas --interactive Activa modo interactivo con más información y confirmaciones No Bandera --log-level [level] Nivel de detalle del log (DEBUG, INFO, WARNING, ERROR) No INFO",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/05.-musicbrainz-album-info/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  06. Musicbrainz canciones",
    "content": "Argumento Descripción Obligatorio --config Ruta al archivo de configuración JSON Sí --db-path Ruta a la base de datos SQLite (sobrescribe valor en config) No --force-update Fuerza la actualización de todos los registros No --interactive Modo interactivo para confirmar operaciones No --verbose Nivel de detalle en los logs No",
    "description": "Argumento Descripción Obligatorio --config Ruta al archivo de configuración JSON Sí --db-path Ruta a la base de datos SQLite (sobrescribe valor en config) No --force-update Fuerza la actualización de todos los registros No --interactive Modo interactivo para confirmar operaciones No --verbose Nivel de detalle en los logs No",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/06.-musicbrainz-canciones/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  07. Enlaces artistas",
    "content": "Argumento Tipo Descripción --config Obligatorio Ruta al archivo de configuración JSON --artist Opcional Buscar un artista específico --album Opcional Buscar un álbum específico --days Opcional Actualizar registros más antiguos que N días --force-update Flag Forzar actualización de todos los registros --missing-only Flag Actualizar solo registros con datos faltantes --older-only Flag Actualizar solo registros más antiguos --summary-only Flag Mostrar solo resumen sin actualizar --debug Flag Activar modo debug con screenshots --disable-services Lista Deshabilitar servicios específicos",
    "description": "Argumento Tipo Descripción --config Obligatorio Ruta al archivo de configuración JSON --artist Opcional Buscar un artista específico --album Opcional Buscar un álbum específico --days Opcional Actualizar registros más antiguos que N días --force-update Flag Forzar actualización de todos los registros --missing-only Flag Actualizar solo registros con datos faltantes --older-only Flag Actualizar solo registros más antiguos --summary-only Flag Mostrar solo resumen sin actualizar --debug Flag Activar modo debug con screenshots --disable-services Lista Deshabilitar servicios específicos",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/07.-enlaces-artistas/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  08. Enlaces albums",
    "content": "Argumento Descripción Tipo / Valor por Defecto Obligatorio --db-path Ruta a la base de datos SQLite Cadena Sí --missing-only Solo procesa álbumes con enlaces faltantes Bandera (booleano) No --delay Retraso entre solicitudes en segundos float, por defecto: 1.0 No --cache-dir Directorio para el archivo de caché Cadena, por defecto: ~/.cache/music_db No --user-agent Agente de usuario para solicitudes HTTP Cadena, por defecto: 'MusicLibraryManager/1.0' No --log-level Nivel de logging Cadena, por defecto: INFO No --batch-size Número de álbumes a procesar en cada lote Entero, por defecto: 50 No",
    "description": "Argumento Descripción Tipo / Valor por Defecto Obligatorio --db-path Ruta a la base de datos SQLite Cadena Sí --missing-only Solo procesa álbumes con enlaces faltantes Bandera (booleano) No --delay Retraso entre solicitudes en segundos float, por defecto: 1.0 No --cache-dir Directorio para el archivo de caché Cadena, por defecto: ~/.cache/music_db No --user-agent Agente de usuario para solicitudes HTTP Cadena, por defecto: 'MusicLibraryManager/1.0' No --log-level Nivel de logging Cadena, por defecto: INFO No --batch-size Número de álbumes a procesar en cada lote Entero, por defecto: 50 No",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/08.-enlaces-albums/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  09. Enlaces canciones",
    "content": "Argumento Tipo Descripción Valor predeterminado db_path str Ruta a la base de datos SQLite musica.db checkpoint_path str Directorio para guardar el progreso en formato JSON ./checkpoints log_dir str Directorio para los archivos de registro ./logs cache_dir str Directorio para archivos de caché por servicio ./caches services list/str Lista de servicios a buscar (spotify, lastfm, youtube) limit int Límite de canciones a procesar (0 para todas) 0 force_update bool Actualizar enlaces existentes False delete_old bool Eliminar enlaces antiguos si no se encuentra uno nuevo False spotify_client_id str ID de cliente para la API de Spotify spotify_client_secret str Secreto de cliente para la API de Spotify lastfm_api_key str Clave de API de Last.fm google_api_key str Clave de API de Google google_cx str ID de motor de búsqueda personalizado de Google max_retries int Número máximo de reintentos para solicitudes fallidas 3 retry_delay int Tiempo de espera entre reintentos (segundos) 5 batch_size int Tamaño del lote para procesar canciones 100 no_progress bool Desactivar barra de progreso False interactive bool Modo interactivo para confirmaciones False",
    "description": "Argumento Tipo Descripción Valor predeterminado db_path str Ruta a la base de datos SQLite musica.db checkpoint_path str Directorio para guardar el progreso en formato JSON ./checkpoints log_dir str Directorio para los archivos de registro ./logs cache_dir str Directorio para archivos de caché por servicio ./caches services list/str Lista de servicios a buscar (spotify, lastfm, youtube) limit int Límite de canciones a procesar (0 para todas) 0 force_update bool Actualizar enlaces existentes False delete_old bool Eliminar enlaces antiguos si no se encuentra uno nuevo False spotify_client_id str ID de cliente para la API de Spotify spotify_client_secret str Secreto de cliente para la API de Spotify lastfm_api_key str Clave de API de Last.fm google_api_key str Clave de API de Google google_cx str ID de motor de búsqueda personalizado de Google max_retries int Número máximo de reintentos para solicitudes fallidas 3 retry_delay int Tiempo de espera entre reintentos (segundos) 5 batch_size int Tamaño del lote para procesar canciones 100 no_progress bool Desactivar barra de progreso False interactive bool Modo interactivo para confirmaciones False",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/09.-enlaces-canciones/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  10. Wikipedia",
    "content": "Argumento Tipo Descripción Valor por Defecto --config str Ruta al archivo de configuración JSON (obligatorio) — --log-file str Archivo de registro para seguimiento del progreso — --db-path str Ruta a la base de datos SQLite — --type str Tipo de entidad a actualizar (artists, albums, artists_content, albums_content, labels, labels_content) — --user-agent str User-Agent para las peticiones a MusicBrainz — --modo str Tipo de lanzamiento: auto o manual — --force-update bool Flag para forzar la actualización de todos los elementos False",
    "description": "Argumento Tipo Descripción Valor por Defecto --config str Ruta al archivo de configuración JSON (obligatorio) — --log-file str Archivo de registro para seguimiento del progreso — --db-path str Ruta a la base de datos SQLite — --type str Tipo de entidad a actualizar (artists, albums, artists_content, albums_content, labels, labels_content) — --user-agent str User-Agent para las peticiones a MusicBrainz — --modo str Tipo de lanzamiento: auto o manual — --force-update bool Flag para forzar la actualización de todos los elementos False",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/10.-wikipedia/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  11. Musicbrainz sellos",
    "content": "Clave Descripción Opcional db_path Ruta a la base de datos SQLite No cache_path Ruta al directorio de caché Sí log_level Nivel de registro (DEBUG, INFO, WARNING, ERROR) Sí mb_sellos Configuración específica del módulo No",
    "description": "Clave Descripción Opcional db_path Ruta a la base de datos SQLite No cache_path Ruta al directorio de caché Sí log_level Nivel de registro (DEBUG, INFO, WARNING, ERROR) Sí mb_sellos Configuración específica del módulo No",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/11.-musicbrainz-sellos/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  11. Youtube links de canciones",
    "content": "Argumento Descripción Valor por Defecto db_path Ruta a la base de datos SQLite — youtube_api_key Clave de API de YouTube — lastfm_api_key Clave de API de Last.fm — rate_limit Tiempo entre solicitudes API (segundos) 1.0 user_agent Agente de usuario para solicitudes HTTP 'MusicDB/1.0' missing_only Solo procesar elementos sin enlaces True cache_file Ruta del archivo de caché PROJECT_ROOT/.content/cache/youtube_links_cache.json force_update Forzar actualización incluso si hay datos en caché False batch_size Número de elementos a procesar por lote 100 max_retries Máximo de reintentos para solicitudes fallidas 3 use_scrapers Usar scraping si falla la API True entity_types Tipos de entidades a procesar ['songs'] log_file Ruta del archivo de log PROJECT_ROOT/.content/logs/youtube_links.log log_level Nivel de detalle del registro 'INFO' concurrent_workers Número de procesos simultáneos 4 query_template Plantilla de búsqueda en YouTube \"{artist} - {title} official\" max_results Número máximo de resultados por búsqueda 5 min_match_score Puntuación mínima para considerar coincidencia 0.7",
    "description": "Argumento Descripción Valor por Defecto db_path Ruta a la base de datos SQLite — youtube_api_key Clave de API de YouTube — lastfm_api_key Clave de API de Last.fm — rate_limit Tiempo entre solicitudes API (segundos) 1.0 user_agent Agente de usuario para solicitudes HTTP 'MusicDB/1.0' missing_only Solo procesar elementos sin enlaces True cache_file Ruta del archivo de caché PROJECT_ROOT/.content/cache/youtube_links_cache.json force_update Forzar actualización incluso si hay datos en caché False batch_size Número de elementos a procesar por lote 100 max_retries Máximo de reintentos para solicitudes fallidas 3 use_scrapers Usar scraping si falla la API True entity_types Tipos de entidades a procesar ['songs'] log_file Ruta del archivo de log PROJECT_ROOT/.content/logs/youtube_links.log log_level Nivel de detalle del registro 'INFO' concurrent_workers Número de procesos simultáneos 4 query_template Plantilla de búsqueda en YouTube \"{artist} - {title} official\" max_results Número máximo de resultados por búsqueda 5 min_match_score Puntuación mínima para considerar coincidencia 0.7",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/11.-youtube-links-de-canciones/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  12. Letras",
    "content": "Argumento Tipo Descripción Valor por Defecto --db_path str Ruta a la base de datos SQLite (requerido) — --force-update bool Bandera para forzar la actualización de todas las letras, incluso las que ya existen False --batch-size int Número de canciones a procesar por lote 1000 --no-resume bool Bandera para no continuar desde el último punto guardado False --config str Archivo de configuración JSON con parámetros adicionales —",
    "description": "Argumento Tipo Descripción Valor por Defecto --db_path str Ruta a la base de datos SQLite (requerido) — --force-update bool Bandera para forzar la actualización de todas las letras, incluso las que ya existen False --batch-size int Número de canciones a procesar por lote 1000 --no-resume bool Bandera para no continuar desde el último punto guardado False --config str Archivo de configuración JSON con parámetros adicionales —",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/12.-letras/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  13. Articulos",
    "content": "Clave Tipo Descripción freshrss_url TEXT URL base del servidor FreshRSS freshrss_username TEXT Nombre de usuario para autenticación en FreshRSS freshrss_password TEXT Contraseña para autenticación en FreshRSS db_path TEXT Ruta al archivo de base de datos SQLite freshrss_cache_path TEXT (opcional) Ruta al archivo de caché categories LIST Categorías a procesar (por defecto: ['Blogs', 'Revistas', 'Wallabag']) search_entities LIST Entidades a buscar (por ejemplo: artists, albums, labels) search_short_terms BOOLEAN Permitir o bloquear términos cortos (por defecto: False) ignore_patterns LIST Patrones a ignorar (por defecto incluye: 'mix-for-nts', etc.)",
    "description": "Clave Tipo Descripción freshrss_url TEXT URL base del servidor FreshRSS freshrss_username TEXT Nombre de usuario para autenticación en FreshRSS freshrss_password TEXT Contraseña para autenticación en FreshRSS db_path TEXT Ruta al archivo de base de datos SQLite freshrss_cache_path TEXT (opcional) Ruta al archivo de caché categories LIST Categorías a procesar (por defecto: ['Blogs', 'Revistas', 'Wallabag']) search_entities LIST Entidades a buscar (por ejemplo: artists, albums, labels) search_short_terms BOOLEAN Permitir o bloquear términos cortos (por defecto: False) ignore_patterns LIST Patrones a ignorar (por defecto incluye: 'mix-for-nts', etc.)",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/13.-articulos/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuz",
    "content": "Actualmente la aplicación solo está disponible para sistemas Linux, ya sea un Sistema Operativo, o el submódulo wsl para windows\nPara ello necesitarás:\nClonar el repositorio desde github git clone https://github.com/volteret4/mfuz Instalar los requisitos ![[Spaces/Blogs/blogs/snipets y scripts/music-fuzzy/requisitos/requisitos|requisitos]]\nConfigurar el config file ya sea json o yml ![[Spaces/Blogs/blogs/snipets y scripts/music-fuzzy/instalacion/config json|config json]]",
    "description": "Actualmente la aplicación solo está disponible para sistemas Linux, ya sea un Sistema Operativo, o el submódulo wsl para windows\nPara ello necesitarás:\nClonar el repositorio desde github git clone https://github.com/volteret4/mfuz Instalar los requisitos ![[Spaces/Blogs/blogs/snipets y scripts/music-fuzzy/requisitos/requisitos|requisitos]]\nConfigurar el config file ya sea json o yml ![[Spaces/Blogs/blogs/snipets y scripts/music-fuzzy/instalacion/config json|config json]]",
    "tags": [],
    "title": "instalación",
    "uri": "/instalacion/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  05. Musicbrainz album info",
    "content": "Tipo Ubicación por Defecto Descripción Archivo de caché mb_release_group_cache.json JSON con el estado de procesamiento para reanudar tareas Archivo de log logs/mb_release_group.log Registro de mensajes informativos y errores",
    "description": "Tipo Ubicación por Defecto Descripción Archivo de caché mb_release_group_cache.json JSON con el estado de procesamiento para reanudar tareas Archivo de log logs/mb_release_group.log Registro de mensajes informativos y errores",
    "tags": [],
    "title": "Archivos",
    "uri": "/base_datos/05.-musicbrainz-album-info/archivos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  06. Musicbrainz canciones",
    "content": "Tipo Ubicación típica Descripción Log logs/mb_data_canciones.log Registra la ejecución; se crea o añade según configuración Caché cache/musicbrainz/ Almacena respuestas de la API para reducir llamadas Otros No aplica No modifica archivos de audio originales",
    "description": "Tipo Ubicación típica Descripción Log logs/mb_data_canciones.log Registra la ejecución; se crea o añade según configuración Caché cache/musicbrainz/ Almacena respuestas de la API para reducir llamadas Otros No aplica No modifica archivos de audio originales",
    "tags": [],
    "title": "Archivos",
    "uri": "/base_datos/06.-musicbrainz-canciones/archivos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  13. Articulos",
    "content": "Tipo Ruta por Defecto / Configurada Formato Descripción / Contenido Principal Caché cache/freshrss_cache.json JSON Guarda artículos ya procesados para evitar duplicados. Estructura: Identificadores únicos y metadatos de los artículos Log Determinada por configuración de logging Texto plano Registra eventos del proceso con nivel INFO por defecto. Incluye: - Inicio y finalización del proceso - Errores de conexión o autenticación - Entidades encontradas en artículos - Errores al procesar artículos",
    "description": "Tipo Ruta por Defecto / Configurada Formato Descripción / Contenido Principal Caché cache/freshrss_cache.json JSON Guarda artículos ya procesados para evitar duplicados. Estructura: Identificadores únicos y metadatos de los artículos Log Determinada por configuración de logging Texto plano Registra eventos del proceso con nivel INFO por defecto. Incluye: - Inicio y finalización del proceso - Errores de conexión o autenticación - Entidades encontradas en artículos - Errores al procesar artículos",
    "tags": [],
    "title": "Archivos",
    "uri": "/base_datos/13.-articulos/archivos/index.html"
  },
  {
    "breadcrumb": "mfuz",
    "content": "Para poder crear la base de datos tienes varias opciones:\nCrearla con archivos locales Extraer información de tus scrobbles en lastfm o listenbrainz Obtener los artistas que sigues en spotify y sus discografías TODO Procesar los artistas que sigues en muspy TODO Todo ello secuencialmente Dependiendo de la cantidad de contenido que tengas, estas tareas pueden llevar un tiempo, es recomendable el uso de un pequeño servidor para realizar estas tareas sin consumir mucho tiempo y consecuentemente dinero.\nEn cada paso se dan unas estimaciones del tiempo consumido\nTodas las consultas respetan los limites establecidas por cada api, aunque las restricciones diarias pausaran el script que alcanze el límite hasta que este sea reestablecido\nEl resto de scripts son totalmente opcionales, cada uno de ellos añadirá información a la base de datos, especificada en cada módulo. Del mismo modo es posible que requiera de ciertas credenciales o paquetes de python.\nDependencias totales pip install requests beautifulsoup4 spotipy musicbrainzngs python3-discogs-client pylast python-youtube-search playwright tqdm google-api-python-client ?? Scripts Auxiliares Estos scripts puedes usarlos durante el proceso de creación o al final para consultar datos sobre la base de datos.\n[[estadisticas_db.py]] Muestra detalladamente el estado de la base de datos en comparación a una tabla completa finalizando todos los scripts. Uso python estadisticas_db.py --db-path basedatos.db [[Spaces/Scripts/menus/musica/base_datos/tools/consultar_items_db.py|consultar_items_db.py]] Puedes obtener diversos campos de la base de datos usando varios filtros. Leer mas aqui TODO [[unir_artistas.py]] Permite unir artistas bajo un mismo nombre, útil cuando te aparecen Chimobayo feat. Björk o similares colaboraciones. not done tags include #create_db short mode sort by due sort by priority sort by scheduled",
    "description": "Para poder crear la base de datos tienes varias opciones:\nCrearla con archivos locales Extraer información de tus scrobbles en lastfm o listenbrainz Obtener los artistas que sigues en spotify y sus discografías TODO Procesar los artistas que sigues en muspy TODO Todo ello secuencialmente Dependiendo de la cantidad de contenido que tengas, estas tareas pueden llevar un tiempo, es recomendable el uso de un pequeño servidor para realizar estas tareas sin consumir mucho tiempo y consecuentemente dinero.",
    "tags": [],
    "title": "Creación de la base de datos",
    "uri": "/base_datos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  07. Enlaces artistas",
    "content": "Servicio Credenciales Descripción Spotify client_id, client_secret Credenciales de Spotify Developer Last.fm api_key, api_secret Claves de API de Last.fm Discogs token Token de acceso para la API de Discogs MusicBrainz No requiere credenciales Usa un user-agent personalizado",
    "description": "Servicio Credenciales Descripción Spotify client_id, client_secret Credenciales de Spotify Developer Last.fm api_key, api_secret Claves de API de Last.fm Discogs token Token de acceso para la API de Discogs MusicBrainz No requiere credenciales Usa un user-agent personalizado",
    "tags": [],
    "title": "Credenciales",
    "uri": "/base_datos/07.-enlaces-artistas/credenciales/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  09. Enlaces canciones",
    "content": "Spotify API (client_id, client_secret) Last.fm API (api_key) Google API (api_key, custom_search_engine_id)",
    "description": "Spotify API (client_id, client_secret) Last.fm API (api_key) Google API (api_key, custom_search_engine_id)",
    "tags": [],
    "title": "Credenciales",
    "uri": "/base_datos/09.-enlaces-canciones/credenciales/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  11. Musicbrainz sellos",
    "content": "Variable Descripción Opcional MUSICBRAINZ_APP Nombre de la aplicación para usar la API de MusicBrainz No MUSICBRAINZ_VERSION Versión de la aplicación No MUSICBRAINZ_EMAIL Correo electrónico para identificación en MusicBrainz No DISCOGS_TOKEN Token de autenticación para la API de Discogs Sí",
    "description": "Variable Descripción Opcional MUSICBRAINZ_APP Nombre de la aplicación para usar la API de MusicBrainz No MUSICBRAINZ_VERSION Versión de la aplicación No MUSICBRAINZ_EMAIL Correo electrónico para identificación en MusicBrainz No DISCOGS_TOKEN Token de autenticación para la API de Discogs Sí",
    "tags": [],
    "title": "Credenciales",
    "uri": "/base_datos/11.-musicbrainz-sellos/credenciales/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  11. Youtube links de canciones",
    "content": "Clave Descripción Obligatoria YOUTUBE_API_KEY Clave de API de YouTube (console.developers.google.com) Sí LASTFM_API_KEY Clave de API de Last.fm (last.fm/api) Sí USER_AGENT User-Agent personalizado para solicitudes HTTP Sí",
    "description": "Clave Descripción Obligatoria YOUTUBE_API_KEY Clave de API de YouTube (console.developers.google.com) Sí LASTFM_API_KEY Clave de API de Last.fm (last.fm/api) Sí USER_AGENT User-Agent personalizado para solicitudes HTTP Sí",
    "tags": [],
    "title": "Credenciales",
    "uri": "/base_datos/11.-youtube-links-de-canciones/credenciales/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  01. Archivos locales",
    "content": "Rellena las tablas artists, álbums y songs con:\nCampo Origen Descripción file_path Metadata Ruta completa al archivo de audio title Metadata Título de la canción track_number Metadata Número de pista dentro del álbum artist Metadata Artista principal album_artist Metadata Artista del álbum (puede diferir del artista de la pista) album Metadata Nombre del álbum date Metadata Año de publicación o grabación genre Metadata Género musical label Metadata Sello discográfico mbid Metadata Identificador MusicBrainz last_modified Archivo Fecha de última modificación del archivo added_timestamp Sistema Momento exacto en que fue añadido a la base de datos added_week Derivado Semana del año en la que fue añadido added_month Derivado Mes en que fue añadido added_year Derivado Año en que fue añadido folder_path Sistema Carpeta donde se encuentra el archivo replay_gain_album_gain Metadata Ganancia de volumen del álbum (ReplayGain) replay_gain_album_peak Metadata Pico de volumen del álbum (ReplayGain) replay_gain_track_gain Metadata Ganancia de volumen de la pista (ReplayGain) replay_gain_track_peak Metadata Pico de volumen de la pista (ReplayGain)",
    "description": "Rellena las tablas artists, álbums y songs con:\nCampo Origen Descripción file_path Metadata Ruta completa al archivo de audio title Metadata Título de la canción track_number Metadata Número de pista dentro del álbum artist Metadata Artista principal album_artist Metadata Artista del álbum (puede diferir del artista de la pista) album Metadata Nombre del álbum date Metadata Año de publicación o grabación genre Metadata Género musical label Metadata Sello discográfico mbid Metadata Identificador MusicBrainz last_modified Archivo Fecha de última modificación del archivo added_timestamp Sistema Momento exacto en que fue añadido a la base de datos added_week Derivado Semana del año en la que fue añadido added_month Derivado Mes en que fue añadido added_year Derivado Año en que fue añadido folder_path Sistema Carpeta donde se encuentra el archivo replay_gain_album_gain Metadata Ganancia de volumen del álbum (ReplayGain) replay_gain_album_peak Metadata Pico de volumen del álbum (ReplayGain) replay_gain_track_gain Metadata Ganancia de volumen de la pista (ReplayGain) replay_gain_track_peak Metadata Pico de volumen de la pista (ReplayGain)",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/01.-archivos-locales/datos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  02. Scrobbles lastfm",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/02.-scrobbles-lastfm/datos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  03. Listens listenbrainz",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/03.-listens-listenbrainz/datos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  04. Redes",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/04.-redes/datos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  08. Enlaces albums",
    "content": "album_links (principal) Crea la tabla si no existe Actualiza los enlaces para cada álbum albums (referencia) Lee información sobre álbumes (id, name, artist_id) No modifica directamente esta tabla",
    "description": "album_links (principal) Crea la tabla si no existe Actualiza los enlaces para cada álbum albums (referencia) Lee información sobre álbumes (id, name, artist_id) No modifica directamente esta tabla",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/08.-enlaces-albums/datos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  10. Wikipedia",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/10.-wikipedia/datos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  12. Letras",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/12.-letras/datos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  07. Enlaces artistas",
    "content": "Tipo Ruta Descripción Logs logs/enlaces_artista_album_{timestamp}.log Registros de ejecución del script Caché cache/spotify_{artist_name}.json Respuestas cacheadas de la API de Spotify cache/lastfm_{artist_name}.json Respuestas cacheadas de la API de Last.fm cache/musicbrainz_{artist_name}.json Respuestas cacheadas de la API de MusicBrainz cache/discogs_{artist_name}.json Respuestas cacheadas de la API de Discogs Depuración debug_screenshots/{timestamp}_{service}_{artist_name}.png Capturas de pantalla en modo debug",
    "description": "Tipo Ruta Descripción Logs logs/enlaces_artista_album_{timestamp}.log Registros de ejecución del script Caché cache/spotify_{artist_name}.json Respuestas cacheadas de la API de Spotify cache/lastfm_{artist_name}.json Respuestas cacheadas de la API de Last.fm cache/musicbrainz_{artist_name}.json Respuestas cacheadas de la API de MusicBrainz cache/discogs_{artist_name}.json Respuestas cacheadas de la API de Discogs Depuración debug_screenshots/{timestamp}_{service}_{artist_name}.png Capturas de pantalla en modo debug",
    "tags": [],
    "title": "Archivos",
    "uri": "/base_datos/07.-enlaces-artistas/archivos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  08. Enlaces albums",
    "content": "Archivo Descripción Detalles de Formato o Estructura ~/.cache/music_db/enlaces_albumes_cache.json Almacena resultados de búsquedas previas {\"query_hash\": {\"url\": \"...\", \"timestamp\": \"...\"}} logs/enlaces_albumes.log Registra actividad, errores y resultados de la ejecución [FECHA] [NIVEL] [Mensaje]",
    "description": "Archivo Descripción Detalles de Formato o Estructura ~/.cache/music_db/enlaces_albumes_cache.json Almacena resultados de búsquedas previas {\"query_hash\": {\"url\": \"...\", \"timestamp\": \"...\"}} logs/enlaces_albumes.log Registra actividad, errores y resultados de la ejecución [FECHA] [NIVEL] [Mensaje]",
    "tags": [],
    "title": "Archivos",
    "uri": "/base_datos/08.-enlaces-albums/archivos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  09. Enlaces canciones",
    "content": "Tipo Ruta Típica Descripción Caché de enlaces {checkpoint_path}/song_links_cache.json Guarda el estado de los enlaces procesados Registro de actividad {log_dir}/enlaces_canciones_{timestamp}.log Log de ejecución con marcas de tiempo Caché por servicio {cache_dir}/spotify_cache.json, etc. Resultados de consultas individuales a servicios externos",
    "description": "Tipo Ruta Típica Descripción Caché de enlaces {checkpoint_path}/song_links_cache.json Guarda el estado de los enlaces procesados Registro de actividad {log_dir}/enlaces_canciones_{timestamp}.log Log de ejecución con marcas de tiempo Caché por servicio {cache_dir}/spotify_cache.json, etc. Resultados de consultas individuales a servicios externos",
    "tags": [],
    "title": "Archivos",
    "uri": "/base_datos/09.-enlaces-canciones/archivos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  11. Musicbrainz sellos",
    "content": "Tipo Ubicación Típica Descripción Base de Datos Ruta especificada por db_path Archivo SQLite donde se almacena la información Caché cache/mb_sellos/ Directorio para almacenar datos descargados desde MusicBrainz Logs logs/mb_sellos.log Archivo de registro con nivel configurable (por defecto: INFO)",
    "description": "Tipo Ubicación Típica Descripción Base de Datos Ruta especificada por db_path Archivo SQLite donde se almacena la información Caché cache/mb_sellos/ Directorio para almacenar datos descargados desde MusicBrainz Logs logs/mb_sellos.log Archivo de registro con nivel configurable (por defecto: INFO)",
    "tags": [],
    "title": "Archivos",
    "uri": "/base_datos/11.-musicbrainz-sellos/archivos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  11. Youtube links de canciones",
    "content": "Tipo Ruta Descripción Caché PROJECT_ROOT/.content/cache/youtube_links_cache.json Almacena resultados de búsquedas para evitar duplicados Logs PROJECT_ROOT/.content/logs/youtube_links.log Archivo de registro de actividad y errores Temporales PROJECT_ROOT/.content/temp/yt_results/ Carpeta de archivos temporales generados",
    "description": "Tipo Ruta Descripción Caché PROJECT_ROOT/.content/cache/youtube_links_cache.json Almacena resultados de búsquedas para evitar duplicados Logs PROJECT_ROOT/.content/logs/youtube_links.log Archivo de registro de actividad y errores Temporales PROJECT_ROOT/.content/temp/yt_results/ Carpeta de archivos temporales generados",
    "tags": [],
    "title": "Archivos",
    "uri": "/base_datos/11.-youtube-links-de-canciones/archivos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  05. Musicbrainz album info",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/05.-musicbrainz-album-info/datos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  06. Musicbrainz canciones",
    "content": "Campo Tipo Descripción id INTEGER (PK) Identificador único autoincremental song_id INTEGER ID de la canción en la tabla songs relationship_type TEXT Tipo de relación (ej. sample, remix, etc.) related_mbid TEXT ID de MusicBrainz del elemento relacionado related_title TEXT Título del elemento relacionado related_artist TEXT Artista del elemento relacionado relationship_direction TEXT Dirección de la relación (entrante o saliente) last_updated TIMESTAMP Fecha y hora de la última actualización",
    "description": "Campo Tipo Descripción id INTEGER (PK) Identificador único autoincremental song_id INTEGER ID de la canción en la tabla songs relationship_type TEXT Tipo de relación (ej. sample, remix, etc.) related_mbid TEXT ID de MusicBrainz del elemento relacionado related_title TEXT Título del elemento relacionado related_artist TEXT Artista del elemento relacionado relationship_direction TEXT Dirección de la relación (entrante o saliente) last_updated TIMESTAMP Fecha y hora de la última actualización",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/06.-musicbrainz-canciones/datos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  13. Articulos",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/13.-articulos/datos/index.html"
  },
  {
    "breadcrumb": "mfuz",
    "content": "MÓDULOS: not done tags include #m_fuzzy tags include #config_editor hide tags sort by due sort by priority sort by scheduled",
    "description": "MÓDULOS: not done tags include #m_fuzzy tags include #config_editor hide tags sort by due sort by priority sort by scheduled",
    "tags": [],
    "title": "Modulos de la app",
    "uri": "/modulos/index.html"
  },
  {
    "breadcrumb": "mfuz",
    "content": "Aqui explicaré brevemente como obtener algunas de las credenciales:",
    "description": "Aqui explicaré brevemente como obtener algunas de las credenciales:",
    "tags": [],
    "title": "credenciales",
    "uri": "/credenciales/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  07. Enlaces artistas",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/07.-enlaces-artistas/datos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  09. Enlaces canciones",
    "content": "Campo Tipo Descripción id INTEGER Clave primaria song_id INTEGER ID de la canción en la tabla songs spotify_url TEXT URL de la canción en Spotify spotify_id TEXT ID de la canción en Spotify lastfm_url TEXT URL de la canción en Last.fm links_updated TIMESTAMP Fecha de última actualización youtube_url TEXT URL de la canción en YouTube musicbrainz_url TEXT URL de la canción en MusicBrainz musicbrainz_recording_id TEXT ID de grabación en MusicBrainz bandcamp_url TEXT URL de la canción en Bandcamp soundcloud_url TEXT URL de la canción en SoundCloud boomkat_url TEXT URL de la canción en Boomkat",
    "description": "Campo Tipo Descripción id INTEGER Clave primaria song_id INTEGER ID de la canción en la tabla songs spotify_url TEXT URL de la canción en Spotify spotify_id TEXT ID de la canción en Spotify lastfm_url TEXT URL de la canción en Last.fm links_updated TIMESTAMP Fecha de última actualización youtube_url TEXT URL de la canción en YouTube musicbrainz_url TEXT URL de la canción en MusicBrainz musicbrainz_recording_id TEXT ID de grabación en MusicBrainz bandcamp_url TEXT URL de la canción en Bandcamp soundcloud_url TEXT URL de la canción en SoundCloud boomkat_url TEXT URL de la canción en Boomkat",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/09.-enlaces-canciones/datos/index.html"
  },
  {
    "breadcrumb": "mfuz \u003e  Creación de la base de datos \u003e  11. Youtube links de canciones",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/11.-youtube-links-de-canciones/datos/index.html"
  },
  {
    "breadcrumb": "mfuz",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "",
    "content": "",
    "description": "",
    "tags": [],
    "title": "mfuz",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "mfuz",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
