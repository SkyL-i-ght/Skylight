import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { useLocation } from 'react-router-dom';
import AircraftController from '../components/AircraftController.jsx'

function MapView (props) {
  
  const location = useLocation();
  const center = { ...location.state.coords };
  console.log(center)
  
  const containerStyle = {
    width: '600px',
    height: '600px',
    };
  
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ' '
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback((map) => {
    console.log(center);
    const bounds = new window.google.maps.LatLngBounds({ lat: center.lat-0.05, lng: center.lng-0.05 });
    bounds.extend({ lat: center.lat+0.05, lng: center.lng+0.05 });
    console.log(bounds)
    map.fitBounds(bounds);
    setMap(map);
  }, []);
  
  const onUnmount = React.useCallback((map) => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle = { containerStyle }
      center = { center }
      onLoad = { onLoad }
      zoom = { 18 }
      onUnmount = { onUnmount }
    >
      {<AircraftController />}
      <></>
    </GoogleMap>
  ) : <></>
};

export default MapView;