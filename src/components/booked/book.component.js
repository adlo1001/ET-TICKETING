import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { BookedContext } from "../../services/booked/booked.context";

const BookButton = styled(TouchableOpacity)`

  right: 140px;
  z-index: 9;
  
`;

export const Book = (trip) => {
    const { booked, addToBooked, removeFromBooked} = useContext(
      BookedContext
    );
  
    const isBooked = booked.find((r) => r.placeId === trip.id);
  
    return (
      <BookButton
        onPress={() =>
          !isBooked
            ? addToBooked(trip)
            : removeFromBooked(trip)
        }
      >  
        <AntDesign
          name={isBooked ? "" : ""}
          size={30}
          color={isBooked ? "red" : "grey"}
        />
      </BookButton>
    );
  };