---
title: 01. Archivos locales
weight: 1
---

Crea la base de datos leyendo metadata de los archivos flac y mp3.

Este script es el único que leerá la ruta de archivos, desde aquí todos añaden información a a la base de datos basandose en los ya existentes. Si tienes diferentes rutas con música debes volver a ejecutar el script por cada ruta diferente antes de continuar añadiendo datos a la base de datos con el resto de scripts.

> Tomará cada carpeta como un album.
> Se ha probado con:
> - 3160 discos en 1,4 TB en un servidor NFS: 8 horas
> - 10 discos en 5 TB en local: 1 segundo

