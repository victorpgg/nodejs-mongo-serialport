const { Router } = require('express');
const dataController = require('./Controller/dataController')

const routes = Router();

routes.post('/', dataController.store); 

module.exports = routes;
