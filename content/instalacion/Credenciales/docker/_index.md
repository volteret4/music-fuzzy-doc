---
title: docker
weight: 1
---

Para instalar docker sigue su documentación para [linux](https://docs.docker.com/engine/install/) o [windows](https://docs.docker.com/desktop/setup/install/windows-install/)

Ademas de necesitar docker para el contenedor del servicio web, puedes usarlo para lanzar diferentes contenedores que se usan opcionalmente en la app

## Freshrss
Gracias a [este](https://freshrss.org/index.html) magnífico proyecto de código abierto puedes crear una categoría con tus blogs favoritos sobre música, para poder asociar los artículos que en ellos aparezcan a tus artistas o álbumes

```yml {lineNos="true" wrap="true" title="docker-compose.yml"}
services:
  freshrss:
    image: lscr.io/linuxserver/freshrss:latest
    container_name: freshrss
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Madrid
    volumes:
      - ./config:/config
      - ./extensiones:/config/www/freshrss/extensions
    ports:
      - 8145:80
    restart: unless-stopped
```

## readability
Necesitarás de este contenedor para poder extraer correctamente todo el texto los reviews y los posts de freshrss.

```yml {lineNos="true" wrap="true" title="docker-compose.yml"}
services:
  read:
    container_name: read
    image: phpdockerio/readability-js-server
    restart: always
    ports:
      - "3002:3000"
```

## Jackett
Otra [herramienta](https://github.com/Jackett/Jackett) útil a la hora de obtener enlaces a torrents.

```yml {lineNos="true" wrap="true" title="docker-compose.yml"}
services:
  jackett:
    image: lscr.io/linuxserver/jackett:latest
    container_name: jackett
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=Europe/Madrid
      - AUTO_UPDATE=true #optional
      - RUN_OPTS= #optional
    volumes:
      - ./jackett/data:/config
      - ./jacket/blackhole:/downloads
    ports:
      - 9117:9117
    restart: unless-stopped
#    restart: no
```

## wallabag
Usado [wallabag](https://wallabag.org/) junto a freshrss con una suscripción a algún tag con el que guardes artículos relacionados con tus artistas 

```yml {lineNos="true" wrap="true" title="docker-compose.yml"}
services:
  wallabag:
    container_name: wallabag
    image: wallabag/wallabag
    environment:
      - MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD
      - SYMFONY__ENV__DATABASE_DRIVER=pdo_mysql
      - SYMFONY__ENV__DATABASE_HOST=db_wallabag
      - SYMFONY__ENV__DATABASE_PORT=3306
      - SYMFONY__ENV__DATABASE_NAME=wallabag
      - SYMFONY__ENV__DATABASE_USER=wallabag
      - SYMFONY__ENV__DATABASE_PASSWORD=$MYSQL_ROOT_PASSWORD
      - SYMFONY__ENV__DATABASE_CHARSET=utf8mb4
      - SYMFONY__ENV__DATABASE_TABLE_PREFIX="wallabag_"
      - SYMFONY__ENV__MAILER_HOST=127.0.0.1
      - SYMFONY__ENV__MAILER_USER=~
      - SYMFONY__ENV__MAILER_PASSWORD=~
      - SYMFONY__ENV__FROM_EMAIL=wallabag@example.com
      - SYMFONY__ENV__DOMAIN_NAME=https://wallabag.local
      - SYMFONY__ENV__SERVER_NAME=https://wallabag.local
      - SYMFONY__ENV__FOSUSER_REGISTRATION=false
    ports:
      - "8080:80"
      - "8833:443"
    volumes:
      - ./wallabag/opt/wallabag/images:/var/www/wallabag/web/assets/images
    healthcheck:
      test: ["CMD", "wget", "--no-verbose", "--tries=1", "--spider", "http://localhost"]
      interval: 1m
      timeout: 3s
    restart: unless-stopped
    depends_on:
      - db_wallabag
      - redis_wallabag
  
  db_wallabag:
    image: mariadb
    container_name: db_wallabag
    restart: unless-stopped
    environment:
      - MYSQL_ROOT_PASSWORD=$MYSQL_ROOT_PASSWORD
    volumes:
      - ./wallabag/opt/wallabag/data:/var/lib/mysql
    healthcheck:
      test: ["CMD", "mysqladmin" ,"ping", "-h", "localhost"]
      interval: 20s
      timeout: 3s
    
  redis_wallabag:
    container_name: redis_wallabag
    image: redis:alpine
    restart: unless-stopped
    volumes:
      - ./wallabag/opt/wallabag/data:/var/lib/mysql
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 20s
      timeout: 3s
```