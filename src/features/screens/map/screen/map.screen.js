import React, { useContext, useState, useEffect } from "react";
import MapView from "react-native-maps";
import { Search } from "../component/search.component";
import styled from "styled-components/native";


const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

const location = [null,null];
{/*const { location } = useContext(LocationContext);
const { stations = [] } = useContext(StationsContext);*/}


export const MapScreen = () => {
    {/*
    const [latDelta, setLatDelta] = useState(0);

    const { lat, lng, viewport } = location;
    
    useEffect(() => {
      const northeastLat = viewport.northeast.lat;
      const southwestLat = viewport.southwest.lat;
    
      setLatDelta(northeastLat - southwestLat);
    }, [location, viewport]);*/}
    
    

 
return(<>
    <Search />
    <Map
          region={{
            latitude: 9.03445, 
            longitude: 38.73149,
            latitudeDelta:  0.02,
            longitudeDelta: 0.02,
          }}
        >
{/*{restaurants.map((restaurant) => {
            return (
              <MapView.Marker
                key={restaurant.name}
                title={restaurant.name}
                coordinate={{
                  latitude: restaurant.geometry.location.lat,
                  longitude: restaurant.geometry.location.lng,
                }}
              />
            );
          })}*/}
        </Map>
  </>);
};
