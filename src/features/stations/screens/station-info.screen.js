import React ,{useContext, useState} from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity, View, } from "react-native";
import { StationsInfoCard } from "../../stations/components/stations-info-card.component";
import { SafeArea } from "../components/utility/safe-area.component";
import  {StationsContext}  from "../../../services/stations/stations.context";
import { ActivityIndicator, Colors } from 'react-native-paper';
import { FavouriteBarHolder } from "../../../components/favourites/fouvarites-bar.component";
import { Spacer } from "../../../features/stations/components/spacer/spacer.component";
import { FavouritesContext } from "../../../services/favourites/favourites.context";
import { FavouritesBar } from "../../../components/favourites/fouvarites-bar.component";



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
padding-left:10px;

z-index: 9;
`;
const Loading = styled(ActivityIndicator)`
margin-left:-25px;
`;


export const StationsScreen = ({navigation} ) => {

  const {isLoading, error, stations} = useContext(StationsContext);
  const [isToggled, setIsToggled] = useState(false);

  return (
  <SafeArea >
    {isLoading&&(
    <LoadingContainer>
    <Loading  animating={true} color={Colors.blue300}/>

    </LoadingContainer>

    )}
    <FavouritesContainer>
      <FavouriteBarHolder 
      isFavouritesToggled={isToggled} 
      onFavouritesToggle={()=> setIsToggled(!isToggled)} >
      </FavouriteBarHolder>
      {isToggled && <FavouritesBar/>}
    </FavouritesContainer>
    
    {isToggled&&<FavouritesBar favourites={favourites} onNavigate={navigation.navigate} />}

  

    <TripList 
    data= {stations}
    renderItem={({item}) => {
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


