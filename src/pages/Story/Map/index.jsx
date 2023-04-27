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
    // ... add more styles here
  ];

  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   fetchData();
  // }, []);

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

      console.log(markers);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // function groupByCategory(data) {
  //   return data.reduce((result, item) => {
  //     if (!result[item.animal_category]) {
  //       result[item.animal_category] = {
  //         latitude: item.latitude,
  //         longitude: item.longitude
  //       };
  //     }
  //     return result;
  //   }, {});
  // }

  // const groupedData = groupByCategory(data);

  const mapOptions = {
    styles: mapStyle,
    restriction: {
      latLngBounds: australiaBounds,
      strictBounds: false,
    },
  };

  const customMarker = {
    path: "M29.395,0H17.636c-3.117,0-5.643,3.467-5.643,6.584v34.804c0,3.116,2.526,5.644,5.643,5.644h11.759   c3.116,0,5.644-2.527,5.644-5.644V6.584C35.037,3.467,32.511,0,29.395,0z M34.05,14.188v11.665l-2.729,0.351v-4.806L34.05,14.188z    M32.618,10.773c-1.016,3.9-2.219,8.51-2.219,8.51H16.631l-2.222-8.51C14.41,10.773,23.293,7.755,32.618,10.773z M15.741,21.713   v4.492l-2.73-0.349V14.502L15.741,21.713z M13.011,37.938V27.579l2.73,0.343v8.196L13.011,37.938z M14.568,40.882l2.218-3.336   h13.771l2.219,3.336H14.568z M31.321,35.805v-7.872l2.729-0.355v10.048L31.321,35.805",
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
          {markers.map((markers) => (
            <Marker
              key={markers.index}
              position={{
                lat: Number(markers.latitude),
                lng: Number(markers.longitude),
              }}
              icon={customMarker}
              title={markers.category}
            />
          ))}
        </GoogleMap>
      )}
    </div>
  );
};

export default Mapbox;
