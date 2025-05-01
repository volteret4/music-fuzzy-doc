---
title: Modulo 03 Blogs
weight: 1
---

#### Módulo 3: Blogs playlists

Pensado para crear una playlist mensual de cada blog musical que sigo:

1. Obtiene las urls a los posts no leídos de mi servidor freshrss y las separa por meses de publicación
2. Busca en cada post, enlaces a youtube, bandcamp y soundcloud y los añade a la playlist
3. Busca con yt-dl el nombre de cada enlace y crea un archivo .txt llamado igual que la playlist para poder mostrar el nombre cuando se pueda.

Se pueden añadir urls a post singulares para crear una playlist del mismo y guardarla en playlist locales.

Actualmente reproduce las canciones en mpv


Script:
[[menu_blogs_module.py]]

```tasks
not done
tags include #m_fuzzy
tags include #blogs 
hide tags
sort by due
sort by priority
sort by scheduled
```