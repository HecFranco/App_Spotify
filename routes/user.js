'use strict'

var express = require('express');
var UserControlle = require ('.../controllers/user');

var api =express.Router();

api.get('/probando-controlador',UserController.pruebas);
module.exports = api;
