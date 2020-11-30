CREATE DATABASE crud_2;

USE crud_2;

CREATE TABLE libros(
	id INT NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(80) NOT NULL,
    autor VARCHAR(100) NOT NULL,
    numpags VARCHAR(4),
    aniopub VARCHAR(4),
    PRIMARY KEY(id)
)
INSERT INTO libros(titulo,autor,numpags,aniopub)
values('Libro numero 1','Juan Perez','120','2020');