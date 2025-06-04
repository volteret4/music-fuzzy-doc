---
title: 03. Listens listenbrainz
weight: 1
---

Este script se encarga de obtener y procesar los registros de escuchas (listens) desde ListenBrainz, almacenándolos en una base de datos SQLite y enlazándolos con canciones, artistas y álbumes existentes en tu biblioteca.

Este script permite varios métodos para mejorar la búsqueda estricta:
- `normalize-strings` 
- `enhanced-matrching`
- `mbid-matching`
- `fuzzy-matching`
- `analyze-mismatches`
- `use-all-matching`

> Se recomienda realizar varias pasadas, una con cada argumento hasta que encuentre un porcentaje que parezca apropiado. Lo que tu comprendas que me decían

