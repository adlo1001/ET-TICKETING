
import React ,{useContext, useEffect, useState} from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity, View,Text, } from "react-native";
import { StationsInfoCard } from "../components/stations-info-card.component";
import { SafeArea } from "../components/utility/safe-area.component";
import  {TripsContext}  from "../../../services/trips/trips.context";
import { ActivityIndicator, Card, Colors, } from 'react-native-paper';
import { Spacer } from "../components/spacer/spacer.component";
import { FavouritesBar } from "../../../components/favourites/fouvarites-bar.component";



export const StationCard = styled(Card)`
background-color:${(props) =>props.theme.colors.brand.primary};
margin-bottom: ${(props) => props.theme.space[3]};
padding:16px;

`;

const TitleCustom=styled.Text`
color:red;
padding-left:20px;
background-color:${(props) => props.theme.colors.bg.primary};
`;

const TripList = styled(FlatList).attrs({
contentContainerStyle:{padding:16,}
  
})``;

const LoadingContainer = styled(View)`
position:absolute;
top:50%;
left:50%;
`;


const FavouritesContainer = styled(View)`
padding-top:0px;
padding:16px;

z-index: 9;
`;
const Loading = styled(ActivityIndicator)`
margin-left:-25px;
`;


export const StationsScreen = ({navigation, route} ) => {

  const {isLoading, error, alltrips, trips} = useContext(TripsContext);
  const [isToggled, setIsToggled] = useState(false);


  return (
  <SafeArea >

    {isLoading&&(
    <LoadingContainer>
    <Loading  animating={true} color={Colors.blue300}/>
   
    </LoadingContainer>
    )}
   
    {isToggled&&<FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />}
    <TripList 
    data= {trips}
    renderItem={({item}) => {
      return (
           <TouchableOpacity
              onPress={() => navigation.navigate("TripDetail",{station:item},)}
            >
              <Spacer position="bottom" size="large">
                <StationsInfoCard trips ={item} navigation={navigation}/>
              </Spacer>
            </TouchableOpacity>

        );}}
      keyExtractor ={(item) =>item.name}
    />   
  </SafeArea>
);
};