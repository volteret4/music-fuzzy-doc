---
title: Punto de partida
weight: 1
---

Estos scripts permiten crear la base de datos con los artistas, álbumes y canciones que desees en tu colección, pudiendo elegir varios orígenes:

- #### Crearla con archivos locales
  - Usará el script [[db_musica_path.py]]
  - Leerá la metadata de tus archivos de música, y con ella creará una estructura básica.
  - Creará una columna **origen** con el string **local** para en la app poder filtrar de este modo.
- #### Obtener los artistas que sigues en spotify y sus discografías
  - Usará el script [[db_musica_spotify.py]]
  - Leerá todos los artistas que sigues y tomará toda su discografía en spotify para crear la estructura "básica"
  - Creará una columna **origen** con el string **local** para en la app poder filtrar de este modo.

> 	Es aconsejable usar la aplicación `Picard` de musicbrainz para ajustar los tags de tu música digital. En [Credenciales](https://volteret4.github.io/music-fuzzy-doc/credenciales/picard/index.html) puedes encontrar un apartado con consejos al respecto.

---




