import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";
import React, { useEffect } from "react";

mapboxgl.accessToken =
  "pk.eyJ1Ijoic2FpZm1vaGFtZWRzdiIsImEiOiJja3ZwNGNneWIwd2E3MndxaG14djg0endqIn0.Y_JAbXg08WKPINYkZC4AdA";

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [30, 21],
      zoom: 8,
    });
    if (props.pickup) {
      addToMap(map, props.pickup);
    }
    if (props.dropoff) {
      addToMap(map, props.dropoff);
    }
    if (props.pickup && props.dropoff) {
      map.fitBounds([props.dropoff, props.pickup], { padding: 60 });
    }
  }, [props.pickup, props.dropoff]);
  const addToMap = (map, coord) => {
    console.log(coord);
    const marker1 = new mapboxgl.Marker().setLngLat(coord).addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};
export default Map;

const Wrapper = tw.div`
  flex-1 h-1/2
`;
