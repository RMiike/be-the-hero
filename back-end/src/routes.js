const express = require('express')
const OngsControllers = require('./controllers/OngsControllers')
const IncidentsControllers = require('./controllers/IncidentsControllers')
const ProfileControllers = require('./controllers/ProfileControllers')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/sessions', SessionController.create)

routes.get('/ongs', OngsControllers.index)
routes.post('/ongs', OngsControllers.create)

routes.get('/profile', ProfileControllers.index)

routes.post('/incidents', IncidentsControllers.create)
routes.get('/incidents', IncidentsControllers.index)
routes.delete('/incidents/:id', IncidentsControllers.delete)

module.exports = routes