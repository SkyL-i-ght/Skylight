require('dotenv').config();
const axios = require('axios');

const data = {};

data.getFlightsData = (req, res, next) => {
  const lat = parseFloat(req.body.lat);
  const lng = parseFloat(req.body.lng);

  console.log('HELLOOO????')

  const params = {
    lamin: lat - 1,
    lamax: lat + 1,
    lomin: lng - 1,
    lomax: lng + 1
  };

  console.log(params);

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

data.getFlightInfo = (req, res, next)  => {

  console.log(new Date());

  return next();
}


module.exports = data;