---
title: Datos
weight: 4
---

##### Tabla songs

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `id` | INTEGER | Campo id (clave primaria) |
| `file_path` | TEXT | Campo file_path |
| `title` | TEXT | Campo title |
| `track_number` | INTEGER | Campo track_number |
| `artist` | TEXT | Campo artist |
| `album_artist` | TEXT | Campo album_artist |
| `album` | TEXT | Campo album |
| `date` | TEXT | Campo date |
| `genre` | TEXT | Campo genre |
| `label` | TEXT | Campo label |
| `mbid` | TEXT | Campo mbid |
| `bitrate` | INTEGER | Campo bitrate |
| `bit_depth` | INTEGER | Campo bit_depth |
| `sample_rate` | INTEGER | Campo sample_rate |
| `last_modified` | TIMESTAMP | Campo last_modified |
| `added_timestamp` | TIMESTAMP | Campo added_timestamp |
| `added_day` | INTEGER | Campo added_day |
| `added_week` | INTEGER | Campo added_week |
| `added_month` | INTEGER | Campo added_month |
| `added_year` | INTEGER | Campo added_year |
| `duration` | REAL | Campo duration |
| `lyrics_id` | INTEGER | Campo lyrics_id |
| `replay_gain_track_gain` | REAL | Campo replay_gain_track_gain |
| `replay_gain_track_peak` | REAL | Campo replay_gain_track_peak |
| `replay_gain_album_gain` | REAL | Campo replay_gain_album_gain |
| `replay_gain_album_peak` | REAL | Campo replay_gain_album_peak |
| `album_art_path_denorm` | TEXT | Campo album_art_path_denorm |
| `has_lyrics` | INTEGER | Campo has_lyrics |
| `origen` | TEXT | Campo origen |

##### Tabla artists

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `id` | INTEGER | Campo id (clave primaria) |
| `name` | TEXT | Campo name |
| `bio` | TEXT | Campo bio |
| `tags` | TEXT | Campo tags |
| `similar_artists` | TEXT | Campo similar_artists |
| `last_updated` | TIMESTAMP | Campo last_updated |
| `origin` | TEXT | Campo origin |
| `formed_year` | INTEGER | Campo formed_year |
| `total_albums` | INTEGER | Campo total_albums |
| `spotify_url` | TEXT | Campo spotify_url |
| `youtube_url` | TEXT | Campo youtube_url |
| `musicbrainz_url` | TEXT | Campo musicbrainz_url |
| `discogs_url` | TEXT | Campo discogs_url |
| `rateyourmusic_url` | TEXT | Campo rateyourmusic_url |
| `links_updated` | TIMESTAMP | Campo links_updated |
| `wikipedia_url` | TEXT | Campo wikipedia_url |
| `wikipedia_content` | TEXT | Campo wikipedia_content |
| `wikipedia_updated` | TIMESTAMP | Campo wikipedia_updated |
| `mbid` | TEXT | Campo mbid |
| `bandcamp_url` | TEXT | Campo bandcamp_url |
| `member_of` | TEXT | Campo member_of |
| `aliases` | TEXT | Campo aliases |
| `lastfm_url` | TEXT | Campo lastfm_url |
| `origen` | TEXT | Campo origen |
| `added_timestamp` | TIMESTAMP | Campo added_timestamp |
| `added_day` | INTEGER | Campo added_day |
| `added_week` | INTEGER | Campo added_week |
| `added_month` | INTEGER | Campo added_month |
| `added_year` | INTEGER | Campo added_year |

##### Tabla albums

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `id` | INTEGER | Campo id (clave primaria) |
| `artist_id` | INTEGER | Campo artist_id |
| `name` | TEXT | Campo name |
| `year` | TEXT | Campo year |
| `label` | TEXT | Campo label |
| `genre` | TEXT | Campo genre |
| `total_tracks` | INTEGER | Campo total_tracks |
| `album_art_path` | TEXT | Campo album_art_path |
| `last_updated` | TIMESTAMP | Campo last_updated |
| `spotify_url` | TEXT | Campo spotify_url |
| `spotify_id` | TEXT | Campo spotify_id |
| `youtube_url` | TEXT | Campo youtube_url |
| `musicbrainz_url` | TEXT | Campo musicbrainz_url |
| `discogs_url` | TEXT | Campo discogs_url |
| `rateyourmusic_url` | TEXT | Campo rateyourmusic_url |
| `links_updated` | TIMESTAMP | Campo links_updated |
| `wikipedia_url` | TEXT | Campo wikipedia_url |
| `wikipedia_content` | TEXT | Campo wikipedia_content |
| `wikipedia_updated` | TIMESTAMP | Campo wikipedia_updated |
| `mbid` | TEXT | Campo mbid |
| `folder_path` | TEXT | Campo folder_path |
| `bitrate_range` | TEXT | Campo bitrate_range |
| `bandcamp_url` | TEXT | Campo bandcamp_url |
| `producers` | TEXT | Campo producers |
| `engineers` | TEXT | Campo engineers |
| `mastering_engineers` | TEXT | Campo mastering_engineers |
| `credits` | JSON | Campo credits |
| `lastfm_url` | TEXT | Campo lastfm_url |
| `origen` | TEXT | Campo origen |
| `added_timestamp` | TIMESTAMP | Campo added_timestamp |
| `added_day` | INTEGER | Campo added_day |
| `added_week` | INTEGER | Campo added_week |
| `added_month` | INTEGER | Campo added_month |
| `added_year` | INTEGER | Campo added_year |

##### Tabla genres

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `id` | INTEGER | Campo id (clave primaria) |
| `name` | TEXT | Campo name |
| `description` | TEXT | Campo description |
| `related_genres` | TEXT | Campo related_genres |
| `origin_year` | INTEGER | Campo origin_year |

##### Tabla lyrics

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `id` | INTEGER | Campo id (clave primaria) |
| `track_id` | INTEGER | Campo track_id |
| `lyrics` | TEXT | Campo lyrics |
| `source` | TEXT | Campo source |
| `last_updated` | TIMESTAMP | Campo last_updated |

##### Tabla song_links

| Campo | Tipo | Descripción |
| ----- | ---- | ----------- |
| `id` | INTEGER | Campo id (clave primaria) |
| `song_id` | INTEGER | Campo song_id |
| `spotify_url` | TEXT | Campo spotify_url |
| `spotify_id` | TEXT | Campo spotify_id |
| `lastfm_url` | TEXT | Campo lastfm_url |
| `links_updated` | TIMESTAMP | Campo links_updated |
| `youtube_url` | TEXT | Campo youtube_url |
| `musicbrainz_url` | TEXT | Campo musicbrainz_url |
| `musicbrainz_recording_id` | TEXT | Campo musicbrainz_recording_id |
| `bandcamp_url` | TEXT | Campo bandcamp_url |
| `soundcloud_url` | TEXT | Campo soundcloud_url |
| `boomkat_url` | TEXT | Campo boomkat_url |