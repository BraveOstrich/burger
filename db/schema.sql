-- DROP DATABASE IF EXISTS burgers_db;
-- CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers(
	id INTEGER NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50),
    devoured BOOLEAN,
    PRIMARY KEY (id)
);


INSERT INTO burgers (id, burger_name, devoured)
VALUES (1, "Jalapeno Cheeseburger", false),
(2, "El Diablo Cheeseburger", false),
(3, "Impossible Burger", false);