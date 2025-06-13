---
title: config dbcreator
weight: 1
---

Este script es el encargado de configurar la creación de la base de datos.
Está compuesto de tres partes principales:
- `scripts_order` contiene los _nombres_ de los scripts, compuestos por la ruta dentro de la carpeta `db` y los nombres de los scripts.
- `common` son valores que se cargaran en todos los scripts para evitar repeticiones
- `scripts` cada uno de los scripts acepta una serie de argumentos. Aquellos que están rellenos no es necesario modificarlos. 

Por cada uno de los scripts existe una [sección](https://volteret4.github.io/music-fuzzy-doc/instalacion/base-datos/index.html) que explicará los argumentos necesarios y proveerá información de los datos aportados por los mismos.

```json {lineNos="true" wrap="true" title="config_dbcreator.json"}
{
  "scripts_order": [
    "path/db_musica_path",
    "enlaces/enlaces_artista_album",
    "enlaces/redes_sociales"
        
  ],

  "common": {
    "db_path": "__/ruta/al/proyecto__/db/sqlite/musica.sqlite",   # Añadir ruta al proyecto
    "lastfm_api_key": "",
    "lastfm_user": "",
    "youtube_api_key": "",
    "discogs_token": "",
    "google_api_key": "",
    "google_cx": "",
    "setlistfm_apikey": "",
    "spotify_client_id": "",
    "spotify_client_secret": "",
    "spotify_redirect_uri": "",
    "rate_limit": 0.5
  },
  "path/db_musica_path": {
    "root_path": "/path/a/la/musica",
    "sync_filesystem": true,
    "force_update": false,
    "update_replay_gain": false,
    "update_schema": false,
    "update_bitrates": false,
    "quick_scan": false,
    "optimize": false
  },
  "path/db_musica_spotify": {
    "skip_existing_artists": true,
    "force_update": false
  },

  "enlaces/enlaces_artista_album": {
    "force_update": false,
    "disable_services": [      # Elimina los servicios para los que no quieras información
      "bandcamp",
      "youtube",
      "rateyourmusic",
      "spotify",
      "discogs",
      "lastfm",
      "musicbrainz"
      
    ],
    "summary_only": false,
    "days": false,
    "older_only": false,
    "artist": false,
    "missing_only": true
  },
  "enlaces/redes_sociales": {
    "force_update": false,
    "missing_only": true,
    "batch_size": 100000,
    "rate_limit": 3,
    "max_retries": 3,
    "concurrent_workers": 1,
    "user_agent": "mfuzz /1.0"
  },
  "enlaces/yt_song_links": {
    "entity_types": ["songs"],
    "missing_only": true,
    "force_update": false,
    "batch_size": 100000,
    "rate_limit": 1.1,
    "max_retries": 3,
    "cache_file": ".content/cache/db/enlaces/yt_song_links_cache.json",
    "log_file": ".content/logs/db/enlaces/yt_song_links.log"
  },

  "enlaces/enlaces_canciones": {
    "checkpoint_path": ".content/cache/db/enlaces/enlaces_canciones.json",
    "services": [
      "lastfm",
      "spotify",
      "bandcamp",
      "soundcloud",
      "youtube"
    ],
    "limit": "100000"
  },

  "img/portadas_artistas": {
    "images_folder": ".content/artistas_img",
    "albums_folder": ".content/albums_img",
    "descargar_img_artistas": true,
    "descargar_img_albums": true,
    "guardar_url_artistas": true,
    "guardar_url_albums": true,
    "force_update": false
  },
  "letras/letras_genius_ovh": {
    "batch_size": 38000,
    "no_resume": true,
    "genius_access_token": "",
    "happi_api_key": "", 
    "musixmatch_api_key": ""
  },
  "wiki/wikilinks_desde_mb": {
    "log_file": ".content/logs/db/wiki/wikilinks_desde_mblog",
    "user_agent": "mfuzz/1.0",
    "type": "artists",
    "modo": "super-auto",
    "mb_username": "",
    "mb_password": "",
    "force_update": false

  },
  "lastfm_escuchas": {
    "output_json": ".content/cache/db/lastfm_escuchas/scrobbles_lastfm.json",
    "interactive": false,
    "force_update": false,
    "cache_dir": ".content/cache/db/lastfm_escuchas/lastfm_escuchas.json"
  },
  "listenbrainz/listens_listenbrainz": {
    "user": "",
    "token": "",
    "output_json": ".content/cache/db/listenbrainz/listens_listenbrainz.json",
    "limit_process": 95000,
    "mbid_matching": true,
    "backfill": true,
    "analyze_mismatches": true,
    "force_update": false,
    "reprocess_existing": true,
    "use_all_matching": false,
    "enhanced_matching": true,
    "fuzzy_matching": false,
    "normalize_strings": true
    
  },

  "musicbrainz/mb_sellos": {
    "mode": "auto",                  
    "skip_existing": true,         
    "force_update": false,            
    "update_wikipedia": true,         
    "batch_size": 100,                 
    "update_wikipedia_urls": false,   
    "repair_schema": false,           
    "target_label_mbid": null,        
    "search_query": null,             
    "process_relationships": true,    
    "fetch_discogs_data": true,       
    "user_agent": "mfuzz/1.0",
    "max_retries": 3,                 
    "retry_delay": 2,                 
    "concurrent_workers": 1,          
    "log_level": "INFO" 
  },
  "musicbrainz/mb_data_canciones": {

  },
  "musicbrainz/mb_release_group": {
    "limit": 0,
    "mode": "schema-only",
    "force_update": false,
    "cache_file": ".content/cache/db//musicbrainz/mb_release_group.log",
    "skip_propierties": [
      "image",
      "P123",
      "P456",
      "P31"
    ]
    
  },

  "discogs/discografia_masters": {
    "force_update": false,
    "rol_principal": false,
    "accepted_formats": ["album",
                         "ep",
                         "single",
                         "LP",
                         "mini album",
                         "compilation",
                         "maxi single",
                         "box set",
                         "vinyl",
                         "cd",
                         "cassette",
                         "digital",
                         "flexi disc",
                         "limited edition",
                         "reissue",
                         "promo",
                         "remix",
                         "live",
                         "demo",
                         "mixtape",
                         "soundtrack"
                        ]
  },
  "discogs/artists_info": {
    "force_update": false
  },
  "discogs/discografia_releases_info": {
    "force_update": false
  },
  "musicbrainz/mb_discografia": {
    "force_update": false,
    "artist_limit": null,
    "clean_duplicates": true,
    "interactive": false,
    "skip_artists": [
      "varios artistas",
      "various artists", 
      "varios",
      "various",
      "compilation",
      "v.a.",
      "v/a",
      "soundtrack",
      "unknown artist",
      "artista desconocido",
      "compilación",
      "artisti vari",
      "Add an Artist or Band",
      "",
      " "
    ]
  },

  "setlistfm/setlists": {
    "interactive": false,
    "force_update": false,
    "limit": 0,
    "new": true,
    "process_places": true
  },
  "posts/review_scrapper": {
    "force_update": false,
    "content_service": "readability",
    "tamano_lote": 100,
    "pausa": 3,
    "inicio_id": 314,
    "archivo_errores": ".content/logs/db/posts/review_scrapper_errors.txt",
    "include_metacritic": true,
    "include_aoty": true
  },
  "posts/posts_fresh_rss": {
    "freshrss_url": "", 
    "freshrss_username": "",
    "freshrss_password": "",
    "freshrss_cache_path": ".content/cache/db/posts/freshrss_cache.json",
    "search_entities": ["artists", "albums", "labels"],
    "categories": ["Blogs", "Revistas", "Wallabag"],
    "output_path": ".content/log/db/posts/resultados_freshrss_db.json",
    "search_short_terms": "false",
    "ignore_patterns": [
      "Opus (Mix)",
      "best-albums-of",
      "The 40 best albums of 2023",
      "mix-for-nts-radio",
      "[Mix for NTS Radio]",
      "my favorite songs",
      "weekly playlist",
      "monthly mix",
      "podcast",
      "dj set",
      "22 favorite releases",
      "favorite releases"
    ]
  },
  "posts/menciones":{
    "force_update": false
  },

  "rateyourmusic/rym_artists_links": {
    "searxng_url": "",
    "delay": 0.1,
    "max_retries": 3,
    "limit": 5000,
    "skip_existing": false
  },
  "rateyourmusic/rym_artists_info": {
    "limit": 10,
    "min_delay": 3,
    "max_delay": 8,
    "headless": false,
    "interactive": false,
    "retry_attempts": 3,
    "use_proxy": false
  },
  "rateyourmusic/rym_albums_links": {
    "searxng_url": "",
    "delay": 0.2,
    "max_retries": 3,
    "limit": "None",
    "log_level": "INFO"
  },

  "charts/uk_csv": {
    "generos": true,
    "type": "all",
    "force_update": false,
    "rate_limit": 1.5,
    "specialized": true
  },
  "charts/billboard_csv": {
    "generos": true,
    "type": "all",
    "force_update": false,
    "rate_limit": 1.5,
    "discogs_token": "",
    "musicbrainz_user_agent": "mfuzz 1.0"
  },
  "charts/spain_charts": {
    "generos": true,
    "type": "all",
    "force_update": false,
    "rate_limit": 1.5,
    "country": "mexico",
    "start_year": 1959,
    "end_year": 2024,
    "include_radio_charts": true,
    "include_streaming_charts": true,
    "output_dir": ".content/charts/spain"
  },
  "charts/uk_indie_nme": {
    "generos": true,
    "force_update": false,
    "rate_limit": 1.5,
    "indie_years": [1999, 2000, 2001, 2002, 2007, 2020, 2021, 2022, 2023],
    "nme_decades": ["60s", "70s", "80s"],
    "include_indie": true,
    "include_nme": true
  },

  "posts/equipboard_artists": {
    "action": "search",
    "limit": null
  },
  "posts/equipboard_instruments": {
    "headless": false,
    "action": "extract",
    "limit": null,
    "force_update": false
  },
  "posts/equipboard_details": {
    "action": "extract",
    "headless": false,
    "limit": null
  },
  "libros/epubs": {
    "epub_folder": "/ruta/carpeta/libros/",
    "force_update": false,
    "min_context_chars": 30,
    "max_context_chars": 20000,
    "case_sensitive": false
  },

  "enlaces/spotify_preview_urls": {
    "force_update": false,
    "batch_size": 1000,
    "rate_limit": 0.8,
    "max_retries": 3,
    "test_playback": false
  },
  "enlaces/enlaces_albumes": {
    "missing_only": true,
    "delay_between_requests": 1.1
  },
  "optimiza_db_lastpass": {

  },
  "descargas/orpheus": {
    "orpheus_username": "",
    "orpheus_password": "", 
    "orpheus_api_token": "",
    "rate_limit": 2.1,
    "force_update": false,
    "limit": 0 
  },
  "similares/musicmap": {
    "headless": false,
    "limit": null,
    "force_update": false,
    "missing_only": true,
    "rate_limit": 2.0,
    "max_retries": 3,
    "log_level": "INFO"
  },
  "descargas/rutracker": {
    "force_update": false,
    "update_mode": false,          
    "force_initial_mode": true,     
    "use_jackett": true,           
    "rutracker_username": "",      
    "rutracker_password": "",       
    "jackett_url": "",   
    "jackett_api_key": "",               
    "jackett_indexer": "",      
    "rate_limit": 3.0,
    "max_retries": 3,
    "retry_delay": 5,
    "limit": 0,      
    "availability_check_limit": 100,
    "max_unavailable_days": 30,     
    "max_unavailable_times": 5
    

  }
 
}
```