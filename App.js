import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {Text} from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeArea } from "./src/features/stations/components/utility/safe-area.component";
import { Ionicons, FontAwesome} from '@expo/vector-icons';
import { TripsContextProvider } from "./src/services/trips/trips.context";
import { StationsContextProvider } from "./src/services/station/stations.context";
import { Navigation } from "./src/infrastructure/navigation"; 
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { FavouritesContextProvider } from "./src/services/favourites/favourites.context";
import { BookedContextProvider } from "./src/services/booked/booked.context";
import { AuthenticationContextProvider } from "./src/services/authentication/authentication.context";
import * as firebase from "firebase";
import { TicketsContextProvider } from "./src/services/trips/tickets.context";





const firebaseConfig = {
  apiKey: "AIzaSyDi8FwgAlI818nyuW-7WMUWa8BfmmiAAVQ",
  authDomain: "et-ticketing-6b08a.firebaseapp.com",
  projectId: "et-ticketing-6b08a",
  storageBucket: "et-ticketing-6b08a.appspot.com",
  messagingSenderId: "552968375475",
  appId: "1:552968375475:web:7fcd30063418bca18eb4c6"

};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}



export default function App() {
  const[isAuthenticated, setIsAuthenticated]=useState(false);
  useEffect(()=>{
    
    setTimeout(() => {
      firebase
        .auth()
        .signInWithEmailAndPassword("adlo1001@test.com", "test1234")
        .then((user) => {
          setIsAuthenticated(true);
        })
        .catch((e) => {
          console.log(e);
        });
    }, 2000);
  },[]);
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
      <TicketsContextProvider>
    <AuthenticationContextProvider>
      <BookedContextProvider>
      <FavouritesContextProvider>
      <StationsContextProvider>
      <TripsContextProvider>
     <Navigation/>
    </TripsContextProvider>
    </StationsContextProvider>
    </FavouritesContextProvider>
    </BookedContextProvider>
    </AuthenticationContextProvider></TicketsContextProvider>
      </ThemeProvider>      
      <ExpoStatusBar style="auto" />
    </>
  );
}