DROP DATABASE IF EXISTS minigame_db;
CREATE DATABASE minigame_db;
USE minigame_db;

-- CREATE TABLE users (
--     user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     pass INT NOT NULL,
--     first_name VARCHAR(30) NOT NULL,
--     last_name VARCHAR(30) NOT NULL,
--     gamer_tag VARCHAR(50) NOT NULL UNIQUE,
--     FOREIGN KEY (high_score) REFERENCES highscore(high_score) ON DELETE SET NULL
-- );

-- CREATE TABLE highscore (
--     user_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     gamer_tag VARCHAR(50) INT,
--     high_score INT,
--     FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE SET NULL,
--     FOREIGN KEY (gamer_tag) REFERENCES users(gamer_tag) ON DELETE SET NULL
-- );