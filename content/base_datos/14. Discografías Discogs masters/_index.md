---
title: "14. Discograf\xEDas Discogs masters"
weight: 1
---

- El script busca artistas con enlaces a Discogs en dos tablas: `artists_networks` y `artists`
- Utiliza la API de Discogs con límites de velocidad (1.5 segundos entre peticiones)
- Procesa los lanzamientos página por página (100 elementos por página)
- Filtra lanzamientos según formato y rol del artista
- Maneja tanto inserción de nuevos registros como actualización de existentes

