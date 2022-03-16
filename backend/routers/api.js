require('dotenv').config();
const express = require('express');
const data = require('../controllers/data');
const validation = require('../controllers/validation');

const api = express.Router();

api.get('/test', (req, res) => res.send('Success'));

api.get('/flights', validation.validateCoordinates, data.getFlightsData, (req, res, next) => {
  res.json(res.locals.opensky);
});

module.exports = api;