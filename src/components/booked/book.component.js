import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity,View } from "react-native";

import { BookedContext } from "../../services/booked/booked.context";
import { useNavigation } from '@react-navigation/native';
import { PaymentScreen } from "../../features/stations/screens/payment.screen";
import { TripDetailScreen } from "../../features/stations/screens/trip-detail.screen";
import { PayNavigator } from "../../infrastructure/navigation/payments.navigator";
import {IconButton} from  "react-native-paper";
import { colors } from "../../infrastructure/theme/colors";

const BookContainer = styled(View)`
  right: 160px;
  bottom:20px;
  z-index: 9;
  
`;

export const Book = (trip) => {
    const { booked, addToBooked, removeFromBooked} = useContext(
      BookedContext
    );

 const navigation = useNavigation();
    const isBooked = booked.find((r) => r.placeId === trip.id);

    
    return (
    <BookContainer>
      <IconButton
      icon="cart-arrow-right"  
      color={colors.brand.primary}
      size={48}
      onPress={() => {
      navigation.navigate(PaymentScreen);
  
      }}/></BookContainer>
      
    );
  };