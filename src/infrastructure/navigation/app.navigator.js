import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Text } from "react-native";
import { SafeArea } from "../../features/stations/components/utility/safe-area.component";

import { TripsNavigator } from "./trips.navigator";
import { TripsNavigator2 } from "./trips.navigator-2";
import { MapScreen } from "../../features/map/screen/map.screen";
import { PayNavigator } from "../../infrastructure/navigation/payments.navigator";
import { HomeScreen } from "../../features/stations/screens/home.screen";
import {AccountScreen} from "../../features/account/screens/account.screen";
import { PaymentScreen } from "../../features/stations/screens/payment.screen";
import {AccountNavigator} from "../../infrastructure/navigation/account.navigator";
import { SettingsScreen } from "../../features/stations/screens/settings.screen";
import { PaymentScreen2 } from "../../components/pay/pay.component";
import { TripInfoScreen } from "../../features/stations/components/trip-info.component";

const Tab = createBottomTabNavigator();

const TAB_ICON = {
    Trips:"md-bus-outline",
    Tickets:"md-cart-outline",
    'My Page':"md-person-circle-outline",
    Map: "md-map",
    Settings:"md-settings-outline",
    Help:"md-help-circle-outline",  
  };
  

const Settings = () => (
  <SafeArea>
    <Text>Help</Text>
  </SafeArea>
);
const Map = () => (
  <SafeArea>
    <Text>Map</Text>
  </SafeArea>
);

const createScreenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  
  return {
    headerShown: false,
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} options={{headerShown: false}} size={size} color={color} />
    ),
  };
};

export const AppNavigator = () => (

    <Tab.Navigator
    
      screenOptions={createScreenOptions}
      tabBarOptions={{
        headerShown:false,
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
      }}
    >
      <Tab.Screen name="Trips" component={TripsNavigator2} />
      <Tab.Screen name="Tickets" component={TripsNavigator} />
      <Tab.Screen name="My Page" component={AccountNavigator} />
      <Tab.Screen name="Map" component={MapScreen} />
      <Tab.Screen name="Help"  component={SettingsScreen} />
    </Tab.Navigator>

);