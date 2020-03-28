const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const OngController = require('./controllers/OngController');
const CasoController = require('./controllers/CasoController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');


const routes = express.Router();

routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required()
    })
}),SessionController.create);

routes.get('/ongs',OngController.index);
routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required().min(10).max(11),
        city:Joi.string().required(),
        uf: Joi.string().required().length(2),
    })
}), OngController.create);

//Rota que lista casos registrado por uma ong especifica
routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required(),
    }).unknown(),
}) ,ProfileController.index);

routes.get('/casos', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page:Joi.number(),
    })
}),CasoController.index);

routes.post('/casos', celebrate({
    [Segments.HEADERS]:Joi.object({
        authorization: Joi.string().required()
    }).unknown(),
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required()
    })
}), CasoController.create);

routes.delete('/casos/:id', celebrate({
   [Segments.PARAMS]: Joi.object().keys({
    id: Joi.number().required(),   
   }) 
}),CasoController.destroy);



module.exports = routes;
