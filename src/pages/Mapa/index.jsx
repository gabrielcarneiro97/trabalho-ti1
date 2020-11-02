import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '80vh'
};

const center = {
  lat: -19.9179462,
  lng: -44.0300017,
};

const API_KEY = 'AIzaSyD0J4q5DEqj51zWMpiez9VmfT51gyoAPi0';

function Mapa() {
  return (
    <LoadScript
      googleMapsApiKey={API_KEY}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
        <Marker
          position={{ lat: -19.8584195, lng: -43.9788657 }}
          title="Igrejinha da Pampulha"
          clickable
        />
      </GoogleMap>
    </LoadScript>
  )
}
export default React.memo(Mapa);
