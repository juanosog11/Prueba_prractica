CREATE DATABASE IF NOT EXISTS trabajodb;

USE trabajodb;

CREATE TABLE usuario (
    
    nombre VARCHAR(50) NOT NULL,
    apellido VARCHAR(50) NOT NULL,
    email VARCHAR(70)NOT NULL,
    telefono VARCHAR(15) NOT NULL,
    contrasena VARCHAR(255) NOT NULL,
    rol VARCHAR(70) NOT NULL,
    rut INT,
    razon_social VARCHAR(50),
    PRIMARY KEY (email)
);

CREATE TABLE servicio (
    
    id INT NOT NULL AUTO_INCREMENT,
    fecha DATE NOT NULL,
    hora VARCHAR(6) NOT NULL,
    rol VARCHAR(50) NOT NULL,
    Ceco VARCHAR(50),
    recorrido  VARCHAR(150)NOT NULL,
    email VARCHAR(70)NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (email) REFERENCES usuario(email)
);

INSERT INTO usuario (nombre, apellido, email, telefono, contrasena, rol, rut, razon_social)
VALUES
    ('Juan', 'Pérez', 'juan.perez@email.com', '123456789', 'contraseña123', 'usuario', 123456789, 'Empresa A'),
    ('María', 'Gómez', 'maria.gomez@email.com', '987654321', 'clave456', 'admin', 987654321, 'Empresa B'),
    ('Carlos', 'López', 'carlos.lopez@email.com', '555666777', 'secreto789', 'conductor', 654321987, 'Empresa C'),
    ('Laura', 'García', 'laura.garcia@email.com', '111223344', 'passLaura123', 'usuario_regular', 345678901, 'Empresa D'),
    ('Roberto', 'Martínez', 'roberto.martinez@email.com', '999888777', 'robertoPass789', 'usuario_regular', 567890123, 'Empresa E'),
    ('Ana', 'López', 'ana.lopez@email.com', '333222111', 'anaPassword456', 'admin', 789012345, 'Empresa F');

