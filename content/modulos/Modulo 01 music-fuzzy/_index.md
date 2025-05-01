---
title: Modulo 01 music-fuzzy
weight: 1
---

##### Music-fuzzy

[[music_fuzzy_module.py]]



Encargado de mostrar:

1. **Cajón de búsqueda que acepta filtros**

Además de los filtros en menús desplegables para encontrar la música añadida recientemente a la base de datos, se pueden usar los siguientes atajos en el cajón de búsqueda:


`a:` artista

`b:` álbum

`g:` género


1. **Listado de coincidencias con la búsqueda**
   
Los resultados se muestran separando los álbumes con headers, los álbumes de las canciones.

3. **Panel informativo del elemento seleccionado**

Si es una canción contendrá la letra, y en todos los casos mostrará cuando la haya:
- Información sobre el artista en lastfm y wikipedia
- Información sobre el álbum en lastfm y wikipedia
- Metadata como Sello discográfico, ruta a la carpeta, bitrate
- Enlaces a servicios con información sobre artista o álbum
- Botón para añadir canción a una playlist de spotify en su panel correspondiente

4. **Botones**

`Play` Reproducirá el album o canción seleccionada
`Open` Abrirá la carpeta del elemento seleccionado
`Script 1-3` Permiten añadir scripts personales para esas canciones


```tasks
not done
tags include #m_fuzzy
tags include #music-fuzzy 
hide tags
sort by due
sort by priority
sort by scheduled
```