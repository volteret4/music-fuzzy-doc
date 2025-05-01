---
title: Argumentos
weight: 2
---

Con estos argumentos puedes crear tu base de datos con el esquema necesario para todos los demás scripts. 

| Argumento              | Tipo        | Descripción                                                                               | Ejemplo                                  |
| ---------------------- | ----------- | ----------------------------------------------------------------------------------------- | ---------------------------------------- |
| `--root-path`          | Obligatorio | Carpeta con los archivos de música para añadir a la base de datos                         | `--root-path $HOME/Música`               |
| `--db-path`            | Obligatorio | Ruta a la base de datos                                                                   | `--db_path $HOME/Musica/flac.db`         |
| `--lastfm_api_key`     | Opcional    | Puedes añadir tu api key para obtener la bio de lastfm                                    | `--lastfm_api_key 123456789qwerasdfzxcv` |
| `--update-schema`      | Opcional    | Actualiza la base de datos con las tablas necesarias para este programa                   | `--update-schema`                        |
| `--update-bitrates`    | Opcional    | Calcula un rango de bitrate por álbum                                                     | `--update-bitrates`                      |
| `--update-replay-gain` | Opcional    | Actualiza replaygain para los elementos de la base de datos                               | `--update-replay-gain`                   |
| `--optimize`           | Opcional    | Mejora el rendimiento de la base de datos                                                 | `--optimize`                             |
| `--quick-scan`         | Alternativo | Muestra un vistazo rápido de la base de datos                                             | `--quick-scan`                           |
| `--force-update`       | Opcional    | Reescaneará de nuevo el directorio para añadir nuevos. Se puede combinar con --update-... | `--force-update`                         |
| `--help`               | Alternativo | Muestra un panel informativo                                                              | `--help`                                 |
|                        |             |                                                                                           |                                          |