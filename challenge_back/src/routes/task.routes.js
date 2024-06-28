const express = require('express');
const router = express.Router();
const tasks = require('../controllers/task.controller');

router.post('/', tasks.create);
router.get('/', tasks.findAll);
router.get('/:id', tasks.findOne);
router.put('/:id', tasks.update);
router.delete('/:id', tasks.delete);

module.exports = router;