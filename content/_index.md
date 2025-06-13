---
title: mfuzz
type: home
---

# APP

Esta aplicación modular permite:

- Gestionar tu colección musical (álbumes, artistas, géneros, etiquetas).
- Consultar conciertos y giras relacionados con tu biblioteca.
- Seguir lanzamientos próximos de artistas que te interesan.
- Explorar música nueva por afinidad, popularidad o criterios propios.
- Crear playlists locales o en Spotify.
- Jugar a un pequeño juego musical integrado, basado en tu colección.

## Estructura modular

La aplicación se apoya en una base de datos que centraliza toda la información. Su construcción completa puede requerir bastante tiempo, por lo que la arquitectura es modular: se pueden activar solo los componentes necesarios, reduciendo así el consumo de tiempo, recursos y almacenamiento.

## Base de datos extendida

Cuando se construye en su versión más completa, la base de datos puede incluir:

- Información de Wikipedia (en varios idiomas).
- Artistas similares y relacionados.
- Datos sobre sellos discográficos y sublabels.
- Colaboradores en cada álbum o track (productores, músicos invitados, etc.).
- Ingenieros de mezcla y masterización.
- Instrumentos utilizados por cada artista.
- Letras de canciones.
- Enlaces a servicios externos (Discogs, MusicBrainz, Last.fm, etc.).
- Detalles completos de discografías.
- Información sobre los distintos tipos de lanzamiento de un álbum (versiones, reediciones, ediciones regionales, etc.).



## Versión web

Existe una versión web de la aplicación que puede desplegarse mediante Docker. Esta permite el acceso remoto tanto a la interfaz como a la base de datos.

Más información: [Acceso Web](https://volteret4.github.io/music-fuzzy-doc/web_docker/index.html)



< 
 
---
_actualizado el 13-06-2025 17:06_
