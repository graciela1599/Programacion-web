CREATE DATABASE peliculas;

USE peliculas;

CREATE TABLE generos(
	id INT NOT NULL AUTO_INCREMENT,
    genero VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE peliculas(
	id INT NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(120) NOT NULL,
    director VARCHAR(100) NOT NULL,
    anio VARCHAR(4) NOT NULL,
    genero INT NOT NULL,
    PRIMARY KEY(id),
    FOREIGN KEY (genero) REFERENCES generos(id) 
);


insert into generos(genero)value ("")
