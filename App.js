import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {Text} from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { StationsScreen } from "./src/features/screens/station-info.screen";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from "./src/features/stations/components/utility/safe-area.component";
import { Ionicons, FontAwesome} from '@expo/vector-icons';
import { StationsContextProvider } from "./src/services/stations/stations.context";
import { MStationsContextProvider } from "./src/services/station/mstations.context";
 
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

const TAB_ICON = {
  Trips:"md-bus-outline",
  Settings:"md-settings",
  Map: "md-map",

};

const Tab = createBottomTabNavigator();
const Settings = () => <SafeArea><Text>Settings</Text></SafeArea>;
const Map = () => <SafeArea><Text>Map</Text></SafeArea>;
 
const createScreenOptions =({route})=>{
  const iconName = TAB_ICON[route.name];
  return{
    tabBarIcon:({size, color}) =>(<Ionicons name={iconName} size={size} color={color} />),
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
  }
}

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
      Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
 
  return (
    <>
    <ThemeProvider theme ={theme}>
      <MStationsContextProvider>
      <StationsContextProvider>
      <NavigationContainer>
      <Tab.Navigator
      screenOptions={createScreenOptions}
      >
        <Tab.Screen name="Trips" component={StationsScreen} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
    </StationsContextProvider>
    </MStationsContextProvider>
      </ThemeProvider>      
      <ExpoStatusBar style="auto" />
    </>
  );
}