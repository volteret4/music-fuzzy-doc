---
title: "XX. Optimizaci\xF3n"
weight: 1
---

#### # 10. Optimización
            CONSEJOS DE USO:
            - Para búsquedas de texto rápidas, usa las tablas virtuales '_fts':
              SELECT * FROM songs WHERE id IN (SELECT id FROM song_fts WHERE song_fts MATCH 'palabra_clave')

            - Utiliza las vistas 'view_song_details', 'view_album_stats', 'view_artist_stats',
              'view_label_stats' y 'view_country_stats' para consultas comunes

            - Aprovecha las columnas desnormalizadas para consultas más rápidas:
              - album_year
              - artist_origin
              - album_art_path_denorm
              - has_lyrics
              - album_label
              - decade

            - Tablas normalizadas:
              - genres_normalized: Para consultas relacionadas con géneros
              - countries: Normaliza países para estadísticas
              - decades: Facilita consultas por década

            - Búsqueda avanzada:
              - song_fts: Búsqueda de texto completo en canciones
              - artist_fts: Búsqueda de texto completo en artistas
              - album_fts: Búsqueda de texto completo en álbumes
              - lyrics_fts: Búsqueda de texto completo en letras