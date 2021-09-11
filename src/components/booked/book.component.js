import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { BookedContext } from "../../services/booked/booked.context";
import { useNavigation } from '@react-navigation/native';
import { PaymentScreen } from "../../features/stations/screens/payment.screen";
import { TripDetailScreen } from "../../features/stations/screens/trip-detail.screen";
import { PayNavigator } from "../../infrastructure/navigation/payments.navigator";

const BookButton = styled(TouchableOpacity)`


  right: 120px;
  bottom:25px;
  z-index: 9;
  
`;

export const Book = (trip) => {
    const { booked, addToBooked, removeFromBooked} = useContext(
      BookedContext
    );

 const navigation = useNavigation();
    const isBooked = booked.find((r) => r.placeId === trip.id);

    
    return (
      <BookButton
      onPress={() =>navigation.navigate(PaymentScreen)}
      >  
        <AntDesign
          name={isBooked ? "shoppingcart" : "shoppingcart"}
          size={32}
          color={isBooked ? "red" : "grey"}
        />
      </BookButton>
    );
  };