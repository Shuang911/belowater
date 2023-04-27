import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import React, { useEffect, useState } from "react";
import { useMemo } from "react";
import "./index.css";
import { getLocation } from "../../../services/api";
import dolphinIcon from "./image/dolphin.png";

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

  const customMarker = { key: "https://icons8.com/icon/50471/whale" };


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
