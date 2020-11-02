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
          position={{ lat: -19.9478455, lng: -43.9231682 }}
          title="Viver Bem Casa de Repouso"
          clickable
        />
        <Marker
          position={{ lat: -19.8584148, lng: -43.873551 }}
          title="Casa de Repouso Pró-Vida"
          clickable
        />
        <Marker
          position={{ lat: -19.9061894, lng: -43.9091845 }}
          title="Casa de Repouso Lar Doce Lar"
          clickable
        />
        <Marker
          position={{ lat: -19.9087908, lng: -43.9596223 }}
          title="Vida Digna - Residência para Idosos"
          clickable
        />
        <Marker
          position={{ lat: -19.8529926, lng: -43.9930869 }}
          title="Pampulha Village Casa de Repouso para Idosos BH"
          clickable
        />
      </GoogleMap>
    </LoadScript>
  )
}
export default React.memo(Mapa);
