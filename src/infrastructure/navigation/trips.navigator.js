import React from "react";
import { Text } from "react-native";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { StationsScreen as TripScreen } from "../../features/stations/screens/station-info.screen";
import { TripDetailScreen } from "../../features/stations/screens/trip-detail.screen";
import { PaymentScreen } from "../../features/stations/screens/payment.screen";
import { Book } from "../../components/booked/book.component";
import {PayNavigator} from "../navigation/payments.navigator";
import { PaymentScreen2 } from "../../components/pay/pay.component";
import { DateTimePicker } from "../../features/stations/components/date-time-picker.component";
import { TripInfoScreen } from "../../features/stations/components/trip-info.component";

const TripStack = createStackNavigator();

export const TripsNavigator = () => {
  return (
    <TripStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,headerShown:false
      }}
      
    >
      <TripStack.Screen
        name="Trip"
        component={TripScreen}
        initialParams={{ customer: "newnew" }}
      />
       <TripStack.Screen
        name="TripDetail"
        component={TripDetailScreen}
      />
        <TripStack.Screen
        name="PaymentScreen"
        component={PaymentScreen}
      />
        <TripStack.Screen
        name="PaymentScreen2"
        component={PaymentScreen2}
      />
     <TripStack.Screen
        name="TripInfoScreen"
        component={TripInfoScreen}
      />
      
    </TripStack.Navigator>
  );
};
