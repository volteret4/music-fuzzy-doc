---
title: config yml
weight: 1
---

Este es el archivo que configurará la aplicación, pudiendo elegir que tabs están activos, y que configuración tendrá cada uno de los módulos.

Además de poder editar el config.yml directamente, existe un módulo que leerá el archivo dinámicamente pudiendo actualizar todos sus campos desde la interfaz de la app.

Las rutas a archivos se pueden escribir de modo absoluto `/home/user/spotify_token.txt` o de forma relativa, partiendo de la ruta en la que esté la raiz de la app, quedando `.content/spotify_token.txt` en `/ruta/app/.content/spotify_token.txt`

```yml
# Configuración global que leerán todos los módulos activos
global_theme_config:
  enable_individual_themes: true
  font_family: Noto Fonts Emoji
  spotify_user: 
  spotify_client_id: 
  spotify_client_secret:
  spotify_redirect_uri: 
  spotify_playlist_path: .content/cache/spotify_playlist_path
  lastfm_api_key:
  lastfm_username:
  musicbrainz_username: 
  musicbrainz_password: 
  bluesky_username: 
  bluesky_password: 
  muspy_username:
  muspy_id: 
  muspy_password: 
  twitter_username: 
  twitter_client_id: 
  twitter_client_secret: 
  twitter_access_token: 
  twitter_access_token_secret: 
  twitter_redirect_uri: 
  db_path: db/sqlite/musica.sqlite
  local_playlist_path: .content/playlists/locales
  shared_db_paths:
    music_database: db/sqlite/musica.sqlite
    tt: /home/huan/Música/flac_test3.sqlite
    perico: db/sqlite/musica.sqlite
  query_db_script_path: db/tools/consultar_items_db.py

# Reproductores posibles

music_players:
  selected_player:
    fuzzy: deadbeef
    url_enlaces: vlc
  installed_players:
    player_1:
      player_name: mpv
      player_path: /usr/bin/mpv
      player_temp_dir: .config/mpv/_mpv_socket
      player_config: .config/mpv/mpv.conf
      args: -v --input-ipc-server=/home/huan/.config/mpv/_mpv_socket --force-window=yes
    player_2:
      player_name: mpv_no_video
      player_path: /usr/bin/mpv
      player_temp_dir: .config/mpv/_mpv_socket
      player_config: .config/mpv/mpv.conf
      args: --no-video --input-ipc-server=/home/huan/.config/mpv/_mpv_socket
    player_3:
      player_name: vlc
      player_path: /usr/bin/vlc
    player_4:
      player_name: deadbeef
      player_path: /usr/bin/deadbeef
      player_temp_dir: null
      player_config: null
    player_5:
      player_name: playerctl
      player_path: /usr/bin/playerctl

# Lastfm ??
lastfm:
  enabled: true
  api_key: 
  api_secret: 
  username: 
spotify:
  client_id: 
  client_secret: 

# Temas

temas:
- Tokyo Night
- Solarized Dark
- Monokai
- Catppuccin
- Dracula
- Nord
- Synthwave
tema_seleccionado: Tokyo Night
logging:
- 'true'
- 'false'
logging_state: 'false'
logging_options:
  logging_state: 'true'
  logging_level: ERROR
  log_types:
  - ERROR
  - INFO
  - WARNING
  - UI
  - DEBUG
  log_to_file: true
  log_filename: .content/logs/multi_module_manager.log
  show_module_name: true
  enable_colors: true

# Modulos activos

modules:
- name: Music Browser
  path: modules/music_fuzzy_module.py
  args:
    db_path: db/sqlite/musica.sqlite
    only_local_files: 'True'
    font_family: Noto Fonts Emoji
    artist_images_dir: .content/artistas_img
    tema_seleccionado: Monokai
    temas:
    - Tokyo Night
    - Solarized Dark
    - Monokai
    hotkeys:
      open_folder: Ctrl+O
      play_selected: Return
      spotify: Ctrl+S
      jaangle: Ctrl+J
      search_focus: Ctrl+F
  logging:
    debug_enabled: true
    capture_stdout: true
    log_color: '#7AA2F7'

# Editor del config.yml
- name: Config Editor
  path: modules/config_editor_module.py
  args:
    config_path: config/config.yaml
    temas:
    - Tokyo Night
    - Solarized Dark
    - Monokai
    - Catppuccin
    - Dracula
    - Nord
    - Synthwave
    tema_seleccionado: Monokai
  logging:
    debug_enabled: true
    capture_stdout: true
    log_color: '#7AA2F7'

# Buscador de conciertos
- name: Conciertos
  path: modules/conciertos_module.py
  args:
    temas:
    - Tokyo Night
    - Solarized Dark
    - Monokai
    tema_seleccionado: Tokyo Night
    config:
      country_code: ES
      artists_file: .content/artistas.txt
      apis:
        spotify:
          enabled: 'False'
        ticketmaster:
          enabled: 'True'
          api_key: TU_API_KEY_TICKETMASTER
        setlistfm:
          enabled: 'True'
          setlistfm_apikey: TU_API_KEY_SETLISTFM
          user_agent:
            app: mfuzz
            version: 1.0
            contact: 
        muspy:
          enabled: 'True'
        songkick:
          enabled: 'False'
          api_key: TU_API_KEY_SONGKICK (TODO)
        concerts_metal:
          enabled: 'True'
        rapidapi:
          enabled: 'False'
          api_key: TU_API_KEY_RAPIDAPI (TODO)
        bandsintown:
          enabled: 'False'
          app_id: TU_APP_ID_BANDSINTOWN (TODO)
  logging:
    debug_enabled: true
    capture_stdout: true
    log_color: '#7AA2F7'

# Visualizador de estadísticas
- name: Estadísticas
  path: modules/estadisticas_module.py
  args:
    tema_seleccionado: Tokyo Night
    logging:
      debug_enabled: 'True'
      log_level: INFO
      log_types: ERROR

# Módulos desactivados

modulos_desactivados:

# Juego
- name: Jaangle
  path: modules/jaangle_module.py
  args:
    music_origin: local
    theme: Tokyo Night
    db_path: db/sqlite/musica.sqlite
  logging:
    debug_enabled: true
    capture_stdout: true
    log_color: '#7AA2F7'

# Buscador de nuevos albumes
- name: Muspy
  path: modules/muspy_releases_module.py
  args:
    db_path: db/sqlite/musica.sqlite
    query_db_script_path: db/tools/consultar_items_db.py
    search_mbid_script_path: db/enlaces_artista_album.py
    artists_file: .content/artistas.txt
    muspy_username: 
    muspy_api_key: 
    muspy_id: 
    muspy_password: 
    temas:
    - Tokyo Night
    - Solarized Dark
    - Monokai
    tema_seleccionado: Monokai
  logging:
    debug_enabled: true
    capture_stdout: true
    log_color: '#7AA2F7'

# Gestor de playlists
- name: Url Playlists
  path: modules/url_playlist.py
  args:
    mpv_temp_dir: '[''/home/huan/gits/pollo/music-fuzzy'', ''.content'', ''mpv'',
      ''_mpv_socket'']'
    pagination_value: 50
    included_services:
      bandcamp: 'True'
      lastfm: 'True'
      soundcloud: 'True'
      youtube: 'True'
      spotify: 'True'
    db_path: db/sqlite/musica.sqlite
    spotify_client_id: 
    spotify_client_secret: 
    lastfm_api_key: 
    lastfm_username: 
    playlist_unified_view: 'True'
    show_local_playlists: 'True'
    show_spotify_playlists: 'True'
    show_rss_playlists: 'True'
    urlplaylist_only_local: 'True'
    sync_at_boot: 'True'
    scrobbles_limit: 2403
    scrobbles_by_date: 'False'
    service_priority_indices: '0'
    freshrss_url: 
    freshrss_user: 
    freshrss_api_key: 
    spotify_token_path: .content/cache/spotify_token.txt
    spotify_playlist_path: .content/cache/spotify_playlist_path
    lastfm_cache_path: .content/cache/lastfm_cache.json
    rss_pending_dir: .content/playlists/blogs/pendiente
    rss_listened_dir: .content/playlists/blogs/escuchado
    local_playlist_path: .content/playlists/locales
    exclude_spotify_from_local: 'True'
    show_lastfm_scrobbles: 'False'

# Editor de la base de datos (WIP)
- name: Database Editor
  path: modules/editor_module.py
  args:
    db_path: db/sqlite/musica.sqlite
    temas:
    - Tokyo Night
    - Solarized Dark
    - Monokai
    tema_seleccionado: Monokai
  logging:
    debug_enabled: true
    capture_stdout: true
    log_color: '#7AA2F7'
- name: Database Creator
  path: modules/db_creator_ui_module.py
  args:
    config_file: config/db_creator_config.json
    temas:
    - Tokyo Night
    - Solarized Dark
    - Monokai
    tema_seleccionado: Tokyo Night
  logging:
    debug_enabled: true
    capture_stdout: true
    log_color: '#7AA2F7'

# Solo necesario si activas todos los otros módulos
- name: placeholder
  path: casa

```

