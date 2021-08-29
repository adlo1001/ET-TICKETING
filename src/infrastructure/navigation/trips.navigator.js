import React from "react";
import { Text } from "react-native";

import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { StationsScreen as TripScreen } from "../../features/screens/station-info.screen";
import { TripDetailScreen } from "../../features/screens/trip-detail.screen";

const TripStack = createStackNavigator();

export const TripsNavigator = () => {
  return (
    <TripStack.Navigator
      headerMode="none"
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
