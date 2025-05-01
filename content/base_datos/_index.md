---
title: "Creaci\xF3n de la base de datos"
weight: 3
---

Para poder crear la base de datos tienes varias opciones:
- Crearla con archivos locales 
- Extraer información de tus scrobbles en lastfm o listenbrainz
- Obtener los artistas que sigues en spotify y sus discografías TODO
- Procesar los artistas que sigues en muspy TODO
- Todo ello secuencialmente

Dependiendo de la cantidad de contenido que tengas, estas tareas pueden llevar un tiempo, es recomendable el uso de un pequeño servidor para realizar estas tareas sin consumir mucho tiempo y consecuentemente dinero. 

> En cada paso se dan unas estimaciones del tiempo consumido
>
> Todas las consultas respetan los limites establecidas por cada api, aunque las restricciones diarias pausaran el script que alcanze el límite hasta que este sea reestablecido

El resto de scripts son totalmente opcionales, cada uno de ellos añadirá información a la base de datos, especificada en cada módulo. Del mismo modo es posible que requiera de ciertas credenciales o paquetes de python.


## Dependencias totales
```sh
pip install requests beautifulsoup4 spotipy musicbrainzngs python3-discogs-client pylast python-youtube-search playwright tqdm
google-api-python-client ??
```

## Scripts Auxiliares
Estos scripts puedes usarlos durante el proceso de creación o al final para consultar datos sobre la base de datos.
- [[estadisticas_db.py]] Muestra detalladamente el estado de la base de datos en comparación a una tabla completa finalizando todos los scripts. Uso `python estadisticas_db.py --db-path basedatos.db`
- [[Spaces/Scripts/menus/musica/base_datos/tools/consultar_items_db.py|consultar_items_db.py]] Puedes obtener diversos campos de la base de datos usando varios filtros. Leer mas aqui TODO
- [[unir_artistas.py]] Permite unir artistas bajo un mismo nombre, útil cuando te aparecen Chimobayo feat. Björk o similares colaboraciones.













































```tasks
not done
tags include #create_db

short mode
sort by due
sort by priority
sort by scheduled
```