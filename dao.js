// npm install mysql


// //database.js - classe

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'I%3I0Ii6X65BlD06',
  database: 'banco_usuarios'
});



connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ', err);
    return;
  }
  console.log('Conexão estabelecida com o banco de dados');
});

module.exports = connection;


// const connection = require('./database');

function getAllUsers() {
  connection.query('SELECT * FROM users', (error, results, fields) => {
    if (error) {
      console.log(error);
    } else {
      console.log( results);
    }
  });
}

function getUserById(id) {
  connection.query('SELECT * FROM users WHERE id = ?', [id], (error, results, fields) => {
    if (error) {
      console.log(error);
    } else {
      console.log( results[0]);
    }
  });
}

function addUser(user) {
  connection.query('INSERT INTO users SET ?', user, (error, results, fields) => {
    if (error) {
      console.log(error);
    } else {
      console.log( results.insertId);
    }
  });
}

function updateUser(id, user) {
  connection.query('UPDATE users SET ? WHERE id = ?', [user, id], (error, results, fields) => {
    if (error) {
      console.log(error);
    } else {
      console.log( results.affectedRows);
    }
  });
}

function deleteUser(id) {
  connection.query('DELETE FROM users WHERE id = ?', [id], (error, results, fields) => {
    if (error) {
      console.log(error);
    } else {
      console.log( results.affectedRows);
    }
  });
}

module.exports = {
  getAllUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser
};