---
title: Argumentos
weight: 2
---

| Argumento | Tipo | Descripción |
| --------- | ---- | ----------- |
| `--config` | Str | Archivo de configuración |
| `--token` | Str | Token de autenticación de ListenBrainz |
| `--force-update` | Str | Forzar actualización completa |
| `--max-items` | Int | Número máximo de listens a obtener por llamada (opcional) |
| `--reprocess-existing` | Opcional | Reprocesar listens existentes con los métodos de coincidencia seleccionados |
| `--normalize-strings` | Opcional | Usar normalización de strings para mejorar coincidencias |
| `--enhanced-matching` | Opcional | Crear y usar tablas normalizadas para buscar coincidencias |
| `--mbid-matching` | Opcional | Intentar coincidencia por MusicBrainz IDs |
| `--fuzzy-matching` | Opcional | Usar coincidencia difusa para encontrar canciones |
| `--analyze-mismatches` | Opcional | Analizar razones de discrepancias |
| `--use-all-matching` | Opcional | Utilizar todas las técnicas de coincidencia mejoradas |
| `--output` | Opcional | , type=str, help= |