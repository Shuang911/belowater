import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./index.css";

const australiaBounds = {
  north: -9.219367,
  south: -44.183799,
  east: 159.287221,
  west: 112.921099,
};

const mapStyle = [
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#e9e9e9",
      },
      {
        lightness: 17,
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      {
        color: "#9258DC",
      },
      {
        lightness: 20,
      },
    ],
  },
  // ... add more styles here
];

const mapOptions = {
  styles: mapStyle,
  restriction: {
    latLngBounds: australiaBounds,
    strictBounds: false,
  },
};

const Mapbox = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey:"AIzaSyBAPVj00ylUdtRjE3FuA9DWE2YB7xRFaiI",
  });
const center = useMemo(() => ({ lat: -37.813628, lng: 144.963058 }), []);

 return (
    <div className="App">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
          options={mapOptions}
        >
          <Marker position={{ lat: -25.2744, lng: 133.7751 }} />
        </GoogleMap>
      )}
    </div>
  );
};



export default Mapbox;