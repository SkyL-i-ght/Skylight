import React from 'react';

class AircraftController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      aircraft: [] // array of Aircraft components
    };
  }

  componentDidMount() {

  }

  componentDidUpdate() {

  }

  componentWillUnmount() {

  }

  addAircraft() {
    const aircraft = <Aircraft />
  }

  removeAircraft() {

  }

  updateAircraft() {

  }

  render() {
    return <div><h1>Hello</h1></div>
  }

};

export default AircraftController;