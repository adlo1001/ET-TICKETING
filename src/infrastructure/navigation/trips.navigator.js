import React from "react";
import { Text } from "react-native";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { StationsScreen as TripScreen } from "../../features/stations/screens/station-info.screen";
import { TripDetailScreen } from "../../features/stations/screens/trip-detail.screen";

const TripStack = createStackNavigator();

export const TripsNavigator = () => {
  return (
    <TripStack.Navigator
      screenOptions={{
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <TripStack.Screen
        name="Trip"
        component={TripScreen}
      />
      <TripStack.Screen
        name="TripDetail"
        component={TripDetailScreen}
      />
    </TripStack.Navigator>
  );
};
