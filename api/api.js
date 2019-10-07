var express = require('express');
var apiRouter = require('./routes/services');
var api= express();
var swaggerUi = require('swagger-ui-express');
var swaggerDocument = require('./swagger.json');

api.use(express.json());
api.use('/', apiRouter);
api.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = api;