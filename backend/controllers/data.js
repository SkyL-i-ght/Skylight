require('dotenv').config();
const express = require('express');
const axios = require('axios');

const data = {};

data.getFlightsData = (req, res, next) => {
  const lat = parseFloat(req.body.lat);
  const lng = parseFloat(req.body.lng);

  const params = {
    lamin: lat - 1,
    lamax: lat + 1,
    lomin: lng - 1,
    lomax: lng + 1
  };

  axios.get('https://opensky-network.org/api/states/all', { params })
  .then(response => {
    res.locals.opensky = response.data.states.map(elem => {
      return {
        id: elem[0],
        callsign: elem[1].trim(),
        lastContact: Math.max(elem[3], elem[4]),
        lng: elem[5],
        lat: elem[6],
        direction: elem[10],
        altitude: Math.max(elem[13], elem[7]),
        speed: elem[9]
      };
    });
    return next();
  })
  .catch(e => {
    return next(e);
  })
  
};

data.getFlightInfo = (req, res, next) {


  return next();
}


module.exports = data;