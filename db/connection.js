const mysql = require('mysql2');

const connection = mysql.createConnection ({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'gerenciador_tarefas'
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao MySQL : ', err);
        return;
    }

    console.log('Conexão bem-sucedida ao MySQL!');
});

module.exports = connection;


