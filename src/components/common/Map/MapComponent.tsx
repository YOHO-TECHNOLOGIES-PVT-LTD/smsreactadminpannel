import React, { useState, useCallback, useEffect } from 'react';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

const libraries = ['places'];

const MapComponent = ({ locations, onMarkerClick }) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBjL-St4uic2_ngQfPj9crPlo2WpSZTHCs',
    libraries,
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '500px' }}
      center={{ lat: 20.5937, lng: 78.9629 }} // Centered on India
      zoom={5}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={{ lat: location.lat, lng: location.lng }}
          onClick={() => onMarkerClick(location)}
        />
      ))}
    </GoogleMap>
  );
};

export default MapComponent;
