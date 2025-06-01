---
title: "M\xF3dulo 01 Music Browser"
weight: 1
---

![Pasted image 20250509150417.png](Pasted-image-20250509150417.png)

Encargado de mostrar:

1. **Cajón de búsqueda que acepta filtros**

Además de los filtros en menús desplegables para encontrar la música añadida recientemente a la base de datos, se pueden usar los siguientes atajos en el cajón de búsqueda:


`a:` artista

`b:` álbum

`t:` canción

`y:` año

`g:` género

`s:` sello



1. **Listado de coincidencias con la búsqueda**
   
Los resultados se muestran separando anidados según el criterio de búsqueda

3. **Panel informativo del elemento seleccionado**

Si es una canción contendrá la letra, y en todos los casos mostrará cuando la haya:
- Información sobre el artista en lastfm y wikipedia
- Información sobre el álbum en lastfm y wikipedia
- Metadata como Sello discográfico, ruta a la carpeta, bitrate
- Enlaces a servicios con información sobre artista o álbum
- Botón para añadir canción a una playlist de spotify en su panel correspondiente
- Reviews o entrevistas recolectadas de medios musicales

4. **Botones**

- `Play, Next, Prev, Stop` Controlará la reproducción de la música en el reproductor escogido
- `Open` Abrirá la carpeta del elemento seleccionado
- `Spotify` Permiten añadir las canciones seleccionadas a las playlists
- `Lastfm`
- `Buscar discos nuevos` Buscará nuevas producciones para el artista seleccionado en muspy
- `Jaangle` Filtrará el elemento seleccionado para jugarlo o no en Jaangle
- `Feeds` Rotará la información mostrada entre wikipedia, feeds y metadata
- `Buscar conciertos` Buscará conciertos para el artista seleccionado
- `Estadísticas` Mostrará las estadísticas para el elemento seleccionado
- `Enviar a URL Playlists` Enviará el elemento seleccionado al creador de playlists locales

```tasks
not done
tags include #m_fuzzy
tags include #music-fuzzy 
hide tags
sort by due
sort by priority
sort by scheduled
```