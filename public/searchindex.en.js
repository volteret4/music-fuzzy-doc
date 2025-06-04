var relearn_searchindex = [
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos",
    "content": "Crea la base de datos leyendo metadata de los archivos flac y mp3.\nEste script es el único que leerá la ruta de archivos, desde aquí todos añaden información a a la base de datos basandose en los ya existentes. Si tienes diferentes rutas con música debes volver a ejecutar el script por cada ruta diferente antes de continuar añadiendo datos a la base de datos con el resto de scripts.\nTomará cada carpeta como un album. Se ha probado con:\n3160 discos en 1,4 TB en un servidor NFS: 8 horas 10 discos en 5 TB en local: 1 segundo",
    "description": "Crea la base de datos leyendo metadata de los archivos flac y mp3.\nEste script es el único que leerá la ruta de archivos, desde aquí todos añaden información a a la base de datos basandose en los ya existentes. Si tienes diferentes rutas con música debes volver a ejecutar el script por cada ruta diferente antes de continuar añadiendo datos a la base de datos con el resto de scripts.",
    "tags": [],
    "title": "01.A Archivos locales",
    "uri": "/base_datos/01.a-archivos-locales/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos",
    "content": "",
    "description": "",
    "tags": [],
    "title": "01.B Spotify",
    "uri": "/base_datos/01.b-spotify/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos",
    "content": "Obtiene scrobbles de lastfm para el usuario indicado\n27.000 scrobbles con 11.180 enlazados en 6 minutos",
    "description": "Obtiene scrobbles de lastfm para el usuario indicado\n27.000 scrobbles con 11.180 enlazados en 6 minutos",
    "tags": [],
    "title": "02. Scrobbles lastfm",
    "uri": "/base_datos/02.-scrobbles-lastfm/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos",
    "content": "Este script se encarga de obtener y procesar los registros de escuchas (listens) desde ListenBrainz, almacenándolos en una base de datos SQLite y enlazándolos con canciones, artistas y álbumes existentes en tu biblioteca.\nEste script permite varios métodos para mejorar la búsqueda estricta:\nnormalize-strings enhanced-matrching mbid-matching fuzzy-matching analyze-mismatches use-all-matching Se recomienda realizar varias pasadas, una con cada argumento hasta que encuentre un porcentaje que parezca apropiado. Lo que tu comprendas que me decían",
    "description": "Este script se encarga de obtener y procesar los registros de escuchas (listens) desde ListenBrainz, almacenándolos en una base de datos SQLite y enlazándolos con canciones, artistas y álbumes existentes en tu biblioteca.\nEste script permite varios métodos para mejorar la búsqueda estricta:\nnormalize-strings enhanced-matrching mbid-matching fuzzy-matching analyze-mismatches use-all-matching Se recomienda realizar varias pasadas, una con cada argumento hasta que encuentre un porcentaje que parezca apropiado. Lo que tu comprendas que me decían",
    "tags": [],
    "title": "03. Listens listenbrainz",
    "uri": "/base_datos/03.-listens-listenbrainz/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos",
    "content": "Este módulo se encarga de:\nRecopilar URLs de redes sociales y plataformas web para artistas Obtener datos desde múltiples fuentes como Discogs, MusicBrainz y páginas web oficiales Almacenar y actualizar información en la tabla artists_networks de la base de datos",
    "description": "Este módulo se encarga de:\nRecopilar URLs de redes sociales y plataformas web para artistas Obtener datos desde múltiples fuentes como Discogs, MusicBrainz y páginas web oficiales Almacenar y actualizar información en la tabla artists_networks de la base de datos",
    "tags": [],
    "title": "04. Redes",
    "uri": "/base_datos/04.-redes/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos",
    "content": "Este script recopila datos de grupos de lanzamientos (release groups) desde MusicBrainz y Wikidata, y los almacena en la base de datos SQLite para enriquecer la información musical.",
    "description": "Este script recopila datos de grupos de lanzamientos (release groups) desde MusicBrainz y Wikidata, y los almacena en la base de datos SQLite para enriquecer la información musical.",
    "tags": [],
    "title": "05. Musicbrainz album info",
    "uri": "/base_datos/05.-musicbrainz-album-info/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos",
    "content": "# mb_data_canciones Módulo para obtener y almacenar relaciones entre canciones desde MusicBrainz.\nEste script extrae información sobre relaciones entre canciones (samples, remixes, covers, etc.) utilizando la API de MusicBrainz y almacena estos datos en la tabla mb_data_songs de la base de datos.",
    "description": "# mb_data_canciones Módulo para obtener y almacenar relaciones entre canciones desde MusicBrainz.\nEste script extrae información sobre relaciones entre canciones (samples, remixes, covers, etc.) utilizando la API de MusicBrainz y almacena estos datos en la tabla mb_data_songs de la base de datos.",
    "tags": [],
    "title": "06. Musicbrainz canciones",
    "uri": "/base_datos/06.-musicbrainz-canciones/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos",
    "content": "![[enlaces_artista_album.py]]\nVariables de entorno alternativas SPOTIFY_CLIENT_ID SPOTIFY_CLIENT_SECRET LASTFM_API_KEY LASTFM_API_SECRET DISCOGS_TOKEN",
    "description": "![[enlaces_artista_album.py]]\nVariables de entorno alternativas SPOTIFY_CLIENT_ID SPOTIFY_CLIENT_SECRET LASTFM_API_KEY LASTFM_API_SECRET DISCOGS_TOKEN",
    "tags": [],
    "title": "07. Enlaces artistas",
    "uri": "/base_datos/07.-enlaces-artistas/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos",
    "content": "Limitaciones y Control de Tasa Retraso entre solicitudes: Configurable para evitar bloqueos de IP Reintentos: 3 intentos por solicitud fallida con incremento exponencial de espera Límite de tiempo de ejecución: Tiempo máximo de ejecución por defecto de 3600 segundos (configurable)",
    "description": "Limitaciones y Control de Tasa Retraso entre solicitudes: Configurable para evitar bloqueos de IP Reintentos: 3 intentos por solicitud fallida con incremento exponencial de espera Límite de tiempo de ejecución: Tiempo máximo de ejecución por defecto de 3600 segundos (configurable)",
    "tags": [],
    "title": "08. Enlaces albums",
    "uri": "/base_datos/08.-enlaces-albums/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos",
    "content": "Busca enlaces para cada canción en spotify y lastfm.\nMódulo para gestionar los enlaces de canciones en servicios de música en línea. Actualiza los enlaces de diversos servicios de música (Spotify, YouTube, Bandcamp, etc.) para las canciones en la base de datos. Se puede ejecutar directamente o como parte de la cadena de scripts de db_creator.py. Dependencias\nServicios usados: spotify: Enlaces a canciones en Spotify lastfm: Enlaces a canciones en Last.fm youtube: Enlaces a videos de canciones en YouTube musicbrainz: Enlaces a grabaciones en MusicBrainz bandcamp: Enlaces a canciones en Bandcamp soundcloud: Enlaces a canciones en SoundCloud boomkat: Enlaces a canciones en Boomkat",
    "description": "Busca enlaces para cada canción en spotify y lastfm.\nMódulo para gestionar los enlaces de canciones en servicios de música en línea. Actualiza los enlaces de diversos servicios de música (Spotify, YouTube, Bandcamp, etc.) para las canciones en la base de datos. Se puede ejecutar directamente o como parte de la cadena de scripts de db_creator.py. Dependencias\nServicios usados: spotify: Enlaces a canciones en Spotify lastfm: Enlaces a canciones en Last.fm youtube: Enlaces a videos de canciones en YouTube musicbrainz: Enlaces a grabaciones en MusicBrainz bandcamp: Enlaces a canciones en Bandcamp soundcloud: Enlaces a canciones en SoundCloud boomkat: Enlaces a canciones en Boomkat",
    "tags": [],
    "title": "09. Enlaces canciones",
    "uri": "/base_datos/09.-enlaces-canciones/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos",
    "content": "Obtiene enlaces a wikipedia desde musicbrainz, y extrae su contenido. En caso de no encontrarlo en wikimedia, se puede hacer manualmente con wikipedia.",
    "description": "Obtiene enlaces a wikipedia desde musicbrainz, y extrae su contenido. En caso de no encontrarlo en wikimedia, se puede hacer manualmente con wikipedia.",
    "tags": [],
    "title": "10. Wikipedia",
    "uri": "/base_datos/10.-wikipedia/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos",
    "content": "Este script obtiene y almacena información detallada sobre sellos discográficos desde MusicBrainz y fuentes adicionales como Wikipedia y Discogs.",
    "description": "Este script obtiene y almacena información detallada sobre sellos discográficos desde MusicBrainz y fuentes adicionales como Wikipedia y Discogs.",
    "tags": [],
    "title": "11. Musicbrainz sellos",
    "uri": "/base_datos/11.-musicbrainz-sellos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos",
    "content": "Este script busca videos de YouTube relacionados con las canciones en la base de datos y almacena los enlaces correspondientes. También actualiza información de enlaces para álbumes y artistas.",
    "description": "Este script busca videos de YouTube relacionados con las canciones en la base de datos y almacena los enlaces correspondientes. También actualiza información de enlaces para álbumes y artistas.",
    "tags": [],
    "title": "11. Youtube links de canciones",
    "uri": "/base_datos/11.-youtube-links-de-canciones/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos",
    "content": "Módulo para gestionar los enlaces de canciones en servicios de música en línea.\nEste script actualiza los enlaces de diversos servicios de música (Spotify, YouTube, Bandcamp, etc.) para las canciones en la base de datos. Se puede ejecutar directamente o como parte de la cadena de scripts de db_creator.py.\n4 horas en 5140 canciones, Media de una canción cada 2.82 segundos",
    "description": "Módulo para gestionar los enlaces de canciones en servicios de música en línea.\nEste script actualiza los enlaces de diversos servicios de música (Spotify, YouTube, Bandcamp, etc.) para las canciones en la base de datos. Se puede ejecutar directamente o como parte de la cadena de scripts de db_creator.py.\n4 horas en 5140 canciones, Media de una canción cada 2.82 segundos",
    "tags": [],
    "title": "12. Letras",
    "uri": "/base_datos/12.-letras/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos",
    "content": "¡Requiere de un servidor RSS para funcionar! posts_fresh_rss El script posts_fresh_rss.py se encarga de recuperar artículos y publicaciones de un servidor FreshRSS relacionados con entidades musicales (artistas, álbumes, sellos discográficos) y guardarlos en la base de datos para su posterior consulta.",
    "description": "¡Requiere de un servidor RSS para funcionar! posts_fresh_rss El script posts_fresh_rss.py se encarga de recuperar artículos y publicaciones de un servidor FreshRSS relacionados con entidades musicales (artistas, álbumes, sellos discográficos) y guardarlos en la base de datos para su posterior consulta.",
    "tags": [],
    "title": "13.A Artículos en servidor RSS",
    "uri": "/base_datos/13.a-art%C3%ADculos-en-servidor-rss/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos",
    "content": "Review Scrapper Este módulo consultará diferentes páginas que recopilan reviews a discos y hará web scrapping para obtener dicha información.\nEstas páginas son actualmente:\nmetacritic.com albumoftheyear.org asd",
    "description": "Review Scrapper Este módulo consultará diferentes páginas que recopilan reviews a discos y hará web scrapping para obtener dicha información.\nEstas páginas son actualmente:\nmetacritic.com albumoftheyear.org asd",
    "tags": [],
    "title": "13.B Review Scrapper",
    "uri": "/base_datos/13.b-review-scrapper/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos",
    "content": "El script busca artistas con enlaces a Discogs en dos tablas: artists_networks y artists Utiliza la API de Discogs con límites de velocidad (1.5 segundos entre peticiones) Procesa los lanzamientos página por página (100 elementos por página) Filtra lanzamientos según formato y rol del artista Maneja tanto inserción de nuevos registros como actualización de existentes",
    "description": "El script busca artistas con enlaces a Discogs en dos tablas: artists_networks y artists Utiliza la API de Discogs con límites de velocidad (1.5 segundos entre peticiones) Procesa los lanzamientos página por página (100 elementos por página) Filtra lanzamientos según formato y rol del artista Maneja tanto inserción de nuevos registros como actualización de existentes",
    "tags": [],
    "title": "14. Discografías masters",
    "uri": "/base_datos/14.-discograf%C3%ADas-masters/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos",
    "content": "Funcionalidades principales del script Gestión de Rate Limiting Característica Descripción Rate limit adaptativo Ajusta automáticamente el tiempo entre peticiones según las cabeceras de respuesta Manejo de error 429 Detecta cuando se supera el límite y espera el tiempo indicado por Discogs Reintentos con backoff Implementa reintentos con delays exponenciales (5, 10, 20 segundos) Pausa por errores Si hay más de 5 errores consecutivos, pausa 2 minutos Sistema de Delays Condición Delay aplicado Descripción remaining \u003c 10 5.0 segundos Pocas peticiones restantes remaining \u003c 20 3.0 segundos Peticiones limitadas remaining \u003e= 20 1.5 segundos Condiciones normales Error 429 Retry-After + 5 seg Tiempo indicado por Discogs más margen Proceso de actualización Etapa Descripción 1. Conexión DB Establece conexión con factory de filas para mejor acceso 2. Verificación columnas Añade automáticamente columnas faltantes si no existen 3. Selección registros Identifica releases que necesitan actualización 4. Procesamiento Obtiene datos de API y actualiza base de datos 5. Manejo errores Implementa reintentos y pausas automáticas Criterios de selección de registros Modo Condición SQL Descripción Normal (force_update=False) WHERE (main_release IS NOT NULL OR resource_url IS NOT NULL) AND (uri_release IS NULL OR uri_release = '') Solo registros sin información detallada Forzado (force_update=True) WHERE (main_release IS NOT NULL OR resource_url IS NOT NULL) Todos los registros con referencia a Discogs Información de monitoreo El script proporciona información detallada durante la ejecución:\nProgreso de procesamiento (X/Y releases) Estado de rate limiting (peticiones restantes) Tiempo de espera entre peticiones Número de reintentos por release Estadísticas finales de éxito/error Notas importantes Dependencia: Requiere que el primer script (discografia_masters.py) haya ejecutado previamente Robustez: Diseñado para manejar interrupciones y errores de red Eficiencia: Usa delays adaptativos para optimizar el uso de la API Seguridad: Implementa múltiples niveles de protección contra rate limiting",
    "description": "Funcionalidades principales del script Gestión de Rate Limiting Característica Descripción Rate limit adaptativo Ajusta automáticamente el tiempo entre peticiones según las cabeceras de respuesta Manejo de error 429 Detecta cuando se supera el límite y espera el tiempo indicado por Discogs Reintentos con backoff Implementa reintentos con delays exponenciales (5, 10, 20 segundos) Pausa por errores Si hay más de 5 errores consecutivos, pausa 2 minutos Sistema de Delays Condición Delay aplicado Descripción remaining \u003c 10 5.0 segundos Pocas peticiones restantes remaining \u003c 20 3.0 segundos Peticiones limitadas remaining \u003e= 20 1.5 segundos Condiciones normales Error 429 Retry-After + 5 seg Tiempo indicado por Discogs más margen Proceso de actualización Etapa Descripción 1. Conexión DB Establece conexión con factory de filas para mejor acceso 2. Verificación columnas Añade automáticamente columnas faltantes si no existen 3. Selección registros Identifica releases que necesitan actualización 4. Procesamiento Obtiene datos de API y actualiza base de datos 5. Manejo errores Implementa reintentos y pausas automáticas Criterios de selección de registros Modo Condición SQL Descripción Normal (force_update=False) WHERE (main_release IS NOT NULL OR resource_url IS NOT NULL) AND (uri_release IS NULL OR uri_release = '') Solo registros sin información detallada Forzado (force_update=True) WHERE (main_release IS NOT NULL OR resource_url IS NOT NULL) Todos los registros con referencia a Discogs Información de monitoreo El script proporciona información detallada durante la ejecución:",
    "tags": [],
    "title": "15. Discografías releases",
    "uri": "/base_datos/15.-discograf%C3%ADas-releases/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos",
    "content": "",
    "description": "",
    "tags": [],
    "title": "16. Discografías Info",
    "uri": "/base_datos/16.-discograf%C3%ADas-info/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos",
    "content": "\u003c",
    "description": "\u003c",
    "tags": [],
    "title": "17. Conciertos pasados Setlistfm",
    "uri": "/base_datos/17.-conciertos-pasados-setlistfm/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos",
    "content": "",
    "description": "",
    "tags": [],
    "title": "18. Charts Populares",
    "uri": "/base_datos/18.-charts-populares/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos",
    "content": "Archivos Archivo o Carpeta Descripción artists.img (columna en DB) Ruta a una imagen principal del artista. artists.img_paths (columna en DB) Lista JSON con rutas locales a imágenes del artista. artists.img_urls (columna en DB) Lista JSON con URLs de imágenes descargadas. .content/artistas_img/\u003cartista\u003e/image_N.jpg Imágenes de artistas guardadas localmente. .content/albums_img/\u003cartista\u003e_-_\u003cálbum\u003e/cover.jpg Carátulas de álbumes guardadas localmente. Carpeta temporal: .../temp/ Usada para descargas temporales y eliminar duplicados. Archivo de estadísticas (--stats_file) JSON opcional con las estadísticas del proceso. Argumentos Argumento Tipo Valores posibles Descripción --db_path str Ruta válida Ruta a la base de datos SQLite (obligatorio). --project_root str Ruta válida Ruta raíz del proyecto. Opcional, afecta a la ubicación de carpetas. --descargar_img_artistas str true / false Descargar imágenes de artistas. --guardar_url_artistas str true / false Guardar URLs de imágenes de artistas en la base de datos. --descargar_img_albums str true / false Descargar imágenes de álbumes. --guardar_url_albums str true / false Guardar URLs de carátulas en la base de datos. --force_update str true / false Forzar descarga incluso si ya existen imágenes/URLs. --spotify_client_id str ID válido Credencial para autenticar con la API de Spotify. --spotify_client_secret str Secret válido Credencial para autenticar con la API de Spotify. --discogs_token str Token válido Token de autenticación para Discogs. --lastfm_api_key str API Key válida API key para acceder a Last.fm. --stats_file str Ruta a archivo Si se proporciona, se guarda un archivo JSON con estadísticas. Tablas Artistas Columna Tipo Descripción id int ID del artista (clave primaria). name str Nombre del artista. mbid str MusicBrainz ID opcional. img str Ruta a una imagen principal del artista. img_paths TEXT/JSON Lista JSON de rutas locales de imágenes descargadas. img_urls TEXT/JSON Lista JSON con URLs e información adicional (fuente, tamaño, etc.). Albums Columna Tipo Descripción id int ID del álbum (clave primaria). name str Nombre del álbum. artist_id int ID del artista (clave foránea). album_art_path str Ruta a la imagen local de la carátula. album_art_urls TEXT/JSON Lista JSON con URLs de imágenes de carátula. mbid str MusicBrainz ID opcional para el álbum. Artists networks Columna Tipo Descripción artist_id int Relación con la tabla artists. spotify str URL de Spotify del artista. Requisitos Librería / Script Obligatoria Descripción requests ✅ Realiza solicitudes HTTP a APIs (Spotify, Discogs, Last.fm). PIL (Pillow) ✅ Manipulación de imágenes (validación, tamaño). sqlite3 ✅ Acceso a la base de datos SQLite. cv2 (OpenCV) ⚠️ Recomendado Detección de duplicados visuales mediante hash perceptual. numpy ✅ Procesamiento de matrices de imágenes. argparse ✅ Manejo de argumentos por línea de comandos. base_module.PROJECT_ROOT ⚠️ Variable importada con el /root del proyecto.",
    "description": "Archivos Archivo o Carpeta Descripción artists.img (columna en DB) Ruta a una imagen principal del artista. artists.img_paths (columna en DB) Lista JSON con rutas locales a imágenes del artista. artists.img_urls (columna en DB) Lista JSON con URLs de imágenes descargadas. .content/artistas_img/\u003cartista\u003e/image_N.jpg Imágenes de artistas guardadas localmente. .content/albums_img/\u003cartista\u003e_-_\u003cálbum\u003e/cover.jpg Carátulas de álbumes guardadas localmente. Carpeta temporal: .../temp/ Usada para descargas temporales y eliminar duplicados. Archivo de estadísticas (--stats_file) JSON opcional con las estadísticas del proceso. Argumentos Argumento Tipo Valores posibles Descripción --db_path str Ruta válida Ruta a la base de datos SQLite (obligatorio). --project_root str Ruta válida Ruta raíz del proyecto. Opcional, afecta a la ubicación de carpetas. --descargar_img_artistas str true / false Descargar imágenes de artistas. --guardar_url_artistas str true / false Guardar URLs de imágenes de artistas en la base de datos. --descargar_img_albums str true / false Descargar imágenes de álbumes. --guardar_url_albums str true / false Guardar URLs de carátulas en la base de datos. --force_update str true / false Forzar descarga incluso si ya existen imágenes/URLs. --spotify_client_id str ID válido Credencial para autenticar con la API de Spotify. --spotify_client_secret str Secret válido Credencial para autenticar con la API de Spotify. --discogs_token str Token válido Token de autenticación para Discogs. --lastfm_api_key str API Key válida API key para acceder a Last.fm. --stats_file str Ruta a archivo Si se proporciona, se guarda un archivo JSON con estadísticas. Tablas Artistas Columna Tipo Descripción id int ID del artista (clave primaria). name str Nombre del artista. mbid str MusicBrainz ID opcional. img str Ruta a una imagen principal del artista. img_paths TEXT/JSON Lista JSON de rutas locales de imágenes descargadas. img_urls TEXT/JSON Lista JSON con URLs e información adicional (fuente, tamaño, etc.). Albums Columna Tipo Descripción id int ID del álbum (clave primaria). name str Nombre del álbum. artist_id int ID del artista (clave foránea). album_art_path str Ruta a la imagen local de la carátula. album_art_urls TEXT/JSON Lista JSON con URLs de imágenes de carátula. mbid str MusicBrainz ID opcional para el álbum. Artists networks Columna Tipo Descripción artist_id int Relación con la tabla artists. spotify str URL de Spotify del artista. Requisitos Librería / Script Obligatoria Descripción requests ✅ Realiza solicitudes HTTP a APIs (Spotify, Discogs, Last.fm). PIL (Pillow) ✅ Manipulación de imágenes (validación, tamaño). sqlite3 ✅ Acceso a la base de datos SQLite. cv2 (OpenCV) ⚠️ Recomendado Detección de duplicados visuales mediante hash perceptual. numpy ✅ Procesamiento de matrices de imágenes. argparse ✅ Manejo de argumentos por línea de comandos. base_module.PROJECT_ROOT ⚠️ Variable importada con el /root del proyecto.",
    "tags": [],
    "title": "19. Imágenes",
    "uri": "/base_datos/19.-im%C3%A1genes/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos",
    "content": "# 10. Optimización CONSEJOS DE USO: - Para búsquedas de texto rápidas, usa las tablas virtuales '_fts': SELECT * FROM songs WHERE id IN (SELECT id FROM song_fts WHERE song_fts MATCH 'palabra_clave') - Utiliza las vistas 'view_song_details', 'view_album_stats', 'view_artist_stats', 'view_label_stats' y 'view_country_stats' para consultas comunes - Aprovecha las columnas desnormalizadas para consultas más rápidas: - album_year - artist_origin - album_art_path_denorm - has_lyrics - album_label - decade - Tablas normalizadas: - genres_normalized: Para consultas relacionadas con géneros - countries: Normaliza países para estadísticas - decades: Facilita consultas por década - Búsqueda avanzada: - song_fts: Búsqueda de texto completo en canciones - artist_fts: Búsqueda de texto completo en artistas - album_fts: Búsqueda de texto completo en álbumes - lyrics_fts: Búsqueda de texto completo en letras",
    "description": "# 10. Optimización CONSEJOS DE USO: - Para búsquedas de texto rápidas, usa las tablas virtuales '_fts': SELECT * FROM songs WHERE id IN (SELECT id FROM song_fts WHERE song_fts MATCH 'palabra_clave') - Utiliza las vistas 'view_song_details', 'view_album_stats', 'view_artist_stats', 'view_label_stats' y 'view_country_stats' para consultas comunes - Aprovecha las columnas desnormalizadas para consultas más rápidas: - album_year - artist_origin - album_art_path_denorm - has_lyrics - album_label - decade - Tablas normalizadas: - genres_normalized: Para consultas relacionadas con géneros - countries: Normaliza países para estadísticas - decades: Facilita consultas por década - Búsqueda avanzada: - song_fts: Búsqueda de texto completo en canciones - artist_fts: Búsqueda de texto completo en artistas - album_fts: Búsqueda de texto completo en álbumes - lyrics_fts: Búsqueda de texto completo en letras",
    "tags": [],
    "title": "20. Optimización",
    "uri": "/base_datos/20.-optimizaci%C3%B3n/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Instalación",
    "content": "Este es el archivo que configurará la aplicación, pudiendo elegir que tabs están activos, y que configuración tendrá cada uno de los módulos.\nAdemás de poder editar el config.yml directamente, existe un módulo que leerá el archivo dinámicamente pudiendo actualizar todos sus campos desde la interfaz de la app.\nLas rutas a archivos se pueden escribir de modo absoluto /home/user/spotify_token.txt o de forma relativa, partiendo de la ruta en la que esté la raiz de la app, quedando .content/spotify_token.txt en /ruta/app/.content/spotify_token.txt\n# Configuración global que leerán todos los módulos activos global_theme_config: enable_individual_themes: true font_family: Noto Fonts Emoji spotify_user: spotify_client_id: spotify_client_secret: spotify_redirect_uri: spotify_playlist_path: .content/cache/spotify_playlist_path lastfm_api_key: lastfm_username: musicbrainz_username: musicbrainz_password: bluesky_username: bluesky_password: muspy_username: muspy_id: muspy_password: twitter_username: twitter_client_id: twitter_client_secret: twitter_access_token: twitter_access_token_secret: twitter_redirect_uri: db_path: db/sqlite/musica.sqlite local_playlist_path: .content/playlists/locales shared_db_paths: music_database: db/sqlite/musica.sqlite tt: /home/huan/Música/flac_test3.sqlite perico: db/sqlite/musica.sqlite query_db_script_path: db/tools/consultar_items_db.py # Reproductores posibles music_players: selected_player: fuzzy: deadbeef url_enlaces: vlc installed_players: player_1: player_name: mpv player_path: /usr/bin/mpv player_temp_dir: .config/mpv/_mpv_socket player_config: .config/mpv/mpv.conf args: -v --input-ipc-server=/home/huan/.config/mpv/_mpv_socket --force-window=yes player_2: player_name: mpv_no_video player_path: /usr/bin/mpv player_temp_dir: .config/mpv/_mpv_socket player_config: .config/mpv/mpv.conf args: --no-video --input-ipc-server=/home/huan/.config/mpv/_mpv_socket player_3: player_name: vlc player_path: /usr/bin/vlc player_4: player_name: deadbeef player_path: /usr/bin/deadbeef player_temp_dir: null player_config: null player_5: player_name: playerctl player_path: /usr/bin/playerctl # Lastfm ?? lastfm: enabled: true api_key: api_secret: username: spotify: client_id: client_secret: # Temas temas: - Tokyo Night - Solarized Dark - Monokai - Catppuccin - Dracula - Nord - Synthwave tema_seleccionado: Tokyo Night logging: - 'true' - 'false' logging_state: 'false' logging_options: logging_state: 'true' logging_level: ERROR log_types: - ERROR - INFO - WARNING - UI - DEBUG log_to_file: true log_filename: .content/logs/multi_module_manager.log show_module_name: true enable_colors: true # Modulos activos modules: - name: Music Browser path: modules/music_fuzzy_module.py args: db_path: db/sqlite/musica.sqlite only_local_files: 'True' font_family: Noto Fonts Emoji artist_images_dir: .content/artistas_img tema_seleccionado: Monokai temas: - Tokyo Night - Solarized Dark - Monokai hotkeys: open_folder: Ctrl+O play_selected: Return spotify: Ctrl+S jaangle: Ctrl+J search_focus: Ctrl+F logging: debug_enabled: true capture_stdout: true log_color: '#7AA2F7' # Editor del config.yml - name: Config Editor path: modules/config_editor_module.py args: config_path: config/config.yaml temas: - Tokyo Night - Solarized Dark - Monokai - Catppuccin - Dracula - Nord - Synthwave tema_seleccionado: Monokai logging: debug_enabled: true capture_stdout: true log_color: '#7AA2F7' # Buscador de conciertos - name: Conciertos path: modules/conciertos_module.py args: temas: - Tokyo Night - Solarized Dark - Monokai tema_seleccionado: Tokyo Night config: country_code: ES artists_file: .content/artistas.txt apis: spotify: enabled: 'False' ticketmaster: enabled: 'True' api_key: TU_API_KEY_TICKETMASTER setlistfm: enabled: 'True' setlistfm_apikey: TU_API_KEY_SETLISTFM user_agent: app: mfuzz version: 1.0 contact: muspy: enabled: 'True' songkick: enabled: 'False' api_key: TU_API_KEY_SONGKICK (TODO) concerts_metal: enabled: 'True' rapidapi: enabled: 'False' api_key: TU_API_KEY_RAPIDAPI (TODO) bandsintown: enabled: 'False' app_id: TU_APP_ID_BANDSINTOWN (TODO) logging: debug_enabled: true capture_stdout: true log_color: '#7AA2F7' # Visualizador de estadísticas - name: Estadísticas path: modules/estadisticas_module.py args: tema_seleccionado: Tokyo Night logging: debug_enabled: 'True' log_level: INFO log_types: ERROR # Módulos desactivados modulos_desactivados: # Juego - name: Jaangle path: modules/jaangle_module.py args: music_origin: local theme: Tokyo Night db_path: db/sqlite/musica.sqlite logging: debug_enabled: true capture_stdout: true log_color: '#7AA2F7' # Buscador de nuevos albumes - name: Muspy path: modules/muspy_releases_module.py args: db_path: db/sqlite/musica.sqlite query_db_script_path: db/tools/consultar_items_db.py search_mbid_script_path: db/enlaces_artista_album.py artists_file: .content/artistas.txt muspy_username: muspy_api_key: muspy_id: muspy_password: temas: - Tokyo Night - Solarized Dark - Monokai tema_seleccionado: Monokai logging: debug_enabled: true capture_stdout: true log_color: '#7AA2F7' # Gestor de playlists - name: Url Playlists path: modules/url_playlist.py args: mpv_temp_dir: '[''/home/huan/gits/pollo/music-fuzzy'', ''.content'', ''mpv'', ''_mpv_socket'']' pagination_value: 50 included_services: bandcamp: 'True' lastfm: 'True' soundcloud: 'True' youtube: 'True' spotify: 'True' db_path: db/sqlite/musica.sqlite spotify_client_id: spotify_client_secret: lastfm_api_key: lastfm_username: playlist_unified_view: 'True' show_local_playlists: 'True' show_spotify_playlists: 'True' show_rss_playlists: 'True' urlplaylist_only_local: 'True' sync_at_boot: 'True' scrobbles_limit: 2403 scrobbles_by_date: 'False' service_priority_indices: '0' freshrss_url: freshrss_user: freshrss_api_key: spotify_token_path: .content/cache/spotify_token.txt spotify_playlist_path: .content/cache/spotify_playlist_path lastfm_cache_path: .content/cache/lastfm_cache.json rss_pending_dir: .content/playlists/blogs/pendiente rss_listened_dir: .content/playlists/blogs/escuchado local_playlist_path: .content/playlists/locales exclude_spotify_from_local: 'True' show_lastfm_scrobbles: 'False' # Editor de la base de datos (WIP) - name: Database Editor path: modules/editor_module.py args: db_path: db/sqlite/musica.sqlite temas: - Tokyo Night - Solarized Dark - Monokai tema_seleccionado: Monokai logging: debug_enabled: true capture_stdout: true log_color: '#7AA2F7' - name: Database Creator path: modules/db_creator_ui_module.py args: config_file: config/db_creator_config.json temas: - Tokyo Night - Solarized Dark - Monokai tema_seleccionado: Tokyo Night logging: debug_enabled: true capture_stdout: true log_color: '#7AA2F7' # Solo necesario si activas todos los otros módulos - name: placeholder path: casa",
    "description": "Este es el archivo que configurará la aplicación, pudiendo elegir que tabs están activos, y que configuración tendrá cada uno de los módulos.\nAdemás de poder editar el config.yml directamente, existe un módulo que leerá el archivo dinámicamente pudiendo actualizar todos sus campos desde la interfaz de la app.\nLas rutas a archivos se pueden escribir de modo absoluto /home/user/spotify_token.txt o de forma relativa, partiendo de la ruta en la que esté la raiz de la app, quedando .content/spotify_token.txt en /ruta/app/.content/spotify_token.txt",
    "tags": [],
    "title": "config yml",
    "uri": "/instalacion/config-yml/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Credenciales",
    "content": "Desde esta url puedes crear un token para usar con discogs. Debes tener una cuenta registrada anteriormente. E internet.",
    "description": "Desde esta url puedes crear un token para usar con discogs. Debes tener una cuenta registrada anteriormente. E internet.",
    "tags": [],
    "title": "discogs",
    "uri": "/credenciales/discogs/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Credenciales",
    "content": "Para instalar docker sigue su documentación para linux o windows",
    "description": "Para instalar docker sigue su documentación para linux o windows",
    "tags": [],
    "title": "docker",
    "uri": "/credenciales/docker/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Credenciales",
    "content": "En esta página puedes crear tus credenciales, copia client-id y client-secret en un lugar fresco y seco",
    "description": "En esta página puedes crear tus credenciales, copia client-id y client-secret en un lugar fresco y seco",
    "tags": [],
    "title": "genius",
    "uri": "/credenciales/genius/index.html"
  },
  {
    "breadcrumb": "mfuzz",
    "content": "APP y DB Esta aplicación modular te permitirá gestionar tu colección musical, buscar conciertos, estar al tanto de los nuevos álbumes que van a sacar, descubrir nueva música e incluso un pequeño juego musical.\nLa aplicación depende de una base de datos para funcionar, que en su versión más completa puede llevar un buen tiempo en finalizar, por ello intento mantener un carácter modular que le hace posible seleccionar los componentes que nos interesan, pudiendo evitar otros salvando algo de tiempo y espacio.\nPara cada módulo especificaremos la necesidad o conveniencia de ejecutar estos scripts que crearán la base de datos.\nComo regla general, los módulos que menos requisitos tendrán serán\nBusqueda de conciertos Manejo de Playlists Juego Musical Frente a otros que se aprovechan gratamente de una base de datos rebosante:\nMusic browser: Podrás ver letras, información de wikipedia, lastfm, reviews, enlaces, conciertos… Estadísticas: Es el gran consumidor de datos lógicamente, y el que más ayudará a generar nuevos intereses En desarrollo: Se está implementando una interfaz gráfica que facilite la creación de la base de datos con sus botoncitos y menús\nVersion web Existe una versión web de la app en un contenedor docker, para acceso remoto junto a la base de datos.\nPudes ver mas en Acceso Web",
    "description": "APP y DB Esta aplicación modular te permitirá gestionar tu colección musical, buscar conciertos, estar al tanto de los nuevos álbumes que van a sacar, descubrir nueva música e incluso un pequeño juego musical.\nLa aplicación depende de una base de datos para funcionar, que en su versión más completa puede llevar un buen tiempo en finalizar, por ello intento mantener un carácter modular que le hace posible seleccionar los componentes que nos interesan, pudiendo evitar otros salvando algo de tiempo y espacio.",
    "tags": [],
    "title": "Introducción",
    "uri": "/introduccion/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Credenciales",
    "content": "",
    "description": "",
    "tags": [],
    "title": "lastfm",
    "uri": "/credenciales/lastfm/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Credenciales",
    "content": "No necesitas nada para poder aprovechar este gran proyecto",
    "description": "No necesitas nada para poder aprovechar este gran proyecto",
    "tags": [],
    "title": "lirycs_ovh",
    "uri": "/credenciales/lirycs_ovh/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Modulos de la app",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Módulo 01 Music Browser",
    "uri": "/modulos/m%C3%B3dulo-01-music-browser/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Modulos de la app",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Módulo 02 Editor de la base de datos",
    "uri": "/modulos/m%C3%B3dulo-02-editor-de-la-base-de-datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Modulos de la app",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Módulo 03 Url Playlists",
    "uri": "/modulos/m%C3%B3dulo-03-url-playlists/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Modulos de la app",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Módulo 04 Conciertos",
    "uri": "/modulos/m%C3%B3dulo-04-conciertos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Modulos de la app",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Módulo 05 Muspy",
    "uri": "/modulos/m%C3%B3dulo-05-muspy/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Modulos de la app",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Módulo 06 Jaangle",
    "uri": "/modulos/m%C3%B3dulo-06-jaangle/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Modulos de la app",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Módulo 07 Estadisticas",
    "uri": "/modulos/m%C3%B3dulo-07-estadisticas/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Modulos de la app",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Módulo 132 Configuración",
    "uri": "/modulos/m%C3%B3dulo-132-configuraci%C3%B3n/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Credenciales",
    "content": "",
    "description": "",
    "tags": [],
    "title": "muspy",
    "uri": "/credenciales/muspy/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Credenciales",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Picard",
    "uri": "/credenciales/picard/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Credenciales",
    "content": "Es recomendable crear un entorno virtual para python.\nEn linux y windows puedes ejecutar python -m venv entorno-virtual para crear uno.\nLuego para activarlo, antes de instalar los paquetes en el mismo, ejecutamos:\nLinux source entorno-virtual/bin/activate\nWindows entorno-virtual\\Scripts\\activate",
    "description": "Es recomendable crear un entorno virtual para python.\nEn linux y windows puedes ejecutar python -m venv entorno-virtual para crear uno.\nLuego para activarlo, antes de instalar los paquetes en el mismo, ejecutamos:\nLinux source entorno-virtual/bin/activate\nWindows entorno-virtual\\Scripts\\activate",
    "tags": [],
    "title": "python",
    "uri": "/credenciales/python/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Instalación",
    "content": "Dependiendo de los módulos deseados vas a necesitar varias credenciales apis o servicios según indica la tabla\nMódulo Requisito Motivo music-fuzzy base de datos 1 Es un explorador de información de la base de datos editor-db base de datos 1 Es un editor de la base de datos conciertos ticketmaster 2 Obtiene conciertos desde la api de ticketmaster setlistfm creds 2 setlistfm spotify creds 2 spotify muspy muspy id 1 Usa la api de muspy para añadir artistas y ver si tienen nuevos lanzamientos programados spotify creds Manejo de artistas favoritos, busca nuevos releases en spotify lastfm creds Manejo de artistas más escuchados, canciones favoritas, sincronización automática de scrobbles musicbrainz creds Manejo de colecciones de musicbrainz bluesky creds Seguir artistas en bluesky twitter creds Seguir artistas en twitter (WIP) jaangle base de datos 1 Es un juego basado en adivinar entre x opciones la canción que está sonando, pero necesita haber creado la base de datos antes playlists spotify creds Maneja playlists de spotify configuración config_editor.json Archivo que maneja una pestaña con la configuraciçon de cada módulo UI db creador base de datos La creación de la base de datos también es modular, cada script aporta un conjunto diferente de datos. En caso de no tener interés por todos estos sería conveniente bien los requisitos de cada paso antes de ejecutarlo.\nUna vez tengas claro que partes vas a usar puedes revisar la sección credenciales en caso de necesitar algún enlace o indicación.\nObligatorio ↩︎ ↩︎ ↩︎ ↩︎\nElegir entre al menos una de estas opciones ↩︎ ↩︎ ↩︎",
    "description": "Dependiendo de los módulos deseados vas a necesitar varias credenciales apis o servicios según indica la tabla\nMódulo Requisito Motivo music-fuzzy base de datos 1 Es un explorador de información de la base de datos editor-db base de datos 1 Es un editor de la base de datos conciertos ticketmaster 2 Obtiene conciertos desde la api de ticketmaster setlistfm creds 2 setlistfm spotify creds 2 spotify muspy muspy id 1 Usa la api de muspy para añadir artistas y ver si tienen nuevos lanzamientos programados spotify creds Manejo de artistas favoritos, busca nuevos releases en spotify lastfm creds Manejo de artistas más escuchados, canciones favoritas, sincronización automática de scrobbles musicbrainz creds Manejo de colecciones de musicbrainz bluesky creds Seguir artistas en bluesky twitter creds Seguir artistas en twitter (WIP) jaangle base de datos 1 Es un juego basado en adivinar entre x opciones la canción que está sonando, pero necesita haber creado la base de datos antes playlists spotify creds Maneja playlists de spotify configuración config_editor.json Archivo que maneja una pestaña con la configuraciçon de cada módulo UI db creador base de datos La creación de la base de datos también es modular, cada script aporta un conjunto diferente de datos. En caso de no tener interés por todos estos sería conveniente bien los requisitos de cada paso antes de ejecutarlo.",
    "tags": [],
    "title": "requisitos",
    "uri": "/instalacion/requisitos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Credenciales",
    "content": "",
    "description": "",
    "tags": [],
    "title": "spotify",
    "uri": "/credenciales/spotify/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Credenciales",
    "content": "google tiene el nivel gratuito más bajo de consultas diarias, 1000. Por lo que si necesitas realizar estas múltiples veces deberías planearlo con antelación. Quien avisa es avisador.",
    "description": "google tiene el nivel gratuito más bajo de consultas diarias, 1000. Por lo que si necesitas realizar estas múltiples veces deberías planearlo con antelación. Quien avisa es avisador.",
    "tags": [],
    "title": "youtube",
    "uri": "/credenciales/youtube/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  01.B Spotify",
    "content": "Tipo Ruta Descripción Logs db_musica_spotify.log Archivo logs generado/usado por el script Caché .spotify_token.json Archivo caché generado/usado por el script Configuración config.yml Archivo configuración generado/usado por el script",
    "description": "Tipo Ruta Descripción Logs db_musica_spotify.log Archivo logs generado/usado por el script Caché .spotify_token.json Archivo caché generado/usado por el script Configuración config.yml Archivo configuración generado/usado por el script",
    "tags": [],
    "title": "Archivos",
    "uri": "/base_datos/01.b-spotify/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  05. Musicbrainz album info",
    "content": "Tipo Ubicación por Defecto Descripción Archivo de caché mb_release_group_cache.json JSON con el estado de procesamiento para reanudar tareas Archivo de log logs/mb_release_group.log Registro de mensajes informativos y errores",
    "description": "Tipo Ubicación por Defecto Descripción Archivo de caché mb_release_group_cache.json JSON con el estado de procesamiento para reanudar tareas Archivo de log logs/mb_release_group.log Registro de mensajes informativos y errores",
    "tags": [],
    "title": "Archivos",
    "uri": "/base_datos/05.-musicbrainz-album-info/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  06. Musicbrainz canciones",
    "content": "Tipo Ubicación típica Descripción Log logs/mb_data_canciones.log Registra la ejecución; se crea o añade según configuración Caché cache/musicbrainz/ Almacena respuestas de la API para reducir llamadas Otros No aplica No modifica archivos de audio originales",
    "description": "Tipo Ubicación típica Descripción Log logs/mb_data_canciones.log Registra la ejecución; se crea o añade según configuración Caché cache/musicbrainz/ Almacena respuestas de la API para reducir llamadas Otros No aplica No modifica archivos de audio originales",
    "tags": [],
    "title": "Archivos",
    "uri": "/base_datos/06.-musicbrainz-canciones/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  07. Enlaces artistas",
    "content": "Tipo Ruta Descripción Caché .json Archivo caché generado/usado por el script Configuración .yaml Archivo configuración generado/usado por el script Configuración .yml Archivo configuración generado/usado por el script Logs musicbrainzngs Archivo de log del script",
    "description": "Tipo Ruta Descripción Caché .json Archivo caché generado/usado por el script Configuración .yaml Archivo configuración generado/usado por el script Configuración .yml Archivo configuración generado/usado por el script Logs musicbrainzngs Archivo de log del script",
    "tags": [],
    "title": "Archivos",
    "uri": "/base_datos/07.-enlaces-artistas/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  09. Enlaces canciones",
    "content": "Tipo Ruta Típica Descripción Caché de enlaces {checkpoint_path}/song_links_cache.json Guarda el estado de los enlaces procesados Registro de actividad {log_dir}/enlaces_canciones_{timestamp}.log Log de ejecución con marcas de tiempo Caché por servicio {cache_dir}/spotify_cache.json, etc. Resultados de consultas individuales a servicios externos",
    "description": "Tipo Ruta Típica Descripción Caché de enlaces {checkpoint_path}/song_links_cache.json Guarda el estado de los enlaces procesados Registro de actividad {log_dir}/enlaces_canciones_{timestamp}.log Log de ejecución con marcas de tiempo Caché por servicio {cache_dir}/spotify_cache.json, etc. Resultados de consultas individuales a servicios externos",
    "tags": [],
    "title": "Archivos",
    "uri": "/base_datos/09.-enlaces-canciones/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  11. Musicbrainz sellos",
    "content": "Tipo Ubicación Típica Descripción Base de Datos Ruta especificada por db_path Archivo SQLite donde se almacena la información Caché cache/mb_sellos/ Directorio para almacenar datos descargados desde MusicBrainz Logs logs/mb_sellos.log Archivo de registro con nivel configurable (por defecto: INFO)",
    "description": "Tipo Ubicación Típica Descripción Base de Datos Ruta especificada por db_path Archivo SQLite donde se almacena la información Caché cache/mb_sellos/ Directorio para almacenar datos descargados desde MusicBrainz Logs logs/mb_sellos.log Archivo de registro con nivel configurable (por defecto: INFO)",
    "tags": [],
    "title": "Archivos",
    "uri": "/base_datos/11.-musicbrainz-sellos/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  11. Youtube links de canciones",
    "content": "Tipo Ruta Descripción Caché PROJECT_ROOT/.content/cache/youtube_links_cache.json Almacena resultados de búsquedas para evitar duplicados Logs PROJECT_ROOT/.content/logs/youtube_links.log Archivo de registro de actividad y errores Temporales PROJECT_ROOT/.content/temp/yt_results/ Carpeta de archivos temporales generados",
    "description": "Tipo Ruta Descripción Caché PROJECT_ROOT/.content/cache/youtube_links_cache.json Almacena resultados de búsquedas para evitar duplicados Logs PROJECT_ROOT/.content/logs/youtube_links.log Archivo de registro de actividad y errores Temporales PROJECT_ROOT/.content/temp/yt_results/ Carpeta de archivos temporales generados",
    "tags": [],
    "title": "Archivos",
    "uri": "/base_datos/11.-youtube-links-de-canciones/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  13.A Artículos en servidor RSS",
    "content": "Tipo Ruta por Defecto / Configurada Formato Descripción / Contenido Principal Caché cache/freshrss_cache.json JSON Guarda artículos ya procesados para evitar duplicados. Estructura: Identificadores únicos y metadatos de los artículos Log Determinada por configuración de logging Texto plano Registra eventos del proceso con nivel INFO por defecto. Incluye: - Inicio y finalización del proceso - Errores de conexión o autenticación - Entidades encontradas en artículos - Errores al procesar artículos",
    "description": "Tipo Ruta por Defecto / Configurada Formato Descripción / Contenido Principal Caché cache/freshrss_cache.json JSON Guarda artículos ya procesados para evitar duplicados. Estructura: Identificadores únicos y metadatos de los artículos Log Determinada por configuración de logging Texto plano Registra eventos del proceso con nivel INFO por defecto. Incluye: - Inicio y finalización del proceso - Errores de conexión o autenticación - Entidades encontradas en artículos - Errores al procesar artículos",
    "tags": [],
    "title": "Archivos",
    "uri": "/base_datos/13.a-art%C3%ADculos-en-servidor-rss/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  14. Discografías masters",
    "content": "Archivo Tipo Descripción Ubicación por defecto music.db Base de datos SQLite Base de datos principal donde se almacenan todos los datos {PROJECT_ROOT}/db/sqlite/music.db",
    "description": "Archivo Tipo Descripción Ubicación por defecto music.db Base de datos SQLite Base de datos principal donde se almacenan todos los datos {PROJECT_ROOT}/db/sqlite/music.db",
    "tags": [],
    "title": "Archivos",
    "uri": "/base_datos/14.-discograf%C3%ADas-masters/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  15. Discografías releases",
    "content": "Archivo Tipo Descripción Ubicación por defecto music.db Base de datos SQLite Modifica la tabla discogs_discography existente añadiendo información detallada {PROJECT_ROOT}/music.db",
    "description": "Archivo Tipo Descripción Ubicación por defecto music.db Base de datos SQLite Modifica la tabla discogs_discography existente añadiendo información detallada {PROJECT_ROOT}/music.db",
    "tags": [],
    "title": "Archivos",
    "uri": "/base_datos/15.-discograf%C3%ADas-releases/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  16. Discografías Info",
    "content": "Archivo Tipo Descripción Ubicación por defecto music.db Base de datos SQLite Crea una nueva tabla artists_discogs_info con información detallada de artistas {PROJECT_ROOT}/music.db",
    "description": "Archivo Tipo Descripción Ubicación por defecto music.db Base de datos SQLite Crea una nueva tabla artists_discogs_info con información detallada de artistas {PROJECT_ROOT}/music.db",
    "tags": [],
    "title": "Archivos",
    "uri": "/base_datos/16.-discograf%C3%ADas-info/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  17. Conciertos pasados Setlistfm",
    "content": "Archivo Descripción Tipo de operación Base de datos SQLite Base de datos principal donde se almacenan los setlists y lugares Crea/Edita Tabla artists_setlistfm Tabla con información de setlists de artistas Crea/Edita Tabla artists_setlistfm_searches Tabla de tracking de búsquedas realizadas Crea/Edita Tabla places_setlistfm Tabla con información de lugares de conciertos Crea/Edita Columna setlistfm_id en tabla artists Añade ID de setlist.fm a la tabla de artistas existente Edita",
    "description": "Archivo Descripción Tipo de operación Base de datos SQLite Base de datos principal donde se almacenan los setlists y lugares Crea/Edita Tabla artists_setlistfm Tabla con información de setlists de artistas Crea/Edita Tabla artists_setlistfm_searches Tabla de tracking de búsquedas realizadas Crea/Edita Tabla places_setlistfm Tabla con información de lugares de conciertos Crea/Edita Columna setlistfm_id en tabla artists Añade ID de setlist.fm a la tabla de artistas existente Edita",
    "tags": [],
    "title": "Archivos",
    "uri": "/base_datos/17.-conciertos-pasados-setlistfm/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  01.A Archivos locales",
    "content": "Argumento Tipo Descripción --config Opcional , str(self.config_file_path)] # Convertir a string # Log if hasattr(self.parent, |",
    "description": "Argumento Tipo Descripción --config Opcional , str(self.config_file_path)] # Convertir a string # Log if hasattr(self.parent, |",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/01.a-archivos-locales/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  02. Scrobbles lastfm",
    "content": "Argumento Tipo Descripción --lastfm_user Flag Usuario de Last.fm --output Opcional , help=",
    "description": "Argumento Tipo Descripción --lastfm_user Flag Usuario de Last.fm --output Opcional , help=",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/02.-scrobbles-lastfm/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  03. Listens listenbrainz",
    "content": "Argumento Tipo Descripción --config Str Archivo de configuración --token Str Token de autenticación de ListenBrainz --force-update Str Forzar actualización completa --max-items Int Número máximo de listens a obtener por llamada (opcional) --reprocess-existing Opcional Reprocesar listens existentes con los métodos de coincidencia seleccionados --normalize-strings Opcional Usar normalización de strings para mejorar coincidencias --enhanced-matching Opcional Crear y usar tablas normalizadas para buscar coincidencias --mbid-matching Opcional Intentar coincidencia por MusicBrainz IDs --fuzzy-matching Opcional Usar coincidencia difusa para encontrar canciones --analyze-mismatches Opcional Analizar razones de discrepancias --use-all-matching Opcional Utilizar todas las técnicas de coincidencia mejoradas --output Opcional , type=str, help=",
    "description": "Argumento Tipo Descripción --config Str Archivo de configuración --token Str Token de autenticación de ListenBrainz --force-update Str Forzar actualización completa --max-items Int Número máximo de listens a obtener por llamada (opcional) --reprocess-existing Opcional Reprocesar listens existentes con los métodos de coincidencia seleccionados --normalize-strings Opcional Usar normalización de strings para mejorar coincidencias --enhanced-matching Opcional Crear y usar tablas normalizadas para buscar coincidencias --mbid-matching Opcional Intentar coincidencia por MusicBrainz IDs --fuzzy-matching Opcional Usar coincidencia difusa para encontrar canciones --analyze-mismatches Opcional Analizar razones de discrepancias --use-all-matching Opcional Utilizar todas las técnicas de coincidencia mejoradas --output Opcional , type=str, help=",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/03.-listens-listenbrainz/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  04. Redes",
    "content": "Argumento Tipo Descripción Valor por Defecto config dict Diccionario con la configuración — config.db_path str Ruta al archivo de la base de datos SQLite (obligatorio) — config.discogs_token str Token para la API de Discogs (obligatorio) — config.rate_limit float Tiempo de espera entre solicitudes (por defecto: 1.0) 1.0 config.max_retries int Número máximo de reintentos para solicitudes fallidas (por defecto: 3) 3 config.batch_size int Cantidad de artistas a procesar por lote (por defecto: 50) 50 config.force_update bool Forzar actualización incluso si ya existen datos (por defecto: False) False config.missing_only bool Procesar solo artistas sin registro de redes sociales (por defecto: True) True config.concurrent_workers int Número de hilos para procesamiento en paralelo (por defecto: 1) 1 config.user_agent str Agente de usuario para las solicitudes HTTP (por defecto: 'MusicDatabaseApp/1.0') 'MusicDatabaseApp/1.0'",
    "description": "Argumento Tipo Descripción Valor por Defecto config dict Diccionario con la configuración — config.db_path str Ruta al archivo de la base de datos SQLite (obligatorio) — config.discogs_token str Token para la API de Discogs (obligatorio) — config.rate_limit float Tiempo de espera entre solicitudes (por defecto: 1.0) 1.0 config.max_retries int Número máximo de reintentos para solicitudes fallidas (por defecto: 3) 3 config.batch_size int Cantidad de artistas a procesar por lote (por defecto: 50) 50 config.force_update bool Forzar actualización incluso si ya existen datos (por defecto: False) False config.missing_only bool Procesar solo artistas sin registro de redes sociales (por defecto: True) True config.concurrent_workers int Número de hilos para procesamiento en paralelo (por defecto: 1) 1 config.user_agent str Agente de usuario para las solicitudes HTTP (por defecto: 'MusicDatabaseApp/1.0') 'MusicDatabaseApp/1.0'",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/04.-redes/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  08. Enlaces albums",
    "content": "Argumento Descripción Tipo / Valor por Defecto Obligatorio --db-path Ruta a la base de datos SQLite Cadena Sí --missing-only Solo procesa álbumes con enlaces faltantes Bandera (booleano) No --delay Retraso entre solicitudes en segundos float, por defecto: 1.0 No --cache-dir Directorio para el archivo de caché Cadena, por defecto: ~/.cache/music_db No --user-agent Agente de usuario para solicitudes HTTP Cadena, por defecto: 'MusicLibraryManager/1.0' No --log-level Nivel de logging Cadena, por defecto: INFO No --batch-size Número de álbumes a procesar en cada lote Entero, por defecto: 50 No",
    "description": "Argumento Descripción Tipo / Valor por Defecto Obligatorio --db-path Ruta a la base de datos SQLite Cadena Sí --missing-only Solo procesa álbumes con enlaces faltantes Bandera (booleano) No --delay Retraso entre solicitudes en segundos float, por defecto: 1.0 No --cache-dir Directorio para el archivo de caché Cadena, por defecto: ~/.cache/music_db No --user-agent Agente de usuario para solicitudes HTTP Cadena, por defecto: 'MusicLibraryManager/1.0' No --log-level Nivel de logging Cadena, por defecto: INFO No --batch-size Número de álbumes a procesar en cada lote Entero, por defecto: 50 No",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/08.-enlaces-albums/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  10. Wikipedia",
    "content": "Argumento Tipo Descripción Valor por Defecto --config str Ruta al archivo de configuración JSON (obligatorio) — --log-file str Archivo de registro para seguimiento del progreso — --db-path str Ruta a la base de datos SQLite — --type str Tipo de entidad a actualizar (artists, albums, artists_content, albums_content, labels, labels_content) — --user-agent str User-Agent para las peticiones a MusicBrainz — --modo str Tipo de lanzamiento: auto o manual — --force-update bool Flag para forzar la actualización de todos los elementos False",
    "description": "Argumento Tipo Descripción Valor por Defecto --config str Ruta al archivo de configuración JSON (obligatorio) — --log-file str Archivo de registro para seguimiento del progreso — --db-path str Ruta a la base de datos SQLite — --type str Tipo de entidad a actualizar (artists, albums, artists_content, albums_content, labels, labels_content) — --user-agent str User-Agent para las peticiones a MusicBrainz — --modo str Tipo de lanzamiento: auto o manual — --force-update bool Flag para forzar la actualización de todos los elementos False",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/10.-wikipedia/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  12. Letras",
    "content": "Argumento Tipo Descripción Valor por Defecto --db_path str Ruta a la base de datos SQLite (requerido) — --force-update bool Bandera para forzar la actualización de todas las letras, incluso las que ya existen False --batch-size int Número de canciones a procesar por lote 1000 --no-resume bool Bandera para no continuar desde el último punto guardado False --config str Archivo de configuración JSON con parámetros adicionales —",
    "description": "Argumento Tipo Descripción Valor por Defecto --db_path str Ruta a la base de datos SQLite (requerido) — --force-update bool Bandera para forzar la actualización de todas las letras, incluso las que ya existen False --batch-size int Número de canciones a procesar por lote 1000 --no-resume bool Bandera para no continuar desde el último punto guardado False --config str Archivo de configuración JSON con parámetros adicionales —",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/12.-letras/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Credenciales",
    "content": "{ \"spotify\": { \"client_id\": \"tu_spotify_client_id\", \"client_secret\": \"tu_spotify_client_secret\" } }",
    "description": "{ \"spotify\": { \"client_id\": \"tu_spotify_client_id\", \"client_secret\": \"tu_spotify_client_secret\" } }",
    "tags": [],
    "title": "Configuración",
    "uri": "/credenciales/configuraci%C3%B3n/index.html"
  },
  {
    "breadcrumb": "mfuzz",
    "content": "Actualmente la aplicación está disponible para sistemas Linux, ya sea un Sistema Operativo, o el submódulo wsl para windows\nPara ello necesitarás:\nClonar el repositorio desde github git clone https://github.com/volteret4/mfuz Instalar los requisitos Configurar el config file ya sea json o yml",
    "description": "Actualmente la aplicación está disponible para sistemas Linux, ya sea un Sistema Operativo, o el submódulo wsl para windows\nPara ello necesitarás:\nClonar el repositorio desde github git clone https://github.com/volteret4/mfuz Instalar los requisitos Configurar el config file ya sea json o yml",
    "tags": [],
    "title": "Instalación",
    "uri": "/instalacion/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  01.B Spotify",
    "content": "Argumento Tipo Descripción --db-path Flag Ruta a la base de datos SQLite --no-skip-existing Opcional No omitir artistas existentes con origen --user-id Opcional ID de usuario de Spotify (opcional) --config Opcional Archivo de configuración JSON",
    "description": "Argumento Tipo Descripción --db-path Flag Ruta a la base de datos SQLite --no-skip-existing Opcional No omitir artistas existentes con origen --user-id Opcional ID de usuario de Spotify (opcional) --config Opcional Archivo de configuración JSON",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/01.b-spotify/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  05. Musicbrainz album info",
    "content": "Argumento Descripción Requerido Valor por defecto / Tipo --config [config_file] Ruta al archivo de configuración JSON Sí (si no se usa --db-path) Archivo JSON --db-path [path] Ruta a la base de datos SQLite Alternativa a --config - --limit [n] Limita el número de lanzamientos a procesar No Entero --force-update Fuerza la actualización de entradas existentes No Bandera --mode [mode] Modo de operación: 'auto' o 'manual' No auto/manual --cache-file [path] Ruta al archivo de caché para reanudar procesamiento No Archivo JSON --skip-properties [ids] IDs de propiedades de Wikidata a omitir No Lista separada por comas --interactive Activa modo interactivo con más información y confirmaciones No Bandera --log-level [level] Nivel de detalle del log (DEBUG, INFO, WARNING, ERROR) No INFO",
    "description": "Argumento Descripción Requerido Valor por defecto / Tipo --config [config_file] Ruta al archivo de configuración JSON Sí (si no se usa --db-path) Archivo JSON --db-path [path] Ruta a la base de datos SQLite Alternativa a --config - --limit [n] Limita el número de lanzamientos a procesar No Entero --force-update Fuerza la actualización de entradas existentes No Bandera --mode [mode] Modo de operación: 'auto' o 'manual' No auto/manual --cache-file [path] Ruta al archivo de caché para reanudar procesamiento No Archivo JSON --skip-properties [ids] IDs de propiedades de Wikidata a omitir No Lista separada por comas --interactive Activa modo interactivo con más información y confirmaciones No Bandera --log-level [level] Nivel de detalle del log (DEBUG, INFO, WARNING, ERROR) No INFO",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/05.-musicbrainz-album-info/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  06. Musicbrainz canciones",
    "content": "Argumento Descripción Obligatorio --config Ruta al archivo de configuración JSON Sí --db-path Ruta a la base de datos SQLite (sobrescribe valor en config) No --force-update Fuerza la actualización de todos los registros No --interactive Modo interactivo para confirmar operaciones No --verbose Nivel de detalle en los logs No",
    "description": "Argumento Descripción Obligatorio --config Ruta al archivo de configuración JSON Sí --db-path Ruta a la base de datos SQLite (sobrescribe valor en config) No --force-update Fuerza la actualización de todos los registros No --interactive Modo interactivo para confirmar operaciones No --verbose Nivel de detalle en los logs No",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/06.-musicbrainz-canciones/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  07. Enlaces artistas",
    "content": "Argumento Tipo Descripción --config Opcional Archivo de configuración",
    "description": "Argumento Tipo Descripción --config Opcional Archivo de configuración",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/07.-enlaces-artistas/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  09. Enlaces canciones",
    "content": "Argumento Tipo Descripción Valor predeterminado db_path str Ruta a la base de datos SQLite musica.db checkpoint_path str Directorio para guardar el progreso en formato JSON ./checkpoints log_dir str Directorio para los archivos de registro ./logs cache_dir str Directorio para archivos de caché por servicio ./caches services list/str Lista de servicios a buscar (spotify, lastfm, youtube) limit int Límite de canciones a procesar (0 para todas) 0 force_update bool Actualizar enlaces existentes False delete_old bool Eliminar enlaces antiguos si no se encuentra uno nuevo False spotify_client_id str ID de cliente para la API de Spotify spotify_client_secret str Secreto de cliente para la API de Spotify lastfm_api_key str Clave de API de Last.fm google_api_key str Clave de API de Google google_cx str ID de motor de búsqueda personalizado de Google max_retries int Número máximo de reintentos para solicitudes fallidas 3 retry_delay int Tiempo de espera entre reintentos (segundos) 5 batch_size int Tamaño del lote para procesar canciones 100 no_progress bool Desactivar barra de progreso False interactive bool Modo interactivo para confirmaciones False",
    "description": "Argumento Tipo Descripción Valor predeterminado db_path str Ruta a la base de datos SQLite musica.db checkpoint_path str Directorio para guardar el progreso en formato JSON ./checkpoints log_dir str Directorio para los archivos de registro ./logs cache_dir str Directorio para archivos de caché por servicio ./caches services list/str Lista de servicios a buscar (spotify, lastfm, youtube) limit int Límite de canciones a procesar (0 para todas) 0 force_update bool Actualizar enlaces existentes False delete_old bool Eliminar enlaces antiguos si no se encuentra uno nuevo False spotify_client_id str ID de cliente para la API de Spotify spotify_client_secret str Secreto de cliente para la API de Spotify lastfm_api_key str Clave de API de Last.fm google_api_key str Clave de API de Google google_cx str ID de motor de búsqueda personalizado de Google max_retries int Número máximo de reintentos para solicitudes fallidas 3 retry_delay int Tiempo de espera entre reintentos (segundos) 5 batch_size int Tamaño del lote para procesar canciones 100 no_progress bool Desactivar barra de progreso False interactive bool Modo interactivo para confirmaciones False",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/09.-enlaces-canciones/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  11. Musicbrainz sellos",
    "content": "Clave Descripción Opcional db_path Ruta a la base de datos SQLite No cache_path Ruta al directorio de caché Sí log_level Nivel de registro (DEBUG, INFO, WARNING, ERROR) Sí mb_sellos Configuración específica del módulo No",
    "description": "Clave Descripción Opcional db_path Ruta a la base de datos SQLite No cache_path Ruta al directorio de caché Sí log_level Nivel de registro (DEBUG, INFO, WARNING, ERROR) Sí mb_sellos Configuración específica del módulo No",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/11.-musicbrainz-sellos/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  11. Youtube links de canciones",
    "content": "Argumento Descripción Valor por Defecto db_path Ruta a la base de datos SQLite — youtube_api_key Clave de API de YouTube — lastfm_api_key Clave de API de Last.fm — rate_limit Tiempo entre solicitudes API (segundos) 1.0 user_agent Agente de usuario para solicitudes HTTP 'MusicDB/1.0' missing_only Solo procesar elementos sin enlaces True cache_file Ruta del archivo de caché PROJECT_ROOT/.content/cache/youtube_links_cache.json force_update Forzar actualización incluso si hay datos en caché False batch_size Número de elementos a procesar por lote 100 max_retries Máximo de reintentos para solicitudes fallidas 3 use_scrapers Usar scraping si falla la API True entity_types Tipos de entidades a procesar ['songs'] log_file Ruta del archivo de log PROJECT_ROOT/.content/logs/youtube_links.log log_level Nivel de detalle del registro 'INFO' concurrent_workers Número de procesos simultáneos 4 query_template Plantilla de búsqueda en YouTube \"{artist} - {title} official\" max_results Número máximo de resultados por búsqueda 5 min_match_score Puntuación mínima para considerar coincidencia 0.7",
    "description": "Argumento Descripción Valor por Defecto db_path Ruta a la base de datos SQLite — youtube_api_key Clave de API de YouTube — lastfm_api_key Clave de API de Last.fm — rate_limit Tiempo entre solicitudes API (segundos) 1.0 user_agent Agente de usuario para solicitudes HTTP 'MusicDB/1.0' missing_only Solo procesar elementos sin enlaces True cache_file Ruta del archivo de caché PROJECT_ROOT/.content/cache/youtube_links_cache.json force_update Forzar actualización incluso si hay datos en caché False batch_size Número de elementos a procesar por lote 100 max_retries Máximo de reintentos para solicitudes fallidas 3 use_scrapers Usar scraping si falla la API True entity_types Tipos de entidades a procesar ['songs'] log_file Ruta del archivo de log PROJECT_ROOT/.content/logs/youtube_links.log log_level Nivel de detalle del registro 'INFO' concurrent_workers Número de procesos simultáneos 4 query_template Plantilla de búsqueda en YouTube \"{artist} - {title} official\" max_results Número máximo de resultados por búsqueda 5 min_match_score Puntuación mínima para considerar coincidencia 0.7",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/11.-youtube-links-de-canciones/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  13.A Artículos en servidor RSS",
    "content": "Clave Tipo Descripción freshrss_url TEXT URL base del servidor FreshRSS freshrss_username TEXT Nombre de usuario para autenticación en FreshRSS freshrss_password TEXT Contraseña para autenticación en FreshRSS db_path TEXT Ruta al archivo de base de datos SQLite freshrss_cache_path TEXT (opcional) Ruta al archivo de caché categories LIST Categorías a procesar (por defecto: ['Blogs', 'Revistas', 'Wallabag']) search_entities LIST Entidades a buscar (por ejemplo: artists, albums, labels) search_short_terms BOOLEAN Permitir o bloquear términos cortos (por defecto: False) ignore_patterns LIST Patrones a ignorar (por defecto incluye: 'mix-for-nts', etc.)",
    "description": "Clave Tipo Descripción freshrss_url TEXT URL base del servidor FreshRSS freshrss_username TEXT Nombre de usuario para autenticación en FreshRSS freshrss_password TEXT Contraseña para autenticación en FreshRSS db_path TEXT Ruta al archivo de base de datos SQLite freshrss_cache_path TEXT (opcional) Ruta al archivo de caché categories LIST Categorías a procesar (por defecto: ['Blogs', 'Revistas', 'Wallabag']) search_entities LIST Entidades a buscar (por ejemplo: artists, albums, labels) search_short_terms BOOLEAN Permitir o bloquear términos cortos (por defecto: False) ignore_patterns LIST Patrones a ignorar (por defecto incluye: 'mix-for-nts', etc.)",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/13.a-art%C3%ADculos-en-servidor-rss/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  14. Discografías masters",
    "content": "Parámetro Tipo Valor por defecto Descripción discogs_token string '' (vacío) Token de autenticación para la API de Discogs (requerido) db_path string {PROJECT_ROOT}/db/sqlite/music.db Ruta completa a la base de datos SQLite force_update boolean False Si es True, actualiza registros existentes; si es False, solo procesa artistas nuevos accepted_formats list ['album', 'ep'] Lista de formatos de lanzamientos aceptados para importar rol_principal boolean False Si es True, solo importa lanzamientos donde el artista tiene rol ‘Main’; si es False, importa todos los lanzamientos",
    "description": "Parámetro Tipo Valor por defecto Descripción discogs_token string '' (vacío) Token de autenticación para la API de Discogs (requerido) db_path string {PROJECT_ROOT}/db/sqlite/music.db Ruta completa a la base de datos SQLite force_update boolean False Si es True, actualiza registros existentes; si es False, solo procesa artistas nuevos accepted_formats list ['album', 'ep'] Lista de formatos de lanzamientos aceptados para importar rol_principal boolean False Si es True, solo importa lanzamientos donde el artista tiene rol ‘Main’; si es False, importa todos los lanzamientos",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/14.-discograf%C3%ADas-masters/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  15. Discografías releases",
    "content": "Parámetro Tipo Valor por defecto Descripción db_path string {PROJECT_ROOT}/music.db Ruta completa a la base de datos SQLite discogs_token string '' (vacío) Token de autenticación para la API de Discogs (requerido) delay_between_requests float 1.5 Tiempo de espera en segundos entre peticiones a la API force_update boolean False Si es True, actualiza todos los registros; si es False, solo actualiza registros sin datos",
    "description": "Parámetro Tipo Valor por defecto Descripción db_path string {PROJECT_ROOT}/music.db Ruta completa a la base de datos SQLite discogs_token string '' (vacío) Token de autenticación para la API de Discogs (requerido) delay_between_requests float 1.5 Tiempo de espera en segundos entre peticiones a la API force_update boolean False Si es True, actualiza todos los registros; si es False, solo actualiza registros sin datos",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/15.-discograf%C3%ADas-releases/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  16. Discografías Info",
    "content": "Parámetro Tipo Valor por defecto Descripción db_path string {PROJECT_ROOT}/music.db Ruta completa a la base de datos SQLite force_update boolean False Si es True, actualiza todos los artistas; si es False, solo procesa artistas sin información sleep_time int/float 1 Tiempo de espera en segundos entre peticiones a la API discogs_token string '' (vacío) Token de autenticación para la API de Discogs (opcional pero recomendado) Procesamiento de datos de la API Campos extraídos de la API de Discogs Campo API Campo DB Procesamiento realname realname Directo profile profile Directo namevariations namevariations Convertido a JSON aliases aliases Extrae nombres y convierte a JSON groups groups Extrae nombres y convierte a JSON uri url Directo uri discogs_id Extrae ID numérico de la URL Conversión de URL El script maneja automáticamente la conversión entre formatos de URL:\nFormato de entrada Formato API https://www.discogs.com/artist/123-ArtistName https://api.discogs.com/artists/123 https://api.discogs.com/artists/123 Sin cambios Criterios de selección de artistas Modo Normal (force_update=False) SELECT a.id, a.name, COALESCE(an.discogs, a.discogs_url) as discogs_source FROM artists a LEFT JOIN artists_networks an ON a.id = an.artist_id LEFT JOIN artists_discogs_info adi ON a.id = adi.artist_id WHERE (an.discogs IS NOT NULL OR a.discogs_url IS NOT NULL) AND adi.artist_id IS NULL Resultado: Solo artistas que tienen URL de Discogs pero NO tienen información en artists_discogs_info\nModo Forzado (force_update=True) SELECT a.id, a.name, COALESCE(an.discogs, a.discogs_url) as discogs_source FROM artists a LEFT JOIN artists_networks an ON a.id = an.artist_id WHERE an.discogs IS NOT NULL OR a.discogs_url IS NOT NULL Resultado: Todos los artistas que tienen URL de Discogs (actualiza información existente)\nManejo de errores y límites Rate Limiting Característica Valor Descripción Delay por defecto 1 segundo Tiempo entre peticiones consecutivas User-Agent MusicDBUpdater/1.0 Requerido por la API de Discogs Autenticación Token opcional Mejora los límites de rate si se proporciona Gestión de errores Tipo de error Manejo URL vacía Salta el artista y continúa Error de API Registra error y continúa con siguiente Error de parseo Maneja graciosamente, continúa procesamiento Estadísticas del proceso El script proporciona información de monitoreo:\nInicio: Número total de artistas a procesar Progreso: Nombre del artista actual y URL siendo procesada Final: Resumen con artistas actualizados vs errores Operación de base de datos Inserción/Actualización Utiliza INSERT OR REPLACE para manejar tanto nuevos registros como actualizaciones La restricción UNIQUE(artist_id) previene duplicados Actualiza automáticamente last_updated en cada operación Dependencias y relaciones Tablas requeridas (deben existir previamente) artists - Tabla principal de artistas artists_networks - Enlaces de redes sociales y plataformas (opcional) Independencia Este script puede ejecutarse independientemente de los otros No requiere que se hayan ejecutado los scripts de discografía previamente Crea su propia tabla sin modificar estructuras existentes",
    "description": "Parámetro Tipo Valor por defecto Descripción db_path string {PROJECT_ROOT}/music.db Ruta completa a la base de datos SQLite force_update boolean False Si es True, actualiza todos los artistas; si es False, solo procesa artistas sin información sleep_time int/float 1 Tiempo de espera en segundos entre peticiones a la API discogs_token string '' (vacío) Token de autenticación para la API de Discogs (opcional pero recomendado) Procesamiento de datos de la API Campos extraídos de la API de Discogs Campo API Campo DB Procesamiento realname realname Directo profile profile Directo namevariations namevariations Convertido a JSON aliases aliases Extrae nombres y convierte a JSON groups groups Extrae nombres y convierte a JSON uri url Directo uri discogs_id Extrae ID numérico de la URL Conversión de URL El script maneja automáticamente la conversión entre formatos de URL:",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/16.-discograf%C3%ADas-info/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  17. Conciertos pasados Setlistfm",
    "content": "Argumento Tipo Descripción Valor por defecto Requerido setlistfm_apikey string API key de setlist.fm Variable de entorno SETLISTFM_APIKEY ✅ db_path string Ruta de la base de datos SQLite - ✅ interactive boolean Modo interactivo para confirmaciones False ❌ force_update boolean Forzar actualización de datos existentes False ❌ limit integer Límite de artistas a procesar (para pruebas) 0 (sin límite) ❌ artist_names list Lista de nombres de artistas específicos a procesar [] (todos) ❌ artist_ids list Lista de IDs de artistas específicos a procesar [] (todos) ❌ year integer Año específico para filtrar setlists 0 (todos los años) ❌ process_places boolean Procesar información de lugares de conciertos False ❌ setlistfm_id boolean Solo actualizar IDs de setlist.fm (no buscar setlists) False ❌ update_ids boolean Actualizar IDs de setlist.fm antes de buscar setlists False ❌",
    "description": "Argumento Tipo Descripción Valor por defecto Requerido setlistfm_apikey string API key de setlist.fm Variable de entorno SETLISTFM_APIKEY ✅ db_path string Ruta de la base de datos SQLite - ✅ interactive boolean Modo interactivo para confirmaciones False ❌ force_update boolean Forzar actualización de datos existentes False ❌ limit integer Límite de artistas a procesar (para pruebas) 0 (sin límite) ❌ artist_names list Lista de nombres de artistas específicos a procesar [] (todos) ❌ artist_ids list Lista de IDs de artistas específicos a procesar [] (todos) ❌ year integer Año específico para filtrar setlists 0 (todos los años) ❌ process_places boolean Procesar información de lugares de conciertos False ❌ setlistfm_id boolean Solo actualizar IDs de setlist.fm (no buscar setlists) False ❌ update_ids boolean Actualizar IDs de setlist.fm antes de buscar setlists False ❌",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base_datos/17.-conciertos-pasados-setlistfm/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  01.A Archivos locales",
    "content": "{ \"database\": { \"host\": \"localhost\", \"user\": \"usuario\", \"password\": \"contraseña\", \"database\": \"nombre_db\" } }",
    "description": "{ \"database\": { \"host\": \"localhost\", \"user\": \"usuario\", \"password\": \"contraseña\", \"database\": \"nombre_db\" } }",
    "tags": [],
    "title": "Configuración",
    "uri": "/base_datos/01.a-archivos-locales/configuraci%C3%B3n/index.html"
  },
  {
    "breadcrumb": "mfuzz",
    "content": "Base de datos Esta aplicación necesita la creación de una base de datos musical, y para ello necesitas editar el archivo db_creator_config.json en la carpeta config. En el podrás ver la configuración individual de cada script y el orden en que se ejecutaran los seleccionados.\nUna vez editado podrás lanzar el script db_creator.py asi desde la carpeta raiz:\npython db_creator.py --config config/db_creator_config.json Configuración JSON Primero has de elegir cual será la fuente de tu música, para ello puedes elegir varios puntos de partida, combinables entre ellos:\nEstos scripts se pueden combinar entre si para aumentar la cantidad de datos de la base de datos, pero si la intención es obtener la colección completa de trabajos de tus artistas presentes en tu biblioteca local, es más apropiado usar los scripts dedicados para las discografías con discogs en vez de spotify.\nCrearla con archivos locales Usará el script path/db_musica_path. Leerá la metadata de tus archivos de música, y con ella creará una estructura básica. Creará una columna origen con el string local para en la app poder filtrar de este modo. Obtener los artistas que sigues en spotify y sus discografías Usará el script path/db_musica_spotify Leerá todos los artistas que sigues y tomará toda su discografía en spotify para crear la estructura “básica” Creará una columna origen con el string local para en la app poder filtrar de este modo. Es aconsejable usar la aplicación Picard de musicbrainz para ajustar los tags de tu música digital. En Credenciales puedes encontrar un apartado con consejos al respecto.\nUna vez creada la estructura principal, el resto de scripts son totalmente opcionales, cada uno de ellos añadirá información a la base de datos, especificada en cada módulo. Del mismo modo es posible que requiera de ciertas credenciales especificados en tal caso en el config.json\nDependencias para la base de datos pip install requests beautifulsoup4 spotipy musicbrainzngs python3-discogs-client pylast python-youtube-search playwright tqdm sqlite3 google-api-python-client ?? Scripts Auxiliares Estos scripts puedes usarlos durante el proceso de creación o al final para consultar datos sobre la base de datos.\n[[estadisticas_db.py]] Muestra detalladamente el estado de la base de datos en comparación a una tabla completa finalizando todos los scripts. Uso python estadisticas_db.py --db-path basedatos.db\n[[Spaces/Scripts/menus/musica/base_datos/tools/consultar_items_db.py|consultar_items_db.py]] Puedes obtener diversos campos de la base de datos usando varios filtros. Leer mas aqui TODO\n[[unir_artistas.py]] Permite unir artistas bajo un mismo nombre, útil cuando te aparecen Chimobayo feat. Björk o similares colaboraciones.\nConsejos Dependiendo de la cantidad de contenido que tengas, estas tareas pueden llevar un tiempo, es recomendable el uso de un pequeño servidor para realizar estas tareas sin consumir mucho tiempo y consecuentemente dinero.\nEn cada paso se dan unas estimaciones del tiempo consumido\nTodas las consultas respetan los limites establecidas por cada api y las restricciones diarias pausaran el script que alcance el límite hasta que este sea restablecido",
    "description": "Base de datos Esta aplicación necesita la creación de una base de datos musical, y para ello necesitas editar el archivo db_creator_config.json en la carpeta config. En el podrás ver la configuración individual de cada script y el orden en que se ejecutaran los seleccionados.\nUna vez editado podrás lanzar el script db_creator.py asi desde la carpeta raiz:\npython db_creator.py --config config/db_creator_config.json Configuración JSON Primero has de elegir cual será la fuente de tu música, para ello puedes elegir varios puntos de partida, combinables entre ellos:",
    "tags": [],
    "title": "Creación de la base de datos",
    "uri": "/base_datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  02. Scrobbles lastfm",
    "content": "Tabla lastfm_config Campo Tipo Descripción id INTEGER Campo id (clave primaria)",
    "description": "Tabla lastfm_config Campo Tipo Descripción id INTEGER Campo id (clave primaria)",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/02.-scrobbles-lastfm/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  03. Listens listenbrainz",
    "content": "Tabla listenbrainz_backfill Campo Tipo Descripción id INTEGER Campo id (clave primaria) Tabla listenbrainz_config Campo Tipo Descripción id INTEGER Campo id (clave primaria) Tabla normalized_songs Campo Tipo Descripción song_id INTEGER Campo song_id (clave primaria) normalized_title TEXT Campo normalized_title normalized_artist TEXT Campo normalized_artist normalized_album TEXT Campo normalized_album Tabla song_links Campo Tipo Descripción links_updated TEXT Campo links_updated (detectado en operación DML)",
    "description": "Tabla listenbrainz_backfill Campo Tipo Descripción id INTEGER Campo id (clave primaria) Tabla listenbrainz_config Campo Tipo Descripción id INTEGER Campo id (clave primaria) Tabla normalized_songs Campo Tipo Descripción song_id INTEGER Campo song_id (clave primaria) normalized_title TEXT Campo normalized_title normalized_artist TEXT Campo normalized_artist normalized_album TEXT Campo normalized_album Tabla song_links Campo Tipo Descripción links_updated TEXT Campo links_updated (detectado en operación DML)",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/03.-listens-listenbrainz/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  04. Redes",
    "content": "Tabla artists_networks Campo Tipo Descripción id INTEGER Clave primaria artist_id INTEGER ID del artista (clave foránea a la tabla artists) allmusic TEXT URL de AllMusic bandcamp TEXT URL de Bandcamp boomkat TEXT URL de Boomkat facebook TEXT URL de Facebook twitter TEXT URL de Twitter mastodon TEXT URL de Mastodon bluesky TEXT URL de Bluesky instagram TEXT URL de Instagram spotify TEXT URL de Spotify lastfm TEXT URL de Last.fm wikipedia TEXT URL de Wikipedia juno TEXT URL de Juno soundcloud TEXT URL de SoundCloud youtube TEXT URL de YouTube imdb TEXT URL de IMDb progarchives TEXT URL de ProgArchives setlist_fm TEXT URL de Setlist.fm who_sampled TEXT URL de WhoSampled vimeo TEXT URL de Vimeo genius TEXT URL de Genius myspace TEXT URL de MySpace tumblr TEXT URL de Tumblr resident_advisor TEXT URL de Resident Advisor rateyourmusic TEXT URL de RateYourMusic enlaces TEXT JSON con enlaces adicionales no categorizados last_updated TIMESTAMP Fecha y hora de la última actualización",
    "description": "Tabla artists_networks Campo Tipo Descripción id INTEGER Clave primaria artist_id INTEGER ID del artista (clave foránea a la tabla artists) allmusic TEXT URL de AllMusic bandcamp TEXT URL de Bandcamp boomkat TEXT URL de Boomkat facebook TEXT URL de Facebook twitter TEXT URL de Twitter mastodon TEXT URL de Mastodon bluesky TEXT URL de Bluesky instagram TEXT URL de Instagram spotify TEXT URL de Spotify lastfm TEXT URL de Last.fm wikipedia TEXT URL de Wikipedia juno TEXT URL de Juno soundcloud TEXT URL de SoundCloud youtube TEXT URL de YouTube imdb TEXT URL de IMDb progarchives TEXT URL de ProgArchives setlist_fm TEXT URL de Setlist.fm who_sampled TEXT URL de WhoSampled vimeo TEXT URL de Vimeo genius TEXT URL de Genius myspace TEXT URL de MySpace tumblr TEXT URL de Tumblr resident_advisor TEXT URL de Resident Advisor rateyourmusic TEXT URL de RateYourMusic enlaces TEXT JSON con enlaces adicionales no categorizados last_updated TIMESTAMP Fecha y hora de la última actualización",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/04.-redes/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  08. Enlaces albums",
    "content": "album_links (principal) Crea la tabla si no existe Actualiza los enlaces para cada álbum albums (referencia) Lee información sobre álbumes (id, name, artist_id) No modifica directamente esta tabla Archivos Archivo Descripción Detalles de Formato o Estructura ~/.cache/music_db/enlaces_albumes_cache.json Almacena resultados de búsquedas previas {\"query_hash\": {\"url\": \"...\", \"timestamp\": \"...\"}} logs/enlaces_albumes.log Registra actividad, errores y resultados de la ejecución [FECHA] [NIVEL] [Mensaje]",
    "description": "album_links (principal) Crea la tabla si no existe Actualiza los enlaces para cada álbum albums (referencia) Lee información sobre álbumes (id, name, artist_id) No modifica directamente esta tabla Archivos Archivo Descripción Detalles de Formato o Estructura ~/.cache/music_db/enlaces_albumes_cache.json Almacena resultados de búsquedas previas {\"query_hash\": {\"url\": \"...\", \"timestamp\": \"...\"}} logs/enlaces_albumes.log Registra actividad, errores y resultados de la ejecución [FECHA] [NIVEL] [Mensaje]",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/08.-enlaces-albums/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  10. Wikipedia",
    "content": "Tabla artists Campo Tipo Descripción wikipedia_url TEXT URL de la página de Wikipedia del artista wikipedia_content TEXT Contenido extraído de la página de Wikipedia wikipedia_updated TIMESTAMP Timestamp de la última actualización de la información de Wikipedia links_updated TIMESTAMP Timestamp de la última actualización de los enlaces Tabla albums Campo Tipo Descripción wikipedia_url TEXT URL de la página de Wikipedia del artista wikipedia_content TEXT Contenido extraído de la página de Wikipedia wikipedia_updated TIMESTAMP Timestamp de la última actualización de la información de Wikipedia links_updated TIMESTAMP Timestamp de la última actualización de los enlaces Tabla labels Campo Tipo Descripción wikipedia_url TEXT URL de la página de Wikipedia del sello discográfico wikipedia_content TEXT Contenido extraído de la página de Wikipedia wikipedia_updated TIMESTAMP Timestamp de la última actualización de la información de Wikipedia links_updated TIMESTAMP Timestamp de la última actualización de los enlaces",
    "description": "Tabla artists Campo Tipo Descripción wikipedia_url TEXT URL de la página de Wikipedia del artista wikipedia_content TEXT Contenido extraído de la página de Wikipedia wikipedia_updated TIMESTAMP Timestamp de la última actualización de la información de Wikipedia links_updated TIMESTAMP Timestamp de la última actualización de los enlaces Tabla albums Campo Tipo Descripción wikipedia_url TEXT URL de la página de Wikipedia del artista wikipedia_content TEXT Contenido extraído de la página de Wikipedia wikipedia_updated TIMESTAMP Timestamp de la última actualización de la información de Wikipedia links_updated TIMESTAMP Timestamp de la última actualización de los enlaces Tabla labels Campo Tipo Descripción wikipedia_url TEXT URL de la página de Wikipedia del sello discográfico wikipedia_content TEXT Contenido extraído de la página de Wikipedia wikipedia_updated TIMESTAMP Timestamp de la última actualización de la información de Wikipedia links_updated TIMESTAMP Timestamp de la última actualización de los enlaces",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/10.-wikipedia/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  12. Letras",
    "content": "Tabla lyrics Campo Tipo Descripción id INTEGER Identificador único de la letra track_id INTEGER ID de la canción asociada (clave foránea a songs.id) lyrics TEXT El texto completo de la letra source TEXT La fuente de la letra (ej. ‘Genius’, ’lyrics.ovh’, ‘Happi’, ‘Musixmatch’) last_updated TIMESTAMP Fecha y hora de la última actualización",
    "description": "Tabla lyrics Campo Tipo Descripción id INTEGER Identificador único de la letra track_id INTEGER ID de la canción asociada (clave foránea a songs.id) lyrics TEXT El texto completo de la letra source TEXT La fuente de la letra (ej. ‘Genius’, ’lyrics.ovh’, ‘Happi’, ‘Musixmatch’) last_updated TIMESTAMP Fecha y hora de la última actualización",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/12.-letras/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  08. Enlaces albums",
    "content": "Archivo Descripción Detalles de Formato o Estructura ~/.cache/music_db/enlaces_albumes_cache.json Almacena resultados de búsquedas previas {\"query_hash\": {\"url\": \"...\", \"timestamp\": \"...\"}} logs/enlaces_albumes.log Registra actividad, errores y resultados de la ejecución [FECHA] [NIVEL] [Mensaje]",
    "description": "Archivo Descripción Detalles de Formato o Estructura ~/.cache/music_db/enlaces_albumes_cache.json Almacena resultados de búsquedas previas {\"query_hash\": {\"url\": \"...\", \"timestamp\": \"...\"}} logs/enlaces_albumes.log Registra actividad, errores y resultados de la ejecución [FECHA] [NIVEL] [Mensaje]",
    "tags": [],
    "title": "Archivos",
    "uri": "/base_datos/08.-enlaces-albums/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  07. Enlaces artistas",
    "content": "{}",
    "description": "{}",
    "tags": [],
    "title": "Configuración JSON",
    "uri": "/base_datos/07.-enlaces-artistas/configuraci%C3%B3n_json/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  07. Enlaces artistas",
    "content": "Servicio Credenciales Descripción Spotify client_id, client_secret Credenciales de Spotify Developer Last.fm api_key, api_secret Claves de API de Last.fm Discogs token Token de acceso para la API de Discogs MusicBrainz No requiere credenciales Usa un user-agent personalizado",
    "description": "Servicio Credenciales Descripción Spotify client_id, client_secret Credenciales de Spotify Developer Last.fm api_key, api_secret Claves de API de Last.fm Discogs token Token de acceso para la API de Discogs MusicBrainz No requiere credenciales Usa un user-agent personalizado",
    "tags": [],
    "title": "Credenciales",
    "uri": "/base_datos/07.-enlaces-artistas/credenciales/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  09. Enlaces canciones",
    "content": "Spotify API (client_id, client_secret) Last.fm API (api_key) Google API (api_key, custom_search_engine_id)",
    "description": "Spotify API (client_id, client_secret) Last.fm API (api_key) Google API (api_key, custom_search_engine_id)",
    "tags": [],
    "title": "Credenciales",
    "uri": "/base_datos/09.-enlaces-canciones/credenciales/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  11. Musicbrainz sellos",
    "content": "Variable Descripción Opcional MUSICBRAINZ_APP Nombre de la aplicación para usar la API de MusicBrainz No MUSICBRAINZ_VERSION Versión de la aplicación No MUSICBRAINZ_EMAIL Correo electrónico para identificación en MusicBrainz No DISCOGS_TOKEN Token de autenticación para la API de Discogs Sí",
    "description": "Variable Descripción Opcional MUSICBRAINZ_APP Nombre de la aplicación para usar la API de MusicBrainz No MUSICBRAINZ_VERSION Versión de la aplicación No MUSICBRAINZ_EMAIL Correo electrónico para identificación en MusicBrainz No DISCOGS_TOKEN Token de autenticación para la API de Discogs Sí",
    "tags": [],
    "title": "Credenciales",
    "uri": "/base_datos/11.-musicbrainz-sellos/credenciales/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  11. Youtube links de canciones",
    "content": "Clave Descripción Obligatoria YOUTUBE_API_KEY Clave de API de YouTube (console.developers.google.com) Sí LASTFM_API_KEY Clave de API de Last.fm (last.fm/api) Sí USER_AGENT User-Agent personalizado para solicitudes HTTP Sí",
    "description": "Clave Descripción Obligatoria YOUTUBE_API_KEY Clave de API de YouTube (console.developers.google.com) Sí LASTFM_API_KEY Clave de API de Last.fm (last.fm/api) Sí USER_AGENT User-Agent personalizado para solicitudes HTTP Sí",
    "tags": [],
    "title": "Credenciales",
    "uri": "/base_datos/11.-youtube-links-de-canciones/credenciales/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  01.A Archivos locales",
    "content": "Rellena las tablas artists, álbums y songs con:\nCampo Origen Descripción file_path Metadata Ruta completa al archivo de audio title Metadata Título de la canción track_number Metadata Número de pista dentro del álbum artist Metadata Artista principal album_artist Metadata Artista del álbum (puede diferir del artista de la pista) album Metadata Nombre del álbum date Metadata Año de publicación o grabación genre Metadata Género musical label Metadata Sello discográfico mbid Metadata Identificador MusicBrainz last_modified Archivo Fecha de última modificación del archivo added_timestamp Sistema Momento exacto en que fue añadido a la base de datos added_week Derivado Semana del año en la que fue añadido added_month Derivado Mes en que fue añadido added_year Derivado Año en que fue añadido folder_path Sistema Carpeta donde se encuentra el archivo replay_gain_album_gain Metadata Ganancia de volumen del álbum (ReplayGain) replay_gain_album_peak Metadata Pico de volumen del álbum (ReplayGain) replay_gain_track_gain Metadata Ganancia de volumen de la pista (ReplayGain) replay_gain_track_peak Metadata Pico de volumen de la pista (ReplayGain) ![[db_music_path_module.py]]",
    "description": "Rellena las tablas artists, álbums y songs con:\nCampo Origen Descripción file_path Metadata Ruta completa al archivo de audio title Metadata Título de la canción track_number Metadata Número de pista dentro del álbum artist Metadata Artista principal album_artist Metadata Artista del álbum (puede diferir del artista de la pista) album Metadata Nombre del álbum date Metadata Año de publicación o grabación genre Metadata Género musical label Metadata Sello discográfico mbid Metadata Identificador MusicBrainz last_modified Archivo Fecha de última modificación del archivo added_timestamp Sistema Momento exacto en que fue añadido a la base de datos added_week Derivado Semana del año en la que fue añadido added_month Derivado Mes en que fue añadido added_year Derivado Año en que fue añadido folder_path Sistema Carpeta donde se encuentra el archivo replay_gain_album_gain Metadata Ganancia de volumen del álbum (ReplayGain) replay_gain_album_peak Metadata Pico de volumen del álbum (ReplayGain) replay_gain_track_gain Metadata Ganancia de volumen de la pista (ReplayGain) replay_gain_track_peak Metadata Pico de volumen de la pista (ReplayGain) ![[db_music_path_module.py]]",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/01.a-archivos-locales/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  01.B Spotify",
    "content": "Tabla songs Campo Tipo Descripción id INTEGER Campo id (clave primaria) file_path TEXT Campo file_path title TEXT Campo title track_number INTEGER Campo track_number artist TEXT Campo artist album_artist TEXT Campo album_artist album TEXT Campo album date TEXT Campo date genre TEXT Campo genre label TEXT Campo label mbid TEXT Campo mbid bitrate INTEGER Campo bitrate bit_depth INTEGER Campo bit_depth sample_rate INTEGER Campo sample_rate last_modified TIMESTAMP Campo last_modified added_timestamp TIMESTAMP Campo added_timestamp added_day INTEGER Campo added_day added_week INTEGER Campo added_week added_month INTEGER Campo added_month added_year INTEGER Campo added_year duration REAL Campo duration lyrics_id INTEGER Campo lyrics_id replay_gain_track_gain REAL Campo replay_gain_track_gain replay_gain_track_peak REAL Campo replay_gain_track_peak replay_gain_album_gain REAL Campo replay_gain_album_gain replay_gain_album_peak REAL Campo replay_gain_album_peak album_art_path_denorm TEXT Campo album_art_path_denorm has_lyrics INTEGER Campo has_lyrics origen TEXT Campo origen Tabla artists Campo Tipo Descripción id INTEGER Campo id (clave primaria) name TEXT Campo name bio TEXT Campo bio tags TEXT Campo tags similar_artists TEXT Campo similar_artists last_updated TIMESTAMP Campo last_updated origin TEXT Campo origin formed_year INTEGER Campo formed_year total_albums INTEGER Campo total_albums spotify_url TEXT Campo spotify_url youtube_url TEXT Campo youtube_url musicbrainz_url TEXT Campo musicbrainz_url discogs_url TEXT Campo discogs_url rateyourmusic_url TEXT Campo rateyourmusic_url links_updated TIMESTAMP Campo links_updated wikipedia_url TEXT Campo wikipedia_url wikipedia_content TEXT Campo wikipedia_content wikipedia_updated TIMESTAMP Campo wikipedia_updated mbid TEXT Campo mbid bandcamp_url TEXT Campo bandcamp_url member_of TEXT Campo member_of aliases TEXT Campo aliases lastfm_url TEXT Campo lastfm_url origen TEXT Campo origen added_timestamp TIMESTAMP Campo added_timestamp added_day INTEGER Campo added_day added_week INTEGER Campo added_week added_month INTEGER Campo added_month added_year INTEGER Campo added_year Tabla albums Campo Tipo Descripción id INTEGER Campo id (clave primaria) artist_id INTEGER Campo artist_id name TEXT Campo name year TEXT Campo year label TEXT Campo label genre TEXT Campo genre total_tracks INTEGER Campo total_tracks album_art_path TEXT Campo album_art_path last_updated TIMESTAMP Campo last_updated spotify_url TEXT Campo spotify_url spotify_id TEXT Campo spotify_id youtube_url TEXT Campo youtube_url musicbrainz_url TEXT Campo musicbrainz_url discogs_url TEXT Campo discogs_url rateyourmusic_url TEXT Campo rateyourmusic_url links_updated TIMESTAMP Campo links_updated wikipedia_url TEXT Campo wikipedia_url wikipedia_content TEXT Campo wikipedia_content wikipedia_updated TIMESTAMP Campo wikipedia_updated mbid TEXT Campo mbid folder_path TEXT Campo folder_path bitrate_range TEXT Campo bitrate_range bandcamp_url TEXT Campo bandcamp_url producers TEXT Campo producers engineers TEXT Campo engineers mastering_engineers TEXT Campo mastering_engineers credits JSON Campo credits lastfm_url TEXT Campo lastfm_url origen TEXT Campo origen added_timestamp TIMESTAMP Campo added_timestamp added_day INTEGER Campo added_day added_week INTEGER Campo added_week added_month INTEGER Campo added_month added_year INTEGER Campo added_year Tabla genres Campo Tipo Descripción id INTEGER Campo id (clave primaria) name TEXT Campo name description TEXT Campo description related_genres TEXT Campo related_genres origin_year INTEGER Campo origin_year Tabla lyrics Campo Tipo Descripción id INTEGER Campo id (clave primaria) track_id INTEGER Campo track_id lyrics TEXT Campo lyrics source TEXT Campo source last_updated TIMESTAMP Campo last_updated Tabla song_links Campo Tipo Descripción id INTEGER Campo id (clave primaria) song_id INTEGER Campo song_id spotify_url TEXT Campo spotify_url spotify_id TEXT Campo spotify_id lastfm_url TEXT Campo lastfm_url links_updated TIMESTAMP Campo links_updated youtube_url TEXT Campo youtube_url musicbrainz_url TEXT Campo musicbrainz_url musicbrainz_recording_id TEXT Campo musicbrainz_recording_id bandcamp_url TEXT Campo bandcamp_url soundcloud_url TEXT Campo soundcloud_url boomkat_url TEXT Campo boomkat_url",
    "description": "Tabla songs Campo Tipo Descripción id INTEGER Campo id (clave primaria) file_path TEXT Campo file_path title TEXT Campo title track_number INTEGER Campo track_number artist TEXT Campo artist album_artist TEXT Campo album_artist album TEXT Campo album date TEXT Campo date genre TEXT Campo genre label TEXT Campo label mbid TEXT Campo mbid bitrate INTEGER Campo bitrate bit_depth INTEGER Campo bit_depth sample_rate INTEGER Campo sample_rate last_modified TIMESTAMP Campo last_modified added_timestamp TIMESTAMP Campo added_timestamp added_day INTEGER Campo added_day added_week INTEGER Campo added_week added_month INTEGER Campo added_month added_year INTEGER Campo added_year duration REAL Campo duration lyrics_id INTEGER Campo lyrics_id replay_gain_track_gain REAL Campo replay_gain_track_gain replay_gain_track_peak REAL Campo replay_gain_track_peak replay_gain_album_gain REAL Campo replay_gain_album_gain replay_gain_album_peak REAL Campo replay_gain_album_peak album_art_path_denorm TEXT Campo album_art_path_denorm has_lyrics INTEGER Campo has_lyrics origen TEXT Campo origen Tabla artists Campo Tipo Descripción id INTEGER Campo id (clave primaria) name TEXT Campo name bio TEXT Campo bio tags TEXT Campo tags similar_artists TEXT Campo similar_artists last_updated TIMESTAMP Campo last_updated origin TEXT Campo origin formed_year INTEGER Campo formed_year total_albums INTEGER Campo total_albums spotify_url TEXT Campo spotify_url youtube_url TEXT Campo youtube_url musicbrainz_url TEXT Campo musicbrainz_url discogs_url TEXT Campo discogs_url rateyourmusic_url TEXT Campo rateyourmusic_url links_updated TIMESTAMP Campo links_updated wikipedia_url TEXT Campo wikipedia_url wikipedia_content TEXT Campo wikipedia_content wikipedia_updated TIMESTAMP Campo wikipedia_updated mbid TEXT Campo mbid bandcamp_url TEXT Campo bandcamp_url member_of TEXT Campo member_of aliases TEXT Campo aliases lastfm_url TEXT Campo lastfm_url origen TEXT Campo origen added_timestamp TIMESTAMP Campo added_timestamp added_day INTEGER Campo added_day added_week INTEGER Campo added_week added_month INTEGER Campo added_month added_year INTEGER Campo added_year Tabla albums Campo Tipo Descripción id INTEGER Campo id (clave primaria) artist_id INTEGER Campo artist_id name TEXT Campo name year TEXT Campo year label TEXT Campo label genre TEXT Campo genre total_tracks INTEGER Campo total_tracks album_art_path TEXT Campo album_art_path last_updated TIMESTAMP Campo last_updated spotify_url TEXT Campo spotify_url spotify_id TEXT Campo spotify_id youtube_url TEXT Campo youtube_url musicbrainz_url TEXT Campo musicbrainz_url discogs_url TEXT Campo discogs_url rateyourmusic_url TEXT Campo rateyourmusic_url links_updated TIMESTAMP Campo links_updated wikipedia_url TEXT Campo wikipedia_url wikipedia_content TEXT Campo wikipedia_content wikipedia_updated TIMESTAMP Campo wikipedia_updated mbid TEXT Campo mbid folder_path TEXT Campo folder_path bitrate_range TEXT Campo bitrate_range bandcamp_url TEXT Campo bandcamp_url producers TEXT Campo producers engineers TEXT Campo engineers mastering_engineers TEXT Campo mastering_engineers credits JSON Campo credits lastfm_url TEXT Campo lastfm_url origen TEXT Campo origen added_timestamp TIMESTAMP Campo added_timestamp added_day INTEGER Campo added_day added_week INTEGER Campo added_week added_month INTEGER Campo added_month added_year INTEGER Campo added_year Tabla genres Campo Tipo Descripción id INTEGER Campo id (clave primaria) name TEXT Campo name description TEXT Campo description related_genres TEXT Campo related_genres origin_year INTEGER Campo origin_year Tabla lyrics Campo Tipo Descripción id INTEGER Campo id (clave primaria) track_id INTEGER Campo track_id lyrics TEXT Campo lyrics source TEXT Campo source last_updated TIMESTAMP Campo last_updated Tabla song_links Campo Tipo Descripción id INTEGER Campo id (clave primaria) song_id INTEGER Campo song_id spotify_url TEXT Campo spotify_url spotify_id TEXT Campo spotify_id lastfm_url TEXT Campo lastfm_url links_updated TIMESTAMP Campo links_updated youtube_url TEXT Campo youtube_url musicbrainz_url TEXT Campo musicbrainz_url musicbrainz_recording_id TEXT Campo musicbrainz_recording_id bandcamp_url TEXT Campo bandcamp_url soundcloud_url TEXT Campo soundcloud_url boomkat_url TEXT Campo boomkat_url",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/01.b-spotify/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  05. Musicbrainz album info",
    "content": "Tabla mb_release_group Campo Tipo Descripción id INTEGER PK Clave primaria mbid TEXT ID de MusicBrainz title TEXT Título del grupo de lanzamiento artist_credit TEXT Créditos de artistas first_release_date TEXT Fecha del primer lanzamiento primary_type TEXT Tipo primario (álbum, single, etc.) secondary_types TEXT Tipos secundarios album_id INTEGER Referencia al álbum artist_id INTEGER Referencia al artista genre TEXT Géneros musicales associated_singles TEXT Singles asociados discogs_url TEXT Enlace a Discogs rateyourmusic_url TEXT Enlace a RateYourMusic allmusic_url TEXT Enlace a AllMusic wikidata_id TEXT ID de Wikidata last_updated TIMESTAMP Fecha de la última actualización [columnas dinámicas] Variado Columnas generadas desde propiedades de Wikidata Tabla mb_wikidata Campo Tipo Descripción id INTEGER PK Clave primaria wikidata_id TEXT ID de la entidad en Wikidata release_group_mbid TEXT Referencia al MBID del grupo de lanzamiento album_id INTEGER Referencia al álbum artist_id INTEGER Referencia al artista label_id INTEGER Referencia al sello discográfico property_id TEXT ID de la propiedad de Wikidata property_label TEXT Etiqueta legible de la propiedad property_value TEXT Valor de la propiedad last_updated TIMESTAMP Fecha de la última actualización value_type TEXT Tipo de valor is_link INTEGER Indica si el valor es un enlace (0 o 1)",
    "description": "Tabla mb_release_group Campo Tipo Descripción id INTEGER PK Clave primaria mbid TEXT ID de MusicBrainz title TEXT Título del grupo de lanzamiento artist_credit TEXT Créditos de artistas first_release_date TEXT Fecha del primer lanzamiento primary_type TEXT Tipo primario (álbum, single, etc.) secondary_types TEXT Tipos secundarios album_id INTEGER Referencia al álbum artist_id INTEGER Referencia al artista genre TEXT Géneros musicales associated_singles TEXT Singles asociados discogs_url TEXT Enlace a Discogs rateyourmusic_url TEXT Enlace a RateYourMusic allmusic_url TEXT Enlace a AllMusic wikidata_id TEXT ID de Wikidata last_updated TIMESTAMP Fecha de la última actualización [columnas dinámicas] Variado Columnas generadas desde propiedades de Wikidata Tabla mb_wikidata Campo Tipo Descripción id INTEGER PK Clave primaria wikidata_id TEXT ID de la entidad en Wikidata release_group_mbid TEXT Referencia al MBID del grupo de lanzamiento album_id INTEGER Referencia al álbum artist_id INTEGER Referencia al artista label_id INTEGER Referencia al sello discográfico property_id TEXT ID de la propiedad de Wikidata property_label TEXT Etiqueta legible de la propiedad property_value TEXT Valor de la propiedad last_updated TIMESTAMP Fecha de la última actualización value_type TEXT Tipo de valor is_link INTEGER Indica si el valor es un enlace (0 o 1)",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/05.-musicbrainz-album-info/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  06. Musicbrainz canciones",
    "content": "Campo Tipo Descripción id INTEGER (PK) Identificador único autoincremental song_id INTEGER ID de la canción en la tabla songs relationship_type TEXT Tipo de relación (ej. sample, remix, etc.) related_mbid TEXT ID de MusicBrainz del elemento relacionado related_title TEXT Título del elemento relacionado related_artist TEXT Artista del elemento relacionado relationship_direction TEXT Dirección de la relación (entrante o saliente) last_updated TIMESTAMP Fecha y hora de la última actualización",
    "description": "Campo Tipo Descripción id INTEGER (PK) Identificador único autoincremental song_id INTEGER ID de la canción en la tabla songs relationship_type TEXT Tipo de relación (ej. sample, remix, etc.) related_mbid TEXT ID de MusicBrainz del elemento relacionado related_title TEXT Título del elemento relacionado related_artist TEXT Artista del elemento relacionado relationship_direction TEXT Dirección de la relación (entrante o saliente) last_updated TIMESTAMP Fecha y hora de la última actualización",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/06.-musicbrainz-canciones/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  07. Enlaces artistas",
    "content": "Tabla albums Campo Tipo Descripción mbid TEXT Campo mbid (detectado en operación DML) Tabla songs Campo Tipo Descripción mbid TEXT Campo mbid (detectado en operación DML) Configuración { \"spotify\": { \"client_id\": \"tu_spotify_client_id\", \"client_secret\": \"tu_spotify_client_secret\" }, \"lastfm\": { \"api_key\": \"tu_lastfm_api_key\", \"api_secret\": \"tu_lastfm_secret\" }, \"logging\": { \"level\": \"INFO\", \"file\": \"app.log\", \"format\": \"%(asctime)s - %(levelname)s - %(message)s\" }, \"variables_entorno\": { \"descripcion\": \"Variables de entorno utilizadas\", \"variables\": [ \"LASTFM_USER\", \"LASTFM_API_KEY\", \"DB_PATH\", \"DISCOGS_TOKEN\", \"GOOGLE_API_KEY\", \"SPOTIFY_CLIENT_SECRET\", \"SPOTIFY_CLIENT_ID\" ] } } Tabla artists Campo Tipo Descripción mbid TEXT Campo mbid (detectado en operación DML)",
    "description": "Tabla albums Campo Tipo Descripción mbid TEXT Campo mbid (detectado en operación DML) Tabla songs Campo Tipo Descripción mbid TEXT Campo mbid (detectado en operación DML) Configuración { \"spotify\": { \"client_id\": \"tu_spotify_client_id\", \"client_secret\": \"tu_spotify_client_secret\" }, \"lastfm\": { \"api_key\": \"tu_lastfm_api_key\", \"api_secret\": \"tu_lastfm_secret\" }, \"logging\": { \"level\": \"INFO\", \"file\": \"app.log\", \"format\": \"%(asctime)s - %(levelname)s - %(message)s\" }, \"variables_entorno\": { \"descripcion\": \"Variables de entorno utilizadas\", \"variables\": [ \"LASTFM_USER\", \"LASTFM_API_KEY\", \"DB_PATH\", \"DISCOGS_TOKEN\", \"GOOGLE_API_KEY\", \"SPOTIFY_CLIENT_SECRET\", \"SPOTIFY_CLIENT_ID\" ] } } Tabla artists Campo Tipo Descripción mbid TEXT Campo mbid (detectado en operación DML)",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/07.-enlaces-artistas/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  13.A Artículos en servidor RSS",
    "content": "Tabla feeds Clave Tipo Descripción freshrss_url TEXT URL base del servidor FreshRSS freshrss_username TEXT Nombre de usuario para autenticación en FreshRSS freshrss_password TEXT Contraseña para autenticación en FreshRSS db_path TEXT Ruta al archivo de base de datos SQLite freshrss_cache_path TEXT (opcional) Ruta al archivo de caché categories LIST Categorías a procesar (por defecto: ['Blogs', 'Revistas', 'Wallabag']) search_entities LIST Entidades a buscar (por ejemplo: artists, albums, labels) search_short_terms BOOLEAN Permitir o bloquear términos cortos (por defecto: False) ignore_patterns LIST Patrones a ignorar (por defecto incluye: 'mix-for-nts', etc.)",
    "description": "Tabla feeds Clave Tipo Descripción freshrss_url TEXT URL base del servidor FreshRSS freshrss_username TEXT Nombre de usuario para autenticación en FreshRSS freshrss_password TEXT Contraseña para autenticación en FreshRSS db_path TEXT Ruta al archivo de base de datos SQLite freshrss_cache_path TEXT (opcional) Ruta al archivo de caché categories LIST Categorías a procesar (por defecto: ['Blogs', 'Revistas', 'Wallabag']) search_entities LIST Entidades a buscar (por ejemplo: artists, albums, labels) search_short_terms BOOLEAN Permitir o bloquear términos cortos (por defecto: False) ignore_patterns LIST Patrones a ignorar (por defecto incluye: 'mix-for-nts', etc.)",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/13.a-art%C3%ADculos-en-servidor-rss/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  14. Discografías masters",
    "content": "Tabla: discogs_discography Columna Tipo Restricciones Descripción id INTEGER PRIMARY KEY Identificador único del registro artist_id INTEGER NOT NULL, FOREIGN KEY → artists(id) ID del artista en la tabla local album_id INTEGER FOREIGN KEY → albums(id) ID del álbum en la tabla local (puede ser NULL) album_name TEXT NOT NULL Nombre del álbum/lanzamiento type TEXT Tipo de lanzamiento (album, single, etc.) main_release INTEGER ID del lanzamiento principal en Discogs role TEXT Rol del artista en el lanzamiento resource_url TEXT URL del recurso en la API de Discogs year INTEGER Año de lanzamiento thumb TEXT URL de la imagen en miniatura stats_comm_wantlist INTEGER Número de usuarios que lo tienen en wishlist stats_comm_coll INTEGER Número de usuarios que lo tienen en colección user_wantlist INTEGER DEFAULT 0 Si el usuario lo tiene en wishlist user_coll INTEGER DEFAULT 0 Si el usuario lo tiene en colección format TEXT Información del formato (almacenado como JSON) label TEXT Información del sello discográfico (almacenado como JSON) status TEXT Estado del lanzamiento discogs_id INTEGER ID único del lanzamiento en Discogs last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP Fecha de última actualización Índices creados Nombre del índice Columna(s) Descripción idx_disco_artist_id artist_id Mejora consultas por artista idx_disco_album_id album_id Mejora consultas por álbum idx_disco_discogs_id discogs_id Mejora consultas por ID de Discogs",
    "description": "Tabla: discogs_discography Columna Tipo Restricciones Descripción id INTEGER PRIMARY KEY Identificador único del registro artist_id INTEGER NOT NULL, FOREIGN KEY → artists(id) ID del artista en la tabla local album_id INTEGER FOREIGN KEY → albums(id) ID del álbum en la tabla local (puede ser NULL) album_name TEXT NOT NULL Nombre del álbum/lanzamiento type TEXT Tipo de lanzamiento (album, single, etc.) main_release INTEGER ID del lanzamiento principal en Discogs role TEXT Rol del artista en el lanzamiento resource_url TEXT URL del recurso en la API de Discogs year INTEGER Año de lanzamiento thumb TEXT URL de la imagen en miniatura stats_comm_wantlist INTEGER Número de usuarios que lo tienen en wishlist stats_comm_coll INTEGER Número de usuarios que lo tienen en colección user_wantlist INTEGER DEFAULT 0 Si el usuario lo tiene en wishlist user_coll INTEGER DEFAULT 0 Si el usuario lo tiene en colección format TEXT Información del formato (almacenado como JSON) label TEXT Información del sello discográfico (almacenado como JSON) status TEXT Estado del lanzamiento discogs_id INTEGER ID único del lanzamiento en Discogs last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP Fecha de última actualización Índices creados Nombre del índice Columna(s) Descripción idx_disco_artist_id artist_id Mejora consultas por artista idx_disco_album_id album_id Mejora consultas por álbum idx_disco_discogs_id discogs_id Mejora consultas por ID de Discogs",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/14.-discograf%C3%ADas-masters/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  15. Discografías releases",
    "content": "Nuevas columnas agregadas automáticamente Columna Tipo Descripción uri_release TEXT URI única del release en Discogs labels JSON Información de los sellos discográficos (almacenado como JSON) companies JSON Información de las compañías relacionadas (almacenado como JSON) formats JSON Información detallada de formatos (almacenado como JSON) rating_count INTEGER Número total de valoraciones del release rate_average REAL Puntuación promedio del release num_for_sale INTEGER Número de copias disponibles para venta lowest_price REAL Precio más bajo de venta disponible release_title TEXT Título completo del release released TEXT Fecha de lanzamiento específica notes TEXT Notas adicionales del release genres JSON Géneros musicales (almacenado como JSON) styles JSON Estilos musicales específicos (almacenado como JSON) tracklist JSON Lista completa de pistas (almacenado como JSON) extraartists JSON Artistas adicionales y colaboradores (almacenado como JSON) estimated_weight REAL Peso estimado del formato físico blocked_from_sale INTEGER Indicador si está bloqueado para venta (0/1) is_offensive INTEGER Indicador si contiene contenido ofensivo (0/1) images JSON URLs de imágenes del release (almacenado como JSON) Columnas actualizadas (ya existentes) Columna Tipo Descripción status TEXT Estado actualizado del release year INTEGER Año de lanzamiento actualizado thumb TEXT URL de imagen en miniatura actualizada last_updated TIMESTAMP Fecha de última actualización (se actualiza automáticamente)",
    "description": "Nuevas columnas agregadas automáticamente Columna Tipo Descripción uri_release TEXT URI única del release en Discogs labels JSON Información de los sellos discográficos (almacenado como JSON) companies JSON Información de las compañías relacionadas (almacenado como JSON) formats JSON Información detallada de formatos (almacenado como JSON) rating_count INTEGER Número total de valoraciones del release rate_average REAL Puntuación promedio del release num_for_sale INTEGER Número de copias disponibles para venta lowest_price REAL Precio más bajo de venta disponible release_title TEXT Título completo del release released TEXT Fecha de lanzamiento específica notes TEXT Notas adicionales del release genres JSON Géneros musicales (almacenado como JSON) styles JSON Estilos musicales específicos (almacenado como JSON) tracklist JSON Lista completa de pistas (almacenado como JSON) extraartists JSON Artistas adicionales y colaboradores (almacenado como JSON) estimated_weight REAL Peso estimado del formato físico blocked_from_sale INTEGER Indicador si está bloqueado para venta (0/1) is_offensive INTEGER Indicador si contiene contenido ofensivo (0/1) images JSON URLs de imágenes del release (almacenado como JSON) Columnas actualizadas (ya existentes) Columna Tipo Descripción status TEXT Estado actualizado del release year INTEGER Año de lanzamiento actualizado thumb TEXT URL de imagen en miniatura actualizada last_updated TIMESTAMP Fecha de última actualización (se actualiza automáticamente)",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/15.-discograf%C3%ADas-releases/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  16. Discografías Info",
    "content": "Tabla: artists_discogs_info Columna Tipo Restricciones Descripción id INTEGER PRIMARY KEY AUTOINCREMENT Identificador único del registro artist_id INTEGER NOT NULL, UNIQUE ID del artista en la tabla local artists artist_name TEXT Nombre del artista (copia de la tabla artists) realname TEXT Nombre real del artista según Discogs profile TEXT Biografía/perfil completo del artista namevariations TEXT Variaciones del nombre (almacenado como JSON) aliases TEXT Alias y pseudónimos del artista (almacenado como JSON) groups TEXT Grupos musicales relacionados (almacenado como JSON) url TEXT URL completa del perfil en Discogs discogs_id INTEGER ID único del artista en Discogs last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP Fecha de última actualización Fuentes de datos de artistas El script busca artistas con enlaces a Discogs en dos ubicaciones:\nTabla artists_networks Campo utilizado Descripción discogs URL de la API o web de Discogs Tabla artists Campo utilizado Descripción discogs_url URL directa de Discogs del artista",
    "description": "Tabla: artists_discogs_info Columna Tipo Restricciones Descripción id INTEGER PRIMARY KEY AUTOINCREMENT Identificador único del registro artist_id INTEGER NOT NULL, UNIQUE ID del artista en la tabla local artists artist_name TEXT Nombre del artista (copia de la tabla artists) realname TEXT Nombre real del artista según Discogs profile TEXT Biografía/perfil completo del artista namevariations TEXT Variaciones del nombre (almacenado como JSON) aliases TEXT Alias y pseudónimos del artista (almacenado como JSON) groups TEXT Grupos musicales relacionados (almacenado como JSON) url TEXT URL completa del perfil en Discogs discogs_id INTEGER ID único del artista en Discogs last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP Fecha de última actualización Fuentes de datos de artistas El script busca artistas con enlaces a Discogs en dos ubicaciones:",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/16.-discograf%C3%ADas-info/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  17. Conciertos pasados Setlistfm",
    "content": "Tabla: artists_setlistfm Columna Tipo Descripción Restricciones id INTEGER ID único del registro PRIMARY KEY AUTOINCREMENT artist_id INTEGER ID del artista (referencia a tabla artists) NOT NULL artist_name TEXT Nombre del artista NOT NULL setlist_id TEXT ID único del setlist en setlist.fm NOT NULL UNIQUE eventDate TEXT Fecha del evento/concierto - artist_url TEXT URL del artista en setlist.fm - venue_id TEXT ID del lugar del concierto - venue_name TEXT Nombre del lugar del concierto - city_name TEXT Nombre de la ciudad - city_state TEXT Estado/provincia de la ciudad - coords TEXT Coordenadas geográficas (lat,long) - country_name TEXT Nombre del país - country_code TEXT Código del país - url TEXT URL del setlist específico - tour TEXT Nombre de la gira - sets TEXT Información de los sets (JSON) - last_updated TIMESTAMP Fecha de última actualización DEFAULT CURRENT_TIMESTAMP Tabla: artists_setlistfm_searches Columna Tipo Descripción Restricciones id INTEGER ID único del registro PRIMARY KEY AUTOINCREMENT artist_id INTEGER ID del artista (referencia a tabla artists) NOT NULL UNIQUE artist_name TEXT Nombre del artista NOT NULL last_search_date TIMESTAMP Fecha de la última búsqueda DEFAULT CURRENT_TIMESTAMP found_setlists INTEGER Número de setlists encontrados DEFAULT 0 search_method TEXT Método de búsqueda utilizado (MBID, nombre, etc.) - Tabla: places_setlistfm Columna Tipo Descripción Restricciones id INTEGER ID único del registro PRIMARY KEY AUTOINCREMENT venue_id TEXT ID único del lugar NOT NULL UNIQUE venue_name TEXT Nombre del lugar - city_name TEXT Nombre de la ciudad - city_state TEXT Estado/provincia de la ciudad - coords TEXT Coordenadas geográficas (lat,long) - country_name TEXT Nombre del país - country_code TEXT Código del país - artists_num INTEGER Número de artistas distintos que han tocado - conciertos_num INTEGER Número total de conciertos en el lugar - artists_names TEXT Lista de nombres de artistas (separados por comas) - last_updated TIMESTAMP Fecha de última actualización DEFAULT CURRENT_TIMESTAMP Modificación en tabla existente: artists Columna añadida Tipo Descripción Restricciones setlistfm_id TEXT ID del artista en setlist.fm -",
    "description": "Tabla: artists_setlistfm Columna Tipo Descripción Restricciones id INTEGER ID único del registro PRIMARY KEY AUTOINCREMENT artist_id INTEGER ID del artista (referencia a tabla artists) NOT NULL artist_name TEXT Nombre del artista NOT NULL setlist_id TEXT ID único del setlist en setlist.fm NOT NULL UNIQUE eventDate TEXT Fecha del evento/concierto - artist_url TEXT URL del artista en setlist.fm - venue_id TEXT ID del lugar del concierto - venue_name TEXT Nombre del lugar del concierto - city_name TEXT Nombre de la ciudad - city_state TEXT Estado/provincia de la ciudad - coords TEXT Coordenadas geográficas (lat,long) - country_name TEXT Nombre del país - country_code TEXT Código del país - url TEXT URL del setlist específico - tour TEXT Nombre de la gira - sets TEXT Información de los sets (JSON) - last_updated TIMESTAMP Fecha de última actualización DEFAULT CURRENT_TIMESTAMP Tabla: artists_setlistfm_searches Columna Tipo Descripción Restricciones id INTEGER ID único del registro PRIMARY KEY AUTOINCREMENT artist_id INTEGER ID del artista (referencia a tabla artists) NOT NULL UNIQUE artist_name TEXT Nombre del artista NOT NULL last_search_date TIMESTAMP Fecha de la última búsqueda DEFAULT CURRENT_TIMESTAMP found_setlists INTEGER Número de setlists encontrados DEFAULT 0 search_method TEXT Método de búsqueda utilizado (MBID, nombre, etc.) - Tabla: places_setlistfm Columna Tipo Descripción Restricciones id INTEGER ID único del registro PRIMARY KEY AUTOINCREMENT venue_id TEXT ID único del lugar NOT NULL UNIQUE venue_name TEXT Nombre del lugar - city_name TEXT Nombre de la ciudad - city_state TEXT Estado/provincia de la ciudad - coords TEXT Coordenadas geográficas (lat,long) - country_name TEXT Nombre del país - country_code TEXT Código del país - artists_num INTEGER Número de artistas distintos que han tocado - conciertos_num INTEGER Número total de conciertos en el lugar - artists_names TEXT Lista de nombres de artistas (separados por comas) - last_updated TIMESTAMP Fecha de última actualización DEFAULT CURRENT_TIMESTAMP Modificación en tabla existente: artists Columna añadida Tipo Descripción Restricciones setlistfm_id TEXT ID del artista en setlist.fm -",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/17.-conciertos-pasados-setlistfm/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz",
    "content": "MÓDULOS: not done tags include #m_fuzzy tags include #config_editor hide tags sort by due sort by priority sort by scheduled",
    "description": "MÓDULOS: not done tags include #m_fuzzy tags include #config_editor hide tags sort by due sort by priority sort by scheduled",
    "tags": [],
    "title": "Modulos de la app",
    "uri": "/modulos/index.html"
  },
  {
    "breadcrumb": "mfuzz",
    "content": "Aqui explicaré brevemente como obtener algunas de las credenciales o como usar alguna herramienta útil como docker, python o picard (tags).\n![[picard]]",
    "description": "Aqui explicaré brevemente como obtener algunas de las credenciales o como usar alguna herramienta útil como docker, python o picard (tags).\n![[picard]]",
    "tags": [],
    "title": "Credenciales",
    "uri": "/credenciales/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  09. Enlaces canciones",
    "content": "Campo Tipo Descripción id INTEGER Clave primaria song_id INTEGER ID de la canción en la tabla songs spotify_url TEXT URL de la canción en Spotify spotify_id TEXT ID de la canción en Spotify lastfm_url TEXT URL de la canción en Last.fm links_updated TIMESTAMP Fecha de última actualización youtube_url TEXT URL de la canción en YouTube musicbrainz_url TEXT URL de la canción en MusicBrainz musicbrainz_recording_id TEXT ID de grabación en MusicBrainz bandcamp_url TEXT URL de la canción en Bandcamp soundcloud_url TEXT URL de la canción en SoundCloud boomkat_url TEXT URL de la canción en Boomkat",
    "description": "Campo Tipo Descripción id INTEGER Clave primaria song_id INTEGER ID de la canción en la tabla songs spotify_url TEXT URL de la canción en Spotify spotify_id TEXT ID de la canción en Spotify lastfm_url TEXT URL de la canción en Last.fm links_updated TIMESTAMP Fecha de última actualización youtube_url TEXT URL de la canción en YouTube musicbrainz_url TEXT URL de la canción en MusicBrainz musicbrainz_recording_id TEXT ID de grabación en MusicBrainz bandcamp_url TEXT URL de la canción en Bandcamp soundcloud_url TEXT URL de la canción en SoundCloud boomkat_url TEXT URL de la canción en Boomkat",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/09.-enlaces-canciones/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Creación de la base de datos \u003e  11. Youtube links de canciones",
    "content": "Tabla song_links Campo Tipo Descripción song_id INTEGER ID de la canción youtube_url TEXT URL del video en YouTube youtube_id TEXT ID del video en YouTube video_title TEXT Título del video channel_name TEXT Nombre del canal de YouTube view_count INTEGER Número de vistas (si disponible) match_score REAL Puntuación de coincidencia (0.0 - 1.0) last_updated TIMESTAMP Fecha de última actualización Otras tablas Tabla Campo Descripción albums youtube_url URL de canal o playlist del álbum en YouTube artists youtube_url URL del canal oficial del artista en YouTube",
    "description": "Tabla song_links Campo Tipo Descripción song_id INTEGER ID de la canción youtube_url TEXT URL del video en YouTube youtube_id TEXT ID del video en YouTube video_title TEXT Título del video channel_name TEXT Nombre del canal de YouTube view_count INTEGER Número de vistas (si disponible) match_score REAL Puntuación de coincidencia (0.0 - 1.0) last_updated TIMESTAMP Fecha de última actualización Otras tablas Tabla Campo Descripción albums youtube_url URL de canal o playlist del álbum en YouTube artists youtube_url URL del canal oficial del artista en YouTube",
    "tags": [],
    "title": "Datos",
    "uri": "/base_datos/11.-youtube-links-de-canciones/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Acceso Web",
    "uri": "/web_docker/index.html"
  },
  {
    "breadcrumb": "mfuzz",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Intro\nactualizado el 04-06-2025 05:06",
    "description": "Intro\nactualizado el 04-06-2025 05:06",
    "tags": [],
    "title": "mfuzz",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "mfuzz",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
