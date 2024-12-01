const { createTask, getTasks } = require('./db/tarefas');

// Criar uma nova tarefa
createTask('Aprender modularização', 'Entender como organizar o projeto', (err, results) => {
    if (err) {
        console.error('Erro ao criar tarefa: ', err);
        return;
    }
    console.log('Tarefa criada com sucesso! ID: ', results.insertId);
});

// Listar todas as tarefas
getTasks((err, results) => {
    if (err){
        console.error('Erro ao buscar tarefas: ', err);
        return;
    }
    console.log('Tarefas: ', results);
});