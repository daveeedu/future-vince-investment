 "use strict"
const api = require('express').Router();
const controller = require('../../controllers/bank');
const {
 validateAuthorization,
 validateUserAvailability,
 validateBuilderAndAdmin,
 validateSuperAdmin,
 validateOAuthFlow
} = require('../../middlewares'),
BodyValidator = require('../../middlewares/bodyValidator');

api.put('/topup/:pid', validateAuthorization, validateUserAvailability, validateBuilderAndAdmin, BodyValidator.validateTopUp, controller.topUp);

api.post('/transaction', validateAuthorization, validateUserAvailability, BodyValidator.transaction, controller.createTransaction);


module.exports = api