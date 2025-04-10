const express = require('express');
const SensorController = require('../controller/SensorController');
const router = express.Router();

router []
    .get('/', SensorController.getAll)
    .get('/:id', SensorController.getById)
    .post('/', SensorController.create)
    .delete('/:id', SensorController.deleteById);

module.exports = router;
