---
title: "Instalaci\xF3n"
weight: 1
---

Actualmente la aplicación está disponible para sistemas Linux, ya sea un Sistema Operativo, o el submódulo wsl para windows

Para ello necesitarás:

#### Acceso

Puedes elegir dos modos acceso a los diferentes módulos:
- [Acceso via UI](https://volteret4.github.io/music-fuzzy-doc/modulos/index.html) usando Qt y Python
- [Acceso web](https://volteret4.github.io/music-fuzzy-doc/web_docker/index.html) usando un contenedor docker (Funcional, pero actualmente no contiene todos los módulos que la aplicación si provee)

Ambos modos necesitarán de una creación de la base de datos y de una serie de datos especificados según los módulos. (WIP)

#### Instalar los requisitos

##### Aplicación

Está disponible para uso en linux, probado en archlinux y debian

1. Clona el repositorio
```bash
git clone https://github.com/volteret4/mfuz 
```

2. Instala los paquetes de python
```
pip install -r requeriments.txt
```

1. Instala el resto de paquetes

**debian based**
```sh
sudo apt update
sudo apt install libxcb-cursor0 libxcb-cursor-dev

# También instala otras dependencias comunes de Qt6
sudo apt install qt6-base-dev libqt6gui6 libqt6widgets6 libqt6core6
sudo apt install libxcb-xinerama0 libxcb-randr0 libxcb-render-util0 libxcb-keysyms1
```

**arch linux**
```sh
pacman -S  
```

> Pendientes de ajustar la necesidad imperiosa de todos estos paquetes a alguno menos

4.  Editar el config file

Puedes elegir la version del config_example que desees, ya sea `json` o `yml`
Una vez rellenadas las claves necesarias, guarda el archivo en config como config.json o config.yml

5. Ejecuta la aplicación
```sh
python main.py ruta/al/config.yml
```

##### Web

1. Clona el repositorio:
```sh
git clone https://github.com/volteret4/
```

2. Instala los requisitos 
- [docker y docker compose](https://volteret4.github.io/music-fuzzy-doc/credenciales/docker/index.html)

1. Edita el docker-compose.yml:
- Ruta al config.yml (usa el mismo que la aplicación)
- 

4. Accede al directorio y ejecuta:
```sh
docker compose build 
docker compose up -d # para lanzarlo como daemon
```

5. Accede desde cualquier navegador en `http://localhost:8447/`



