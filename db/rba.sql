CREATE DATABASE rba;
USE rba;

CREATE TABLE persona (
  idPersona int(11) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombres  varchar(100) NOT NULL,
  apellidos varchar(100) NOT NULL,
  fechaNacimiento date NOT NULL,
  direccion varchar(150) NOT NULL,
  telefono varchar(50) NOT NULL
);

CREATE TABLE persona(
  idPersona INT(11) NOT NULL AUTO_INCREMENT,
  nombres VARCHAR(100) NOT NULL,
  apellidos VARCHAR(100) NOT NULL,
  fechaNacimiento DATE NOT NULL,
  direccion VARCHAR(150) NOT NULL,
  telefono VARCHAR(50) NOT NULL,
  PRIMARY KEY (idPersona));


  CREATE TABLE logroacademico(
  id INT(6) NOT NULL AUTO_INCREMENT,
  logro VARCHAR(70) NOT NULL,
  titulo VARCHAR(70) NOT NULL,
  institucion VARCHAR(60) NOT NULL,
  anio INT(6) NOT NULL,
  area VARCHAR(50) NOT NULL,
  persona_idPersona INT(11) NOT NULL,
  PRIMARY KEY (id),
  INDEX fk_logroacademico_persona_idx (persona_idPersona),
  CONSTRAINT fk_logroacademico_persona
    FOREIGN KEY (persona_idPersona)
    REFERENCES persona (idPersona);