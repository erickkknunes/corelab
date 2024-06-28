const taskService = require('../services/task.service');

// Controlador para criar uma nova tarefa
exports.create = async (req, res) => {
    const { title, color, completed } = req.body;
    const taskData = {
        title,
        color,
        completed: completed || false
    };

    try {
        const createdTask = await taskService.createTask(taskData);
        res.status(201).json(createdTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controlador para buscar todas as tarefas
exports.findAll = async (req, res) => {
    try {
        const tasks = await taskService.getAllTasks();
        res.status(200).json(tasks);
    } catch (error) {
        console.error('Erro ao buscar tarefas:', error);
        res.status(500).json({ message: 'Erro interno ao buscar tarefas.' });
    }
};

// Controlador para buscar uma tarefa pelo ID
exports.findOne = async (req, res) => {
    const { id } = req.params;

    try {
        const task = await taskService.getTaskById(id);
        if (!task) {
            res.status(404).json({ message: `Task with id ${id} not found.` });
            return;
        }
        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controlador para atualizar uma tarefa existente
exports.update = async (req, res) => {
    const { id } = req.params;
    const { title, color, completed } = req.body;
    const updatedTaskData = {
        title,
        color,
        completed
    };

    try {
        const updatedTask = await taskService.updateTask(id, updatedTaskData);
        if (!updatedTask) {
            res.status(404).json({ message: `Task with id ${id} not found.` });
            return;
        }
        res.status(200).json(updatedTask);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controlador para deletar uma tarefa existente
exports.delete = async (req, res) => {
    const { id } = req.params;

    try {
        await taskService.deleteTask(id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
