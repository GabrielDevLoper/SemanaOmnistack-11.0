const express = require('express');

const OngController = require('./controllers/OngController');
const CasoController = require('./controllers/CasoController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/ongs',OngController.index);
routes.post('/ongs',OngController.create);

//Rota que lista casos registrado por uma ong especifica
routes.get('/profile', ProfileController.index);

routes.get('/casos', CasoController.index);
routes.post('/casos', CasoController.create);
routes.delete('/casos/:id', CasoController.destroy);



module.exports = routes;
