import React ,{useContext} from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity, View, } from "react-native";
import { StationsInfoCard } from "../stations/stations-info-card.component";
import { SafeArea } from "../stations/components/utility/safe-area.component";
import  {StationsContext}  from "../../services/stations/stations.context";
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Search } from "./search.component";
import { Spacer } from "../../features/stations/components/spacer/spacer.component";
import { FavouritesContext } from "../../services/favourites/favourites.context";





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
const Loading = styled(ActivityIndicator)`
margin-left:-25px;
`;


export const StationsScreen = ({navigation} ) => {

  const {isLoading, error, stations} = useContext(StationsContext);
  const {favourites} = useContext(FavouritesContext);

  return (
  <SafeArea >
    {isLoading&&(
    <LoadingContainer>
    <Loading  animating={true} color={Colors.blue300}/>

    </LoadingContainer>

    )}
    <Search/>
    
    <TripList 
    data= {stations}
    renderItem={({item}) => {
      console.log(item);
      return (
   
   
           <TouchableOpacity
              onPress={() => navigation.navigate("TripDetail",{station:item},)}
            >
              <Spacer position="bottom" size="large">
                <StationsInfoCard station ={item} />
              </Spacer>
            </TouchableOpacity>


      

        
        );}}
      keyExtractor ={(item) =>item.name}
    />   

  </SafeArea>
);
};


