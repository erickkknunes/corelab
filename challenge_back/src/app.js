const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const taskRoutes = require('./routes/task.routes');
const morgan = require('morgan');
const cors = require('cors');

const app = express();

// Habilitando CORS para todas as origens
app.use(cors());

// Configuração básica do morgan para exibir logs no console
app.use(morgan('dev'));

// Parse requests of content-type - application/json
app.use(bodyParser.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/api/tasks', taskRoutes);

// Sincronização do Sequelize com o banco de dados
db.sequelize.sync({ force: false }).then(() => {
    console.log('Sincronização do Sequelize concluída.');
});

// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log('Server is running on port ${ PORT }.');
});