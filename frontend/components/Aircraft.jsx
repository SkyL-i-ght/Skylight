import React from 'react';

export default class Aircraft extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: undefined,
      callsign: undefined,
      planeInfo: {
        lat: undefined,
        lng: undefined,
        lastContact: undefined,
        altitude: undefined,
        velocity: undefined,
        trueTrack: undefined,
        verticalRate: undefined
      },
      flightInfo: {
        departureAirport: undefined,
        arrivalAirport: undefined,
        scheduledArrival: undefined,
        estimatedArrival: undefined,
        delay: undefined,
        airline: undefined
      }
    };
  }

  componentDidMount() {
    
  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }

  render() {
    // return an svg image with specific styling (position/angle)?
  }

};