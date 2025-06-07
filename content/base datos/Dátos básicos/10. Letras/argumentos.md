---
title: Argumentos
weight: 2
---

| Argumento        | Tipo   | Descripción                                                                          | Valor por Defecto |
| ---------------- | ------ | ------------------------------------------------------------------------------------ | ----------------- |
| `--db_path`      | `str`  | Ruta a la base de datos SQLite (requerido)                                           | —                 |
| `--force-update` | `bool` | Bandera para forzar la actualización de todas las letras, incluso las que ya existen | `False`           |
| `--batch-size`   | `int`  | Número de canciones a procesar por lote                                              | `1000`            |
| `--no-resume`    | `bool` | Bandera para no continuar desde el último punto guardado                             | `False`           |
| `--config`       | `str`  | Archivo de configuración JSON con parámetros adicionales                             | —                 |