import React ,{useContext} from "react";
import styled from "styled-components/native";
import {Button, StyleSheet} from "react-native";
import { FlatList, TouchableOpacity, View, } from "react-native";
import { SafeArea } from "../components/utility/safe-area.component";
import  {StationsContext}  from "../../../services/stations/stations.context";
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Search } from "./search.component";
import { AccountBackground } from "../../account/components/account.styles";
import { LogoutButton } from "../../account/components/account.styles";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const LoadingContainer = styled(View)`
position:absolute;
top:50%;
left:50%;
`;
const Loading = styled(ActivityIndicator)`
margin-left:-25px;
`;



export const HomeScreen = ({navigation} ) => {
  const {isLoading, error, stations} = useContext(StationsContext);
  const {isAuthenticated, onLogout} = useContext(AuthenticationContext);
  

  return (

    <AccountBackground>
    {isAuthenticated&&<LogoutButton
    icon="lock-open-outline"
    mode="contained"
    onPress={() => onLogout()}
    > Log out </LogoutButton>}

    {isLoading&&(
    <LoadingContainer>
    <Loading  animating={true} color={Colors.blue300}/>
    </LoadingContainer>
    )}
    <Search/>
    </AccountBackground>
  
);
};


