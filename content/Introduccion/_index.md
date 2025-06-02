---
title: "Introducci\xF3n"
weight: 1
---

### APP y DB
Esta aplicación modular te permitirá gestionar tu colección musical, buscar conciertos, estar al tanto de los nuevos álbumes que van a sacar, descubrir nueva música e incluso un pequeño juego musical.

La aplicación depende de una base de datos para funcionar, que en su versión más completa puede llevar un buen tiempo en finalizar, por ello intento mantener un carácter modular que le hace posible seleccionar los componentes que nos interesan, pudiendo evitar otros salvando algo de tiempo y espacio.

Para cada módulo especificaremos la necesidad o conveniencia de ejecutar estos scripts que crearán la base de datos.

Como regla general, los módulos que menos requisitos tendrán serán
- Busqueda de conciertos
- Manejo de Playlists
- Juego Musical

Frente a otros que se aprovechan gratamente de una base de datos rebosante:
- Music browser: Podrás ver letras, información de wikipedia, lastfm, reviews, enlaces, conciertos...
- Estadísticas: Es el gran consumidor de datos lógicamente, y el que más ayudará a generar nuevos intereses

> **En desarrollo:**
> Se está implementando una interfaz gráfica que facilite la creación de la base de datos con sus botoncitos y menús

### Version web
Existe una versión web de la app en un contenedor docker, para acceso remoto junto a la base de datos. 

Pudes ver mas en [Acceso Web](https://volteret4.github.io/music-fuzzy-doc/web_docker/index.html)