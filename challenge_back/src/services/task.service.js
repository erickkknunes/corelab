const db = require('../models');
const Task = db.Task;

// Função para criar uma nova tarefa
const createTask = async (taskData) => {
    try {
        const createdTask = await Task.create(taskData);
        return createdTask;
    } catch (error) {
        throw error;
    }
};

// Função para buscar todas as tarefas
const getAllTasks = async () => {
    try {
        const tasks = await Task.findAll();
        return tasks;
    } catch (error) {
        throw error;
    }
};

// Função para buscar uma tarefa pelo ID
const getTaskById = async (taskId) => {
    try {
        const task = await Task.findByPk(taskId);
        return task;
    } catch (error) {
        throw error;
    }
};

// Função para atualizar uma tarefa existente
const updateTask = async (taskId, updatedTaskData) => {
    try {
        const task = await Task.findByPk(taskId);
        if (!task) {
            return null;
        }
        const updatedTask = await task.update(updatedTaskData);
        return updatedTask;
    } catch (error) {
        throw error;
    }
};

// Função para deletar uma tarefa existente
const deleteTask = async (taskId) => {
    try {
        const task = await Task.findByPk(taskId);
        if (!task) {
            return null;
        }
        await task.destroy();
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createTask,
    getAllTasks,
    getTaskById,
    updateTask,
    deleteTask,
};