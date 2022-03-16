import React, { Component } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Button } from '@mui/material';
import Plane from '../frontend/assets/plane2.gif';
import Navbar from '../frontend/components/Navbar.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coords: {
        lat: 33.91,
        lng: -118.42,
      },

      bindingBox: {
        lamin: 33.85,
        lamax: 33.96,
        lomin: -118.47,
        lomax: -118.37,
      },
    }
  }

  // get browser location
  // need to determine if we need to convert lat/long to string or not
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(location => {
      const lat = Math.floor(location.coords.latitude * 100) / 100,
      lng = Math.floor(location.coords.longitude * 100) / 100,
      locInfo = {};
      locInfo.lat = lat;
      locInfo.lng = lng;
      const bindingBox = {
        lamin: lat - 0.05,
        lamax: lat + 0.05,
        lomin: lng - 0.05,
        lomax: lng + 0.05
      };

      // set default coordinates
      // Center: LA 33.9108174, -118.4288793
      // top left: 34.511582, -119.197922
      // top right: 34.473099, -117.552720
      // bottom left: 33.226470, -118.720551
      // bottom right: 33.244027, -117.440136
      // lat min 33.22
      // lat max 34.51
      // lng min -119.10
      // lng max -117.44
      // 
      
      // logic that sets the default latitude or longitude if the user denies access to browser geolocation 
      this.setState((state, props) => {
        return { coords: locInfo, bindingBox: bindingBox }
      })
    });
  }

  render() {
    return(
      
      <div className="mainContainer">
        <Navbar/>
        <div >
          <div className="overlay">
          <img className="plane" src={Plane} />
          
          <Button variant="contained" style={{ fontSize: '18px', color: "#F79256", backgroundColor: "white" }} className="findPlanesButton" component={ Link } to={'/mapview'} state={{ coords: this.state.coords, bindingBox: this.state.bindingBox }}> Find planes near me </Button>
          </div>
         
        </div>
        {/* <Link to='/mapview' state={{ coords: this.state.coords, bindingBox: this.state.bindingBox }}>MapView</Link> */}
        <Outlet />
      </div>
    );
  }
}

export default App;