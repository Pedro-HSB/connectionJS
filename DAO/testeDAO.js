// Criação do banco de dados
// CREATE DATABASE IF NOT EXISTS banco_usuarios;
// USE banco_usuarios;

// CREATE TABLE IF NOT EXISTS users (
//     id INT AUTO_INCREMENT PRIMARY KEY,
//     nome VARCHAR(100),
//     email VARCHAR(100),
//     idade INT
// );

// INSERT INTO users (nome, email, idade) VALUES ('João', 'joao@email.com', 30);
// INSERT INTO users (nome, email, idade) VALUES ('Maria', 'maria@email.com', 25);
// INSERT INTO users (nome, email, idade) VALUES ('Pedro', 'pedro@email.com', 35);
// INSERT INTO users (nome, email, idade) VALUES ('Ana', 'ana@email.com', 28);
// INSERT INTO users (nome, email, idade) VALUES ('Carlos', 'carlos@email.com', 40);

const connection = require("./dao");

const user = {nome: 'Lucas', email: 'lucas@email.com', idade: 35}

connection.getAllUsers();
connection.getUserById(2);
connection.addUser(user);
connection.updateUser(6, user);
connection.deleteUser(1);