---
title: "Instalaci\xF3n"
weight: 1
---

Actualmente la aplicación está disponible para sistemas Linux, ya sea un Sistema Operativo, o el submódulo wsl para windows

Para ello necesitarás:

### Acceso

Puedes elegir dos modos acceso a los diferentes módulos:
- [Acceso via UI](https://volteret4.github.io/music-fuzzy-doc/modulos/index.html) usando Qt y Python
- [Acceso web](https://volteret4.github.io/music-fuzzy-doc/web_docker/index.html) usando un contenedor docker (Funcional, pero actualmente no contiene todos los módulos que la aplicación si provee)

Ambos modos necesitarán de una creación de la base de datos y de una serie de datos especificados según los módulos. (WIP)

### Aplicación

Está disponible para uso en linux, probado en archlinux y debian

##### 1. Clona el repositorio
```bash {lineNos="true" wrap="true" title="Clonar"}
git clone https://github.com/volteret4/mfuz.git
```

##### 2. Instala los paquetes de python
```bash {lineNos="true" wrap="true" title="pip"}
pip install -r requeriments.txt
```

##### 3. Instala el resto de paquetes

**debian based**
```bash {lineNos="true" wrap="true" title="debian"}
sudo apt update
sudo apt install libxcb-cursor0 libxcb-cursor-dev

# También instala otras dependencias comunes de Qt6
sudo apt install qt6-base-dev libqt6gui6 libqt6widgets6 libqt6core6
sudo apt install libxcb-xinerama0 libxcb-randr0 libxcb-render-util0 libxcb-keysyms1
```

**arch linux**
```bash {lineNos="true" wrap="true" title="arch"}
pacman -Sy
pacman -S xcb-util-cursor qt6-base libxcb xcb-util-renderutil xcb-util-keysyms
```

> Pendientes de ajustar la necesidad imperiosa de todos estos paquetes a alguno menos

##### 4. Editar el config file

Puedes elegir la version del config_example que desees, ya sea `json` o `yml`
Una vez rellenadas las claves necesarias, guarda el archivo en config como config.json o config.yml

##### 5. Ejecuta la aplicación
```bash {lineNos="true" wrap="true" title="Ejecutar"}
python main.py ruta/al/config.yml
```

### Web

##### 1. Clona el repositorio:
```bash {lineNos="true" wrap="true" title="Clonar"}
git clone https://github.com/volteret4/mfuzz_docker_web.git
```

##### 2. Instala los requisitos 
- [docker y docker compose](https://volteret4.github.io/music-fuzzy-doc/credenciales/docker/index.html)

##### 3. Edita el docker-compose.yml:
- Ruta al config.yml (usa el mismo que la aplicación)
- Ruta a tu musica (opcional)
- Ruta a la base de datos

##### 4. Accede al directorio y ejecuta:
```bash {lineNos="true" wrap="true" title="Construir contenedor"}
docker compose build 
docker compose up -d # para lanzarlo como daemon
```

##### 5. Accede desde cualquier navegador en `http://localhost:8447/`





