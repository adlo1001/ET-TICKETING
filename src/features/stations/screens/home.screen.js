import React ,{useContext} from "react";
import styled from "styled-components/native";
import {Button, StyleSheet} from "react-native";
import { FlatList, TouchableOpacity, View, } from "react-native";
import { SafeArea } from "../components/utility/safe-area.component";
import  {TripsContext}  from "../../../services/trips/trips.context";
import { ActivityIndicator, Colors } from 'react-native-paper';
import {Search} from "./search.component"
import { AccountBackground } from "../../account/components/account.styles";
import { LogoutButton } from "../../account/components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const LoadingContainer = styled(View)`

top:50%;
left:50%;
`;
const Loading = styled(ActivityIndicator)`
padding-bottom:450px;

`;


export const HomeScreen = ({navigation} ) => {
  const {isLoading, error, stations} = useContext(TripsContext);
  const {isAuthenticated, onLogout} = useContext(AuthenticationContext);
  

  return (
    <AccountBackground>
    {isLoading&&<Loading color={Colors.blue800} />}
    <Search navigation={navigation} initalStation="Addis Ababa" finalStation="Unknown location" busCompany="All"/>
    </AccountBackground>
  
  
);
};


