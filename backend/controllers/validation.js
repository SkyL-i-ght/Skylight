require('dotenv').config();
const { ColorLensOutlined } = require('@material-ui/icons');
const express = require('express');


const validation = {};


validation.validateCoordinates = (req, res, next) => {

  console.log(req.query);
  const isLatitude = num => isFinite(num) && Math.abs(num) <= 90;
  const isLongitude = num => isFinite(num) && Math.abs(num) <= 180;

  if (!isLatitude(req.query.lat) || !isLongitude(req.query.lng)) {
    const invalidInputErr = {
      log: 'The latitude and/or longitude are incorrect',
      status: 400,
      message: { err: 'The latitude and/or longitude are incorrect' }
    };
    return next(invalidInputErr);
  }

  return next();
};


module.exports = validation;