---
title: requisitos
weight: 1
---

Dependiendo de los módulos deseados vas a necesitar varias credenciales apis o servicios según indica la tabla

| Módulo        | Requisito                | Motivo                                                                                                                                       |
| ------------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| music-fuzzy   | base de datos            | Es un explorador de información de la base de datos                                                                                          |
| editor-db     | base de datos            | Es un editor de la base de datos                                                                                                             |
| conciertos    | ticketmaster credentials | Obtiene conciertos desde la api de ticketmaster                                                                                              |
|               | songkick credentials     | Obtiene concierttos desde la api de songkick TODO                                                                                            |
| muspy         | muspy id                 | Usa la api de muspy para añadir artistas y ver si tienen nuevos lanzamientos programados                                                     |
| jaangle       | base de datos            | Es un juego basado en adivinar entre x opciones la canción que está sonando, pero necesita haber creado la base de datos antes               |
| playlists     | spotify credentials      | Maneja playlists de spotify                                                                                                                  |
| configuración | config_editor.json       | Archivo que maneja una pestaña con la configuraciçon de cada módulo                                                                          |


La creación de la base de datos también es modular, por lo que deberás revisar bien los requisitos de cada paso antes de ejecutarlo.

Una vez tengas claro que partes vas a usar puedes revisar la sección credenciales