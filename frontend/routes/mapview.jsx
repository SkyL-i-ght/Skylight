import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
// const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
//   lat: 0,
//   lng: 0,
// });

function MapView (props) {
  // const { browsLat, browsLong } = props;

  // const containerStyle = {
  //   width: '600px',
  //   height: '600px',
  // };
  
  // const center = {
  //   lat: browsLat,
  //   lng: browsLong,
  // }
  
  // const { isLoaded } = useJsApiLoader({
  //   id: 'google-map-script',
  //   // googleMapsApiKey: process.env.REACT_APP_GOOGLE_API
  // });

  // const [map, setMap] = React.useState(null);

  // const onLoad = React.useCallback((map) => {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map);
  // }, []);
  
  // const onUnmount = React.useCallback((map) => {
  //   setMap(null);
  // }, []);

  // return isLoaded ? (
  //   <GoogleMap
  //     mapContainerStyle = { containerStyle }
  //     center = { center }
  //     zoom = { 10 }
  //     onLoad = { onLoad }
  //     onUnmount = { onUnmount }
  //   >
  //     {/*Children */}
  //     <></>
  //   </GoogleMap>
  // ) : <></>
};

export default MapView;