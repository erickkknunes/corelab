module.exports = (sequelize, Sequelize) => {
    const Task = sequelize.define('task', {
        title: {
            type: Sequelize.STRING
        },
        color: {
            type: Sequelize.STRING
        },
        completed: {
            type: Sequelize.BOOLEAN,
            defaultValue: false
        }
    });

    return Task;
};