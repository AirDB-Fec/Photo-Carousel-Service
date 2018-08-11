CREATE TABLE rooms (
id INTEGER PRIMARY KEY,
name VARCHAR(100) NOT NULL
);

CREATE TABLE photos (
id SERIAL PRIMARY KEY,
url VARCHAR(10),
description TEXT NOT NULL,
room_id int references rooms(id)
);

COPY rooms (url, description, room_id) FROM '/Users/tonykijak/Git Repositories/sdc-photo-carousel/postgres_primary_rooms.csv' WITH DELIMITER ',';
COPY photos (url, description, room_id) FROM '/Users/tonykijak/Git Repositories/sdc-photo-carousel/postgres_photos0.csv' WITH DELIMITER '\t';
COPY photos (url, description, room_id) FROM '/Users/tonykijak/Git Repositories/sdc-photo-carousel/postgres_photos1.csv' WITH DELIMITER '\t';
COPY photos (url, description, room_id) FROM '/Users/tonykijak/Git Repositories/sdc-photo-carousel/postgres_photos2.csv' WITH DELIMITER '\t';
COPY photos (url, description, room_id) FROM '/Users/tonykijak/Git Repositories/sdc-photo-carousel/postgres_photos3.csv' WITH DELIMITER '\t';
