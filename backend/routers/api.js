require('dotenv').config();
const userController = require('../controllers/users');
const express = require('express');
const data = require('../controllers/data');
const validation = require('../controllers/validation');

const api = express.Router();

api.get('/test', (req, res) => res.send('Success'));

api.get('/flights', validation.validateCoordinates, data.getFlightsData, (req, res) => {
  res.json(res.locals.opensky);
});

api.get('/flightinfo/:callsign', data.getFlightDetails, (req, res) => {
  res.json(res.locals.flightDetails);
});

api.post('/user/signup', userController.signUp, (req, res) => {
  res.json(res.locals);
});

api.post('/user/login', userController.login, (req, res) => {
  res.send('Success');
});

api.post('/user/logout', userController.logout, (req, res) => {
  res.send('Success');
});

api.post('/favorites/add', (req, res) => {
  res.send('favorites add');
});

api.delete('/favorites/delete', (req, res) => {
  res.send('favorites delegte');
});


module.exports = api;