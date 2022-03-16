require('dotenv').config();
const userController = require('../controllers/users');
const express = require('express');
const data = require('../controllers/data');
const validation = require('../controllers/validation');
const favoritesController = require('../controllers/favorites');

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
  res.send('Successfully logged in');
});

api.post('/user/logout', userController.logout, (req, res) => {
  res.send('Successfully logged out');
});

api.get('/favorites', favoritesController.getAll, (req, res) => {
  res.json(res.locals.rows);
});

api.post('/favorites/add', favoritesController.addOne, (req, res) => {
  res.json(res.locals);
});

api.delete('/favorites/delete', favoritesController.removeOne, (req, res) => {
  res.json('Successfully deleted');
});


module.exports = api;