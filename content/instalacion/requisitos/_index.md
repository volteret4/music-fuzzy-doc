---
title: requisitos
weight: 1
---

## Requisitos básicos

Dependiendo de los módulos deseados vas a necesitar varias credenciales apis o servicios según indica la tabla

| Módulo        | Requisito            | Motivo                                                                                                                         |
| ------------- | -------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| music-fuzzy   | base de datos [^1]   | Es un explorador de información de la base de datos                                                                            |
| editor-db     | base de datos [^1]   | Es un editor de la base de datos                                                                                               |
| conciertos    | ticketmaster [^2]    | Obtiene conciertos desde la api de ticketmaster                                                                                |
|               | setlistfm creds [^2] | setlistfm                                                                                                                      |
|               | spotify creds [^2]   | spotify                                                                                                                        |
| muspy         | muspy id [^1]        | Usa la api de muspy para añadir artistas y ver si tienen nuevos lanzamientos programados                                       |
|               | spotify creds        | Manejo de artistas favoritos, busca nuevos releases en spotify                                                                 |
|               | lastfm creds         | Manejo de artistas más escuchados, canciones favoritas, sincronización automática de scrobbles                                 |
|               | musicbrainz creds    | Manejo de colecciones de musicbrainz                                                                                           |
|               | bluesky creds        | Seguir artistas en bluesky                                                                                                     |
|               | twitter creds        | Seguir artistas en twitter (WIP)                                                                                               |
| jaangle       | base de datos [^1]   | Es un juego basado en adivinar entre x opciones la canción que está sonando, pero necesita haber creado la base de datos antes |
| playlists     | spotify creds        | Maneja playlists de spotify                                                                                                    |
| configuración | config_editor.json   | Archivo que maneja una pestaña con la configuración de cada módulo                                                            |
| UI db creador | base de datos        |                                                                                                                                |

La creación de la base de datos también es modular, cada script aporta un conjunto diferente de datos. En caso de no tener interés por todos estos sería conveniente bien los requisitos de cada paso antes de ejecutarlo.

Una vez tengas claro que partes vas a usar puedes revisar la sección credenciales en caso de necesitar algún enlace o indicación.

## Paquetes python app


| ------------- | ------------- |
| Conciertos    | beautifulsoup |
| ---           | ---           |
| Url Playlists | beutifulsoup  |
| ---           | ---           |
| music-fuzzy   | asd           |
| ---           | ---           |
| muspy         | asd           |
| ---           | ---           |
| jaangle       | asd           |
| ---           | ---           |
| configuracion | asd           |
|               |               |

## Paquetes python para la creación de la base de datos

| Script | Paquete |
| ------ | ------- |
|        |         |

[^1]: Obligatorio
[^2]: Elegir entre al menos una de estas opciones