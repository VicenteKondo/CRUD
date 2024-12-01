const connection = require('./connection');

// Função para criar uma nova tarefa
function createTask(titulo, descricao, callback) {
    const query = 'INSET INTO tarefas (titulo, descricao) VALUES (?, ?)';
    connection.query(query, [titulo, descricao], (err, results) => {
        if (err) {
            console.error('Erro na consulta SQL: ', err);
            return callback(err); // passa o erro de volta
        }
        console.log('Dados inseridos com sucesso, ID: ', results.insertId);
        callback(null, results); // Retorna os resultados se tudo ocorrer bem
    });
}
// Função para listar todas as tarefas

function getTasks(callback) {
    const query = 'SELECT * FROM tarefas';
    connection.query(query, (err, results) => {
        if(err) return callback(err);
        callback(null, results);
    });
}

// Exportar as funções

module.exports = {
    createTask,
    getTasks
};