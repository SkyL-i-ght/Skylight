import React, { Component } from 'react';
import { Outlet, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        latitude: 0,
        longitude: 0,
    }
  }

  // get browser location
  // need to determine if we need to convert lat/long to string or not

  componentDidMount() {
    console.log('mounting');
    navigator.geolocation.getCurrentPosition(location => {
      const lat = String(Math.floor(location.coords.latitude * 100) / 100),
      long = String(Math.floor(location.coords.longitude * 100) / 100),
      locInfo = {};
      
      locInfo.lat = lat;
      locInfo.long = long;

      console.log(locInfo);
      
      this.state.latitude = locInfo.lat;
      this.state.longitude = locInfo.long;

    });
  }

  render() {
    return(
      <div>
        <Link to='/mapview' browsLat={this.state.latitude} browsLong={this.state.longitude}>MapView</Link>
        <Outlet />
      </div>
    );
  }
}

export default App;