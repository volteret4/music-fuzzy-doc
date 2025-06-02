---
title: "Creaci\xF3n de la base de datos"
weight: 3
---

# Base de datos
Esta aplicación necesita la creación de una base de datos musical, y para ello necesitas editar el archivo `db_creator_config.json` en la carpeta `config`. En el podrás ver la configuración individual de cada script y el orden en que se ejecutaran los seleccionados.

Una vez editado podrás lanzar el script `db_creator.py` asi desde la carpeta raiz:

```bash
python db_creator.py --config config/db_creator_config.json
```


## Configuración JSON

Primero has de elegir cual será la fuente de tu música, para ello puedes elegir varios puntos de partida, combinables entre ellos:

- #### Crearla con archivos locales
  - Usará el script path/db_musica_path
  - Leerá la metadata de tus archivos de música, y con ella creará una estructura básica.
> 	Es aconsejable usar la aplicación `Picard` de musicbrainz para ajustar los tags de tu música digital. En Credenciales puedes encontrar un apartado con consejos al respecto.
- #### Obtener los artistas que sigues en spotify y sus discografías
  - Usará el script `path/db_musica_spotify`
  - Leerá todos los artistas que sigues y tomará toda su discografía en spotify para crear la estructura "básica"

Estos scripts se pueden combinar entre si para aumentar la cantidad de datos de la base de datos, pero si la intención es obtener la colección completa de trabajos de tus artistas presentes en tu biblioteca local, es más apropiado usar los scripts dedicados para las discografías con discogs en vez de spotify.


Una vez creada la estructura principal, el resto de scripts son totalmente opcionales, cada uno de ellos añadirá información a la base de datos, especificada en cada módulo. Del mismo modo es posible que requiera de ciertas credenciales especificados en tal caso en el config.json


## Dependencias para la base de datos
```sh
pip install requests beautifulsoup4 spotipy musicbrainzngs python3-discogs-client pylast python-youtube-search playwright tqdm sqlite3 
google-api-python-client ??
```

## Scripts Auxiliares
Estos scripts puedes usarlos durante el proceso de creación o al final para consultar datos sobre la base de datos.
- [[estadisticas_db.py]] Muestra detalladamente el estado de la base de datos en comparación a una tabla completa finalizando todos los scripts. Uso `python estadisticas_db.py --db-path basedatos.db`
- [[Spaces/Scripts/menus/musica/base_datos/tools/consultar_items_db.py|consultar_items_db.py]] Puedes obtener diversos campos de la base de datos usando varios filtros. Leer mas aqui TODO
- [[unir_artistas.py]] Permite unir artistas bajo un mismo nombre, útil cuando te aparecen Chimobayo feat. Björk o similares colaboraciones.



































































#### Consejos

> Dependiendo de la cantidad de contenido que tengas, estas tareas pueden llevar un tiempo, es recomendable el uso de un pequeño servidor para realizar estas tareas sin consumir mucho tiempo y consecuentemente dinero. 

> En cada paso se dan unas estimaciones del tiempo consumido
>
> Todas las consultas respetan los limites establecidas por cada api y las restricciones diarias pausaran el script que alcance el límite hasta que este sea restablecido



```tasks
not done
tags include #create_db

short mode
sort by due
sort by priority
sort by scheduled
```