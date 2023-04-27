import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import "./index.css";
import { getLocation } from "../../../services/api";

const Mapbox = () => {
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
  
  ];



  const [markers, setMarkers] = useState([]);

  const fetchData = async () => {
    try {
      const res = await getLocation();
      const data = res.data;
      const markers = data.map((location) => ({
        name: location.vernacularName,
        category: location.animal_category,
        position: {
          lat: Number(location.latitude),
          lng: Number(location.longitude),
        },
      }));
      setMarkers(markers);

      

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const mapOptions = {
    styles: mapStyle,
    restriction: {
      latLngBounds: australiaBounds,
      strictBounds: false,
    },
  };

  const customMarker = {
    // path: "M29.395,0H17.636c-3.117,0-5.643,3.467-5.643,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759   c3.116,0,5.644-2.527,5.644-5.644V6.584C35.037,3.467,32.511,0,29.395,0z M34.05,14.188v11.665l-2.729,0.351v-4.806L34.05,14.188z    M32.618,10.773c-1.016,3.9-2.219,8.51-2.219,8.51H16.631l-2.222-8.51C14.41,10.773,23.293,7.755,32.618,10.773z M15.741,21.713   v4.492l-2.73-0.349V14.502L15.741,21.713z M13.011,37.938V27.579l2.73,0.343v8.196L13.011,37.938z M14.568,40.882l2.218-3.336   h13.771l2.219,3.336H14.568z M31.321,35.805v-7.872l2.729-0.355v10.048L31.321,35.805",
    // path:"M 4 8 L 10 1 L 13 0 L 12 3 L 5 9 C 6 10 6 11 7 10 C 7 11 8 12 7 12 A 1.42 1.42 0 0 1 6 13 A 5 5 0 0 0 4 10 Q 3.5 9.9 3.5 10.5 T 2 11.8 T 1.2 11 T 2.5 9.5 T 3 9 A 5 5 90 0 0 0 7 A 1.42 1.42 0 0 1 1 6 C 1 5 2 6 3 6 C 2 7 3 7 4 8 M 10 1 L 10 3 L 12 3 L 10.2 2.8 L 10 1",
    src:"data:image/png;base64,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",
    fillColor: "red",
    fillOpacity: 2,
    strokeWeight: 1,
    rotation: 0,
    scale: 1,
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBAPVj00ylUdtRjE3FuA9DWE2YB7xRFaiI",
  });
  const center = useMemo(() => ({ lat: -37.813628, lng: 144.963058 }), []);

  const mapContainerStyle = {
    width: "100%",
    height: "40.31rem",
  };

  return (
    <div className="map">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerStyle={mapContainerStyle}
          center={center}
          zoom={4}
          options={mapOptions}
        >
          {markers.map((marker,index) => (
            <Marker
              key={index}
              position={{
                lat: Number(marker.position.lat),
                lng: Number(marker.position.lng),
              }}
              icon={customMarker}
              title={marker.category}
            />
          ))}
        </GoogleMap>
      )}
    </div>
  );
};

export default Mapbox;
