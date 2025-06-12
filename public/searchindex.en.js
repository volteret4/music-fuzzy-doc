var relearn_searchindex = [
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Punto de partida",
    "content": "Definición: Este script escanea una carpeta de música local, extrae metadatos de archivos de audio (MP3, FLAC, M4A) y los guarda en una base de datos SQLite. Es el script fundamental que crea la estructura inicial de la base de datos musical.\nTomará cada carpeta como un album.\n10 discos en 1.79s 3160 discos desde un servidor NFS: 8 horas",
    "description": "Definición: Este script escanea una carpeta de música local, extrae metadatos de archivos de audio (MP3, FLAC, M4A) y los guarda en una base de datos SQLite. Es el script fundamental que crea la estructura inicial de la base de datos musical.\nTomará cada carpeta como un album.\n10 discos en 1.79s 3160 discos desde un servidor NFS: 8 horas",
    "tags": [],
    "title": "01. Archivos locales",
    "uri": "/base-datos/punto-de-partida/01.-archivos-locales/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Punto de partida",
    "content": "Definición: Este script extrae datos de Spotify del usuario autenticado, incluyendo artistas seguidos, álbumes guardados y pistas guardadas, para poblar la base de datos de música con información completa de artistas, álbumes y canciones desde la plataforma de streaming.\n10 artistas seguidos: 7056 canciones 27m50,658s",
    "description": "Definición: Este script extrae datos de Spotify del usuario autenticado, incluyendo artistas seguidos, álbumes guardados y pistas guardadas, para poblar la base de datos de música con información completa de artistas, álbumes y canciones desde la plataforma de streaming.\n10 artistas seguidos: 7056 canciones 27m50,658s",
    "tags": [],
    "title": "02. Spotify",
    "uri": "/base-datos/punto-de-partida/02.-spotify/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  Enlaces",
    "content": "10 artistas 1m 35s\nRequisitos pip install lxml Variables de entorno alternativas SPOTIFY_CLIENT_ID SPOTIFY_CLIENT_SECRET LASTFM_API_KEY LASTFM_API_SECRET DISCOGS_TOKEN",
    "description": "10 artistas 1m 35s\nRequisitos pip install lxml Variables de entorno alternativas SPOTIFY_CLIENT_ID SPOTIFY_CLIENT_SECRET LASTFM_API_KEY LASTFM_API_SECRET DISCOGS_TOKEN",
    "tags": [],
    "title": "03. Enlaces artistas",
    "uri": "/base-datos/datos-b%C3%A1sicos/enlaces/03.-enlaces-artistas/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  Enlaces",
    "content": "10 albums X Canciones en 7m 49s\nEste script busca videos de YouTube relacionados con las canciones en la base de datos y almacena los enlaces correspondientes. También actualiza información de enlaces para álbumes y artistas.",
    "description": "10 albums X Canciones en 7m 49s\nEste script busca videos de YouTube relacionados con las canciones en la base de datos y almacena los enlaces correspondientes. También actualiza información de enlaces para álbumes y artistas.",
    "tags": [],
    "title": "04. Youtube links de canciones",
    "uri": "/base-datos/datos-b%C3%A1sicos/enlaces/04.-youtube-links-de-canciones/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  Enlaces",
    "content": "Definición: Este script busca y añade enlaces de canciones en servicios de música streaming como Spotify, YouTube, Bandcamp, SoundCloud y Boomkat, utilizando APIs oficiales y técnicas de web scraping para completar la información de enlaces de las canciones existentes en la base de datos.](\u003cBusca enlaces para cada canción en spotify y lastfm.\nMódulo para gestionar los enlaces de canciones en servicios de música en línea. Actualiza los enlaces de diversos servicios de música (Spotify, YouTube, Bandcamp, etc.) para las canciones en la base de datos. Se puede ejecutar directamente o como parte de la cadena de scripts de db_creator.py. Dependencias\u003e)\n10 discos, X canciones: 56s\nServicios usados: spotify: Enlaces a canciones en Spotify lastfm: Enlaces a canciones en Last.fm youtube: Enlaces a videos de canciones en YouTube musicbrainz: Enlaces a grabaciones en MusicBrainz bandcamp: Enlaces a canciones en Bandcamp soundcloud: Enlaces a canciones en SoundCloud boomkat: Enlaces a canciones en Boomkat",
    "description": "Definición: Este script busca y añade enlaces de canciones en servicios de música streaming como Spotify, YouTube, Bandcamp, SoundCloud y Boomkat, utilizando APIs oficiales y técnicas de web scraping para completar la información de enlaces de las canciones existentes en la base de datos.](\u003cBusca enlaces para cada canción en spotify y lastfm.\nMódulo para gestionar los enlaces de canciones en servicios de música en línea. Actualiza los enlaces de diversos servicios de música (Spotify, YouTube, Bandcamp, etc.) para las canciones en la base de datos. Se puede ejecutar directamente o como parte de la cadena de scripts de db_creator.py. Dependencias\u003e)",
    "tags": [],
    "title": "05. Enlaces canciones",
    "uri": "/base-datos/datos-b%C3%A1sicos/enlaces/05.-enlaces-canciones/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  wikipedia",
    "content": "10 aristas 20s\nObtiene enlaces a wikipedia desde musicbrainz, y extrae su contenido. En caso de no encontrarlo en wikimedia, se puede hacer manualmente con wikipedia.",
    "description": "10 aristas 20s\nObtiene enlaces a wikipedia desde musicbrainz, y extrae su contenido. En caso de no encontrarlo en wikimedia, se puede hacer manualmente con wikipedia.",
    "tags": [],
    "title": "08. Wikipedia",
    "uri": "/base-datos/datos-b%C3%A1sicos/wikipedia/08.-wikipedia/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  Enlaces",
    "content": "10 artistas 2m 44s\nEste módulo se encarga de:\nRecopilar URLs de redes sociales y plataformas web para artistas Obtener datos desde múltiples fuentes como Discogs, MusicBrainz y páginas web oficiales Almacenar y actualizar información en la tabla artists_networks de la base de datos",
    "description": "10 artistas 2m 44s\nEste módulo se encarga de:\nRecopilar URLs de redes sociales y plataformas web para artistas Obtener datos desde múltiples fuentes como Discogs, MusicBrainz y páginas web oficiales Almacenar y actualizar información en la tabla artists_networks de la base de datos",
    "tags": [],
    "title": "09. Redes",
    "uri": "/base-datos/datos-b%C3%A1sicos/enlaces/09.-redes/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  Letras",
    "content": "Módulo para gestionar los enlaces de canciones en servicios de música en línea.\nEste script actualiza los enlaces de diversos servicios de música (Spotify, YouTube, Bandcamp, etc.) para las canciones en la base de datos. Se puede ejecutar directamente o como parte de la cadena de scripts de db_creator.py.\n4 horas en 5140 canciones, Media de una canción cada 2.82 segundos",
    "description": "Módulo para gestionar los enlaces de canciones en servicios de música en línea.\nEste script actualiza los enlaces de diversos servicios de música (Spotify, YouTube, Bandcamp, etc.) para las canciones en la base de datos. Se puede ejecutar directamente o como parte de la cadena de scripts de db_creator.py.\n4 horas en 5140 canciones, Media de una canción cada 2.82 segundos",
    "tags": [],
    "title": "10. Letras",
    "uri": "/base-datos/datos-b%C3%A1sicos/letras/10.-letras/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  sellos",
    "content": "10 discos 46.89s\nEste script obtiene y almacena información detallada sobre sellos discográficos desde MusicBrainz y fuentes adicionales como Wikipedia y Discogs.",
    "description": "10 discos 46.89s\nEste script obtiene y almacena información detallada sobre sellos discográficos desde MusicBrainz y fuentes adicionales como Wikipedia y Discogs.",
    "tags": [],
    "title": "11. Musicbrainz sellos",
    "uri": "/base-datos/datos-extra/sellos/11.-musicbrainz-sellos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  reviews",
    "content": "¡Requiere de un servidor RSS para funcionar! Actualmente es interactivo\nposts_fresh_rss El script posts_fresh_rss.py se encarga de recuperar artículos y publicaciones de un servidor FreshRSS relacionados con entidades musicales (artistas, álbumes, sellos discográficos) y guardarlos en la base de datos para su posterior consulta.",
    "description": "¡Requiere de un servidor RSS para funcionar! Actualmente es interactivo\nposts_fresh_rss El script posts_fresh_rss.py se encarga de recuperar artículos y publicaciones de un servidor FreshRSS relacionados con entidades musicales (artistas, álbumes, sellos discográficos) y guardarlos en la base de datos para su posterior consulta.",
    "tags": [],
    "title": "12. Artículos en servidor RSS",
    "uri": "/base-datos/datos-extra/reviews/12.-art%C3%ADculos-en-servidor-rss/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  reviews",
    "content": "10 artistas 10 albumes: 2m 59,544s\nDefinición: Este script extrae reseñas de álbumes desde múltiples fuentes (AnyDecentMusic, Metacritic, Album of the Year) y las almacena en la base de datos. Incluye funcionalidades avanzadas como filtrado de URLs de streaming, extracción específica por sitio web, y seguimiento del origen de cada reseña.",
    "description": "10 artistas 10 albumes: 2m 59,544s\nDefinición: Este script extrae reseñas de álbumes desde múltiples fuentes (AnyDecentMusic, Metacritic, Album of the Year) y las almacena en la base de datos. Incluye funcionalidades avanzadas como filtrado de URLs de streaming, extracción específica por sitio web, y seguimiento del origen de cada reseña.",
    "tags": [],
    "title": "13. Review Scrapper",
    "uri": "/base-datos/datos-extra/reviews/13.-review-scrapper/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  libros",
    "content": "Definición: Este script busca menciones de artistas de la base de datos dentro del contenido de libros en formato EPUB, extrayendo el contexto donde aparece cada artista mencionado para crear una base de datos de referencias literarias.\nParámetros del JSON de configuración: { \"libros/epubs\": { \"epub_folder\": \"/ruta/a/archivos/epub/\", \"force_update\": false, \"min_context_chars\": 100, \"max_context_chars\": 500, \"case_sensitive\": false } } Parámetro Tipo Por defecto Descripción epub_folder string - Carpeta base donde buscar archivos EPUB force_update boolean false Si true, elimina registros existentes antes de procesar min_context_chars int 100 Caracteres mínimos de contexto para considerar válida una mención max_context_chars int 500 Caracteres máximos de contexto a extraer por mención case_sensitive boolean false Búsqueda sensible a mayúsculas/minúsculas Configuración común utilizada: db_path: Ruta a la base de datos SQLite Notas especiales:\nEl script filtra automáticamente artistas con nombres problemáticos (palabras comunes como “and”, “yes”, “no”, etc.) Busca palabras completas, no subcadenas Detecta separaciones de párrafos para extraer contexto coherente Estima páginas basándose en ~250 palabras por página",
    "description": "Definición: Este script busca menciones de artistas de la base de datos dentro del contenido de libros en formato EPUB, extrayendo el contexto donde aparece cada artista mencionado para crear una base de datos de referencias literarias.\nParámetros del JSON de configuración: { \"libros/epubs\": { \"epub_folder\": \"/ruta/a/archivos/epub/\", \"force_update\": false, \"min_context_chars\": 100, \"max_context_chars\": 500, \"case_sensitive\": false } } Parámetro Tipo Por defecto Descripción epub_folder string - Carpeta base donde buscar archivos EPUB force_update boolean false Si true, elimina registros existentes antes de procesar min_context_chars int 100 Caracteres mínimos de contexto para considerar válida una mención max_context_chars int 500 Caracteres máximos de contexto a extraer por mención case_sensitive boolean false Búsqueda sensible a mayúsculas/minúsculas Configuración común utilizada: db_path: Ruta a la base de datos SQLite Notas especiales:",
    "tags": [],
    "title": "14. Libros",
    "uri": "/base-datos/datos-extra/libros/14.-libros/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  discografías",
    "content": "10 artistas 7m 1s\nEl script busca artistas con enlaces a Discogs en dos tablas: artists_networks y artists Utiliza la API de Discogs con límites de velocidad (1.5 segundos entre peticiones) Procesa los lanzamientos página por página (100 elementos por página) Filtra lanzamientos según formato y rol del artista Maneja tanto inserción de nuevos registros como actualización de existentes",
    "description": "10 artistas 7m 1s\nEl script busca artistas con enlaces a Discogs en dos tablas: artists_networks y artists Utiliza la API de Discogs con límites de velocidad (1.5 segundos entre peticiones) Procesa los lanzamientos página por página (100 elementos por página) Filtra lanzamientos según formato y rol del artista Maneja tanto inserción de nuevos registros como actualización de existentes",
    "tags": [],
    "title": "15. Discografías Discogs masters",
    "uri": "/base-datos/datos-extra/discograf%C3%ADas/15.-discograf%C3%ADas-discogs-masters/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  discografías",
    "content": "10 Artistas, X releases 1h\nFuncionalidades principales del script Gestión de Rate Limiting Característica Descripción Rate limit adaptativo Ajusta automáticamente el tiempo entre peticiones según las cabeceras de respuesta Manejo de error 429 Detecta cuando se supera el límite y espera el tiempo indicado por Discogs Reintentos con backoff Implementa reintentos con delays exponenciales (5, 10, 20 segundos) Pausa por errores Si hay más de 5 errores consecutivos, pausa 2 minutos Sistema de Delays Condición Delay aplicado Descripción remaining \u003c 10 5.0 segundos Pocas peticiones restantes remaining \u003c 20 3.0 segundos Peticiones limitadas remaining \u003e= 20 1.5 segundos Condiciones normales Error 429 Retry-After + 5 seg Tiempo indicado por Discogs más margen Proceso de actualización Etapa Descripción 1. Conexión DB Establece conexión con factory de filas para mejor acceso 2. Verificación columnas Añade automáticamente columnas faltantes si no existen 3. Selección registros Identifica releases que necesitan actualización 4. Procesamiento Obtiene datos de API y actualiza base de datos 5. Manejo errores Implementa reintentos y pausas automáticas Criterios de selección de registros Modo Condición SQL Descripción Normal (force_update=False) WHERE (main_release IS NOT NULL OR resource_url IS NOT NULL) AND (uri_release IS NULL OR uri_release = '') Solo registros sin información detallada Forzado (force_update=True) WHERE (main_release IS NOT NULL OR resource_url IS NOT NULL) Todos los registros con referencia a Discogs Información de monitoreo El script proporciona información detallada durante la ejecución:\nProgreso de procesamiento (X/Y releases) Estado de rate limiting (peticiones restantes) Tiempo de espera entre peticiones Número de reintentos por release Estadísticas finales de éxito/error Notas importantes Dependencia: Requiere que el primer script (discografia_masters.py) haya ejecutado previamente Robustez: Diseñado para manejar interrupciones y errores de red Eficiencia: Usa delays adaptativos para optimizar el uso de la API Seguridad: Implementa múltiples niveles de protección contra rate limiting",
    "description": "10 Artistas, X releases 1h\nFuncionalidades principales del script Gestión de Rate Limiting Característica Descripción Rate limit adaptativo Ajusta automáticamente el tiempo entre peticiones según las cabeceras de respuesta Manejo de error 429 Detecta cuando se supera el límite y espera el tiempo indicado por Discogs Reintentos con backoff Implementa reintentos con delays exponenciales (5, 10, 20 segundos) Pausa por errores Si hay más de 5 errores consecutivos, pausa 2 minutos Sistema de Delays Condición Delay aplicado Descripción remaining \u003c 10 5.0 segundos Pocas peticiones restantes remaining \u003c 20 3.0 segundos Peticiones limitadas remaining \u003e= 20 1.5 segundos Condiciones normales Error 429 Retry-After + 5 seg Tiempo indicado por Discogs más margen Proceso de actualización Etapa Descripción 1. Conexión DB Establece conexión con factory de filas para mejor acceso 2. Verificación columnas Añade automáticamente columnas faltantes si no existen 3. Selección registros Identifica releases que necesitan actualización 4. Procesamiento Obtiene datos de API y actualiza base de datos 5. Manejo errores Implementa reintentos y pausas automáticas Criterios de selección de registros Modo Condición SQL Descripción Normal (force_update=False) WHERE (main_release IS NOT NULL OR resource_url IS NOT NULL) AND (uri_release IS NULL OR uri_release = '') Solo registros sin información detallada Forzado (force_update=True) WHERE (main_release IS NOT NULL OR resource_url IS NOT NULL) Todos los registros con referencia a Discogs Información de monitoreo El script proporciona información detallada durante la ejecución:",
    "tags": [],
    "title": "16. Discografías Discogs releases",
    "uri": "/base-datos/datos-extra/discograf%C3%ADas/16.-discograf%C3%ADas-discogs-releases/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  discografías",
    "content": "10 artistas 13.97s",
    "description": "10 artistas 13.97s",
    "tags": [],
    "title": "17. Discografías Discogs Info",
    "uri": "/base-datos/datos-extra/discograf%C3%ADas/17.-discograf%C3%ADas-discogs-info/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  discografías",
    "content": "Definición: Este script obtiene la discografía completa de los artistas desde MusicBrainz utilizando tanto el MBID almacenado como búsquedas por nombre, estableciendo relaciones con álbumes locales y datos de Discogs cuando sea posible.\n10 artistas \u003e X releases 16.84s",
    "description": "Definición: Este script obtiene la discografía completa de los artistas desde MusicBrainz utilizando tanto el MBID almacenado como búsquedas por nombre, estableciendo relaciones con álbumes locales y datos de Discogs cuando sea posible.\n10 artistas \u003e X releases 16.84s",
    "tags": [],
    "title": "18. Musicbrainz discografía",
    "uri": "/base-datos/datos-extra/discograf%C3%ADas/18.-musicbrainz-discograf%C3%ADa/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  charts",
    "content": "Hasta 2025: 34m 4s\nDefinición: Este script extrae datos de las listas de éxitos musicales del Reino Unido desde Wikipedia y los almacena en la base de datos. Incluye top 10 singles por año, singles más vendidos por década, charts especializados (vinilos, streaming, descargas) y charts independientes (UK Independent y NME).",
    "description": "Hasta 2025: 34m 4s\nDefinición: Este script extrae datos de las listas de éxitos musicales del Reino Unido desde Wikipedia y los almacena en la base de datos. Incluye top 10 singles por año, singles más vendidos por década, charts especializados (vinilos, streaming, descargas) y charts independientes (UK Independent y NME).",
    "tags": [],
    "title": "19. uk csv",
    "uri": "/base-datos/datos-extra/charts/19.-uk-csv/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  charts",
    "content": "Definición: Este script extrae datos de las listas independientes y de NME de música del Reino Unido desde Wikipedia, incluyendo los singles número 1 del UK Independent Singles Chart por año y del NME Chart por década.",
    "description": "Definición: Este script extrae datos de las listas independientes y de NME de música del Reino Unido desde Wikipedia, incluyendo los singles número 1 del UK Independent Singles Chart por año y del NME Chart por década.",
    "tags": [],
    "title": "20. uk indie nme",
    "uri": "/base-datos/datos-extra/charts/20.-uk-indie-nme/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  charts",
    "content": "creado: 2025-06-07T16:48 actualizado: 2025-06-07T16:48 Definición: Este script extrae datos de las listas especializadas de música del Reino Unido desde Wikipedia, incluyendo charts de vinilos (álbumes y singles por década), streaming de álbumes y descargas de singles.",
    "description": "creado: 2025-06-07T16:48 actualizado: 2025-06-07T16:48 Definición: Este script extrae datos de las listas especializadas de música del Reino Unido desde Wikipedia, incluyendo charts de vinilos (álbumes y singles por década), streaming de álbumes y descargas de singles.",
    "tags": [],
    "title": "20. uk specialized",
    "uri": "/base-datos/datos-extra/charts/20.-uk-specialized/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  charts",
    "content": "1h 0m 0.02s\nDefinición: Este script extrae datos de las listas de Billboard desde Wikipedia y las almacena en la base de datos. Puede extraer Billboard Year-End Hot 100, Hot 100 top-ten singles y Country Albums number ones, con opción de incluir información de géneros musicales obtenida desde APIs de Discogs y MusicBrainz.",
    "description": "1h 0m 0.02s\nDefinición: Este script extrae datos de las listas de Billboard desde Wikipedia y las almacena en la base de datos. Puede extraer Billboard Year-End Hot 100, Hot 100 top-ten singles y Country Albums number ones, con opción de incluir información de géneros musicales obtenida desde APIs de Discogs y MusicBrainz.",
    "tags": [],
    "title": "21. billboard",
    "uri": "/base-datos/datos-extra/charts/21.-billboard/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  charts",
    "content": "Definición: Este script extrae los charts históricos de España desde Wikipedia, incluyendo los singles número 1 desde 1959 hasta 2024. Puede procesar tanto charts modernos (1990+) que incluyen categorías de streaming/sales y radio, como charts históricos más simples. Opcionalmente añade información de géneros musicales a cada entrada.",
    "description": "Definición: Este script extrae los charts históricos de España desde Wikipedia, incluyendo los singles número 1 desde 1959 hasta 2024. Puede procesar tanto charts modernos (1990+) que incluyen categorías de streaming/sales y radio, como charts históricos más simples. Opcionalmente añade información de géneros musicales a cada entrada.",
    "tags": [],
    "title": "22. spain charts",
    "uri": "/base-datos/datos-extra/charts/22.-spain-charts/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  Imágenes",
    "content": "10 discos 1m 0,805s\nArchivos Archivo o Carpeta Descripción artists.img (columna en DB) Ruta a una imagen principal del artista. artists.img_paths (columna en DB) Lista JSON con rutas locales a imágenes del artista. artists.img_urls (columna en DB) Lista JSON con URLs de imágenes descargadas. .content/artistas_img/\u003cartista\u003e/image_N.jpg Imágenes de artistas guardadas localmente. .content/albums_img/\u003cartista\u003e_-_\u003cálbum\u003e/cover.jpg Carátulas de álbumes guardadas localmente. Carpeta temporal: .../temp/ Usada para descargas temporales y eliminar duplicados. Archivo de estadísticas (--stats_file) JSON opcional con las estadísticas del proceso. Argumentos Argumento Tipo Valores posibles Descripción --db_path str Ruta válida Ruta a la base de datos SQLite (obligatorio). --project_root str Ruta válida Ruta raíz del proyecto. Opcional, afecta a la ubicación de carpetas. --descargar_img_artistas str true / false Descargar imágenes de artistas. --guardar_url_artistas str true / false Guardar URLs de imágenes de artistas en la base de datos. --descargar_img_albums str true / false Descargar imágenes de álbumes. --guardar_url_albums str true / false Guardar URLs de carátulas en la base de datos. --force_update str true / false Forzar descarga incluso si ya existen imágenes/URLs. --spotify_client_id str ID válido Credencial para autenticar con la API de Spotify. --spotify_client_secret str Secret válido Credencial para autenticar con la API de Spotify. --discogs_token str Token válido Token de autenticación para Discogs. --lastfm_api_key str API Key válida API key para acceder a Last.fm. --stats_file str Ruta a archivo Si se proporciona, se guarda un archivo JSON con estadísticas. Datos Artistas Columna Tipo Descripción id int ID del artista (clave primaria). name str Nombre del artista. mbid str MusicBrainz ID opcional. img str Ruta a una imagen principal del artista. img_paths TEXT/JSON Lista JSON de rutas locales de imágenes descargadas. img_urls TEXT/JSON Lista JSON con URLs e información adicional (fuente, tamaño, etc.). Albums Columna Tipo Descripción id int ID del álbum (clave primaria). name str Nombre del álbum. artist_id int ID del artista (clave foránea). album_art_path str Ruta a la imagen local de la carátula. album_art_urls TEXT/JSON Lista JSON con URLs de imágenes de carátula. mbid str MusicBrainz ID opcional para el álbum. Artists networks Columna Tipo Descripción artist_id int Relación con la tabla artists. spotify str URL de Spotify del artista. Requisitos Librería / Script Obligatoria Descripción requests ✅ Realiza solicitudes HTTP a APIs (Spotify, Discogs, Last.fm). PIL (Pillow) ✅ Manipulación de imágenes (validación, tamaño). sqlite3 ✅ Acceso a la base de datos SQLite. cv2 (OpenCV) ⚠️ Recomendado Detección de duplicados visuales mediante hash perceptual. numpy ✅ Procesamiento de matrices de imágenes. argparse ✅ Manejo de argumentos por línea de comandos. base_module.PROJECT_ROOT ⚠️ Variable importada con el /root del proyecto.",
    "description": "10 discos 1m 0,805s\nArchivos Archivo o Carpeta Descripción artists.img (columna en DB) Ruta a una imagen principal del artista. artists.img_paths (columna en DB) Lista JSON con rutas locales a imágenes del artista. artists.img_urls (columna en DB) Lista JSON con URLs de imágenes descargadas. .content/artistas_img/\u003cartista\u003e/image_N.jpg Imágenes de artistas guardadas localmente. .content/albums_img/\u003cartista\u003e_-_\u003cálbum\u003e/cover.jpg Carátulas de álbumes guardadas localmente. Carpeta temporal: .../temp/ Usada para descargas temporales y eliminar duplicados. Archivo de estadísticas (--stats_file) JSON opcional con las estadísticas del proceso. Argumentos Argumento Tipo Valores posibles Descripción --db_path str Ruta válida Ruta a la base de datos SQLite (obligatorio). --project_root str Ruta válida Ruta raíz del proyecto. Opcional, afecta a la ubicación de carpetas. --descargar_img_artistas str true / false Descargar imágenes de artistas. --guardar_url_artistas str true / false Guardar URLs de imágenes de artistas en la base de datos. --descargar_img_albums str true / false Descargar imágenes de álbumes. --guardar_url_albums str true / false Guardar URLs de carátulas en la base de datos. --force_update str true / false Forzar descarga incluso si ya existen imágenes/URLs. --spotify_client_id str ID válido Credencial para autenticar con la API de Spotify. --spotify_client_secret str Secret válido Credencial para autenticar con la API de Spotify. --discogs_token str Token válido Token de autenticación para Discogs. --lastfm_api_key str API Key válida API key para acceder a Last.fm. --stats_file str Ruta a archivo Si se proporciona, se guarda un archivo JSON con estadísticas. Datos Artistas Columna Tipo Descripción id int ID del artista (clave primaria). name str Nombre del artista. mbid str MusicBrainz ID opcional. img str Ruta a una imagen principal del artista. img_paths TEXT/JSON Lista JSON de rutas locales de imágenes descargadas. img_urls TEXT/JSON Lista JSON con URLs e información adicional (fuente, tamaño, etc.). Albums Columna Tipo Descripción id int ID del álbum (clave primaria). name str Nombre del álbum. artist_id int ID del artista (clave foránea). album_art_path str Ruta a la imagen local de la carátula. album_art_urls TEXT/JSON Lista JSON con URLs de imágenes de carátula. mbid str MusicBrainz ID opcional para el álbum. Artists networks Columna Tipo Descripción artist_id int Relación con la tabla artists. spotify str URL de Spotify del artista. Requisitos Librería / Script Obligatoria Descripción requests ✅ Realiza solicitudes HTTP a APIs (Spotify, Discogs, Last.fm). PIL (Pillow) ✅ Manipulación de imágenes (validación, tamaño). sqlite3 ✅ Acceso a la base de datos SQLite. cv2 (OpenCV) ⚠️ Recomendado Detección de duplicados visuales mediante hash perceptual. numpy ✅ Procesamiento de matrices de imágenes. argparse ✅ Manejo de argumentos por línea de comandos. base_module.PROJECT_ROOT ⚠️ Variable importada con el /root del proyecto.",
    "tags": [],
    "title": "23. Imágenes",
    "uri": "/base-datos/datos-b%C3%A1sicos/im%C3%A1genes/23.-im%C3%A1genes/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  instrumentos",
    "content": "Definición: Este script busca y almacena las URLs de equipboard.com para artistas de la base de datos, detectando automáticamente tanto artistas individuales como miembros de bandas y creando entradas separadas para cada uno.",
    "description": "Definición: Este script busca y almacena las URLs de equipboard.com para artistas de la base de datos, detectando automáticamente tanto artistas individuales como miembros de bandas y creando entradas separadas para cada uno.",
    "tags": [],
    "title": "24. Equipboard artistas",
    "uri": "/base-datos/datos-extra/instrumentos/24.-equipboard-artistas/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  Escuchas",
    "content": "27.000 scrobbles con 11.180 enlazados en 6 minutos\nDefinición: Este script descarga y almacena los scrobbles (reproducciones de música) de un usuario de Last.fm, agrupándolos por artista y canción para evitar duplicados y mantener un conteo de reproducciones con todas las fechas de escucha.\nCada usuario creará una nueva tabla independiente, con la intención de facilitar más cruces de datos",
    "description": "27.000 scrobbles con 11.180 enlazados en 6 minutos\nDefinición: Este script descarga y almacena los scrobbles (reproducciones de música) de un usuario de Last.fm, agrupándolos por artista y canción para evitar duplicados y mantener un conteo de reproducciones con todas las fechas de escucha.\nCada usuario creará una nueva tabla independiente, con la intención de facilitar más cruces de datos",
    "tags": [],
    "title": "27. Scrobbles lastfm",
    "uri": "/base-datos/datos-b%C3%A1sicos/escuchas/27.-scrobbles-lastfm/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  Escuchas",
    "content": "Unas 8.000 escuchas en 4m 11s\nEste script se encarga de obtener y procesar los registros de escuchas (listens) desde ListenBrainz, almacenándolos en una base de datos SQLite y enlazándolos con canciones, artistas y álbumes existentes en tu biblioteca.\nEste script permite varios métodos para mejorar la búsqueda estricta:\nnormalize-strings enhanced-matrching mbid-matching fuzzy-matching analyze-mismatches use-all-matching Se recomienda realizar varias pasadas, una con cada argumento hasta que encuentre un porcentaje que parezca apropiado. Lo que tu comprendas que me decían",
    "description": "Unas 8.000 escuchas en 4m 11s\nEste script se encarga de obtener y procesar los registros de escuchas (listens) desde ListenBrainz, almacenándolos en una base de datos SQLite y enlazándolos con canciones, artistas y álbumes existentes en tu biblioteca.\nEste script permite varios métodos para mejorar la búsqueda estricta:\nnormalize-strings enhanced-matrching mbid-matching fuzzy-matching analyze-mismatches use-all-matching Se recomienda realizar varias pasadas, una con cada argumento hasta que encuentre un porcentaje que parezca apropiado. Lo que tu comprendas que me decían",
    "tags": [],
    "title": "28. Listens listenbrainz",
    "uri": "/base-datos/datos-b%C3%A1sicos/escuchas/28.-listens-listenbrainz/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  rym",
    "content": "Definición: Este script busca y obtiene las URLs de RateYourMusic para los artistas de la base de datos utilizando SearXNG como motor de búsqueda, creando una tabla específica para gestionar esta información y establecer relaciones con los artistas existentes.\n10 artistas 41s",
    "description": "Definición: Este script busca y obtiene las URLs de RateYourMusic para los artistas de la base de datos utilizando SearXNG como motor de búsqueda, creando una tabla específica para gestionar esta información y establecer relaciones con los artistas existentes.\n10 artistas 41s",
    "tags": [],
    "title": "29. RYM Artistas",
    "uri": "/base-datos/datos-extra/rateyourmusic/29.-rym-artistas/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  rym",
    "content": "Definición: Este script extrae información detallada de los artistas desde sus páginas individuales en RateYourMusic utilizando Playwright para web scraping avanzado, incluyendo datos biográficos, géneros, fechas de nacimiento/muerte y otra información relevante.",
    "description": "Definición: Este script extrae información detallada de los artistas desde sus páginas individuales en RateYourMusic utilizando Playwright para web scraping avanzado, incluyendo datos biográficos, géneros, fechas de nacimiento/muerte y otra información relevante.",
    "tags": [],
    "title": "30. RYM Artistas Info",
    "uri": "/base-datos/datos-extra/rateyourmusic/30.-rym-artistas-info/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  rym",
    "content": "Definición: Este script busca y obtiene las URLs de RateYourMusic para los álbumes de los artistas en la base de datos utilizando SearXNG como motor de búsqueda, estableciendo relaciones entre los álbumes locales y sus páginas correspondientes en RYM.",
    "description": "Definición: Este script busca y obtiene las URLs de RateYourMusic para los álbumes de los artistas en la base de datos utilizando SearXNG como motor de búsqueda, estableciendo relaciones entre los álbumes locales y sus páginas correspondientes en RYM.",
    "tags": [],
    "title": "31. RYM Álbumes",
    "uri": "/base-datos/datos-extra/rateyourmusic/31.-rym-%C3%A1lbumes/index.html"
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
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Enlaces",
    "uri": "/base-datos/datos-b%C3%A1sicos/enlaces/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  instrumentos",
    "content": "Definición: Este script extrae información detallada y completa de cada instrumento musical desde sus páginas específicas en equipboard.com, incluyendo precios, especificaciones técnicas, reviews, pros/contras y artistas relacionados.",
    "description": "Definición: Este script extrae información detallada y completa de cada instrumento musical desde sus páginas específicas en equipboard.com, incluyendo precios, especificaciones técnicas, reviews, pros/contras y artistas relacionados.",
    "tags": [],
    "title": "Equipboard detalles",
    "uri": "/base-datos/datos-extra/instrumentos/equipboard-detalles/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  instrumentos",
    "content": "[[equipboard_instruments.py]]: Este obtendrá los enlaces a los instrumentos usados con cada miembro o colaborador\nDefinición: Este script extrae información detallada de los instrumentos y equipos musicales utilizados por los artistas desde sus páginas individuales en equipboard.com, procesando automáticamente botones “Load More” para obtener listados completos.",
    "description": "[[equipboard_instruments.py]]: Este obtendrá los enlaces a los instrumentos usados con cada miembro o colaborador\nDefinición: Este script extrae información detallada de los instrumentos y equipos musicales utilizados por los artistas desde sus páginas individuales en equipboard.com, procesando automáticamente botones “Load More” para obtener listados completos.",
    "tags": [],
    "title": "Equipboard instrumentos",
    "uri": "/base-datos/datos-extra/instrumentos/equipboard-instrumentos/index.html"
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
    "content": "Actualmente la aplicación está disponible para sistemas Linux, ya sea un Sistema Operativo, o el submódulo wsl para windows\nPara ello necesitarás:\nClonar el repositorio desde github git clone https://github.com/volteret4/mfuz Instalar los requisitos Configurar el config file ya sea json o yml",
    "description": "Actualmente la aplicación está disponible para sistemas Linux, ya sea un Sistema Operativo, o el submódulo wsl para windows\nPara ello necesitarás:\nClonar el repositorio desde github git clone https://github.com/volteret4/mfuz Instalar los requisitos Configurar el config file ya sea json o yml",
    "tags": [],
    "title": "Instalación",
    "uri": "/instalacion/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra",
    "content": "![[24. Equipboard artistas]]\n![[Equipboard instrumentos]]\n![[Equipboard detalles]]",
    "description": "![[24. Equipboard artistas]]\n![[Equipboard instrumentos]]\n![[Equipboard detalles]]",
    "tags": [],
    "title": "instrumentos",
    "uri": "/base-datos/datos-extra/instrumentos/index.html"
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
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra",
    "content": "![[14. Libros]]",
    "description": "![[14. Libros]]",
    "tags": [],
    "title": "libros",
    "uri": "/base-datos/datos-extra/libros/index.html"
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
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  reviews",
    "content": "Definición: Este script busca menciones de artistas en el contenido de los feeds almacenados en la base de datos, creando una tabla de relaciones que identifica qué artistas son mencionados en qué feeds, excluyendo automáticamente las auto-referencias.",
    "description": "Definición: Este script busca menciones de artistas en el contenido de los feeds almacenados en la base de datos, creando una tabla de relaciones que identifica qué artistas son mencionados en qué feeds, excluyendo automáticamente las auto-referencias.",
    "tags": [],
    "title": "Menciones",
    "uri": "/base-datos/datos-extra/reviews/menciones/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Módulos",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Módulo 01 Music Browser",
    "uri": "/modulos/m%C3%B3dulo-01-music-browser/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Módulos",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Módulo 02 Editor de la base de datos",
    "uri": "/modulos/m%C3%B3dulo-02-editor-de-la-base-de-datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Módulos",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Módulo 03 Url Playlists",
    "uri": "/modulos/m%C3%B3dulo-03-url-playlists/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Módulos",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Módulo 04 Conciertos",
    "uri": "/modulos/m%C3%B3dulo-04-conciertos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Módulos",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Módulo 05 Muspy",
    "uri": "/modulos/m%C3%B3dulo-05-muspy/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Módulos",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Módulo 06 Jaangle",
    "uri": "/modulos/m%C3%B3dulo-06-jaangle/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Módulos",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Módulo 07 Estadisticas",
    "uri": "/modulos/m%C3%B3dulo-07-estadisticas/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Módulos",
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
    "breadcrumb": "mfuzz \u003e  Base de datos",
    "content": "Estos scripts permiten crear la base de datos con los artistas, álbumes y canciones que desees en tu colección, pudiendo elegir varios orígenes:\nCrearla con archivos locales Usará el script [[db_musica_path.py]] Leerá la metadata de tus archivos de música, y con ella creará una estructura básica. Creará una columna origen con el string local para en la app poder filtrar de este modo. Obtener los artistas que sigues en spotify y sus discografías Usará el script [[db_musica_spotify.py]] Leerá todos los artistas que sigues y tomará toda su discografía en spotify para crear la estructura “básica” Creará una columna origen con el string local para en la app poder filtrar de este modo. Es aconsejable usar la aplicación Picard de musicbrainz para ajustar los tags de tu música digital. En Credenciales puedes encontrar un apartado con consejos al respecto.",
    "description": "Estos scripts permiten crear la base de datos con los artistas, álbumes y canciones que desees en tu colección, pudiendo elegir varios orígenes:\nCrearla con archivos locales Usará el script [[db_musica_path.py]] Leerá la metadata de tus archivos de música, y con ella creará una estructura básica. Creará una columna origen con el string local para en la app poder filtrar de este modo. Obtener los artistas que sigues en spotify y sus discografías Usará el script [[db_musica_spotify.py]] Leerá todos los artistas que sigues y tomará toda su discografía en spotify para crear la estructura “básica” Creará una columna origen con el string local para en la app poder filtrar de este modo. Es aconsejable usar la aplicación Picard de musicbrainz para ajustar los tags de tu música digital. En Credenciales puedes encontrar un apartado con consejos al respecto.",
    "tags": [],
    "title": "Punto de partida",
    "uri": "/base-datos/punto-de-partida/index.html"
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
    "content": "Requisitos básicos Dependiendo de los módulos deseados vas a necesitar varias credenciales apis o servicios según indica la tabla\nMódulo Requisito Motivo music-fuzzy base de datos 1 Es un explorador de información de la base de datos editor-db base de datos 1 Es un editor de la base de datos conciertos ticketmaster 2 Obtiene conciertos desde la api de ticketmaster setlistfm creds 2 setlistfm spotify creds 2 spotify muspy muspy id 1 Usa la api de muspy para añadir artistas y ver si tienen nuevos lanzamientos programados spotify creds Manejo de artistas favoritos, busca nuevos releases en spotify lastfm creds Manejo de artistas más escuchados, canciones favoritas, sincronización automática de scrobbles musicbrainz creds Manejo de colecciones de musicbrainz bluesky creds Seguir artistas en bluesky twitter creds Seguir artistas en twitter (WIP) jaangle base de datos 1 Es un juego basado en adivinar entre x opciones la canción que está sonando, pero necesita haber creado la base de datos antes playlists spotify creds Maneja playlists de spotify configuración config_editor.json Archivo que maneja una pestaña con la configuración de cada módulo UI db creador base de datos La creación de la base de datos también es modular, cada script aporta un conjunto diferente de datos. En caso de no tener interés por todos estos sería conveniente bien los requisitos de cada paso antes de ejecutarlo.\nUna vez tengas claro que partes vas a usar puedes revisar la sección credenciales en caso de necesitar algún enlace o indicación.\nPaquetes python app | ————- | ————- |\nConciertos beautifulsoup Url Playlists beutifulsoup — — music-fuzzy asd — — muspy asd — — jaangle asd — — configuracion asd Paquetes python para la creación de la base de datos Script Paquete Obligatorio ↩︎ ↩︎ ↩︎ ↩︎\nElegir entre al menos una de estas opciones ↩︎ ↩︎ ↩︎",
    "description": "Requisitos básicos Dependiendo de los módulos deseados vas a necesitar varias credenciales apis o servicios según indica la tabla\nMódulo Requisito Motivo music-fuzzy base de datos 1 Es un explorador de información de la base de datos editor-db base de datos 1 Es un editor de la base de datos conciertos ticketmaster 2 Obtiene conciertos desde la api de ticketmaster setlistfm creds 2 setlistfm spotify creds 2 spotify muspy muspy id 1 Usa la api de muspy para añadir artistas y ver si tienen nuevos lanzamientos programados spotify creds Manejo de artistas favoritos, busca nuevos releases en spotify lastfm creds Manejo de artistas más escuchados, canciones favoritas, sincronización automática de scrobbles musicbrainz creds Manejo de colecciones de musicbrainz bluesky creds Seguir artistas en bluesky twitter creds Seguir artistas en twitter (WIP) jaangle base de datos 1 Es un juego basado en adivinar entre x opciones la canción que está sonando, pero necesita haber creado la base de datos antes playlists spotify creds Maneja playlists de spotify configuración config_editor.json Archivo que maneja una pestaña con la configuración de cada módulo UI db creador base de datos La creación de la base de datos también es modular, cada script aporta un conjunto diferente de datos. En caso de no tener interés por todos estos sería conveniente bien los requisitos de cada paso antes de ejecutarlo.",
    "tags": [],
    "title": "requisitos",
    "uri": "/instalacion/requisitos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra",
    "content": "![[12. Artículos en servidor RSS]]\n![[13. Review Scrapper]]\n![[Menciones]]",
    "description": "![[12. Artículos en servidor RSS]]\n![[13. Review Scrapper]]\n![[Menciones]]",
    "tags": [],
    "title": "reviews",
    "uri": "/base-datos/datos-extra/reviews/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra",
    "content": "",
    "description": "",
    "tags": [],
    "title": "rym",
    "uri": "/base-datos/datos-extra/rateyourmusic/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra",
    "content": "![[29. RYM Artistas]]\n![[30. RYM Artistas Info]]\n![[31. RYM Álbumes]]",
    "description": "![[29. RYM Artistas]]\n![[30. RYM Artistas Info]]\n![[31. RYM Álbumes]]",
    "tags": [],
    "title": "rym",
    "uri": "/base-datos/datos-extra/rym/index.html"
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
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos",
    "content": "![[08. Wikipedia]]",
    "description": "![[08. Wikipedia]]",
    "tags": [],
    "title": "wikipedia",
    "uri": "/base-datos/datos-b%C3%A1sicos/wikipedia/index.html"
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
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Punto de partida",
    "content": "# 10. Optimización CONSEJOS DE USO: - Para búsquedas de texto rápidas, usa las tablas virtuales '_fts': SELECT * FROM songs WHERE id IN (SELECT id FROM song_fts WHERE song_fts MATCH 'palabra_clave') - Utiliza las vistas 'view_song_details', 'view_album_stats', 'view_artist_stats', 'view_label_stats' y 'view_country_stats' para consultas comunes - Aprovecha las columnas desnormalizadas para consultas más rápidas: - album_year - artist_origin - album_art_path_denorm - has_lyrics - album_label - decade - Tablas normalizadas: - genres_normalized: Para consultas relacionadas con géneros - countries: Normaliza países para estadísticas - decades: Facilita consultas por década - Búsqueda avanzada: - song_fts: Búsqueda de texto completo en canciones - artist_fts: Búsqueda de texto completo en artistas - album_fts: Búsqueda de texto completo en álbumes - lyrics_fts: Búsqueda de texto completo en letras",
    "description": "# 10. Optimización CONSEJOS DE USO: - Para búsquedas de texto rápidas, usa las tablas virtuales '_fts': SELECT * FROM songs WHERE id IN (SELECT id FROM song_fts WHERE song_fts MATCH 'palabra_clave') - Utiliza las vistas 'view_song_details', 'view_album_stats', 'view_artist_stats', 'view_label_stats' y 'view_country_stats' para consultas comunes - Aprovecha las columnas desnormalizadas para consultas más rápidas: - album_year - artist_origin - album_art_path_denorm - has_lyrics - album_label - decade - Tablas normalizadas: - genres_normalized: Para consultas relacionadas con géneros - countries: Normaliza países para estadísticas - decades: Facilita consultas por década - Búsqueda avanzada: - song_fts: Búsqueda de texto completo en canciones - artist_fts: Búsqueda de texto completo en artistas - album_fts: Búsqueda de texto completo en álbumes - lyrics_fts: Búsqueda de texto completo en letras",
    "tags": [],
    "title": "ZZ. Optimización",
    "uri": "/base-datos/punto-de-partida/zz.-optimizaci%C3%B3n/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  Enlaces \u003e  03. Enlaces artistas",
    "content": "Tipo Ruta Descripción Caché .json Archivo caché generado/usado por el script Configuración .yaml Archivo configuración generado/usado por el script Configuración .yml Archivo configuración generado/usado por el script Logs musicbrainzngs Archivo de log del script",
    "description": "Tipo Ruta Descripción Caché .json Archivo caché generado/usado por el script Configuración .yaml Archivo configuración generado/usado por el script Configuración .yml Archivo configuración generado/usado por el script Logs musicbrainzngs Archivo de log del script",
    "tags": [],
    "title": "Archivos",
    "uri": "/base-datos/datos-b%C3%A1sicos/enlaces/03.-enlaces-artistas/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  Enlaces \u003e  04. Youtube links de canciones",
    "content": "Tipo Ruta Descripción Caché PROJECT_ROOT/.content/cache/youtube_links_cache.json Almacena resultados de búsquedas para evitar duplicados Logs PROJECT_ROOT/.content/logs/youtube_links.log Archivo de registro de actividad y errores Temporales PROJECT_ROOT/.content/temp/yt_results/ Carpeta de archivos temporales generados",
    "description": "Tipo Ruta Descripción Caché PROJECT_ROOT/.content/cache/youtube_links_cache.json Almacena resultados de búsquedas para evitar duplicados Logs PROJECT_ROOT/.content/logs/youtube_links.log Archivo de registro de actividad y errores Temporales PROJECT_ROOT/.content/temp/yt_results/ Carpeta de archivos temporales generados",
    "tags": [],
    "title": "Archivos",
    "uri": "/base-datos/datos-b%C3%A1sicos/enlaces/04.-youtube-links-de-canciones/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  discografías \u003e  15. Discografías Discogs masters",
    "content": "Archivo Tipo Descripción Ubicación por defecto music.db Base de datos SQLite Base de datos principal donde se almacenan todos los datos {PROJECT_ROOT}/db/sqlite/music.db",
    "description": "Archivo Tipo Descripción Ubicación por defecto music.db Base de datos SQLite Base de datos principal donde se almacenan todos los datos {PROJECT_ROOT}/db/sqlite/music.db",
    "tags": [],
    "title": "Archivos",
    "uri": "/base-datos/datos-extra/discograf%C3%ADas/15.-discograf%C3%ADas-discogs-masters/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  discografías \u003e  16. Discografías Discogs releases",
    "content": "Archivo Tipo Descripción Ubicación por defecto music.db Base de datos SQLite Modifica la tabla discogs_discography existente añadiendo información detallada {PROJECT_ROOT}/music.db",
    "description": "Archivo Tipo Descripción Ubicación por defecto music.db Base de datos SQLite Modifica la tabla discogs_discography existente añadiendo información detallada {PROJECT_ROOT}/music.db",
    "tags": [],
    "title": "Archivos",
    "uri": "/base-datos/datos-extra/discograf%C3%ADas/16.-discograf%C3%ADas-discogs-releases/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  discografías \u003e  17. Discografías Discogs Info",
    "content": "Archivo Tipo Descripción Ubicación por defecto music.db Base de datos SQLite Crea una nueva tabla artists_discogs_info con información detallada de artistas {PROJECT_ROOT}/music.db",
    "description": "Archivo Tipo Descripción Ubicación por defecto music.db Base de datos SQLite Crea una nueva tabla artists_discogs_info con información detallada de artistas {PROJECT_ROOT}/music.db",
    "tags": [],
    "title": "Archivos",
    "uri": "/base-datos/datos-extra/discograf%C3%ADas/17.-discograf%C3%ADas-discogs-info/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  reviews \u003e  12. Artículos en servidor RSS",
    "content": "Tipo Ruta por Defecto / Configurada Formato Descripción / Contenido Principal Caché cache/freshrss_cache.json JSON Guarda artículos ya procesados para evitar duplicados. Estructura: Identificadores únicos y metadatos de los artículos Log Determinada por configuración de logging Texto plano Registra eventos del proceso con nivel INFO por defecto. Incluye: - Inicio y finalización del proceso - Errores de conexión o autenticación - Entidades encontradas en artículos - Errores al procesar artículos",
    "description": "Tipo Ruta por Defecto / Configurada Formato Descripción / Contenido Principal Caché cache/freshrss_cache.json JSON Guarda artículos ya procesados para evitar duplicados. Estructura: Identificadores únicos y metadatos de los artículos Log Determinada por configuración de logging Texto plano Registra eventos del proceso con nivel INFO por defecto. Incluye: - Inicio y finalización del proceso - Errores de conexión o autenticación - Entidades encontradas en artículos - Errores al procesar artículos",
    "tags": [],
    "title": "Archivos",
    "uri": "/base-datos/datos-extra/reviews/12.-art%C3%ADculos-en-servidor-rss/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  sellos \u003e  11. Musicbrainz sellos",
    "content": "Tipo Ubicación Típica Descripción Base de Datos Ruta especificada por db_path Archivo SQLite donde se almacena la información Caché cache/mb_sellos/ Directorio para almacenar datos descargados desde MusicBrainz Logs logs/mb_sellos.log Archivo de registro con nivel configurable (por defecto: INFO)",
    "description": "Tipo Ubicación Típica Descripción Base de Datos Ruta especificada por db_path Archivo SQLite donde se almacena la información Caché cache/mb_sellos/ Directorio para almacenar datos descargados desde MusicBrainz Logs logs/mb_sellos.log Archivo de registro con nivel configurable (por defecto: INFO)",
    "tags": [],
    "title": "Archivos",
    "uri": "/base-datos/datos-extra/sellos/11.-musicbrainz-sellos/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  Enlaces \u003e  05. Enlaces canciones",
    "content": "Archivo Tipo Descripción checkpoint_path JSON Archivo de progreso con estadísticas y último ID procesado Logs en stdout Log Mensajes de progreso y errores con timestamp",
    "description": "Archivo Tipo Descripción checkpoint_path JSON Archivo de progreso con estadísticas y último ID procesado Logs en stdout Log Mensajes de progreso y errores con timestamp",
    "tags": [],
    "title": "Archivos:",
    "uri": "/base-datos/datos-b%C3%A1sicos/enlaces/05.-enlaces-canciones/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  Escuchas \u003e  27. Scrobbles lastfm",
    "content": "Archivo Tipo Descripción cache_dir/lastfm_cache.json JSON Caché de respuestas de la API de Last.fm (7 días de duración) output_json JSON Exportación opcional de todos los scrobbles procesados Logs en stdout Log Mensajes de progreso con información detallada del procesamiento",
    "description": "Archivo Tipo Descripción cache_dir/lastfm_cache.json JSON Caché de respuestas de la API de Last.fm (7 días de duración) output_json JSON Exportación opcional de todos los scrobbles procesados Logs en stdout Log Mensajes de progreso con información detallada del procesamiento",
    "tags": [],
    "title": "Archivos:",
    "uri": "/base-datos/datos-b%C3%A1sicos/escuchas/27.-scrobbles-lastfm/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  charts \u003e  19. uk csv",
    "content": "Archivo Tipo Descripción uk_charts_data/singles/*.csv Creado CSVs de respaldo para singles por año uk_charts_data/bestselling/*.csv Creado CSVs de respaldo para bestselling uk_charts_data/vinyl/*.csv Creado CSVs de respaldo para charts de vinilo uk_charts_data/streaming/*.csv Creado CSVs de respaldo para streaming uk_charts_data/downloads/*.csv Creado CSVs de respaldo para descargas uk_charts_data/indie/*.csv Creado CSVs de respaldo para indie charts uk_charts_data/nme/*.csv Creado CSVs de respaldo para NME charts",
    "description": "Archivo Tipo Descripción uk_charts_data/singles/*.csv Creado CSVs de respaldo para singles por año uk_charts_data/bestselling/*.csv Creado CSVs de respaldo para bestselling uk_charts_data/vinyl/*.csv Creado CSVs de respaldo para charts de vinilo uk_charts_data/streaming/*.csv Creado CSVs de respaldo para streaming uk_charts_data/downloads/*.csv Creado CSVs de respaldo para descargas uk_charts_data/indie/*.csv Creado CSVs de respaldo para indie charts uk_charts_data/nme/*.csv Creado CSVs de respaldo para NME charts",
    "tags": [],
    "title": "Archivos:",
    "uri": "/base-datos/datos-extra/charts/19.-uk-csv/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  charts \u003e  20. uk indie nme",
    "content": "Archivo Tipo Descripción uk_indie_nme_charts_data/indie/uk_indie_charts_all.csv CSV respaldo Datos extraídos del UK Independent Singles Chart uk_indie_nme_charts_data/nme/nme_charts_all.csv CSV respaldo Datos extraídos del NME Chart",
    "description": "Archivo Tipo Descripción uk_indie_nme_charts_data/indie/uk_indie_charts_all.csv CSV respaldo Datos extraídos del UK Independent Singles Chart uk_indie_nme_charts_data/nme/nme_charts_all.csv CSV respaldo Datos extraídos del NME Chart",
    "tags": [],
    "title": "Archivos:",
    "uri": "/base-datos/datos-extra/charts/20.-uk-indie-nme/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  charts \u003e  20. uk specialized",
    "content": "Archivo Tipo Descripción uk_specialized_charts_data/ Directorio Directorio base para respaldos CSV uk_specialized_charts_data/vinyl/ Directorio Respaldos de datos de vinilos uk_specialized_charts_data/streaming/ Directorio Respaldos de datos de streaming uk_specialized_charts_data/downloads/ Directorio Respaldos de datos de descargas",
    "description": "Archivo Tipo Descripción uk_specialized_charts_data/ Directorio Directorio base para respaldos CSV uk_specialized_charts_data/vinyl/ Directorio Respaldos de datos de vinilos uk_specialized_charts_data/streaming/ Directorio Respaldos de datos de streaming uk_specialized_charts_data/downloads/ Directorio Respaldos de datos de descargas",
    "tags": [],
    "title": "Archivos:",
    "uri": "/base-datos/datos-extra/charts/20.-uk-specialized/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  charts \u003e  21. billboard",
    "content": "Archivo Tipo Descripción billboard_data/yearend/ Directorio Respaldo CSV de Year-End singles billboard_data/hot100/ Directorio Respaldo CSV de Hot 100 top-ten billboard_data/country/ Directorio Respaldo CSV de Country Albums",
    "description": "Archivo Tipo Descripción billboard_data/yearend/ Directorio Respaldo CSV de Year-End singles billboard_data/hot100/ Directorio Respaldo CSV de Hot 100 top-ten billboard_data/country/ Directorio Respaldo CSV de Country Albums",
    "tags": [],
    "title": "Archivos:",
    "uri": "/base-datos/datos-extra/charts/21.-billboard/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  charts \u003e  22. spain charts",
    "content": "Archivo Tipo Descripción .content/charts/spain/ Directorio Directorio base para archivos CSV de respaldo spain_number_ones_{año}.csv CSV Archivo de respaldo para cada año procesado spain_number_ones_{año}_con_generos.csv CSV Archivo de respaldo con géneros incluidos",
    "description": "Archivo Tipo Descripción .content/charts/spain/ Directorio Directorio base para archivos CSV de respaldo spain_number_ones_{año}.csv CSV Archivo de respaldo para cada año procesado spain_number_ones_{año}_con_generos.csv CSV Archivo de respaldo con géneros incluidos",
    "tags": [],
    "title": "Archivos:",
    "uri": "/base-datos/datos-extra/charts/22.-spain-charts/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  discografías \u003e  18. Musicbrainz discografía",
    "content": "Archivo Tipo Descripción Ninguno - Este script no crea archivos de cache o logs específicos",
    "description": "Archivo Tipo Descripción Ninguno - Este script no crea archivos de cache o logs específicos",
    "tags": [],
    "title": "Archivos:",
    "uri": "/base-datos/datos-extra/discograf%C3%ADas/18.-musicbrainz-discograf%C3%ADa/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  instrumentos \u003e  24. Equipboard artistas",
    "content": "Archivo Tipo Descripción Ninguno - Este script no crea archivos de cache o logs específicos",
    "description": "Archivo Tipo Descripción Ninguno - Este script no crea archivos de cache o logs específicos",
    "tags": [],
    "title": "Archivos:",
    "uri": "/base-datos/datos-extra/instrumentos/24.-equipboard-artistas/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  instrumentos \u003e  Equipboard detalles",
    "content": "Archivo Tipo Descripción equipboard_details.json JSON Archivo de exportación con datos detallados (opcional)",
    "description": "Archivo Tipo Descripción equipboard_details.json JSON Archivo de exportación con datos detallados (opcional)",
    "tags": [],
    "title": "Archivos:",
    "uri": "/base-datos/datos-extra/instrumentos/equipboard-detalles/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  instrumentos \u003e  Equipboard instrumentos",
    "content": "Archivo Tipo Descripción Ninguno - Este script no crea archivos de cache o logs específicos",
    "description": "Archivo Tipo Descripción Ninguno - Este script no crea archivos de cache o logs específicos",
    "tags": [],
    "title": "Archivos:",
    "uri": "/base-datos/datos-extra/instrumentos/equipboard-instrumentos/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  libros \u003e  14. Libros",
    "content": "Tipo Ruta Descripción Input epub_folder/**/*.epub Archivos EPUB a procesar recursivamente Output Ninguno Los datos se almacenan directamente en la base de datos",
    "description": "Tipo Ruta Descripción Input epub_folder/**/*.epub Archivos EPUB a procesar recursivamente Output Ninguno Los datos se almacenan directamente en la base de datos",
    "tags": [],
    "title": "Archivos:",
    "uri": "/base-datos/datos-extra/libros/14.-libros/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  rym \u003e  29. RYM Artistas",
    "content": "Archivo Tipo Descripción Ninguno - Este script no crea archivos de cache o logs específicos",
    "description": "Archivo Tipo Descripción Ninguno - Este script no crea archivos de cache o logs específicos",
    "tags": [],
    "title": "Archivos:",
    "uri": "/base-datos/datos-extra/rateyourmusic/29.-rym-artistas/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  rym \u003e  30. RYM Artistas Info",
    "content": "Archivo Tipo Descripción Ninguno - Este script no crea archivos de cache o logs específicos",
    "description": "Archivo Tipo Descripción Ninguno - Este script no crea archivos de cache o logs específicos",
    "tags": [],
    "title": "Archivos:",
    "uri": "/base-datos/datos-extra/rateyourmusic/30.-rym-artistas-info/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  rym \u003e  31. RYM Álbumes",
    "content": "Archivo Tipo Descripción Ninguno - Este script no crea archivos de cache o logs específicos",
    "description": "Archivo Tipo Descripción Ninguno - Este script no crea archivos de cache o logs específicos",
    "tags": [],
    "title": "Archivos:",
    "uri": "/base-datos/datos-extra/rateyourmusic/31.-rym-%C3%A1lbumes/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  reviews \u003e  13. Review Scrapper",
    "content": "Archivo Tipo Descripción .content/logs/review_scrapper_errors.txt Log Enlaces con errores no estándar .content/cache/db/enlaces/enlaces_canciones.json Cache Cache para enlaces de canciones",
    "description": "Archivo Tipo Descripción .content/logs/review_scrapper_errors.txt Log Enlaces con errores no estándar .content/cache/db/enlaces/enlaces_canciones.json Cache Cache para enlaces de canciones",
    "tags": [],
    "title": "Archivos:",
    "uri": "/base-datos/datos-extra/reviews/13.-review-scrapper/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  reviews \u003e  Menciones",
    "content": "Archivo Tipo Descripción Ninguno - Este script no crea archivos de cache o logs específicos",
    "description": "Archivo Tipo Descripción Ninguno - Este script no crea archivos de cache o logs específicos",
    "tags": [],
    "title": "Archivos:",
    "uri": "/base-datos/datos-extra/reviews/menciones/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Punto de partida \u003e  01. Archivos locales",
    "content": "Archivo Tipo Descripción .content/logs/db/db_musica_path_error.log Log Registro de errores durante el procesamiento de archivos",
    "description": "Archivo Tipo Descripción .content/logs/db/db_musica_path_error.log Log Registro de errores durante el procesamiento de archivos",
    "tags": [],
    "title": "Archivos:",
    "uri": "/base-datos/punto-de-partida/01.-archivos-locales/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Punto de partida \u003e  02. Spotify",
    "content": "Archivo Tipo Descripción .content/cache/.spotify_token.json Cache Token de autenticación de Spotify .content/logs/db/db_musica_spotify.log Log Registro de actividad del script",
    "description": "Archivo Tipo Descripción .content/cache/.spotify_token.json Cache Token de autenticación de Spotify .content/logs/db/db_musica_spotify.log Log Registro de actividad del script",
    "tags": [],
    "title": "Archivos:",
    "uri": "/base-datos/punto-de-partida/02.-spotify/archivos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  Enlaces \u003e  09. Redes",
    "content": "Argumento Tipo Descripción Valor por Defecto config dict Diccionario con la configuración — config.db_path str Ruta al archivo de la base de datos SQLite (obligatorio) — config.discogs_token str Token para la API de Discogs (obligatorio) — config.rate_limit float Tiempo de espera entre solicitudes (por defecto: 1.0) 1.0 config.max_retries int Número máximo de reintentos para solicitudes fallidas (por defecto: 3) 3 config.batch_size int Cantidad de artistas a procesar por lote (por defecto: 50) 50 config.force_update bool Forzar actualización incluso si ya existen datos (por defecto: False) False config.missing_only bool Procesar solo artistas sin registro de redes sociales (por defecto: True) True config.concurrent_workers int Número de hilos para procesamiento en paralelo (por defecto: 1) 1 config.user_agent str Agente de usuario para las solicitudes HTTP (por defecto: 'MusicDatabaseApp/1.0') 'MusicDatabaseApp/1.0'",
    "description": "Argumento Tipo Descripción Valor por Defecto config dict Diccionario con la configuración — config.db_path str Ruta al archivo de la base de datos SQLite (obligatorio) — config.discogs_token str Token para la API de Discogs (obligatorio) — config.rate_limit float Tiempo de espera entre solicitudes (por defecto: 1.0) 1.0 config.max_retries int Número máximo de reintentos para solicitudes fallidas (por defecto: 3) 3 config.batch_size int Cantidad de artistas a procesar por lote (por defecto: 50) 50 config.force_update bool Forzar actualización incluso si ya existen datos (por defecto: False) False config.missing_only bool Procesar solo artistas sin registro de redes sociales (por defecto: True) True config.concurrent_workers int Número de hilos para procesamiento en paralelo (por defecto: 1) 1 config.user_agent str Agente de usuario para las solicitudes HTTP (por defecto: 'MusicDatabaseApp/1.0') 'MusicDatabaseApp/1.0'",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base-datos/datos-b%C3%A1sicos/enlaces/09.-redes/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  Escuchas \u003e  28. Listens listenbrainz",
    "content": "Argumento Tipo Descripción --config Str Archivo de configuración --token Str Token de autenticación de ListenBrainz --force-update Str Forzar actualización completa --max-items Int Número máximo de listens a obtener por llamada (opcional) --reprocess-existing Opcional Reprocesar listens existentes con los métodos de coincidencia seleccionados --normalize-strings Opcional Usar normalización de strings para mejorar coincidencias --enhanced-matching Opcional Crear y usar tablas normalizadas para buscar coincidencias --mbid-matching Opcional Intentar coincidencia por MusicBrainz IDs --fuzzy-matching Opcional Usar coincidencia difusa para encontrar canciones --analyze-mismatches Opcional Analizar razones de discrepancias --use-all-matching Opcional Utilizar todas las técnicas de coincidencia mejoradas --output Opcional , type=str, help=",
    "description": "Argumento Tipo Descripción --config Str Archivo de configuración --token Str Token de autenticación de ListenBrainz --force-update Str Forzar actualización completa --max-items Int Número máximo de listens a obtener por llamada (opcional) --reprocess-existing Opcional Reprocesar listens existentes con los métodos de coincidencia seleccionados --normalize-strings Opcional Usar normalización de strings para mejorar coincidencias --enhanced-matching Opcional Crear y usar tablas normalizadas para buscar coincidencias --mbid-matching Opcional Intentar coincidencia por MusicBrainz IDs --fuzzy-matching Opcional Usar coincidencia difusa para encontrar canciones --analyze-mismatches Opcional Analizar razones de discrepancias --use-all-matching Opcional Utilizar todas las técnicas de coincidencia mejoradas --output Opcional , type=str, help=",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base-datos/datos-b%C3%A1sicos/escuchas/28.-listens-listenbrainz/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  Letras \u003e  10. Letras",
    "content": "Argumento Tipo Descripción Valor por Defecto --db_path str Ruta a la base de datos SQLite (requerido) — --force-update bool Bandera para forzar la actualización de todas las letras, incluso las que ya existen False --batch-size int Número de canciones a procesar por lote 1000 --no-resume bool Bandera para no continuar desde el último punto guardado False --config str Archivo de configuración JSON con parámetros adicionales —",
    "description": "Argumento Tipo Descripción Valor por Defecto --db_path str Ruta a la base de datos SQLite (requerido) — --force-update bool Bandera para forzar la actualización de todas las letras, incluso las que ya existen False --batch-size int Número de canciones a procesar por lote 1000 --no-resume bool Bandera para no continuar desde el último punto guardado False --config str Archivo de configuración JSON con parámetros adicionales —",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base-datos/datos-b%C3%A1sicos/letras/10.-letras/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  wikipedia \u003e  08. Wikipedia",
    "content": "Argumento Tipo Descripción Valor por Defecto --config str Ruta al archivo de configuración JSON (obligatorio) — --log-file str Archivo de registro para seguimiento del progreso — --db-path str Ruta a la base de datos SQLite — --type str Tipo de entidad a actualizar (artists, albums, artists_content, albums_content, labels, labels_content) — --user-agent str User-Agent para las peticiones a MusicBrainz — --modo str Tipo de lanzamiento: auto o manual — --force-update bool Flag para forzar la actualización de todos los elementos False",
    "description": "Argumento Tipo Descripción Valor por Defecto --config str Ruta al archivo de configuración JSON (obligatorio) — --log-file str Archivo de registro para seguimiento del progreso — --db-path str Ruta a la base de datos SQLite — --type str Tipo de entidad a actualizar (artists, albums, artists_content, albums_content, labels, labels_content) — --user-agent str User-Agent para las peticiones a MusicBrainz — --modo str Tipo de lanzamiento: auto o manual — --force-update bool Flag para forzar la actualización de todos los elementos False",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base-datos/datos-b%C3%A1sicos/wikipedia/08.-wikipedia/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz",
    "content": "Base de datos Esta aplicación necesita la creación de una base de datos musical, y para ello necesitas editar el archivo[[config_database_creator_example.json]] en la carpeta config. En el podrás ver la configuración individual de cada script y el orden en que se ejecutaran los seleccionados.\nUna vez editado podrás lanzar el script db_creator.py asi desde la carpeta raiz:\npython db_creator.py --config config/db_creator_config.json Configuración JSON Primero has de elegir cual será la fuente de tu música, para ello puedes elegir varios puntos de partida, combinables entre ellos como se explica en [[Punto de partida]]\nUna vez creada la estructura principal, el resto de scripts son totalmente opcionales, cada uno de ellos añadirá información a la base de datos, especificada en cada módulo. Del mismo modo es posible que requiera de ciertas credenciales especificados en tal caso en el config.json.\nDependencias para la base de datos pip install requests beautifulsoup4 spotipy musicbrainzngs python3-discogs-client pylast python-youtube-search playwright tqdm sqlite3 google-api-python-client ?? Scripts Auxiliares Estos scripts puedes usarlos durante el proceso de creación o al final para consultar datos sobre la base de datos.\n[[estadisticas_db.py]] Muestra detalladamente el estado de la base de datos en comparación a una tabla completa finalizando todos los scripts. Uso python estadisticas_db.py --db-path basedatos.db\n[[Spaces/Scripts/menus/musica/base_datos/tools/consultar_items_db.py|consultar_items_db.py]] Puedes obtener diversos campos de la base de datos usando varios filtros. Leer mas aqui TODO\n[[unir_artistas.py]] Permite unir artistas bajo un mismo nombre, útil cuando te aparecen Chimobayo feat. Björk o similares colaboraciones.\nConsejos Dependiendo de la cantidad de contenido que tengas, estas tareas pueden llevar un tiempo, es recomendable el uso de un pequeño servidor para realizar estas tareas sin consumir mucho tiempo y consecuentemente dinero.\nEn cada paso se dan unas estimaciones del tiempo consumido\nTodas las consultas respetan los limites establecidas por cada api y las restricciones diarias pausaran el script que alcance el límite hasta que este sea restablecido\n![[Punto de partida]]\n![[Datos básicos]]\n![[datos extra]]",
    "description": "Base de datos Esta aplicación necesita la creación de una base de datos musical, y para ello necesitas editar el archivo[[config_database_creator_example.json]] en la carpeta config. En el podrás ver la configuración individual de cada script y el orden en que se ejecutaran los seleccionados.\nUna vez editado podrás lanzar el script db_creator.py asi desde la carpeta raiz:\npython db_creator.py --config config/db_creator_config.json Configuración JSON Primero has de elegir cual será la fuente de tu música, para ello puedes elegir varios puntos de partida, combinables entre ellos como se explica en [[Punto de partida]]",
    "tags": [],
    "title": "Base de datos",
    "uri": "/base-datos/index.html"
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
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra",
    "content": "",
    "description": "",
    "tags": [],
    "title": "sellos",
    "uri": "/base-datos/datos-extra/sellos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  Enlaces \u003e  03. Enlaces artistas",
    "content": "Argumento Tipo Descripción --config Opcional Archivo de configuración --enlaces-artista-album Configuración Configuración enlaces_artista_album --db-path Configuración Configuración db_path --spotify-client-id Configuración Configuración spotify_client_id --spotify-client-secret Configuración Configuración spotify_client_secret --lastfm-api-key Configuración Configuración lastfm_api_key --lastfm-user Configuración Configuración lastfm_user --google-api-key Configuración Configuración google_api_key --discogs-token Configuración Configuración discogs_token --artist Configuración Configuración artist DB_PATH Variable de entorno Variable de entorno DB_PATH SPOTIFY_CLIENT_ID Variable de entorno Variable de entorno SPOTIFY_CLIENT_ID SPOTIFY_CLIENT_SECRET Variable de entorno Variable de entorno SPOTIFY_CLIENT_SECRET LASTFM_API_KEY Variable de entorno Variable de entorno LASTFM_API_KEY LASTFM_USER Variable de entorno Variable de entorno LASTFM_USER GOOGLE_API_KEY Variable de entorno Variable de entorno GOOGLE_API_KEY DISCOGS_TOKEN Variable de entorno Variable de entorno DISCOGS_TOKEN config Parámetro Parámetro de función main (default: None)",
    "description": "Argumento Tipo Descripción --config Opcional Archivo de configuración --enlaces-artista-album Configuración Configuración enlaces_artista_album --db-path Configuración Configuración db_path --spotify-client-id Configuración Configuración spotify_client_id --spotify-client-secret Configuración Configuración spotify_client_secret --lastfm-api-key Configuración Configuración lastfm_api_key --lastfm-user Configuración Configuración lastfm_user --google-api-key Configuración Configuración google_api_key --discogs-token Configuración Configuración discogs_token --artist Configuración Configuración artist DB_PATH Variable de entorno Variable de entorno DB_PATH SPOTIFY_CLIENT_ID Variable de entorno Variable de entorno SPOTIFY_CLIENT_ID SPOTIFY_CLIENT_SECRET Variable de entorno Variable de entorno SPOTIFY_CLIENT_SECRET LASTFM_API_KEY Variable de entorno Variable de entorno LASTFM_API_KEY LASTFM_USER Variable de entorno Variable de entorno LASTFM_USER GOOGLE_API_KEY Variable de entorno Variable de entorno GOOGLE_API_KEY DISCOGS_TOKEN Variable de entorno Variable de entorno DISCOGS_TOKEN config Parámetro Parámetro de función main (default: None)",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base-datos/datos-b%C3%A1sicos/enlaces/03.-enlaces-artistas/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  Enlaces \u003e  04. Youtube links de canciones",
    "content": "Argumento Descripción Valor por Defecto db_path Ruta a la base de datos SQLite — youtube_api_key Clave de API de YouTube — lastfm_api_key Clave de API de Last.fm — rate_limit Tiempo entre solicitudes API (segundos) 1.0 user_agent Agente de usuario para solicitudes HTTP 'MusicDB/1.0' missing_only Solo procesar elementos sin enlaces True cache_file Ruta del archivo de caché PROJECT_ROOT/.content/cache/youtube_links_cache.json force_update Forzar actualización incluso si hay datos en caché False batch_size Número de elementos a procesar por lote 100 max_retries Máximo de reintentos para solicitudes fallidas 3 use_scrapers Usar scraping si falla la API True entity_types Tipos de entidades a procesar ['songs'] log_file Ruta del archivo de log PROJECT_ROOT/.content/logs/youtube_links.log log_level Nivel de detalle del registro 'INFO' concurrent_workers Número de procesos simultáneos 4 query_template Plantilla de búsqueda en YouTube \"{artist} - {title} official\" max_results Número máximo de resultados por búsqueda 5 min_match_score Puntuación mínima para considerar coincidencia 0.7",
    "description": "Argumento Descripción Valor por Defecto db_path Ruta a la base de datos SQLite — youtube_api_key Clave de API de YouTube — lastfm_api_key Clave de API de Last.fm — rate_limit Tiempo entre solicitudes API (segundos) 1.0 user_agent Agente de usuario para solicitudes HTTP 'MusicDB/1.0' missing_only Solo procesar elementos sin enlaces True cache_file Ruta del archivo de caché PROJECT_ROOT/.content/cache/youtube_links_cache.json force_update Forzar actualización incluso si hay datos en caché False batch_size Número de elementos a procesar por lote 100 max_retries Máximo de reintentos para solicitudes fallidas 3 use_scrapers Usar scraping si falla la API True entity_types Tipos de entidades a procesar ['songs'] log_file Ruta del archivo de log PROJECT_ROOT/.content/logs/youtube_links.log log_level Nivel de detalle del registro 'INFO' concurrent_workers Número de procesos simultáneos 4 query_template Plantilla de búsqueda en YouTube \"{artist} - {title} official\" max_results Número máximo de resultados por búsqueda 5 min_match_score Puntuación mínima para considerar coincidencia 0.7",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base-datos/datos-b%C3%A1sicos/enlaces/04.-youtube-links-de-canciones/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  charts \u003e  19. uk csv",
    "content": "Argumento Tipo Descripción Valores posibles type string Tipo de datos a extraer singles, albums, bestselling, numberones, vinyl, streaming, downloads, indie, nme decade string Década específica a extraer 50s, 60s, 70s, 80s, 90s, 00s, 10s, 20s year integer Año específico a extraer 1952-2024 all boolean Extraer todos los datos disponibles true/false generos boolean Incluir información de géneros musicales true/false specialized boolean Incluir charts especializados true/false force_update boolean Forzar actualización de datos existentes true/false rate_limit float Pausa entre peticiones en segundos número decimal",
    "description": "Argumento Tipo Descripción Valores posibles type string Tipo de datos a extraer singles, albums, bestselling, numberones, vinyl, streaming, downloads, indie, nme decade string Década específica a extraer 50s, 60s, 70s, 80s, 90s, 00s, 10s, 20s year integer Año específico a extraer 1952-2024 all boolean Extraer todos los datos disponibles true/false generos boolean Incluir información de géneros musicales true/false specialized boolean Incluir charts especializados true/false force_update boolean Forzar actualización de datos existentes true/false rate_limit float Pausa entre peticiones en segundos número decimal",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base-datos/datos-extra/charts/19.-uk-csv/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  discografías \u003e  15. Discografías Discogs masters",
    "content": "Parámetro Tipo Valor por defecto Descripción discogs_token string '' (vacío) Token de autenticación para la API de Discogs (requerido) db_path string {PROJECT_ROOT}/db/sqlite/music.db Ruta completa a la base de datos SQLite force_update boolean False Si es True, actualiza registros existentes; si es False, solo procesa artistas nuevos accepted_formats list ['album', 'ep'] Lista de formatos de lanzamientos aceptados para importar rol_principal boolean False Si es True, solo importa lanzamientos donde el artista tiene rol ‘Main’; si es False, importa todos los lanzamientos",
    "description": "Parámetro Tipo Valor por defecto Descripción discogs_token string '' (vacío) Token de autenticación para la API de Discogs (requerido) db_path string {PROJECT_ROOT}/db/sqlite/music.db Ruta completa a la base de datos SQLite force_update boolean False Si es True, actualiza registros existentes; si es False, solo procesa artistas nuevos accepted_formats list ['album', 'ep'] Lista de formatos de lanzamientos aceptados para importar rol_principal boolean False Si es True, solo importa lanzamientos donde el artista tiene rol ‘Main’; si es False, importa todos los lanzamientos",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base-datos/datos-extra/discograf%C3%ADas/15.-discograf%C3%ADas-discogs-masters/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  discografías \u003e  16. Discografías Discogs releases",
    "content": "Parámetro Tipo Valor por defecto Descripción db_path string {PROJECT_ROOT}/music.db Ruta completa a la base de datos SQLite discogs_token string '' (vacío) Token de autenticación para la API de Discogs (requerido) delay_between_requests float 1.5 Tiempo de espera en segundos entre peticiones a la API force_update boolean False Si es True, actualiza todos los registros; si es False, solo actualiza registros sin datos",
    "description": "Parámetro Tipo Valor por defecto Descripción db_path string {PROJECT_ROOT}/music.db Ruta completa a la base de datos SQLite discogs_token string '' (vacío) Token de autenticación para la API de Discogs (requerido) delay_between_requests float 1.5 Tiempo de espera en segundos entre peticiones a la API force_update boolean False Si es True, actualiza todos los registros; si es False, solo actualiza registros sin datos",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base-datos/datos-extra/discograf%C3%ADas/16.-discograf%C3%ADas-discogs-releases/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  discografías \u003e  17. Discografías Discogs Info",
    "content": "Parámetro Tipo Valor por defecto Descripción db_path string {PROJECT_ROOT}/music.db Ruta completa a la base de datos SQLite force_update boolean False Si es True, actualiza todos los artistas; si es False, solo procesa artistas sin información sleep_time int/float 1 Tiempo de espera en segundos entre peticiones a la API discogs_token string '' (vacío) Token de autenticación para la API de Discogs (opcional pero recomendado) Procesamiento de datos de la API Campos extraídos de la API de Discogs Campo API Campo DB Procesamiento realname realname Directo profile profile Directo namevariations namevariations Convertido a JSON aliases aliases Extrae nombres y convierte a JSON groups groups Extrae nombres y convierte a JSON uri url Directo uri discogs_id Extrae ID numérico de la URL Conversión de URL El script maneja automáticamente la conversión entre formatos de URL:\nFormato de entrada Formato API https://www.discogs.com/artist/123-ArtistName https://api.discogs.com/artists/123 https://api.discogs.com/artists/123 Sin cambios Criterios de selección de artistas Modo Normal (force_update=False) SELECT a.id, a.name, COALESCE(an.discogs, a.discogs_url) as discogs_source FROM artists a LEFT JOIN artists_networks an ON a.id = an.artist_id LEFT JOIN artists_discogs_info adi ON a.id = adi.artist_id WHERE (an.discogs IS NOT NULL OR a.discogs_url IS NOT NULL) AND adi.artist_id IS NULL Resultado: Solo artistas que tienen URL de Discogs pero NO tienen información en artists_discogs_info\nModo Forzado (force_update=True) SELECT a.id, a.name, COALESCE(an.discogs, a.discogs_url) as discogs_source FROM artists a LEFT JOIN artists_networks an ON a.id = an.artist_id WHERE an.discogs IS NOT NULL OR a.discogs_url IS NOT NULL Resultado: Todos los artistas que tienen URL de Discogs (actualiza información existente)\nManejo de errores y límites Rate Limiting Característica Valor Descripción Delay por defecto 1 segundo Tiempo entre peticiones consecutivas User-Agent MusicDBUpdater/1.0 Requerido por la API de Discogs Autenticación Token opcional Mejora los límites de rate si se proporciona Gestión de errores Tipo de error Manejo URL vacía Salta el artista y continúa Error de API Registra error y continúa con siguiente Error de parseo Maneja graciosamente, continúa procesamiento Estadísticas del proceso El script proporciona información de monitoreo:\nInicio: Número total de artistas a procesar Progreso: Nombre del artista actual y URL siendo procesada Final: Resumen con artistas actualizados vs errores Operación de base de datos Inserción/Actualización Utiliza INSERT OR REPLACE para manejar tanto nuevos registros como actualizaciones La restricción UNIQUE(artist_id) previene duplicados Actualiza automáticamente last_updated en cada operación Dependencias y relaciones Tablas requeridas (deben existir previamente) artists - Tabla principal de artistas artists_networks - Enlaces de redes sociales y plataformas (opcional) Independencia Este script puede ejecutarse independientemente de los otros No requiere que se hayan ejecutado los scripts de discografía previamente Crea su propia tabla sin modificar estructuras existentes",
    "description": "Parámetro Tipo Valor por defecto Descripción db_path string {PROJECT_ROOT}/music.db Ruta completa a la base de datos SQLite force_update boolean False Si es True, actualiza todos los artistas; si es False, solo procesa artistas sin información sleep_time int/float 1 Tiempo de espera en segundos entre peticiones a la API discogs_token string '' (vacío) Token de autenticación para la API de Discogs (opcional pero recomendado) Procesamiento de datos de la API Campos extraídos de la API de Discogs Campo API Campo DB Procesamiento realname realname Directo profile profile Directo namevariations namevariations Convertido a JSON aliases aliases Extrae nombres y convierte a JSON groups groups Extrae nombres y convierte a JSON uri url Directo uri discogs_id Extrae ID numérico de la URL Conversión de URL El script maneja automáticamente la conversión entre formatos de URL:",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base-datos/datos-extra/discograf%C3%ADas/17.-discograf%C3%ADas-discogs-info/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  libros \u003e  14. Libros",
    "content": "Argumento Tipo Por defecto Descripción --epub-folder string - Carpeta que contiene los archivos EPUB a procesar (requerido en modo standalone) --db-path string - Ruta a la base de datos SQLite (requerido en modo standalone) --force-update boolean false Forzar actualización eliminando registros existentes --min-context int 100 Mínimo número de caracteres de contexto a extraer --max-context int 500 Máximo número de caracteres de contexto a extraer --case-sensitive boolean false Realizar búsqueda sensible a mayúsculas y minúsculas",
    "description": "Argumento Tipo Por defecto Descripción --epub-folder string - Carpeta que contiene los archivos EPUB a procesar (requerido en modo standalone) --db-path string - Ruta a la base de datos SQLite (requerido en modo standalone) --force-update boolean false Forzar actualización eliminando registros existentes --min-context int 100 Mínimo número de caracteres de contexto a extraer --max-context int 500 Máximo número de caracteres de contexto a extraer --case-sensitive boolean false Realizar búsqueda sensible a mayúsculas y minúsculas",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base-datos/datos-extra/libros/14.-libros/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  reviews \u003e  12. Artículos en servidor RSS",
    "content": "Clave Tipo Descripción freshrss_url TEXT URL base del servidor FreshRSS freshrss_username TEXT Nombre de usuario para autenticación en FreshRSS freshrss_password TEXT Contraseña para autenticación en FreshRSS db_path TEXT Ruta al archivo de base de datos SQLite freshrss_cache_path TEXT (opcional) Ruta al archivo de caché categories LIST Categorías a procesar (por defecto: ['Blogs', 'Revistas', 'Wallabag']) search_entities LIST Entidades a buscar (por ejemplo: artists, albums, labels) search_short_terms BOOLEAN Permitir o bloquear términos cortos (por defecto: False) ignore_patterns LIST Patrones a ignorar (por defecto incluye: 'mix-for-nts', etc.)",
    "description": "Clave Tipo Descripción freshrss_url TEXT URL base del servidor FreshRSS freshrss_username TEXT Nombre de usuario para autenticación en FreshRSS freshrss_password TEXT Contraseña para autenticación en FreshRSS db_path TEXT Ruta al archivo de base de datos SQLite freshrss_cache_path TEXT (opcional) Ruta al archivo de caché categories LIST Categorías a procesar (por defecto: ['Blogs', 'Revistas', 'Wallabag']) search_entities LIST Entidades a buscar (por ejemplo: artists, albums, labels) search_short_terms BOOLEAN Permitir o bloquear términos cortos (por defecto: False) ignore_patterns LIST Patrones a ignorar (por defecto incluye: 'mix-for-nts', etc.)",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base-datos/datos-extra/reviews/12.-art%C3%ADculos-en-servidor-rss/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  reviews \u003e  13. Review Scrapper",
    "content": "Parámetro Tipo Por defecto Descripción force_update boolean false Si es true, reprocesa álbumes ya procesados content_service string “readability” Servicio para extraer contenido: “readability”, “mercury”, “five_filters” tamano_lote integer 100 Número de álbumes a procesar por lote pausa integer 3 Segundos de pausa entre búsquedas inicio_id integer 0 ID de álbum desde donde comenzar el procesamiento archivo_errores string null Ruta para guardar errores de enlaces include_metacritic boolean true Incluir búsqueda en Metacritic include_aoty boolean true Incluir búsqueda en Album of the Year google_api_key string null API key de Google para búsquedas en AOTY google_cx string null Custom Search Engine ID de Google",
    "description": "Parámetro Tipo Por defecto Descripción force_update boolean false Si es true, reprocesa álbumes ya procesados content_service string “readability” Servicio para extraer contenido: “readability”, “mercury”, “five_filters” tamano_lote integer 100 Número de álbumes a procesar por lote pausa integer 3 Segundos de pausa entre búsquedas inicio_id integer 0 ID de álbum desde donde comenzar el procesamiento archivo_errores string null Ruta para guardar errores de enlaces include_metacritic boolean true Incluir búsqueda en Metacritic include_aoty boolean true Incluir búsqueda en Album of the Year google_api_key string null API key de Google para búsquedas en AOTY google_cx string null Custom Search Engine ID de Google",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base-datos/datos-extra/reviews/13.-review-scrapper/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  sellos \u003e  11. Musicbrainz sellos",
    "content": "Clave Descripción Opcional db_path Ruta a la base de datos SQLite No cache_path Ruta al directorio de caché Sí log_level Nivel de registro (DEBUG, INFO, WARNING, ERROR) Sí mb_sellos Configuración específica del módulo No",
    "description": "Clave Descripción Opcional db_path Ruta a la base de datos SQLite No cache_path Ruta al directorio de caché Sí log_level Nivel de registro (DEBUG, INFO, WARNING, ERROR) Sí mb_sellos Configuración específica del módulo No",
    "tags": [],
    "title": "Argumentos",
    "uri": "/base-datos/datos-extra/sellos/11.-musicbrainz-sellos/argumentos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  Enlaces \u003e  05. Enlaces canciones",
    "content": "Datos que leerá del JSON de configuración:\ndb_path: Ruta a la base de datos SQLite checkpoint_path: Archivo JSON para guardar el progreso del procesamiento services: Lista de servicios a buscar (“spotify”, “youtube”, “bandcamp”, “soundcloud”, “boomkat”) limit: Límite de canciones a procesar (opcional) force_update: Actualizar enlaces existentes delete_old: Eliminar enlaces antiguos si no se encuentra uno nuevo spotify_client_id: Client ID para la API de Spotify spotify_client_secret: Client Secret para la API de Spotify google_api_key: Clave de API de Google para búsquedas google_cx: ID de motor de búsqueda personalizado de Google lastfm_api_key: Clave de API de Last.fm Argumentos Argumento Tipo Descripción Requerido db_path string Ruta al archivo de la base de datos SQLite Sí checkpoint_path string Archivo JSON para guardar el progreso Sí services list/set Servicios a buscar enlaces Sí limit int Límite de canciones a procesar No force_update bool Actualizar enlaces incluso si ya existen No delete_old bool Eliminar enlaces existentes si no se encuentra uno nuevo No spotify_client_id string Client ID para la API de Spotify No spotify_client_secret string Client Secret para la API de Spotify No google_api_key string Clave de API de Google No google_cx string ID de motor de búsqueda personalizado de Google No lastfm_api_key string Clave de API de Last.fm No",
    "description": "Datos que leerá del JSON de configuración:\ndb_path: Ruta a la base de datos SQLite checkpoint_path: Archivo JSON para guardar el progreso del procesamiento services: Lista de servicios a buscar (“spotify”, “youtube”, “bandcamp”, “soundcloud”, “boomkat”) limit: Límite de canciones a procesar (opcional) force_update: Actualizar enlaces existentes delete_old: Eliminar enlaces antiguos si no se encuentra uno nuevo spotify_client_id: Client ID para la API de Spotify spotify_client_secret: Client Secret para la API de Spotify google_api_key: Clave de API de Google para búsquedas google_cx: ID de motor de búsqueda personalizado de Google lastfm_api_key: Clave de API de Last.fm Argumentos Argumento Tipo Descripción Requerido db_path string Ruta al archivo de la base de datos SQLite Sí checkpoint_path string Archivo JSON para guardar el progreso Sí services list/set Servicios a buscar enlaces Sí limit int Límite de canciones a procesar No force_update bool Actualizar enlaces incluso si ya existen No delete_old bool Eliminar enlaces existentes si no se encuentra uno nuevo No spotify_client_id string Client ID para la API de Spotify No spotify_client_secret string Client Secret para la API de Spotify No google_api_key string Clave de API de Google No google_cx string ID de motor de búsqueda personalizado de Google No lastfm_api_key string Clave de API de Last.fm No",
    "tags": [],
    "title": "Configuración",
    "uri": "/base-datos/datos-b%C3%A1sicos/enlaces/05.-enlaces-canciones/configuraci%C3%B3n/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  Escuchas \u003e  27. Scrobbles lastfm",
    "content": "Datos que leerá del JSON de configuración:\nlastfm_user: Nombre de usuario de Last.fm lastfm_api_key: Clave de API de Last.fm db_path: Ruta a la base de datos SQLite output_json: Archivo JSON opcional para exportar los scrobbles cache_dir: Directorio para archivos de caché (por defecto: .content/cache/lastfm) force_update: Forzar actualización completa ignorando el último timestamp interactive: Modo interactivo (no usado actualmente) Argumentos Argumento Tipo Descripción Requerido lastfm_user string Nombre de usuario de Last.fm Sí lastfm_api_key string Clave de API de Last.fm Sí db_path string Ruta al archivo de la base de datos SQLite Sí output_json string Ruta para guardar scrobbles en formato JSON No cache_dir string Directorio para archivos de caché No force_update bool Forzar actualización completa No",
    "description": "Datos que leerá del JSON de configuración:\nlastfm_user: Nombre de usuario de Last.fm lastfm_api_key: Clave de API de Last.fm db_path: Ruta a la base de datos SQLite output_json: Archivo JSON opcional para exportar los scrobbles cache_dir: Directorio para archivos de caché (por defecto: .content/cache/lastfm) force_update: Forzar actualización completa ignorando el último timestamp interactive: Modo interactivo (no usado actualmente) Argumentos Argumento Tipo Descripción Requerido lastfm_user string Nombre de usuario de Last.fm Sí lastfm_api_key string Clave de API de Last.fm Sí db_path string Ruta al archivo de la base de datos SQLite Sí output_json string Ruta para guardar scrobbles en formato JSON No cache_dir string Directorio para archivos de caché No force_update bool Forzar actualización completa No",
    "tags": [],
    "title": "Configuración",
    "uri": "/base-datos/datos-b%C3%A1sicos/escuchas/27.-scrobbles-lastfm/configuraci%C3%B3n/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  charts \u003e  20. uk indie nme",
    "content": "{ \"charts/uk_indie_nme\": { \"generos\": true, \"force_update\": false, \"rate_limit\": 1.5, \"indie_years\": [1999, 2000, 2001, 2002, 2007, 2020, 2021, 2022, 2023], \"nme_decades\": [\"60s\", \"70s\", \"80s\"], \"include_indie\": true, \"include_nme\": true } } Argumentos Argumento Tipo Descripción Por defecto generos boolean Habilita la extracción de géneros musicales true force_update boolean Fuerza la actualización de datos existentes false rate_limit float Tiempo de espera entre peticiones HTTP (segundos) 1.5 indie_years list Años específicos para procesar del UK Independent Chart [1999, 2000, 2001, 2002, 2007] nme_decades list Décadas para procesar del NME Chart [\"60s\", \"70s\", \"80s\"] include_indie boolean Incluir procesamiento de UK Independent Charts true include_nme boolean Incluir procesamiento de NME Charts true",
    "description": "{ \"charts/uk_indie_nme\": { \"generos\": true, \"force_update\": false, \"rate_limit\": 1.5, \"indie_years\": [1999, 2000, 2001, 2002, 2007, 2020, 2021, 2022, 2023], \"nme_decades\": [\"60s\", \"70s\", \"80s\"], \"include_indie\": true, \"include_nme\": true } } Argumentos Argumento Tipo Descripción Por defecto generos boolean Habilita la extracción de géneros musicales true force_update boolean Fuerza la actualización de datos existentes false rate_limit float Tiempo de espera entre peticiones HTTP (segundos) 1.5 indie_years list Años específicos para procesar del UK Independent Chart [1999, 2000, 2001, 2002, 2007] nme_decades list Décadas para procesar del NME Chart [\"60s\", \"70s\", \"80s\"] include_indie boolean Incluir procesamiento de UK Independent Charts true include_nme boolean Incluir procesamiento de NME Charts true",
    "tags": [],
    "title": "Configuración",
    "uri": "/base-datos/datos-extra/charts/20.-uk-indie-nme/configuraci%C3%B3n/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  charts \u003e  20. uk specialized",
    "content": "\"charts/uk_specialized\": { \"generos\": true, \"force_update\": false, \"rate_limit\": 1.0 } Argumentos Argumento Tipo Descripción Por defecto generos boolean Habilita la asignación de géneros musicales false force_update boolean Fuerza la actualización de datos existentes false rate_limit float Tiempo de espera entre peticiones (segundos) 1.0",
    "description": "\"charts/uk_specialized\": { \"generos\": true, \"force_update\": false, \"rate_limit\": 1.0 } Argumentos Argumento Tipo Descripción Por defecto generos boolean Habilita la asignación de géneros musicales false force_update boolean Fuerza la actualización de datos existentes false rate_limit float Tiempo de espera entre peticiones (segundos) 1.0",
    "tags": [],
    "title": "Configuración",
    "uri": "/base-datos/datos-extra/charts/20.-uk-specialized/configuraci%C3%B3n/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  charts \u003e  21. billboard",
    "content": "\"charts/billboard_csv\": { \"generos\": true, \"type\": \"all\", \"force_update\": false, \"rate_limit\": 1.5, \"discogs_token\": \"\", \"musicbrainz_user_agent\": \"BillboardScraper/1.0 (tu_email@dominio.com)\" } Argumentos Argumento Tipo Descripción Valores posibles Por defecto generos boolean Incluir información de géneros musicales true/false false type string Tipo de datos a extraer “yearend”, “hot100”, “country”, “all” “all” force_update boolean Forzar actualización de datos existentes true/false false rate_limit float Tiempo de espera entre requests (segundos) Número decimal 1.5 discogs_token string Token de API de Discogs (opcional) Token válido \"\" musicbrainz_user_agent string User agent para MusicBrainz Email válido \"\" year integer Año específico a extraer 1950-2024 null",
    "description": "\"charts/billboard_csv\": { \"generos\": true, \"type\": \"all\", \"force_update\": false, \"rate_limit\": 1.5, \"discogs_token\": \"\", \"musicbrainz_user_agent\": \"BillboardScraper/1.0 (tu_email@dominio.com)\" } Argumentos Argumento Tipo Descripción Valores posibles Por defecto generos boolean Incluir información de géneros musicales true/false false type string Tipo de datos a extraer “yearend”, “hot100”, “country”, “all” “all” force_update boolean Forzar actualización de datos existentes true/false false rate_limit float Tiempo de espera entre requests (segundos) Número decimal 1.5 discogs_token string Token de API de Discogs (opcional) Token válido \"\" musicbrainz_user_agent string User agent para MusicBrainz Email válido \"\" year integer Año específico a extraer 1950-2024 null",
    "tags": [],
    "title": "Configuración",
    "uri": "/base-datos/datos-extra/charts/21.-billboard/configuraci%C3%B3n/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  charts \u003e  22. spain charts",
    "content": "\"charts/spain_charts\": { \"generos\": true, \"type\": \"all\", \"force_update\": false, \"rate_limit\": 1.5, \"country\": \"spain\", \"start_year\": 1959, \"end_year\": 2024, \"year\": null } Argumentos Argumento Tipo Descripción Valores posibles Valor por defecto generos boolean Añadir información de géneros musicales true/false false type string Tipo de extracción a realizar “all”, “year” “all” force_update boolean Reemplazar datos existentes true/false false rate_limit float Pausa entre peticiones (segundos) \u003e 0 1.5 country string País objetivo (fijo para este script) “spain” “spain” start_year integer Año inicial para extracción completa 1959-2024 1959 end_year integer Año final para extracción completa 1959-2024 2024 year integer Año específico a procesar 1959-2024 null",
    "description": "\"charts/spain_charts\": { \"generos\": true, \"type\": \"all\", \"force_update\": false, \"rate_limit\": 1.5, \"country\": \"spain\", \"start_year\": 1959, \"end_year\": 2024, \"year\": null } Argumentos Argumento Tipo Descripción Valores posibles Valor por defecto generos boolean Añadir información de géneros musicales true/false false type string Tipo de extracción a realizar “all”, “year” “all” force_update boolean Reemplazar datos existentes true/false false rate_limit float Pausa entre peticiones (segundos) \u003e 0 1.5 country string País objetivo (fijo para este script) “spain” “spain” start_year integer Año inicial para extracción completa 1959-2024 1959 end_year integer Año final para extracción completa 1959-2024 2024 year integer Año específico a procesar 1959-2024 null",
    "tags": [],
    "title": "Configuración",
    "uri": "/base-datos/datos-extra/charts/22.-spain-charts/configuraci%C3%B3n/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  discografías \u003e  18. Musicbrainz discografía",
    "content": "\"musicbrainz/mb_discografia\": { \"force_update\": false, \"artist_limit\": null, \"interactive\": false, \"db_path\": \"/ruta/a/la/base/de/datos.sqlite\", \"skip_artists\": [ \"varios artistas\", \"various artists\", \"varios\", \"various\", \"compilation\", \"v.a.\", \"v/a\", \"soundtrack\", \"unknown artist\", \"artista desconocido\", \"compilación\" ] } Argumentos Argumento Tipo Default Descripción db_path string “music_database.db” Ruta a la base de datos SQLite force_update boolean false Forzar actualización de artistas ya procesados artist_limit integer null Límite de artistas a procesar interactive boolean true Solicitar confirmación antes de procesar",
    "description": "\"musicbrainz/mb_discografia\": { \"force_update\": false, \"artist_limit\": null, \"interactive\": false, \"db_path\": \"/ruta/a/la/base/de/datos.sqlite\", \"skip_artists\": [ \"varios artistas\", \"various artists\", \"varios\", \"various\", \"compilation\", \"v.a.\", \"v/a\", \"soundtrack\", \"unknown artist\", \"artista desconocido\", \"compilación\" ] } Argumentos Argumento Tipo Default Descripción db_path string “music_database.db” Ruta a la base de datos SQLite force_update boolean false Forzar actualización de artistas ya procesados artist_limit integer null Límite de artistas a procesar interactive boolean true Solicitar confirmación antes de procesar",
    "tags": [],
    "title": "Configuración",
    "uri": "/base-datos/datos-extra/discograf%C3%ADas/18.-musicbrainz-discograf%C3%ADa/configuraci%C3%B3n/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  instrumentos \u003e  24. Equipboard artistas",
    "content": "\"posts/equipboard_artists\": { \"action\": \"search\", \"limit\": null, \"force_update\": false, \"headless\": true, \"db_path\": \"/ruta/a/la/base/de/datos.sqlite\" } Argumentos Argumento Tipo Default Descripción action string “search” Acción a realizar: “search”, “search-selenium”, “stats”, “debug”, “debug-selenium” db_path string “db/sqlite/musica.sqlite” Ruta a la base de datos SQLite limit integer null Límite de artistas a procesar force_update boolean false Forzar actualización de artistas ya procesados headless boolean true Ejecutar navegador en modo headless (solo para Selenium) artist string null Nombre específico de artista para debug",
    "description": "\"posts/equipboard_artists\": { \"action\": \"search\", \"limit\": null, \"force_update\": false, \"headless\": true, \"db_path\": \"/ruta/a/la/base/de/datos.sqlite\" } Argumentos Argumento Tipo Default Descripción action string “search” Acción a realizar: “search”, “search-selenium”, “stats”, “debug”, “debug-selenium” db_path string “db/sqlite/musica.sqlite” Ruta a la base de datos SQLite limit integer null Límite de artistas a procesar force_update boolean false Forzar actualización de artistas ya procesados headless boolean true Ejecutar navegador en modo headless (solo para Selenium) artist string null Nombre específico de artista para debug",
    "tags": [],
    "title": "Configuración",
    "uri": "/base-datos/datos-extra/instrumentos/24.-equipboard-artistas/configuraci%C3%B3n/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  instrumentos \u003e  Equipboard detalles",
    "content": "\"posts/equipboard_details\": { \"action\": \"extract\", \"headless\": false, \"limit\": null, \"force_update\": false, \"db_path\": \"/ruta/a/la/base/de/datos.sqlite\", \"output\": \"equipboard_details.json\" } Argumentos Argumento Tipo Default Descripción action string “extract” Acción a realizar: “extract”, “stats”, “search”, “export” db_path string “db/sqlite/musica.sqlite” Ruta a la base de datos SQLite limit integer null Límite de instrumentos a procesar force_update boolean false Forzar actualización de instrumentos ya procesados headless boolean true Ejecutar navegador en modo headless visible boolean false Forzar modo visible para debug (sobrescribe headless) search_term string null Término de búsqueda para acción “search” output string “equipboard_details.json” Archivo de salida para acción “export”",
    "description": "\"posts/equipboard_details\": { \"action\": \"extract\", \"headless\": false, \"limit\": null, \"force_update\": false, \"db_path\": \"/ruta/a/la/base/de/datos.sqlite\", \"output\": \"equipboard_details.json\" } Argumentos Argumento Tipo Default Descripción action string “extract” Acción a realizar: “extract”, “stats”, “search”, “export” db_path string “db/sqlite/musica.sqlite” Ruta a la base de datos SQLite limit integer null Límite de instrumentos a procesar force_update boolean false Forzar actualización de instrumentos ya procesados headless boolean true Ejecutar navegador en modo headless visible boolean false Forzar modo visible para debug (sobrescribe headless) search_term string null Término de búsqueda para acción “search” output string “equipboard_details.json” Archivo de salida para acción “export”",
    "tags": [],
    "title": "Configuración",
    "uri": "/base-datos/datos-extra/instrumentos/equipboard-detalles/configuraci%C3%B3n/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  instrumentos \u003e  Equipboard instrumentos",
    "content": "\"posts/equipboard_instruments\": { \"action\": \"extract\", \"limit\": null, \"force_update\": false, \"headless\": true, \"db_path\": \"/ruta/a/la/base/de/datos.sqlite\" } Argumentos Argumento Tipo Default Descripción action string “extract” Acción a realizar: “extract”, “stats”, “debug” db_path string “db/sqlite/musica.sqlite” Ruta a la base de datos SQLite limit integer null Límite de artistas a procesar force_update boolean false Forzar actualización de artistas ya procesados headless boolean true Ejecutar navegador en modo headless",
    "description": "\"posts/equipboard_instruments\": { \"action\": \"extract\", \"limit\": null, \"force_update\": false, \"headless\": true, \"db_path\": \"/ruta/a/la/base/de/datos.sqlite\" } Argumentos Argumento Tipo Default Descripción action string “extract” Acción a realizar: “extract”, “stats”, “debug” db_path string “db/sqlite/musica.sqlite” Ruta a la base de datos SQLite limit integer null Límite de artistas a procesar force_update boolean false Forzar actualización de artistas ya procesados headless boolean true Ejecutar navegador en modo headless",
    "tags": [],
    "title": "Configuración",
    "uri": "/base-datos/datos-extra/instrumentos/equipboard-instrumentos/configuraci%C3%B3n/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  rym \u003e  29. RYM Artistas",
    "content": "\"rateyourmusic/rym_artists_links\": { \"searxng_url\": \"https://searx.be/\", \"delay\": 0.1, \"max_retries\": 3, \"limit\": 5000, \"skip_existing\": false, \"log_level\": \"INFO\", \"db_path\": \"/ruta/a/la/base/de/datos.sqlite\" } Argumentos Argumento Tipo Default Descripción db_path string “data/music.db” Ruta a la base de datos SQLite searxng_url string “https://searx.tiekoetter.com” URL de la instancia SearXNG delay float 5.0 Retraso entre búsquedas en segundos max_retries integer 3 Máximo número de reintentos para rate limiting limit integer null Límite de artistas a procesar skip_existing boolean true Saltar artistas que ya tienen URL log_level string “INFO” Nivel de logging: DEBUG, INFO, WARNING, ERROR",
    "description": "\"rateyourmusic/rym_artists_links\": { \"searxng_url\": \"https://searx.be/\", \"delay\": 0.1, \"max_retries\": 3, \"limit\": 5000, \"skip_existing\": false, \"log_level\": \"INFO\", \"db_path\": \"/ruta/a/la/base/de/datos.sqlite\" } Argumentos Argumento Tipo Default Descripción db_path string “data/music.db” Ruta a la base de datos SQLite searxng_url string “https://searx.tiekoetter.com” URL de la instancia SearXNG delay float 5.0 Retraso entre búsquedas en segundos max_retries integer 3 Máximo número de reintentos para rate limiting limit integer null Límite de artistas a procesar skip_existing boolean true Saltar artistas que ya tienen URL log_level string “INFO” Nivel de logging: DEBUG, INFO, WARNING, ERROR",
    "tags": [],
    "title": "Configuración",
    "uri": "/base-datos/datos-extra/rateyourmusic/29.-rym-artistas/configuraci%C3%B3n/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  rym \u003e  30. RYM Artistas Info",
    "content": "\"rateyourmusic/rym_artist_info\": { \"delay\": 2.0, \"limit\": null, \"headless\": true, \"force_update\": false, \"max_retries\": 3, \"log_level\": \"INFO\", \"min_delay\": 2, \"max_delay\": 5, \"db_path\": \"/ruta/a/la/base/de/datos.sqlite\" } Argumentos Argumento Tipo Default Descripción db_path string null Ruta a la base de datos SQLite (requerido) limit integer null Límite de artistas a procesar headless boolean false Ejecutar navegador en modo headless force_update boolean false Forzar actualización de artistas ya procesados min_delay float 2.0 Delay mínimo entre requests en segundos max_delay float 5.0 Delay máximo entre requests en segundos max_retries integer 3 Máximo número de reintentos log_level string “INFO” Nivel de logging",
    "description": "\"rateyourmusic/rym_artist_info\": { \"delay\": 2.0, \"limit\": null, \"headless\": true, \"force_update\": false, \"max_retries\": 3, \"log_level\": \"INFO\", \"min_delay\": 2, \"max_delay\": 5, \"db_path\": \"/ruta/a/la/base/de/datos.sqlite\" } Argumentos Argumento Tipo Default Descripción db_path string null Ruta a la base de datos SQLite (requerido) limit integer null Límite de artistas a procesar headless boolean false Ejecutar navegador en modo headless force_update boolean false Forzar actualización de artistas ya procesados min_delay float 2.0 Delay mínimo entre requests en segundos max_delay float 5.0 Delay máximo entre requests en segundos max_retries integer 3 Máximo número de reintentos log_level string “INFO” Nivel de logging",
    "tags": [],
    "title": "Configuración",
    "uri": "/base-datos/datos-extra/rateyourmusic/30.-rym-artistas-info/configuraci%C3%B3n/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  rym \u003e  31. RYM Álbumes",
    "content": "\"rateyourmusic/rym_albums_links\": { \"searxng_url\": \"https://searx.be/\", \"delay\": 0.2, \"max_retries\": 3, \"limit\": \"None\", \"skip_existing\": true, \"log_level\": \"INFO\", \"db_path\": \"/ruta/a/la/base/de/datos.sqlite\" } Argumentos Argumento Tipo Default Descripción db_path string null Ruta a la base de datos SQLite (requerido) searxng_url string null URL de la instancia SearXNG (requerido) delay float 0.2 Retraso entre búsquedas en segundos max_retries integer 3 Máximo número de reintentos limit string/integer “None” Límite de artistas o álbumes a procesar skip_existing boolean true Saltar artistas que ya tienen álbumes RYM log_level string “INFO” Nivel de logging",
    "description": "\"rateyourmusic/rym_albums_links\": { \"searxng_url\": \"https://searx.be/\", \"delay\": 0.2, \"max_retries\": 3, \"limit\": \"None\", \"skip_existing\": true, \"log_level\": \"INFO\", \"db_path\": \"/ruta/a/la/base/de/datos.sqlite\" } Argumentos Argumento Tipo Default Descripción db_path string null Ruta a la base de datos SQLite (requerido) searxng_url string null URL de la instancia SearXNG (requerido) delay float 0.2 Retraso entre búsquedas en segundos max_retries integer 3 Máximo número de reintentos limit string/integer “None” Límite de artistas o álbumes a procesar skip_existing boolean true Saltar artistas que ya tienen álbumes RYM log_level string “INFO” Nivel de logging",
    "tags": [],
    "title": "Configuración",
    "uri": "/base-datos/datos-extra/rateyourmusic/31.-rym-%C3%A1lbumes/configuraci%C3%B3n/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  reviews \u003e  Menciones",
    "content": "\"posts/menciones\": { \"force_update\": false, \"db_path\": \"/ruta/a/la/base/de/datos.sqlite\" } Argumentos Argumento Tipo Default Descripción db_path string “data/music_library.db” Ruta a la base de datos SQLite force_update boolean false Eliminar menciones existentes y recalcular todas",
    "description": "\"posts/menciones\": { \"force_update\": false, \"db_path\": \"/ruta/a/la/base/de/datos.sqlite\" } Argumentos Argumento Tipo Default Descripción db_path string “data/music_library.db” Ruta a la base de datos SQLite force_update boolean false Eliminar menciones existentes y recalcular todas",
    "tags": [],
    "title": "Configuración",
    "uri": "/base-datos/datos-extra/reviews/menciones/configuraci%C3%B3n/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Punto de partida \u003e  01. Archivos locales",
    "content": "{ \"path/db_musica_path\": { \"root_path\": \"/mnt/NFS/moode/moode/\", \"force_update\": false, \"update_replay_gain\": false, \"update_schema\": false, \"update_bitrates\": false, \"quick_scan\": false, \"optimize\": false } } Argumentos Argumento Tipo Default Descripción root_path string - Ruta raíz donde se encuentran los archivos de música force_update boolean false Fuerza la actualización de todos los archivos, incluso si no han cambiado update_replay_gain boolean false Actualiza solo los valores de ReplayGain de todos los archivos update_schema boolean false Actualiza el esquema de la base de datos con nuevas tablas e índices update_bitrates boolean false Actualiza los rangos de bitrate para todos los álbumes quick_scan boolean false Realiza un escaneo rápido identificando álbumes ausentes optimize boolean false Aplica optimizaciones de rendimiento a la base de datos",
    "description": "{ \"path/db_musica_path\": { \"root_path\": \"/mnt/NFS/moode/moode/\", \"force_update\": false, \"update_replay_gain\": false, \"update_schema\": false, \"update_bitrates\": false, \"quick_scan\": false, \"optimize\": false } } Argumentos Argumento Tipo Default Descripción root_path string - Ruta raíz donde se encuentran los archivos de música force_update boolean false Fuerza la actualización de todos los archivos, incluso si no han cambiado update_replay_gain boolean false Actualiza solo los valores de ReplayGain de todos los archivos update_schema boolean false Actualiza el esquema de la base de datos con nuevas tablas e índices update_bitrates boolean false Actualiza los rangos de bitrate para todos los álbumes quick_scan boolean false Realiza un escaneo rápido identificando álbumes ausentes optimize boolean false Aplica optimizaciones de rendimiento a la base de datos",
    "tags": [],
    "title": "Configuración",
    "uri": "/base-datos/punto-de-partida/01.-archivos-locales/configuraci%C3%B3n/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Punto de partida \u003e  02. Spotify",
    "content": "{ \"db_musica_spotify\": { \"skip_existing_artists\": true, \"force_update\": false, \"spotify_client_id\": \"\", \"spotify_client_secret\": \"\", \"spotify_redirect_uri\": \"http://localhost:8998\", \"spotify_cache_path\": \".content/cache/.spotify_token.json\", \"user_id\": \"\" } } Argumentos Argumento Tipo Descripción Valor por defecto skip_existing_artists boolean Omite artistas que ya existen con origen ’local' true force_update boolean Fuerza actualización de datos existentes false spotify_client_id string ID de cliente de Spotify API - spotify_client_secret string Secreto de cliente de Spotify API - spotify_redirect_uri string URI de redirección para autenticación \"http://localhost:8998\" spotify_cache_path string Ruta para almacenar token de Spotify \".content/cache/.spotify_token.json\" user_id string ID de usuario de Spotify (opcional) -",
    "description": "{ \"db_musica_spotify\": { \"skip_existing_artists\": true, \"force_update\": false, \"spotify_client_id\": \"\", \"spotify_client_secret\": \"\", \"spotify_redirect_uri\": \"http://localhost:8998\", \"spotify_cache_path\": \".content/cache/.spotify_token.json\", \"user_id\": \"\" } } Argumentos Argumento Tipo Descripción Valor por defecto skip_existing_artists boolean Omite artistas que ya existen con origen ’local' true force_update boolean Fuerza actualización de datos existentes false spotify_client_id string ID de cliente de Spotify API - spotify_client_secret string Secreto de cliente de Spotify API - spotify_redirect_uri string URI de redirección para autenticación \"http://localhost:8998\" spotify_cache_path string Ruta para almacenar token de Spotify \".content/cache/.spotify_token.json\" user_id string ID de usuario de Spotify (opcional) -",
    "tags": [],
    "title": "Configuración",
    "uri": "/base-datos/punto-de-partida/02.-spotify/configuraci%C3%B3n/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  Enlaces \u003e  09. Redes",
    "content": "Tabla artists_networks Campo Tipo Descripción id INTEGER Clave primaria artist_id INTEGER ID del artista (clave foránea a la tabla artists) allmusic TEXT URL de AllMusic bandcamp TEXT URL de Bandcamp boomkat TEXT URL de Boomkat facebook TEXT URL de Facebook twitter TEXT URL de Twitter mastodon TEXT URL de Mastodon bluesky TEXT URL de Bluesky instagram TEXT URL de Instagram spotify TEXT URL de Spotify lastfm TEXT URL de Last.fm wikipedia TEXT URL de Wikipedia juno TEXT URL de Juno soundcloud TEXT URL de SoundCloud youtube TEXT URL de YouTube imdb TEXT URL de IMDb progarchives TEXT URL de ProgArchives setlist_fm TEXT URL de Setlist.fm who_sampled TEXT URL de WhoSampled vimeo TEXT URL de Vimeo genius TEXT URL de Genius myspace TEXT URL de MySpace tumblr TEXT URL de Tumblr resident_advisor TEXT URL de Resident Advisor rateyourmusic TEXT URL de RateYourMusic enlaces TEXT JSON con enlaces adicionales no categorizados last_updated TIMESTAMP Fecha y hora de la última actualización",
    "description": "Tabla artists_networks Campo Tipo Descripción id INTEGER Clave primaria artist_id INTEGER ID del artista (clave foránea a la tabla artists) allmusic TEXT URL de AllMusic bandcamp TEXT URL de Bandcamp boomkat TEXT URL de Boomkat facebook TEXT URL de Facebook twitter TEXT URL de Twitter mastodon TEXT URL de Mastodon bluesky TEXT URL de Bluesky instagram TEXT URL de Instagram spotify TEXT URL de Spotify lastfm TEXT URL de Last.fm wikipedia TEXT URL de Wikipedia juno TEXT URL de Juno soundcloud TEXT URL de SoundCloud youtube TEXT URL de YouTube imdb TEXT URL de IMDb progarchives TEXT URL de ProgArchives setlist_fm TEXT URL de Setlist.fm who_sampled TEXT URL de WhoSampled vimeo TEXT URL de Vimeo genius TEXT URL de Genius myspace TEXT URL de MySpace tumblr TEXT URL de Tumblr resident_advisor TEXT URL de Resident Advisor rateyourmusic TEXT URL de RateYourMusic enlaces TEXT JSON con enlaces adicionales no categorizados last_updated TIMESTAMP Fecha y hora de la última actualización",
    "tags": [],
    "title": "Datos",
    "uri": "/base-datos/datos-b%C3%A1sicos/enlaces/09.-redes/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  Escuchas \u003e  28. Listens listenbrainz",
    "content": "Tabla listenbrainz_backfill Campo Tipo Descripción id INTEGER Campo id (clave primaria) Tabla listenbrainz_config Campo Tipo Descripción id INTEGER Campo id (clave primaria) Tabla normalized_songs Campo Tipo Descripción song_id INTEGER Campo song_id (clave primaria) normalized_title TEXT Campo normalized_title normalized_artist TEXT Campo normalized_artist normalized_album TEXT Campo normalized_album Tabla song_links Campo Tipo Descripción links_updated TEXT Campo links_updated (detectado en operación DML)",
    "description": "Tabla listenbrainz_backfill Campo Tipo Descripción id INTEGER Campo id (clave primaria) Tabla listenbrainz_config Campo Tipo Descripción id INTEGER Campo id (clave primaria) Tabla normalized_songs Campo Tipo Descripción song_id INTEGER Campo song_id (clave primaria) normalized_title TEXT Campo normalized_title normalized_artist TEXT Campo normalized_artist normalized_album TEXT Campo normalized_album Tabla song_links Campo Tipo Descripción links_updated TEXT Campo links_updated (detectado en operación DML)",
    "tags": [],
    "title": "Datos",
    "uri": "/base-datos/datos-b%C3%A1sicos/escuchas/28.-listens-listenbrainz/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  Letras \u003e  10. Letras",
    "content": "Tabla lyrics Campo Tipo Descripción id INTEGER Identificador único de la letra track_id INTEGER ID de la canción asociada (clave foránea a songs.id) lyrics TEXT El texto completo de la letra source TEXT La fuente de la letra (ej. ‘Genius’, ’lyrics.ovh’, ‘Happi’, ‘Musixmatch’) last_updated TIMESTAMP Fecha y hora de la última actualización",
    "description": "Tabla lyrics Campo Tipo Descripción id INTEGER Identificador único de la letra track_id INTEGER ID de la canción asociada (clave foránea a songs.id) lyrics TEXT El texto completo de la letra source TEXT La fuente de la letra (ej. ‘Genius’, ’lyrics.ovh’, ‘Happi’, ‘Musixmatch’) last_updated TIMESTAMP Fecha y hora de la última actualización",
    "tags": [],
    "title": "Datos",
    "uri": "/base-datos/datos-b%C3%A1sicos/letras/10.-letras/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  wikipedia \u003e  08. Wikipedia",
    "content": "Tabla artists Campo Tipo Descripción wikipedia_url TEXT URL de la página de Wikipedia del artista wikipedia_content TEXT Contenido extraído de la página de Wikipedia wikipedia_updated TIMESTAMP Timestamp de la última actualización de la información de Wikipedia links_updated TIMESTAMP Timestamp de la última actualización de los enlaces Tabla albums Campo Tipo Descripción wikipedia_url TEXT URL de la página de Wikipedia del artista wikipedia_content TEXT Contenido extraído de la página de Wikipedia wikipedia_updated TIMESTAMP Timestamp de la última actualización de la información de Wikipedia links_updated TIMESTAMP Timestamp de la última actualización de los enlaces Tabla labels Campo Tipo Descripción wikipedia_url TEXT URL de la página de Wikipedia del sello discográfico wikipedia_content TEXT Contenido extraído de la página de Wikipedia wikipedia_updated TIMESTAMP Timestamp de la última actualización de la información de Wikipedia links_updated TIMESTAMP Timestamp de la última actualización de los enlaces",
    "description": "Tabla artists Campo Tipo Descripción wikipedia_url TEXT URL de la página de Wikipedia del artista wikipedia_content TEXT Contenido extraído de la página de Wikipedia wikipedia_updated TIMESTAMP Timestamp de la última actualización de la información de Wikipedia links_updated TIMESTAMP Timestamp de la última actualización de los enlaces Tabla albums Campo Tipo Descripción wikipedia_url TEXT URL de la página de Wikipedia del artista wikipedia_content TEXT Contenido extraído de la página de Wikipedia wikipedia_updated TIMESTAMP Timestamp de la última actualización de la información de Wikipedia links_updated TIMESTAMP Timestamp de la última actualización de los enlaces Tabla labels Campo Tipo Descripción wikipedia_url TEXT URL de la página de Wikipedia del sello discográfico wikipedia_content TEXT Contenido extraído de la página de Wikipedia wikipedia_updated TIMESTAMP Timestamp de la última actualización de la información de Wikipedia links_updated TIMESTAMP Timestamp de la última actualización de los enlaces",
    "tags": [],
    "title": "Datos",
    "uri": "/base-datos/datos-b%C3%A1sicos/wikipedia/08.-wikipedia/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Datos básicos",
    "uri": "/base-datos/datos-b%C3%A1sicos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra",
    "content": "",
    "description": "",
    "tags": [],
    "title": "discografías",
    "uri": "/base-datos/datos-extra/discograf%C3%ADas/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Letras",
    "uri": "/base-datos/datos-b%C3%A1sicos/letras/index.html"
  },
  {
    "breadcrumb": "mfuzz",
    "content": "MÓDULOS: not done tags include #m_fuzzy tags include #config_editor hide tags sort by due sort by priority sort by scheduled",
    "description": "MÓDULOS: not done tags include #m_fuzzy tags include #config_editor hide tags sort by due sort by priority sort by scheduled",
    "tags": [],
    "title": "Módulos",
    "uri": "/modulos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  charts \u003e  19. uk csv",
    "content": "{ \"charts/uk_csv\": { \"generos\": true, \"type\": \"all\", \"force_update\": false, \"rate_limit\": 1.5, \"specialized\": true, \"indie_years\": [1999, 2000, 2001, 2002, 2007, 2020, 2021, 2022, 2023], \"nme_decades\": [\"60s\", \"70s\", \"80s\"], \"include_indie\": true, \"include_nme\": true, \"discogs_token\": \"\", \"musicbrainz_user_agent\": \"UKChartsScraper/1.0 (tu-email@ejemplo.com)\" } }",
    "description": "{ \"charts/uk_csv\": { \"generos\": true, \"type\": \"all\", \"force_update\": false, \"rate_limit\": 1.5, \"specialized\": true, \"indie_years\": [1999, 2000, 2001, 2002, 2007, 2020, 2021, 2022, 2023], \"nme_decades\": [\"60s\", \"70s\", \"80s\"], \"include_indie\": true, \"include_nme\": true, \"discogs_token\": \"\", \"musicbrainz_user_agent\": \"UKChartsScraper/1.0 (tu-email@ejemplo.com)\" } }",
    "tags": [],
    "title": "Configuración",
    "uri": "/base-datos/datos-extra/charts/19.-uk-csv/configuraci%C3%B3n/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  libros \u003e  14. Libros",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Configuración",
    "uri": "/base-datos/datos-extra/libros/14.-libros/configuraci%C3%B3n/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  reviews \u003e  13. Review Scrapper",
    "content": "{ \"posts/review_scrapper\": { \"force_update\": false, \"content_service\": \"readability\", \"tamano_lote\": 100, \"pausa\": 3, \"inicio_id\": 314, \"archivo_errores\": \".content/logs/review_scrapper_errors.txt\", \"include_metacritic\": true, \"include_aoty\": true, \"google_api_key\": \"\", \"google_cx\": \"\" } }",
    "description": "{ \"posts/review_scrapper\": { \"force_update\": false, \"content_service\": \"readability\", \"tamano_lote\": 100, \"pausa\": 3, \"inicio_id\": 314, \"archivo_errores\": \".content/logs/review_scrapper_errors.txt\", \"include_metacritic\": true, \"include_aoty\": true, \"google_api_key\": \"\", \"google_cx\": \"\" } }",
    "tags": [],
    "title": "Configuración",
    "uri": "/base-datos/datos-extra/reviews/13.-review-scrapper/configuraci%C3%B3n/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  Enlaces \u003e  04. Youtube links de canciones",
    "content": "Clave Descripción Obligatoria YOUTUBE_API_KEY Clave de API de YouTube (console.developers.google.com) Sí LASTFM_API_KEY Clave de API de Last.fm (last.fm/api) Sí USER_AGENT User-Agent personalizado para solicitudes HTTP Sí",
    "description": "Clave Descripción Obligatoria YOUTUBE_API_KEY Clave de API de YouTube (console.developers.google.com) Sí LASTFM_API_KEY Clave de API de Last.fm (last.fm/api) Sí USER_AGENT User-Agent personalizado para solicitudes HTTP Sí",
    "tags": [],
    "title": "Credenciales",
    "uri": "/base-datos/datos-b%C3%A1sicos/enlaces/04.-youtube-links-de-canciones/credenciales/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  sellos \u003e  11. Musicbrainz sellos",
    "content": "Variable Descripción Opcional MUSICBRAINZ_APP Nombre de la aplicación para usar la API de MusicBrainz No MUSICBRAINZ_VERSION Versión de la aplicación No MUSICBRAINZ_EMAIL Correo electrónico para identificación en MusicBrainz No DISCOGS_TOKEN Token de autenticación para la API de Discogs Sí",
    "description": "Variable Descripción Opcional MUSICBRAINZ_APP Nombre de la aplicación para usar la API de MusicBrainz No MUSICBRAINZ_VERSION Versión de la aplicación No MUSICBRAINZ_EMAIL Correo electrónico para identificación en MusicBrainz No DISCOGS_TOKEN Token de autenticación para la API de Discogs Sí",
    "tags": [],
    "title": "Credenciales",
    "uri": "/base-datos/datos-extra/sellos/11.-musicbrainz-sellos/credenciales/index.html"
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
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  Enlaces \u003e  03. Enlaces artistas",
    "content": "Tabla artists Campo Tipo Descripción spotify_url UNKNOWN Campo detectado en operación DML youtube_url UNKNOWN Campo detectado en operación DML musicbrainz_url UNKNOWN Campo detectado en operación DML discogs_url UNKNOWN Campo detectado en operación DML rateyourmusic_url UNKNOWN Campo detectado en operación DML bandcamp_url UNKNOWN Campo detectado en operación DML origin UNKNOWN Campo detectado en operación DML formed_year UNKNOWN Campo detectado en operación DML total_albums UNKNOWN Campo detectado en operación DML bio UNKNOWN Campo detectado en operación DML Tabla albums Campo Tipo Descripción mbid UNKNOWN Campo detectado en operación DML Tabla songs Campo Tipo Descripción mbid UNKNOWN Campo detectado en operación DML Tabla current Campo Tipo Descripción spotify_url': None UNKNOWN Campo detectado en operación DML youtube_url': None UNKNOWN Campo detectado en operación DML musicbrainz_url': None UNKNOWN Campo detectado en operación DML discogs_url': None UNKNOWN Campo detectado en operación DML rateyourmusic_url': None UNKNOWN Campo detectado en operación DML bandcamp_url': None UNKNOWN Campo detectado en operación DML origin': None UNKNOWN Campo detectado en operación DML formed_year': None UNKNOWN Campo detectado en operación DML total_albums': None UNKNOWN Campo detectado en operación DML bio': None UNKNOWN Campo detectado en operación DML Configuración { \"spotify\": { \"client_id\": \"tu_spotify_client_id\", \"client_secret\": \"tu_spotify_client_secret\" }, \"lastfm\": { \"api_key\": \"tu_lastfm_api_key\", \"api_secret\": \"tu_lastfm_secret\" }, \"logging\": { \"level\": \"INFO\", \"file\": \"app.log\", \"format\": \"%(asctime)s - %(levelname)s - %(message)s\" }, \"variables_entorno\": { \"descripcion\": \"Variables de entorno utilizadas\", \"variables\": [ \"DISCOGS_TOKEN\", \"LASTFM_USER\", \"GOOGLE_API_KEY\", \"SPOTIFY_CLIENT_SECRET\", \"SPOTIFY_CLIENT_ID\", \"DB_PATH\", \"LASTFM_API_KEY\" ] } } Tabla sqlite_master Campo Tipo Descripción name UNKNOWN Campo detectado en SELECT",
    "description": "Tabla artists Campo Tipo Descripción spotify_url UNKNOWN Campo detectado en operación DML youtube_url UNKNOWN Campo detectado en operación DML musicbrainz_url UNKNOWN Campo detectado en operación DML discogs_url UNKNOWN Campo detectado en operación DML rateyourmusic_url UNKNOWN Campo detectado en operación DML bandcamp_url UNKNOWN Campo detectado en operación DML origin UNKNOWN Campo detectado en operación DML formed_year UNKNOWN Campo detectado en operación DML total_albums UNKNOWN Campo detectado en operación DML bio UNKNOWN Campo detectado en operación DML Tabla albums Campo Tipo Descripción mbid UNKNOWN Campo detectado en operación DML Tabla songs Campo Tipo Descripción mbid UNKNOWN Campo detectado en operación DML Tabla current Campo Tipo Descripción spotify_url': None UNKNOWN Campo detectado en operación DML youtube_url': None UNKNOWN Campo detectado en operación DML musicbrainz_url': None UNKNOWN Campo detectado en operación DML discogs_url': None UNKNOWN Campo detectado en operación DML rateyourmusic_url': None UNKNOWN Campo detectado en operación DML bandcamp_url': None UNKNOWN Campo detectado en operación DML origin': None UNKNOWN Campo detectado en operación DML formed_year': None UNKNOWN Campo detectado en operación DML total_albums': None UNKNOWN Campo detectado en operación DML bio': None UNKNOWN Campo detectado en operación DML Configuración { \"spotify\": { \"client_id\": \"tu_spotify_client_id\", \"client_secret\": \"tu_spotify_client_secret\" }, \"lastfm\": { \"api_key\": \"tu_lastfm_api_key\", \"api_secret\": \"tu_lastfm_secret\" }, \"logging\": { \"level\": \"INFO\", \"file\": \"app.log\", \"format\": \"%(asctime)s - %(levelname)s - %(message)s\" }, \"variables_entorno\": { \"descripcion\": \"Variables de entorno utilizadas\", \"variables\": [ \"DISCOGS_TOKEN\", \"LASTFM_USER\", \"GOOGLE_API_KEY\", \"SPOTIFY_CLIENT_SECRET\", \"SPOTIFY_CLIENT_ID\", \"DB_PATH\", \"LASTFM_API_KEY\" ] } } Tabla sqlite_master Campo Tipo Descripción name UNKNOWN Campo detectado en SELECT",
    "tags": [],
    "title": "Datos",
    "uri": "/base-datos/datos-b%C3%A1sicos/enlaces/03.-enlaces-artistas/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  Enlaces \u003e  05. Enlaces canciones",
    "content": "Tabla: song_links\nColumna Tipo Descripción id INTEGER ID único del registro (clave primaria) song_id INTEGER ID de la canción (referencia a tabla songs) spotify_url TEXT URL de la canción en Spotify spotify_id TEXT ID único de la canción en Spotify preview_url TEXT URL de previsualización de 30 segundos de Spotify youtube_url TEXT URL de la canción en YouTube bandcamp_url TEXT URL de la canción en Bandcamp soundcloud_url TEXT URL de la canción en SoundCloud boomkat_url TEXT URL de la canción en Boomkat lastfm_url TEXT URL de la canción en Last.fm musicbrainz_url TEXT URL de la canción en MusicBrainz musicbrainz_recording_id TEXT ID de grabación en MusicBrainz links_updated TIMESTAMP Fecha y hora de última actualización",
    "description": "Tabla: song_links\nColumna Tipo Descripción id INTEGER ID único del registro (clave primaria) song_id INTEGER ID de la canción (referencia a tabla songs) spotify_url TEXT URL de la canción en Spotify spotify_id TEXT ID único de la canción en Spotify preview_url TEXT URL de previsualización de 30 segundos de Spotify youtube_url TEXT URL de la canción en YouTube bandcamp_url TEXT URL de la canción en Bandcamp soundcloud_url TEXT URL de la canción en SoundCloud boomkat_url TEXT URL de la canción en Boomkat lastfm_url TEXT URL de la canción en Last.fm musicbrainz_url TEXT URL de la canción en MusicBrainz musicbrainz_recording_id TEXT ID de grabación en MusicBrainz links_updated TIMESTAMP Fecha y hora de última actualización",
    "tags": [],
    "title": "Datos",
    "uri": "/base-datos/datos-b%C3%A1sicos/enlaces/05.-enlaces-canciones/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  Escuchas \u003e  27. Scrobbles lastfm",
    "content": "Tabla: scrobbles_{username}\nColumna Tipo Descripción id INTEGER ID único del registro (clave primaria) artist_name TEXT Nombre del artista (requerido) artist_mbid TEXT MusicBrainz ID del artista name TEXT Nombre de la canción (requerido) album_name TEXT Nombre del álbum album_mbid TEXT MusicBrainz ID del álbum timestamp INTEGER Timestamp Unix del scrobble más reciente (requerido) fecha_scrobble TIMESTAMP Fecha del scrobble más reciente (requerido) lastfm_url TEXT URL de la canción en Last.fm fecha_adicion TIMESTAMP Fecha de inserción en la base de datos reproducciones INTEGER Número total de reproducciones (por defecto: 1) fecha_reproducciones TEXT JSON con array de todas las fechas de reproducción Tabla: lastfm_config\nColumna Tipo Descripción id INTEGER ID único (siempre 1, clave primaria con CHECK) lastfm_username TEXT Nombre de usuario de Last.fm last_timestamp INTEGER Timestamp del último scrobble procesado last_updated TIMESTAMP Fecha de última actualización",
    "description": "Tabla: scrobbles_{username}\nColumna Tipo Descripción id INTEGER ID único del registro (clave primaria) artist_name TEXT Nombre del artista (requerido) artist_mbid TEXT MusicBrainz ID del artista name TEXT Nombre de la canción (requerido) album_name TEXT Nombre del álbum album_mbid TEXT MusicBrainz ID del álbum timestamp INTEGER Timestamp Unix del scrobble más reciente (requerido) fecha_scrobble TIMESTAMP Fecha del scrobble más reciente (requerido) lastfm_url TEXT URL de la canción en Last.fm fecha_adicion TIMESTAMP Fecha de inserción en la base de datos reproducciones INTEGER Número total de reproducciones (por defecto: 1) fecha_reproducciones TEXT JSON con array de todas las fechas de reproducción Tabla: lastfm_config",
    "tags": [],
    "title": "Datos",
    "uri": "/base-datos/datos-b%C3%A1sicos/escuchas/27.-scrobbles-lastfm/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  charts \u003e  20. uk indie nme",
    "content": "Tabla: uk_indie_charts (Creada y gestionada)\nCampo Tipo Descripción id INTEGER Clave primaria autoincremental año INTEGER Año del chart fecha_chart TEXT Fecha específica del chart artista TEXT Nombre del artista single TEXT Título del single sello_discográfico TEXT Sello discográfico semanas_numero_uno INTEGER Número de semanas en el número 1 posicion_main_chart INTEGER Posición en el chart principal oficial notas TEXT Notas adicionales género TEXT Género musical artist_id INTEGER FK hacia artists.id song_id INTEGER FK hacia songs.id created_at TIMESTAMP Fecha de creación del registro Tabla: nme_charts (Creada y gestionada)\nCampo Tipo Descripción id INTEGER Clave primaria autoincremental década TEXT Década del chart (1960s, 1970s, 1980s) año INTEGER Año específico si disponible fecha_chart TEXT Fecha del chart artista TEXT Nombre del artista single TEXT Título del single semanas_numero_uno INTEGER Número de semanas en el número 1 notas TEXT Notas sobre el chart diferencias_chart_oficial TEXT Diferencias con el chart oficial género TEXT Género musical artist_id INTEGER FK hacia artists.id song_id INTEGER FK hacia songs.id created_at TIMESTAMP Fecha de creación del registro",
    "description": "Tabla: uk_indie_charts (Creada y gestionada)\nCampo Tipo Descripción id INTEGER Clave primaria autoincremental año INTEGER Año del chart fecha_chart TEXT Fecha específica del chart artista TEXT Nombre del artista single TEXT Título del single sello_discográfico TEXT Sello discográfico semanas_numero_uno INTEGER Número de semanas en el número 1 posicion_main_chart INTEGER Posición en el chart principal oficial notas TEXT Notas adicionales género TEXT Género musical artist_id INTEGER FK hacia artists.id song_id INTEGER FK hacia songs.id created_at TIMESTAMP Fecha de creación del registro Tabla: nme_charts (Creada y gestionada)",
    "tags": [],
    "title": "Datos",
    "uri": "/base-datos/datos-extra/charts/20.-uk-indie-nme/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  charts \u003e  20. uk specialized",
    "content": "Tabla: uk_vinyl_charts\nCampo Tipo Descripción id INTEGER Clave primaria autoincremental chart_type TEXT Tipo de chart (‘albums’, ‘singles’) década TEXT Década del chart (2010s, 2020s) artista TEXT Nombre del artista título TEXT Título del álbum o single fecha_numero_uno TEXT Fecha cuando llegó al número 1 semanas_numero_uno INTEGER Semanas en la posición número 1 género TEXT Género musical (si generos=true) artist_id INTEGER FK a tabla artists album_id INTEGER FK a tabla albums song_id INTEGER FK a tabla songs created_at TIMESTAMP Fecha de creación del registro Tabla: uk_streaming_charts\nCampo Tipo Descripción id INTEGER Clave primaria autoincremental chart_type TEXT Tipo de chart (‘albums’) año INTEGER Año del registro artista TEXT Nombre del artista álbum TEXT Título del álbum posición INTEGER Posición en el chart semanas_en_chart INTEGER Número de semanas en el chart género TEXT Género musical (si generos=true) artist_id INTEGER FK a tabla artists album_id INTEGER FK a tabla albums created_at TIMESTAMP Fecha de creación del registro Tabla: uk_downloads_charts\nCampo Tipo Descripción id INTEGER Clave primaria autoincremental chart_type TEXT Tipo de chart (‘singles’) año INTEGER Año del registro artista TEXT Nombre del artista single TEXT Título del single posición INTEGER Posición en el chart semanas_en_chart INTEGER Número de semanas en el chart ventas_totales TEXT Información de ventas totales género TEXT Género musical (si generos=true) artist_id INTEGER FK a tabla artists song_id INTEGER FK a tabla songs created_at TIMESTAMP Fecha de creación del registro",
    "description": "Tabla: uk_vinyl_charts\nCampo Tipo Descripción id INTEGER Clave primaria autoincremental chart_type TEXT Tipo de chart (‘albums’, ‘singles’) década TEXT Década del chart (2010s, 2020s) artista TEXT Nombre del artista título TEXT Título del álbum o single fecha_numero_uno TEXT Fecha cuando llegó al número 1 semanas_numero_uno INTEGER Semanas en la posición número 1 género TEXT Género musical (si generos=true) artist_id INTEGER FK a tabla artists album_id INTEGER FK a tabla albums song_id INTEGER FK a tabla songs created_at TIMESTAMP Fecha de creación del registro Tabla: uk_streaming_charts",
    "tags": [],
    "title": "Datos",
    "uri": "/base-datos/datos-extra/charts/20.-uk-specialized/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  charts \u003e  21. billboard",
    "content": "Tabla: billboard_yearend_singles\nCampo Tipo Descripción id INTEGER Clave primaria autoincremental año INTEGER Año del chart posición INTEGER Posición en el ranking título TEXT Título de la canción artista TEXT Nombre del artista género TEXT Género musical (si está habilitado) artist_id INTEGER Referencia a tabla artists song_id INTEGER Referencia a tabla songs created_at TIMESTAMP Fecha de creación del registro Tabla: billboard_hot100_topten\nCampo Tipo Descripción id INTEGER Clave primaria autoincremental año INTEGER Año del chart título TEXT Título de la canción artista TEXT Nombre del artista posición_pico INTEGER Posición pico alcanzada fecha_entrada TEXT Fecha de entrada al chart semanas_chart INTEGER Semanas en el chart género TEXT Género musical (si está habilitado) artist_id INTEGER Referencia a tabla artists song_id INTEGER Referencia a tabla songs created_at TIMESTAMP Fecha de creación del registro Tabla: billboard_country_albums\nCampo Tipo Descripción id INTEGER Clave primaria autoincremental año INTEGER Año del chart fecha TEXT Fecha específica del chart álbum TEXT Nombre del álbum artista TEXT Nombre del artista semanas_en_1 INTEGER Semanas en posición #1 posición INTEGER Posición en el ranking género TEXT Género musical (si está habilitado) artist_id INTEGER Referencia a tabla artists album_id INTEGER Referencia a tabla albums created_at TIMESTAMP Fecha de creación del registro",
    "description": "Tabla: billboard_yearend_singles\nCampo Tipo Descripción id INTEGER Clave primaria autoincremental año INTEGER Año del chart posición INTEGER Posición en el ranking título TEXT Título de la canción artista TEXT Nombre del artista género TEXT Género musical (si está habilitado) artist_id INTEGER Referencia a tabla artists song_id INTEGER Referencia a tabla songs created_at TIMESTAMP Fecha de creación del registro Tabla: billboard_hot100_topten\nCampo Tipo Descripción id INTEGER Clave primaria autoincremental año INTEGER Año del chart título TEXT Título de la canción artista TEXT Nombre del artista posición_pico INTEGER Posición pico alcanzada fecha_entrada TEXT Fecha de entrada al chart semanas_chart INTEGER Semanas en el chart género TEXT Género musical (si está habilitado) artist_id INTEGER Referencia a tabla artists song_id INTEGER Referencia a tabla songs created_at TIMESTAMP Fecha de creación del registro Tabla: billboard_country_albums",
    "tags": [],
    "title": "Datos",
    "uri": "/base-datos/datos-extra/charts/21.-billboard/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  charts \u003e  22. spain charts",
    "content": "Tabla: spain_charts_singles (Creada por este script)\nCampo Tipo Descripción Ejemplo id INTEGER Identificador único autoincremental 1, 2, 3… año INTEGER Año del chart 2024, 1959 semana TEXT Número de semana (opcional) “Week 1”, “N/A” fecha TEXT Fecha de emisión “January 1”, “1959-01-15” título TEXT Título de la canción “Song Title” artista TEXT Nombre del artista “Artist Name” tipo_chart TEXT Tipo de chart “Streaming/Sales”, “Radio”, “Singles” posición INTEGER Posición en el chart 1 género TEXT Género musical (opcional) “Pop”, “Rock” artist_id INTEGER FK a tabla artists 123 song_id INTEGER FK a tabla songs 456 created_at TIMESTAMP Fecha de creación del registro CURRENT_TIMESTAMP Tabla: spain_charts_albums (Creada por este script)\nCampo Tipo Descripción Ejemplo id INTEGER Identificador único autoincremental 1, 2, 3… año INTEGER Año del chart 2024, 1995 semana TEXT Número de semana (opcional) “Week 1” fecha TEXT Fecha de emisión “January 1” título TEXT Título del álbum “Album Title” artista TEXT Nombre del artista “Artist Name” posición INTEGER Posición en el chart 1 género TEXT Género musical (opcional) “Pop”, “Rock” artist_id INTEGER FK a tabla artists 123 album_id INTEGER FK a tabla albums 789 created_at TIMESTAMP Fecha de creación del registro CURRENT_TIMESTAMP",
    "description": "Tabla: spain_charts_singles (Creada por este script)\nCampo Tipo Descripción Ejemplo id INTEGER Identificador único autoincremental 1, 2, 3… año INTEGER Año del chart 2024, 1959 semana TEXT Número de semana (opcional) “Week 1”, “N/A” fecha TEXT Fecha de emisión “January 1”, “1959-01-15” título TEXT Título de la canción “Song Title” artista TEXT Nombre del artista “Artist Name” tipo_chart TEXT Tipo de chart “Streaming/Sales”, “Radio”, “Singles” posición INTEGER Posición en el chart 1 género TEXT Género musical (opcional) “Pop”, “Rock” artist_id INTEGER FK a tabla artists 123 song_id INTEGER FK a tabla songs 456 created_at TIMESTAMP Fecha de creación del registro CURRENT_TIMESTAMP Tabla: spain_charts_albums (Creada por este script)",
    "tags": [],
    "title": "Datos",
    "uri": "/base-datos/datos-extra/charts/22.-spain-charts/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  discografías \u003e  15. Discografías Discogs masters",
    "content": "Tabla: discogs_discography Columna Tipo Restricciones Descripción id INTEGER PRIMARY KEY Identificador único del registro artist_id INTEGER NOT NULL, FOREIGN KEY → artists(id) ID del artista en la tabla local album_id INTEGER FOREIGN KEY → albums(id) ID del álbum en la tabla local (puede ser NULL) album_name TEXT NOT NULL Nombre del álbum/lanzamiento type TEXT Tipo de lanzamiento (album, single, etc.) main_release INTEGER ID del lanzamiento principal en Discogs role TEXT Rol del artista en el lanzamiento resource_url TEXT URL del recurso en la API de Discogs year INTEGER Año de lanzamiento thumb TEXT URL de la imagen en miniatura stats_comm_wantlist INTEGER Número de usuarios que lo tienen en wishlist stats_comm_coll INTEGER Número de usuarios que lo tienen en colección user_wantlist INTEGER DEFAULT 0 Si el usuario lo tiene en wishlist user_coll INTEGER DEFAULT 0 Si el usuario lo tiene en colección format TEXT Información del formato (almacenado como JSON) label TEXT Información del sello discográfico (almacenado como JSON) status TEXT Estado del lanzamiento discogs_id INTEGER ID único del lanzamiento en Discogs last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP Fecha de última actualización Índices creados Nombre del índice Columna(s) Descripción idx_disco_artist_id artist_id Mejora consultas por artista idx_disco_album_id album_id Mejora consultas por álbum idx_disco_discogs_id discogs_id Mejora consultas por ID de Discogs",
    "description": "Tabla: discogs_discography Columna Tipo Restricciones Descripción id INTEGER PRIMARY KEY Identificador único del registro artist_id INTEGER NOT NULL, FOREIGN KEY → artists(id) ID del artista en la tabla local album_id INTEGER FOREIGN KEY → albums(id) ID del álbum en la tabla local (puede ser NULL) album_name TEXT NOT NULL Nombre del álbum/lanzamiento type TEXT Tipo de lanzamiento (album, single, etc.) main_release INTEGER ID del lanzamiento principal en Discogs role TEXT Rol del artista en el lanzamiento resource_url TEXT URL del recurso en la API de Discogs year INTEGER Año de lanzamiento thumb TEXT URL de la imagen en miniatura stats_comm_wantlist INTEGER Número de usuarios que lo tienen en wishlist stats_comm_coll INTEGER Número de usuarios que lo tienen en colección user_wantlist INTEGER DEFAULT 0 Si el usuario lo tiene en wishlist user_coll INTEGER DEFAULT 0 Si el usuario lo tiene en colección format TEXT Información del formato (almacenado como JSON) label TEXT Información del sello discográfico (almacenado como JSON) status TEXT Estado del lanzamiento discogs_id INTEGER ID único del lanzamiento en Discogs last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP Fecha de última actualización Índices creados Nombre del índice Columna(s) Descripción idx_disco_artist_id artist_id Mejora consultas por artista idx_disco_album_id album_id Mejora consultas por álbum idx_disco_discogs_id discogs_id Mejora consultas por ID de Discogs",
    "tags": [],
    "title": "Datos",
    "uri": "/base-datos/datos-extra/discograf%C3%ADas/15.-discograf%C3%ADas-discogs-masters/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  discografías \u003e  16. Discografías Discogs releases",
    "content": "Nuevas columnas agregadas automáticamente Columna Tipo Descripción uri_release TEXT URI única del release en Discogs labels JSON Información de los sellos discográficos (almacenado como JSON) companies JSON Información de las compañías relacionadas (almacenado como JSON) formats JSON Información detallada de formatos (almacenado como JSON) rating_count INTEGER Número total de valoraciones del release rate_average REAL Puntuación promedio del release num_for_sale INTEGER Número de copias disponibles para venta lowest_price REAL Precio más bajo de venta disponible release_title TEXT Título completo del release released TEXT Fecha de lanzamiento específica notes TEXT Notas adicionales del release genres JSON Géneros musicales (almacenado como JSON) styles JSON Estilos musicales específicos (almacenado como JSON) tracklist JSON Lista completa de pistas (almacenado como JSON) extraartists JSON Artistas adicionales y colaboradores (almacenado como JSON) estimated_weight REAL Peso estimado del formato físico blocked_from_sale INTEGER Indicador si está bloqueado para venta (0/1) is_offensive INTEGER Indicador si contiene contenido ofensivo (0/1) images JSON URLs de imágenes del release (almacenado como JSON) Columnas actualizadas (ya existentes) Columna Tipo Descripción status TEXT Estado actualizado del release year INTEGER Año de lanzamiento actualizado thumb TEXT URL de imagen en miniatura actualizada last_updated TIMESTAMP Fecha de última actualización (se actualiza automáticamente)",
    "description": "Nuevas columnas agregadas automáticamente Columna Tipo Descripción uri_release TEXT URI única del release en Discogs labels JSON Información de los sellos discográficos (almacenado como JSON) companies JSON Información de las compañías relacionadas (almacenado como JSON) formats JSON Información detallada de formatos (almacenado como JSON) rating_count INTEGER Número total de valoraciones del release rate_average REAL Puntuación promedio del release num_for_sale INTEGER Número de copias disponibles para venta lowest_price REAL Precio más bajo de venta disponible release_title TEXT Título completo del release released TEXT Fecha de lanzamiento específica notes TEXT Notas adicionales del release genres JSON Géneros musicales (almacenado como JSON) styles JSON Estilos musicales específicos (almacenado como JSON) tracklist JSON Lista completa de pistas (almacenado como JSON) extraartists JSON Artistas adicionales y colaboradores (almacenado como JSON) estimated_weight REAL Peso estimado del formato físico blocked_from_sale INTEGER Indicador si está bloqueado para venta (0/1) is_offensive INTEGER Indicador si contiene contenido ofensivo (0/1) images JSON URLs de imágenes del release (almacenado como JSON) Columnas actualizadas (ya existentes) Columna Tipo Descripción status TEXT Estado actualizado del release year INTEGER Año de lanzamiento actualizado thumb TEXT URL de imagen en miniatura actualizada last_updated TIMESTAMP Fecha de última actualización (se actualiza automáticamente)",
    "tags": [],
    "title": "Datos",
    "uri": "/base-datos/datos-extra/discograf%C3%ADas/16.-discograf%C3%ADas-discogs-releases/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  discografías \u003e  17. Discografías Discogs Info",
    "content": "Tabla: artists_discogs_info Columna Tipo Restricciones Descripción id INTEGER PRIMARY KEY AUTOINCREMENT Identificador único del registro artist_id INTEGER NOT NULL, UNIQUE ID del artista en la tabla local artists artist_name TEXT Nombre del artista (copia de la tabla artists) realname TEXT Nombre real del artista según Discogs profile TEXT Biografía/perfil completo del artista namevariations TEXT Variaciones del nombre (almacenado como JSON) aliases TEXT Alias y pseudónimos del artista (almacenado como JSON) groups TEXT Grupos musicales relacionados (almacenado como JSON) url TEXT URL completa del perfil en Discogs discogs_id INTEGER ID único del artista en Discogs last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP Fecha de última actualización Fuentes de datos de artistas El script busca artistas con enlaces a Discogs en dos ubicaciones:\nTabla artists_networks Campo utilizado Descripción discogs URL de la API o web de Discogs Tabla artists Campo utilizado Descripción discogs_url URL directa de Discogs del artista",
    "description": "Tabla: artists_discogs_info Columna Tipo Restricciones Descripción id INTEGER PRIMARY KEY AUTOINCREMENT Identificador único del registro artist_id INTEGER NOT NULL, UNIQUE ID del artista en la tabla local artists artist_name TEXT Nombre del artista (copia de la tabla artists) realname TEXT Nombre real del artista según Discogs profile TEXT Biografía/perfil completo del artista namevariations TEXT Variaciones del nombre (almacenado como JSON) aliases TEXT Alias y pseudónimos del artista (almacenado como JSON) groups TEXT Grupos musicales relacionados (almacenado como JSON) url TEXT URL completa del perfil en Discogs discogs_id INTEGER ID único del artista en Discogs last_updated TIMESTAMP DEFAULT CURRENT_TIMESTAMP Fecha de última actualización Fuentes de datos de artistas El script busca artistas con enlaces a Discogs en dos ubicaciones:",
    "tags": [],
    "title": "Datos",
    "uri": "/base-datos/datos-extra/discograf%C3%ADas/17.-discograf%C3%ADas-discogs-info/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  discografías \u003e  18. Musicbrainz discografía",
    "content": "Tabla: musicbrainz_discography (CREADA)\nCampo Tipo Descripción id INTEGER Clave primaria autoincremental artist_id INTEGER Referencia al ID del artista en tabla artists album_id INTEGER Referencia al álbum local si existe coincidencia discogs_discography_id INTEGER Referencia a discogs_discography si existe mbid TEXT ID único del release group en MusicBrainz title TEXT Nombre del álbum/release release_type TEXT Tipo: Album, EP, Single, Compilation, etc. first_release_date TEXT Fecha de primer lanzamiento secondary_types TEXT Tipos secundarios separados por comas last_updated TIMESTAMP Fecha de última actualización",
    "description": "Tabla: musicbrainz_discography (CREADA)\nCampo Tipo Descripción id INTEGER Clave primaria autoincremental artist_id INTEGER Referencia al ID del artista en tabla artists album_id INTEGER Referencia al álbum local si existe coincidencia discogs_discography_id INTEGER Referencia a discogs_discography si existe mbid TEXT ID único del release group en MusicBrainz title TEXT Nombre del álbum/release release_type TEXT Tipo: Album, EP, Single, Compilation, etc. first_release_date TEXT Fecha de primer lanzamiento secondary_types TEXT Tipos secundarios separados por comas last_updated TIMESTAMP Fecha de última actualización",
    "tags": [],
    "title": "Datos",
    "uri": "/base-datos/datos-extra/discograf%C3%ADas/18.-musicbrainz-discograf%C3%ADa/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  instrumentos \u003e  24. Equipboard artistas",
    "content": "Tabla: equipboard_artists (CREADA)\nCampo Tipo Descripción id INTEGER Clave primaria autoincremental artist_id INTEGER Referencia al ID del artista en tabla artists artist_name TEXT Nombre del artista o “Banda (Miembro)” para miembros equipboard_url TEXT URL de equipboard.com del artista found_date TIMESTAMP Fecha cuando se encontró la URL last_checked TIMESTAMP Última vez que se verificó status TEXT Estado: “found”, “not_found”, “error” equipment_count INTEGER Contador de equipos (por defecto 0) [[equipboard_artists.py]]: Encargado de buscar los enlaces de equipboard para los artistas\nTODO: script que filtrará entre colaboradores y miembros de la banda.",
    "description": "Tabla: equipboard_artists (CREADA)\nCampo Tipo Descripción id INTEGER Clave primaria autoincremental artist_id INTEGER Referencia al ID del artista en tabla artists artist_name TEXT Nombre del artista o “Banda (Miembro)” para miembros equipboard_url TEXT URL de equipboard.com del artista found_date TIMESTAMP Fecha cuando se encontró la URL last_checked TIMESTAMP Última vez que se verificó status TEXT Estado: “found”, “not_found”, “error” equipment_count INTEGER Contador de equipos (por defecto 0) [[equipboard_artists.py]]: Encargado de buscar los enlaces de equipboard para los artistas",
    "tags": [],
    "title": "Datos",
    "uri": "/base-datos/datos-extra/instrumentos/24.-equipboard-artistas/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  instrumentos \u003e  Equipboard detalles",
    "content": "Tabla: equipboard_details (CREADA)\nCampo Tipo Descripción id INTEGER Clave primaria autoincremental instrument_id INTEGER Referencia al ID en equipboard_instruments equipment_id TEXT ID único del equipo en equipboard equipment_name TEXT Nombre completo del instrumento equipment_url TEXT URL específica del equipo min_price REAL Precio mínimo encontrado average_price REAL Precio promedio max_price REAL Precio máximo price_tier TEXT Categoría de precio: Budget, Standard, High-end stores_available INTEGER Número de tiendas que lo venden total_reviews INTEGER Total de reviews de usuarios review_score REAL Puntuación promedio (escala 1-5) used_by_artists_count INTEGER Número de artistas que lo usan detailed_description TEXT Descripción detallada del producto specifications TEXT Especificaciones técnicas en JSON pros TEXT Lista de ventajas en JSON cons TEXT Lista de desventajas en JSON user_comments TEXT Comentarios de usuarios en JSON genre_usage TEXT Géneros musicales asociados en JSON related_artists TEXT Artistas relacionados en JSON analog_digital TEXT Tipo: Analog, Digital, o Hybrid polyphony INTEGER Número de voces de polifonía oscillators INTEGER Número de osciladores year_made INTEGER Año de fabricación data_quality_score INTEGER Puntuación de calidad (0-100) extraction_date TIMESTAMP Fecha de extracción extraction_method TEXT Método usado para extraer [[equipboard_details.py]]: Finalmente obtienes los datos de dichos instrumentos",
    "description": "Tabla: equipboard_details (CREADA)\nCampo Tipo Descripción id INTEGER Clave primaria autoincremental instrument_id INTEGER Referencia al ID en equipboard_instruments equipment_id TEXT ID único del equipo en equipboard equipment_name TEXT Nombre completo del instrumento equipment_url TEXT URL específica del equipo min_price REAL Precio mínimo encontrado average_price REAL Precio promedio max_price REAL Precio máximo price_tier TEXT Categoría de precio: Budget, Standard, High-end stores_available INTEGER Número de tiendas que lo venden total_reviews INTEGER Total de reviews de usuarios review_score REAL Puntuación promedio (escala 1-5) used_by_artists_count INTEGER Número de artistas que lo usan detailed_description TEXT Descripción detallada del producto specifications TEXT Especificaciones técnicas en JSON pros TEXT Lista de ventajas en JSON cons TEXT Lista de desventajas en JSON user_comments TEXT Comentarios de usuarios en JSON genre_usage TEXT Géneros musicales asociados en JSON related_artists TEXT Artistas relacionados en JSON analog_digital TEXT Tipo: Analog, Digital, o Hybrid polyphony INTEGER Número de voces de polifonía oscillators INTEGER Número de osciladores year_made INTEGER Año de fabricación data_quality_score INTEGER Puntuación de calidad (0-100) extraction_date TIMESTAMP Fecha de extracción extraction_method TEXT Método usado para extraer [[equipboard_details.py]]: Finalmente obtienes los datos de dichos instrumentos",
    "tags": [],
    "title": "Datos",
    "uri": "/base-datos/datos-extra/instrumentos/equipboard-detalles/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  instrumentos \u003e  Equipboard instrumentos",
    "content": "Tabla: equipboard_instruments (CREADA)\nCampo Tipo Descripción id INTEGER Clave primaria autoincremental artist_id INTEGER Referencia al ID del artista en tabla artists artist_name TEXT Nombre del artista equipment_id TEXT ID único del equipo en equipboard equipment_name TEXT Nombre completo del instrumento/equipo equipment_url TEXT URL específica del equipo en equipboard brand TEXT Marca del equipo (extraída automáticamente) model TEXT Modelo del equipo (extraído automáticamente) equipment_type TEXT Tipo de equipo: electric_guitar, bass_guitar, amplifier, effect_pedal, synthesizer, software, microphone, drums, unknown extraction_date TIMESTAMP Fecha de extracción processed BOOLEAN Indicador de procesamiento (por defecto 0)",
    "description": "Tabla: equipboard_instruments (CREADA)\nCampo Tipo Descripción id INTEGER Clave primaria autoincremental artist_id INTEGER Referencia al ID del artista en tabla artists artist_name TEXT Nombre del artista equipment_id TEXT ID único del equipo en equipboard equipment_name TEXT Nombre completo del instrumento/equipo equipment_url TEXT URL específica del equipo en equipboard brand TEXT Marca del equipo (extraída automáticamente) model TEXT Modelo del equipo (extraído automáticamente) equipment_type TEXT Tipo de equipo: electric_guitar, bass_guitar, amplifier, effect_pedal, synthesizer, software, microphone, drums, unknown extraction_date TIMESTAMP Fecha de extracción processed BOOLEAN Indicador de procesamiento (por defecto 0)",
    "tags": [],
    "title": "Datos",
    "uri": "/base-datos/datos-extra/instrumentos/equipboard-instrumentos/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  rym \u003e  29. RYM Artistas",
    "content": "Tabla: rym_artists (CREADA)\nCampo Tipo Descripción id INTEGER Clave primaria autoincremental artist_id INTEGER Referencia al ID del artista en tabla artists artist_name TEXT Nombre del artista rym_url TEXT URL de RateYourMusic del artista found_date TIMESTAMP Fecha cuando se encontró la URL last_checked TIMESTAMP Última vez que se verificó status TEXT Estado: “found”, “not_found”, “error” album_count INTEGER Número de álbumes en RYM (por defecto 0) rating_count INTEGER Número de ratings (por defecto 0) avg_rating REAL Rating promedio (por defecto 0) Tabla: artists (ACTUALIZADA)\nCampo Descripción rateyourmusic_url Campo actualizado con URL encontrada",
    "description": "Tabla: rym_artists (CREADA)\nCampo Tipo Descripción id INTEGER Clave primaria autoincremental artist_id INTEGER Referencia al ID del artista en tabla artists artist_name TEXT Nombre del artista rym_url TEXT URL de RateYourMusic del artista found_date TIMESTAMP Fecha cuando se encontró la URL last_checked TIMESTAMP Última vez que se verificó status TEXT Estado: “found”, “not_found”, “error” album_count INTEGER Número de álbumes en RYM (por defecto 0) rating_count INTEGER Número de ratings (por defecto 0) avg_rating REAL Rating promedio (por defecto 0) Tabla: artists (ACTUALIZADA)",
    "tags": [],
    "title": "Datos",
    "uri": "/base-datos/datos-extra/rateyourmusic/29.-rym-artistas/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  rym \u003e  30. RYM Artistas Info",
    "content": "Tabla: rym_artists (ACTUALIZADA)\nCampo Tipo Descripción birth_date TEXT Fecha de nacimiento del artista birth_place TEXT Lugar de nacimiento death_date TEXT Fecha de fallecimiento (si aplica) death_place TEXT Lugar de fallecimiento (si aplica) notes TEXT Notas adicionales sobre el artista also_known_as TEXT Otros nombres o alias genres TEXT Géneros musicales separados por comas top_songs TEXT Canciones más populares biography TEXT Biografía detallada info_updated TIMESTAMP Fecha de última actualización scraping_status TEXT Estado: “pending”, “completed”, “error” error_message TEXT Mensaje de error si el scraping falló page_title TEXT Título de la página de RYM member_rating TEXT Rating de miembros de RYM avg_rating TEXT Rating promedio",
    "description": "Tabla: rym_artists (ACTUALIZADA)\nCampo Tipo Descripción birth_date TEXT Fecha de nacimiento del artista birth_place TEXT Lugar de nacimiento death_date TEXT Fecha de fallecimiento (si aplica) death_place TEXT Lugar de fallecimiento (si aplica) notes TEXT Notas adicionales sobre el artista also_known_as TEXT Otros nombres o alias genres TEXT Géneros musicales separados por comas top_songs TEXT Canciones más populares biography TEXT Biografía detallada info_updated TIMESTAMP Fecha de última actualización scraping_status TEXT Estado: “pending”, “completed”, “error” error_message TEXT Mensaje de error si el scraping falló page_title TEXT Título de la página de RYM member_rating TEXT Rating de miembros de RYM avg_rating TEXT Rating promedio",
    "tags": [],
    "title": "Datos",
    "uri": "/base-datos/datos-extra/rateyourmusic/30.-rym-artistas-info/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  rym \u003e  31. RYM Álbumes",
    "content": "Tabla: rym_albums (CREADA/ACTUALIZADA)\nCampo Tipo Descripción id INTEGER Clave primaria autoincremental album_id INTEGER Referencia al ID del álbum en tabla albums artist_id INTEGER Referencia al ID del artista en tabla artists rym_url TEXT URL del álbum en RateYourMusic actualizado TIMESTAMP Fecha de última actualización",
    "description": "Tabla: rym_albums (CREADA/ACTUALIZADA)\nCampo Tipo Descripción id INTEGER Clave primaria autoincremental album_id INTEGER Referencia al ID del álbum en tabla albums artist_id INTEGER Referencia al ID del artista en tabla artists rym_url TEXT URL del álbum en RateYourMusic actualizado TIMESTAMP Fecha de última actualización",
    "tags": [],
    "title": "Datos",
    "uri": "/base-datos/datos-extra/rateyourmusic/31.-rym-%C3%A1lbumes/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  reviews \u003e  12. Artículos en servidor RSS",
    "content": "Tabla feeds Clave Tipo Descripción freshrss_url TEXT URL base del servidor FreshRSS freshrss_username TEXT Nombre de usuario para autenticación en FreshRSS freshrss_password TEXT Contraseña para autenticación en FreshRSS db_path TEXT Ruta al archivo de base de datos SQLite freshrss_cache_path TEXT (opcional) Ruta al archivo de caché categories LIST Categorías a procesar (por defecto: ['Blogs', 'Revistas', 'Wallabag']) search_entities LIST Entidades a buscar (por ejemplo: artists, albums, labels) search_short_terms BOOLEAN Permitir o bloquear términos cortos (por defecto: False) ignore_patterns LIST Patrones a ignorar (por defecto incluye: 'mix-for-nts', etc.)",
    "description": "Tabla feeds Clave Tipo Descripción freshrss_url TEXT URL base del servidor FreshRSS freshrss_username TEXT Nombre de usuario para autenticación en FreshRSS freshrss_password TEXT Contraseña para autenticación en FreshRSS db_path TEXT Ruta al archivo de base de datos SQLite freshrss_cache_path TEXT (opcional) Ruta al archivo de caché categories LIST Categorías a procesar (por defecto: ['Blogs', 'Revistas', 'Wallabag']) search_entities LIST Entidades a buscar (por ejemplo: artists, albums, labels) search_short_terms BOOLEAN Permitir o bloquear términos cortos (por defecto: False) ignore_patterns LIST Patrones a ignorar (por defecto incluye: 'mix-for-nts', etc.)",
    "tags": [],
    "title": "Datos",
    "uri": "/base-datos/datos-extra/reviews/12.-art%C3%ADculos-en-servidor-rss/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  reviews \u003e  Menciones",
    "content": "Tabla: menciones (CREADA)\nCampo Tipo Descripción id INTEGER Clave primaria autoincremental artist_id INTEGER Referencia al ID del artista mencionado artist_name TEXT Nombre del artista mencionado feed_id INTEGER Referencia al ID del feed donde se menciona",
    "description": "Tabla: menciones (CREADA)\nCampo Tipo Descripción id INTEGER Clave primaria autoincremental artist_id INTEGER Referencia al ID del artista mencionado artist_name TEXT Nombre del artista mencionado feed_id INTEGER Referencia al ID del feed donde se menciona",
    "tags": [],
    "title": "Datos",
    "uri": "/base-datos/datos-extra/reviews/menciones/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Punto de partida \u003e  01. Archivos locales",
    "content": "Tabla: songs\nCampo Tipo Descripción id INTEGER Clave primaria file_path TEXT Ruta completa del archivo de audio title TEXT Título de la canción track_number INTEGER Número de pista artist TEXT Artista principal album_artist TEXT Artista del álbum album TEXT Nombre del álbum date TEXT Fecha/año de lanzamiento genre TEXT Género musical label TEXT Sello discográfico mbid TEXT MusicBrainz Track ID bitrate INTEGER Bitrate en kbps bit_depth INTEGER Profundidad de bits sample_rate INTEGER Frecuencia de muestreo duration REAL Duración en segundos last_modified TIMESTAMP Última modificación del archivo added_timestamp TIMESTAMP Fecha de adición a la BD added_day INTEGER Día de adición added_week INTEGER Semana de adición added_month INTEGER Mes de adición added_year INTEGER Año de adición lyrics_id INTEGER FK a tabla lyrics replay_gain_track_gain REAL Ganancia ReplayGain de pista replay_gain_track_peak REAL Pico ReplayGain de pista replay_gain_album_gain REAL Ganancia ReplayGain de álbum replay_gain_album_peak REAL Pico ReplayGain de álbum album_art_path_denorm TEXT Ruta de la portada del álbum has_lyrics INTEGER Indica si tiene letras (0/1) origen TEXT Origen de los datos (’local') musicbrainz_artistid TEXT MusicBrainz Artist ID musicbrainz_recordingid TEXT MusicBrainz Recording ID musicbrainz_albumartistid TEXT MusicBrainz Album Artist ID musicbrainz_releasegroupid TEXT MusicBrainz Release Group ID Tabla: artists\nCampo Tipo Descripción id INTEGER Clave primaria name TEXT Nombre del artista bio TEXT Biografía tags TEXT Etiquetas/géneros similar_artists TEXT Artistas similares last_updated TIMESTAMP Última actualización origin TEXT Origen/país del artista formed_year INTEGER Año de formación total_albums INTEGER Total de álbumes spotify_url TEXT URL de Spotify youtube_url TEXT URL de YouTube musicbrainz_url TEXT URL de MusicBrainz discogs_url TEXT URL de Discogs rateyourmusic_url TEXT URL de RateYourMusic links_updated TIMESTAMP Última actualización de enlaces wikipedia_url TEXT URL de Wikipedia wikipedia_content TEXT Contenido de Wikipedia wikipedia_updated TIMESTAMP Última actualización de Wikipedia mbid TEXT MusicBrainz Artist ID aliases TEXT Alias del artista member_of TEXT Grupos de los que es miembro added_timestamp TIMESTAMP Fecha de adición a la BD added_day INTEGER Día de adición added_week INTEGER Semana de adición added_month INTEGER Mes de adición added_year INTEGER Año de adición origen TEXT Origen de los datos (’local') Tabla: albums\nCampo Tipo Descripción id INTEGER Clave primaria artist_id INTEGER FK a tabla artists name TEXT Nombre del álbum year TEXT Año de lanzamiento label TEXT Sello discográfico genre TEXT Género musical total_tracks INTEGER Número total de pistas album_art_path TEXT Ruta de la portada last_updated TIMESTAMP Última actualización spotify_url TEXT URL de Spotify spotify_id TEXT ID de Spotify youtube_url TEXT URL de YouTube musicbrainz_url TEXT URL de MusicBrainz discogs_url TEXT URL de Discogs rateyourmusic_url TEXT URL de RateYourMusic links_updated TIMESTAMP Última actualización de enlaces wikipedia_url TEXT URL de Wikipedia wikipedia_content TEXT Contenido de Wikipedia wikipedia_updated TIMESTAMP Última actualización de Wikipedia mbid TEXT MusicBrainz Release ID folder_path TEXT Ruta de la carpeta del álbum bitrate_range TEXT Rango de bitrates (ej: “320-320”) added_timestamp TIMESTAMP Fecha de adición a la BD added_day INTEGER Día de adición added_week INTEGER Semana de adición added_month INTEGER Mes de adición added_year INTEGER Año de adición origen TEXT Origen de los datos (’local') musicbrainz_albumid TEXT MusicBrainz Album ID musicbrainz_albumartistid TEXT MusicBrainz Album Artist ID musicbrainz_releasegroupid TEXT MusicBrainz Release Group ID catalognumber TEXT Número de catálogo media TEXT Tipo de medio discnumber TEXT Número de disco releasecountry TEXT País de lanzamiento originalyear INTEGER Año original de lanzamiento producers TEXT Productores engineers TEXT Ingenieros mastering_engineers TEXT Ingenieros de masterización credits TEXT Créditos adicionales Tabla: song_links\nCampo Tipo Descripción id INTEGER Clave primaria song_id INTEGER FK a tabla songs spotify_url TEXT URL de Spotify spotify_id TEXT ID de Spotify lastfm_url TEXT URL de Last.fm links_updated TIMESTAMP Última actualización youtube_url TEXT URL de YouTube musicbrainz_url TEXT URL de MusicBrainz musicbrainz_recording_id TEXT ID de grabación MusicBrainz bandcamp_url TEXT URL de Bandcamp soundcloud_url TEXT URL de SoundCloud boomkat_url TEXT URL de Boomkat Tabla: genres\nCampo Tipo Descripción id INTEGER Clave primaria name TEXT Nombre del género description TEXT Descripción del género related_genres TEXT Géneros relacionados origin_year INTEGER Año de origen Tabla: lyrics\nCampo Tipo Descripción id INTEGER Clave primaria track_id INTEGER FK a tabla songs lyrics TEXT Letras de la canción source TEXT Fuente de las letras last_updated TIMESTAMP Última actualización [[db_music_path_module.py]]",
    "description": "Tabla: songs\nCampo Tipo Descripción id INTEGER Clave primaria file_path TEXT Ruta completa del archivo de audio title TEXT Título de la canción track_number INTEGER Número de pista artist TEXT Artista principal album_artist TEXT Artista del álbum album TEXT Nombre del álbum date TEXT Fecha/año de lanzamiento genre TEXT Género musical label TEXT Sello discográfico mbid TEXT MusicBrainz Track ID bitrate INTEGER Bitrate en kbps bit_depth INTEGER Profundidad de bits sample_rate INTEGER Frecuencia de muestreo duration REAL Duración en segundos last_modified TIMESTAMP Última modificación del archivo added_timestamp TIMESTAMP Fecha de adición a la BD added_day INTEGER Día de adición added_week INTEGER Semana de adición added_month INTEGER Mes de adición added_year INTEGER Año de adición lyrics_id INTEGER FK a tabla lyrics replay_gain_track_gain REAL Ganancia ReplayGain de pista replay_gain_track_peak REAL Pico ReplayGain de pista replay_gain_album_gain REAL Ganancia ReplayGain de álbum replay_gain_album_peak REAL Pico ReplayGain de álbum album_art_path_denorm TEXT Ruta de la portada del álbum has_lyrics INTEGER Indica si tiene letras (0/1) origen TEXT Origen de los datos (’local') musicbrainz_artistid TEXT MusicBrainz Artist ID musicbrainz_recordingid TEXT MusicBrainz Recording ID musicbrainz_albumartistid TEXT MusicBrainz Album Artist ID musicbrainz_releasegroupid TEXT MusicBrainz Release Group ID Tabla: artists",
    "tags": [],
    "title": "Datos",
    "uri": "/base-datos/punto-de-partida/01.-archivos-locales/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Punto de partida \u003e  02. Spotify",
    "content": "Tabla: artists\nCampo Descripción name Nombre del artista spotify_url URL de Spotify del artista spotify_popularity Popularidad en Spotify (0-100) last_updated Timestamp de última actualización origen Marcado como spotify_{user_id} added_timestamp Timestamp de adición added_day Día de adición added_week Semana de adición added_month Mes de adición added_year Año de adición Tabla: albums\nCampo Descripción artist_id ID del artista asociado name Nombre del álbum year Año de lanzamiento label Sello discográfico genre Géneros del álbum total_tracks Número total de pistas spotify_url URL de Spotify del álbum spotify_id ID de Spotify del álbum album_art_path URL de la portada last_updated Timestamp de última actualización origen Marcado como spotify_{user_id} added_timestamp Timestamp de adición added_day Día de adición added_week Semana de adición added_month Mes de adición added_year Año de adición Tabla: songs\nCampo Descripción title Título de la canción track_number Número de pista artist Artista principal album_artist Artista del álbum album Nombre del álbum duration Duración en segundos last_modified Timestamp de modificación origen Marcado como spotify_{user_id} added_timestamp Timestamp de adición added_day Día de adición added_week Semana de adición added_month Mes de adición added_year Año de adición Tabla: song_links\nCampo Descripción song_id ID de la canción asociada spotify_url URL de Spotify de la canción spotify_id ID de Spotify de la canción links_updated Timestamp de actualización de enlaces Tabla: genres\nCampo Descripción name Nombre del género (insertado desde géneros de Spotify)",
    "description": "Tabla: artists\nCampo Descripción name Nombre del artista spotify_url URL de Spotify del artista spotify_popularity Popularidad en Spotify (0-100) last_updated Timestamp de última actualización origen Marcado como spotify_{user_id} added_timestamp Timestamp de adición added_day Día de adición added_week Semana de adición added_month Mes de adición added_year Año de adición Tabla: albums\nCampo Descripción artist_id ID del artista asociado name Nombre del álbum year Año de lanzamiento label Sello discográfico genre Géneros del álbum total_tracks Número total de pistas spotify_url URL de Spotify del álbum spotify_id ID de Spotify del álbum album_art_path URL de la portada last_updated Timestamp de última actualización origen Marcado como spotify_{user_id} added_timestamp Timestamp de adición added_day Día de adición added_week Semana de adición added_month Mes de adición added_year Año de adición Tabla: songs",
    "tags": [],
    "title": "Datos",
    "uri": "/base-datos/punto-de-partida/02.-spotify/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos",
    "content": "Con estos scripts podrás completar mucha información para poder extraer estadísticas y poder buscar nueva música o encontrar patrones curiosos en tu escucha o colección.\nL\ne\nJ\nI\nH\nG\nF",
    "description": "Con estos scripts podrás completar mucha información para poder extraer estadísticas y poder buscar nueva música o encontrar patrones curiosos en tu escucha o colección.\nL\ne\nJ\nI\nH\nG\nF",
    "tags": [],
    "title": "Datos extra",
    "uri": "/base-datos/datos-extra/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Imágenes",
    "uri": "/base-datos/datos-b%C3%A1sicos/im%C3%A1genes/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos \u003e  Enlaces \u003e  04. Youtube links de canciones",
    "content": "Tabla song_links Campo Tipo Descripción song_id INTEGER ID de la canción youtube_url TEXT URL del video en YouTube youtube_id TEXT ID del video en YouTube video_title TEXT Título del video channel_name TEXT Nombre del canal de YouTube view_count INTEGER Número de vistas (si disponible) match_score REAL Puntuación de coincidencia (0.0 - 1.0) last_updated TIMESTAMP Fecha de última actualización Otras tablas Tabla Campo Descripción albums youtube_url URL de canal o playlist del álbum en YouTube artists youtube_url URL del canal oficial del artista en YouTube",
    "description": "Tabla song_links Campo Tipo Descripción song_id INTEGER ID de la canción youtube_url TEXT URL del video en YouTube youtube_id TEXT ID del video en YouTube video_title TEXT Título del video channel_name TEXT Nombre del canal de YouTube view_count INTEGER Número de vistas (si disponible) match_score REAL Puntuación de coincidencia (0.0 - 1.0) last_updated TIMESTAMP Fecha de última actualización Otras tablas Tabla Campo Descripción albums youtube_url URL de canal o playlist del álbum en YouTube artists youtube_url URL del canal oficial del artista en YouTube",
    "tags": [],
    "title": "Datos",
    "uri": "/base-datos/datos-b%C3%A1sicos/enlaces/04.-youtube-links-de-canciones/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  charts \u003e  19. uk csv",
    "content": "Tabla: uk_charts_singles\nCampo Tipo Descripción id INTEGER Clave primaria año INTEGER Año del chart posición INTEGER Posición en el chart título TEXT Título del single artista TEXT Nombre del artista fecha_pico TEXT Fecha de máxima posición género TEXT Género musical (si generos=true) artist_id INTEGER FK a tabla artists song_id INTEGER FK a tabla songs created_at TIMESTAMP Fecha de creación Tabla: uk_charts_bestselling\nCampo Tipo Descripción id INTEGER Clave primaria tipo TEXT ‘decada’ o ‘anual’ década TEXT Década (para tipo=‘decada’) año TEXT Año específico posición TEXT Posición en lista bestselling título TEXT Título del single artista TEXT Nombre del artista ventas TEXT Información de ventas género TEXT Género musical (si generos=true) artist_id INTEGER FK a tabla artists song_id INTEGER FK a tabla songs created_at TIMESTAMP Fecha de creación Tabla: uk_vinyl_charts\nCampo Tipo Descripción id INTEGER Clave primaria chart_type TEXT ‘albums’ o ‘singles’ década TEXT Década del chart artista TEXT Nombre del artista título TEXT Título del álbum/single fecha_numero_uno TEXT Fecha de #1 semanas_numero_uno INTEGER Semanas en #1 género TEXT Género musical artist_id INTEGER FK a tabla artists album_id INTEGER FK a tabla albums song_id INTEGER FK a tabla songs created_at TIMESTAMP Fecha de creación Tabla: uk_streaming_charts\nCampo Tipo Descripción id INTEGER Clave primaria chart_type TEXT ‘albums’ año INTEGER Año del chart artista TEXT Nombre del artista álbum TEXT Título del álbum posición INTEGER Posición en chart semanas_en_chart INTEGER Semanas en chart género TEXT Género musical artist_id INTEGER FK a tabla artists album_id INTEGER FK a tabla albums created_at TIMESTAMP Fecha de creación Tabla: uk_downloads_charts\nCampo Tipo Descripción id INTEGER Clave primaria chart_type TEXT ‘singles’ año INTEGER Año del chart artista TEXT Nombre del artista single TEXT Título del single posición INTEGER Posición en chart semanas_en_chart INTEGER Semanas en chart ventas_totales TEXT Información de ventas género TEXT Género musical artist_id INTEGER FK a tabla artists song_id INTEGER FK a tabla songs created_at TIMESTAMP Fecha de creación Tabla: uk_indie_charts\nCampo Tipo Descripción id INTEGER Clave primaria año INTEGER Año del chart fecha_chart TEXT Fecha específica del chart artista TEXT Nombre del artista single TEXT Título del single sello_discográfico TEXT Sello discográfico semanas_numero_uno INTEGER Semanas en #1 posicion_main_chart INTEGER Posición en chart principal notas TEXT Notas adicionales género TEXT Género musical artist_id INTEGER FK a tabla artists song_id INTEGER FK a tabla songs created_at TIMESTAMP Fecha de creación Tabla: nme_charts\nCampo Tipo Descripción id INTEGER Clave primaria década TEXT Década del chart año INTEGER Año específico fecha_chart TEXT Fecha del chart artista TEXT Nombre del artista single TEXT Título del single semanas_numero_uno INTEGER Semanas en #1 notas TEXT Notas adicionales diferencias_chart_oficial TEXT Diferencias con chart oficial género TEXT Género musical artist_id INTEGER FK a tabla artists song_id INTEGER FK a tabla songs created_at TIMESTAMP Fecha de creación",
    "description": "Tabla: uk_charts_singles\nCampo Tipo Descripción id INTEGER Clave primaria año INTEGER Año del chart posición INTEGER Posición en el chart título TEXT Título del single artista TEXT Nombre del artista fecha_pico TEXT Fecha de máxima posición género TEXT Género musical (si generos=true) artist_id INTEGER FK a tabla artists song_id INTEGER FK a tabla songs created_at TIMESTAMP Fecha de creación Tabla: uk_charts_bestselling\nCampo Tipo Descripción id INTEGER Clave primaria tipo TEXT ‘decada’ o ‘anual’ década TEXT Década (para tipo=‘decada’) año TEXT Año específico posición TEXT Posición en lista bestselling título TEXT Título del single artista TEXT Nombre del artista ventas TEXT Información de ventas género TEXT Género musical (si generos=true) artist_id INTEGER FK a tabla artists song_id INTEGER FK a tabla songs created_at TIMESTAMP Fecha de creación Tabla: uk_vinyl_charts",
    "tags": [],
    "title": "Datos",
    "uri": "/base-datos/datos-extra/charts/19.-uk-csv/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  libros \u003e  14. Libros",
    "content": "Tabla: artists_books (creada) Campo Tipo Descripción id INTEGER PRIMARY KEY Identificador único del registro artist_id INTEGER ID del artista mencionado (FK a artists.id) book_title TEXT Título del libro EPUB book_author TEXT Autor del libro genre TEXT Género del libro filename TEXT Nombre del archivo EPUB page_count INTEGER Número estimado de páginas del libro char_count INTEGER Número total de caracteres del libro content TEXT Párrafo o contexto donde se menciona al artista updated_at TIMESTAMP Fecha de última actualización Índices creados:\nidx_artists_books_artist_id en artist_id idx_artists_books_filename en filename",
    "description": "Tabla: artists_books (creada) Campo Tipo Descripción id INTEGER PRIMARY KEY Identificador único del registro artist_id INTEGER ID del artista mencionado (FK a artists.id) book_title TEXT Título del libro EPUB book_author TEXT Autor del libro genre TEXT Género del libro filename TEXT Nombre del archivo EPUB page_count INTEGER Número estimado de páginas del libro char_count INTEGER Número total de caracteres del libro content TEXT Párrafo o contexto donde se menciona al artista updated_at TIMESTAMP Fecha de última actualización Índices creados:",
    "tags": [],
    "title": "Datos",
    "uri": "/base-datos/datos-extra/libros/14.-libros/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra \u003e  reviews \u003e  13. Review Scrapper",
    "content": "Tabla: feeds\nCampo Tipo Descripción entity_type TEXT Tipo de entidad (‘album’) entity_id INTEGER ID del álbum feed_name TEXT Nombre del sitio web (dominio) post_title TEXT Título de la reseña post_url TEXT URL de la reseña post_date TIMESTAMP Fecha de la reseña content TEXT Contenido extraído de la reseña origen TEXT Origen: ‘review_anydecentmusic’, ‘review_metacritic’, ‘review_aoty’ added_date TIMESTAMP Fecha de inserción en la base de datos Tabla: album_metacritic\nCampo Tipo Descripción album_id INTEGER ID del álbum (clave foránea) metascore INTEGER Puntuación de Metacritic (0-100) num_critics INTEGER Número de críticos que puntuaron positive_reviews INTEGER Número de reseñas positivas mixed_reviews INTEGER Número de reseñas mixtas negative_reviews INTEGER Número de reseñas negativas metacritic_url TEXT URL del álbum en Metacritic last_updated TIMESTAMP Última actualización Tabla: album_aoty\nCampo Tipo Descripción album_id INTEGER ID del álbum (clave foránea) user_score INTEGER Puntuación de usuarios (0-100) critic_score INTEGER Puntuación de críticos (0-100) num_user_ratings INTEGER Número de puntuaciones de usuarios num_critic_ratings INTEGER Número de puntuaciones de críticos aoty_url TEXT URL del álbum en Album of the Year last_updated TIMESTAMP Última actualización",
    "description": "Tabla: feeds\nCampo Tipo Descripción entity_type TEXT Tipo de entidad (‘album’) entity_id INTEGER ID del álbum feed_name TEXT Nombre del sitio web (dominio) post_title TEXT Título de la reseña post_url TEXT URL de la reseña post_date TIMESTAMP Fecha de la reseña content TEXT Contenido extraído de la reseña origen TEXT Origen: ‘review_anydecentmusic’, ‘review_metacritic’, ‘review_aoty’ added_date TIMESTAMP Fecha de inserción en la base de datos Tabla: album_metacritic\nCampo Tipo Descripción album_id INTEGER ID del álbum (clave foránea) metascore INTEGER Puntuación de Metacritic (0-100) num_critics INTEGER Número de críticos que puntuaron positive_reviews INTEGER Número de reseñas positivas mixed_reviews INTEGER Número de reseñas mixtas negative_reviews INTEGER Número de reseñas negativas metacritic_url TEXT URL del álbum en Metacritic last_updated TIMESTAMP Última actualización Tabla: album_aoty",
    "tags": [],
    "title": "Datos",
    "uri": "/base-datos/datos-extra/reviews/13.-review-scrapper/datos/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos básicos",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Escuchas",
    "uri": "/base-datos/datos-b%C3%A1sicos/escuchas/index.html"
  },
  {
    "breadcrumb": "mfuzz",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Web",
    "uri": "/web_docker/index.html"
  },
  {
    "breadcrumb": "mfuzz \u003e  Base de datos \u003e  Datos extra",
    "content": "",
    "description": "",
    "tags": [],
    "title": "charts",
    "uri": "/base-datos/datos-extra/charts/index.html"
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
    "content": "APP Esta aplicación modular te permitirá gestionar tu colección musical, buscar conciertos, estar al tanto de los nuevos álbumes que van a sacar, descubrir nueva música e incluso un pequeño juego musical.\nLa aplicación depende de una base de datos para funcionar, que en su versión más completa puede llevar un buen tiempo en finalizar, por ello tiene un carácter modular que le hace posible seleccionar los componentes que nos interesan, pudiendo evitar otros salvando algo de tiempo y espacio.\nEn desarrollo: Se está implementando una interfaz gráfica que facilite la creación de la base de datos con sus botoncitos y menús\nVersion web Existe una versión web de la app en un contenedor docker, para acceso remoto junto a la base de datos.\nPudes ver mas en Acceso Web\n\u003c\nactualizado el 12-06-2025 17:06",
    "description": "APP Esta aplicación modular te permitirá gestionar tu colección musical, buscar conciertos, estar al tanto de los nuevos álbumes que van a sacar, descubrir nueva música e incluso un pequeño juego musical.\nLa aplicación depende de una base de datos para funcionar, que en su versión más completa puede llevar un buen tiempo en finalizar, por ello tiene un carácter modular que le hace posible seleccionar los componentes que nos interesan, pudiendo evitar otros salvando algo de tiempo y espacio.",
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
