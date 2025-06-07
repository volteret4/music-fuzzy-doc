---
title: Datos
weight: 5
---

**Tabla: feeds**

|Campo|Tipo|Descripción|
|---|---|---|
|entity_type|TEXT|Tipo de entidad ('album')|
|entity_id|INTEGER|ID del álbum|
|feed_name|TEXT|Nombre del sitio web (dominio)|
|post_title|TEXT|Título de la reseña|
|post_url|TEXT|URL de la reseña|
|post_date|TIMESTAMP|Fecha de la reseña|
|content|TEXT|Contenido extraído de la reseña|
|origen|TEXT|Origen: 'review_anydecentmusic', 'review_metacritic', 'review_aoty'|
|added_date|TIMESTAMP|Fecha de inserción en la base de datos|

**Tabla: album_metacritic**

|Campo|Tipo|Descripción|
|---|---|---|
|album_id|INTEGER|ID del álbum (clave foránea)|
|metascore|INTEGER|Puntuación de Metacritic (0-100)|
|num_critics|INTEGER|Número de críticos que puntuaron|
|positive_reviews|INTEGER|Número de reseñas positivas|
|mixed_reviews|INTEGER|Número de reseñas mixtas|
|negative_reviews|INTEGER|Número de reseñas negativas|
|metacritic_url|TEXT|URL del álbum en Metacritic|
|last_updated|TIMESTAMP|Última actualización|

**Tabla: album_aoty**

|Campo|Tipo|Descripción|
|---|---|---|
|album_id|INTEGER|ID del álbum (clave foránea)|
|user_score|INTEGER|Puntuación de usuarios (0-100)|
|critic_score|INTEGER|Puntuación de críticos (0-100)|
|num_user_ratings|INTEGER|Número de puntuaciones de usuarios|
|num_critic_ratings|INTEGER|Número de puntuaciones de críticos|
|aoty_url|TEXT|URL del álbum en Album of the Year|
|last_updated|TIMESTAMP|Última actualización|