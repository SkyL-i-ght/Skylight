require('dotenv').config();
const axios = require('axios');

const data = {};

data.getFlightsData = (req, res, next) => {
  const lat = parseFloat(req.body.lat);
  const lng = parseFloat(req.body.lng);

  const params = {
    lamin: lat - 0.05,
    lamax: lat + 0.05,
    lomin: lng - 0.05,
    lomax: lng + 0.05
  };

  axios.get('https://opensky-network.org/api/states/all', { params })
  .then(response => {

    console.log(response);
    res.locals.opensky = response.data.states.map(elem => {
      return {
        id: elem[0],
        callsign: elem[1].trim(),
        lastContact: elem[3] || elem[4],
        lng: elem[5],
        lat: elem[6],
        direction: elem[10],
        altitude: elem[13] || elem[7],
        speed: elem[9]
      };
    });
    return next();
  })
  .catch(e => {
    return next(e);
  })
  
};

data.getFlightDetails = (req, res, next) => {

  const date = new Date();
  const flight_date = `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2, 0)}-${String(date.getDate()).padStart(2, 0)}`
  const regex = /([\D]+)([\d]+)$/i;
  flight_icao = req.params.callsign.trim();
  airline_icao = req.params.callsign.match(regex)[1];
  flight_number = req.params.callsign.match(regex)[2];

  const params = {
    access_key: process.env.AVIATIONSTACK_KEY,
    flight_date,
    flight_icao,
    airline_icao,
    flight_number
  };

  console.log(params);

  const timeoutErr = {
    log: 'Request timed out',
    status: 500,
    message: { err: 'Request timed out' }
  };

  const wrapperPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject(timeoutErr), 3000);
    axios.get('https://api.aviationstack.com/v1/flights', { params })
    .then(response => {
      res.locals.flightDetails = response.data.data[0];
      resolve('Success');
    })
    .catch(e => reject(e));
  });

  wrapperPromise
    .then(() => next())
    .catch(e => next(e));
  
};


module.exports = data;