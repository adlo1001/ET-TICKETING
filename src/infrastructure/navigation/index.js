import React,{useContext} from "react";
import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";
import { NavigationContainer } from "@react-navigation/native";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { PayNavigator } from "./payments.navigator";


export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>    

      {true? <AppNavigator/> : <AccountNavigator />}

    </NavigationContainer>
  );
};