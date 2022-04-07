import React from "react";
import { Text } from "react-native";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { StationsScreen as TripScreen } from "../../features/stations/screens/trips-info.screen";
import { PaymentScreen } from "../../features/stations/screens/payment.screen";
import { Book } from "../../components/booked/book.component";
import { TripDetailScreen } from "../../features/stations/screens/trip-detail.screen";

const PayStack = createStackNavigator();

export const PayNavigator = () => {
  return (
    <PayStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <PayStack.Screen
        name="Trip"
        component={TripDetailScreen}
      />
      <PayStack.Screen
        name="Payment"
        component={PaymentScreen}
      />
    </PayStack.Navigator>
  );
};
