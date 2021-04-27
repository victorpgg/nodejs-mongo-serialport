const { Router } = require('express');
const dataController = require('./Controller/dataController')

const routes = Router();

routes.post('/', dataController.store); 
routes.get('/', dataController.index);
routes.get('/search',dataController.show)

module.exports = routes;
