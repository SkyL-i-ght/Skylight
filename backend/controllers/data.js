require('dotenv').config();
const express = require('express');
const axios = require('axios');
const { LocalMallOutlined } = require('@material-ui/icons');


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

  console.log(params);

  axios.get('https://opensky-network.org/api/states/all', { params })
  .then(response => {
    const opensky = response.data.states.map(elem => {

      const flight = {
        id: elem[0],
        callsign: elem[1].trim(),
        lastContact: Math.max(elem[3], elem[4]),
        lng: elem[5],
        lat: elem[6],
        direction: elem[10],
        altitude: Math.max(elem[13], elem[7]),
        speed: elem[9]
      };

      const planePromise = new Promise((resolve, reject) => {
        axios.get('https://api.aviationstack.com/v1/flights')
      });

      return planePromise;
      
    });
    return Promise.allSettled(opensky);
  })
  .then(r => {
    res.locals.results = r;
    return next();
  })
  .catch(e => {
    return next(e);
  })
  
};


module.exports = data;