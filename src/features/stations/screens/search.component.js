import React, { useState,useContext,useCallback, useEffect } from "react";
import { Searchbar,Text, View,Button } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MStationsContext } from "../../../services/station/mstations.context";
import { AntDesign } from "@expo/vector-icons";
import { Avatar } from 'react-native-paper';
import {TripInfoScreen} from "../../stations/components/trip-info.component";
import { useNavigation } from '@react-navigation/native';
import { StationsInfoCard } from "../components/stations-info-card.component";
import { CompactStationInfo } from "./compact-station-info.screen";

const SearchBarBar = styled(Searchbar)`
 margin-left:auto;
 margin-right:auto;
 width:100%;
 border-radius:25px;
`;

const SearchContainer = styled.View`
  padding: 16px; {/*16px*/}
  padding-top:130px; {/*130px*/}
  background-color:rgba(255,255,255,0.1);
  position: absolute;
  height:100%;
  width:100%;
`;


const TitleCustom=styled.Text`
color:${(props) => props.theme.colors.text.inverse};
text-align: center;
padding-left:0px;
padding-bottom:20px;
background-color:rgba(255,255,255,0.1);
font-weight:${(props) => props.theme.fontWeights.bold};
font-size: ${(props) => props.theme.fontSizes.h4};
`;

const FrontImageHolder1 = styled.View`
 
  background-color:red;
  padding:1px; 
  border-radius:75px;
  margin-left: auto;
  margin-right: auto;
`;

const FrontImageHolder2 = styled.View`
 
  background-color:yellow;
  padding:1px; 
  border-radius:75px;
  margin-left: auto;
  margin-right: auto;
`;
const FrontImageHolder3 = styled.View`
 
  background-color:green;
  padding:1px; 
  border-radius:75px;
  margin-left: auto;
  margin-right: auto;
`;

const FrontImage = styled(Avatar.Image).attrs({
  source:require('../../../../assets/splash_old.png'),
  size:96
})`
margin-left: auto;
margin-right: auto;
background-color:${(props) => props.theme.colors.brand.primary};
`;
const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

export const Search = (isFavouritesToggled, onFavouritesToggled) => {
  
  const { keyword, search ,mstations,type, stationList } = useContext(MStationsContext);
  const [ searchKeyword, setSearchKeyword ] = useState(keyword);
  const [destinationQuery, setDestinationQuery] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [isItemSelected, setIsItemSelected]= useState(false);
  const navigation= useNavigation();


    useEffect(()=>{ search(searchKeyword,1);type();
    },[]);
  
  
    const filteredStations = stationList.filter(
      item => {
        return (
          item.stationName.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          item.city.toLowerCase().includes(searchKeyword.toLowerCase()) ||
          item.subcity.toLowerCase().includes(searchKeyword.toLowerCase())
        )
      }
    )

    return (
    
    <SearchContainer>
      <FrontImageHolder3 >
      <FrontImageHolder2 >
<FrontImageHolder1 >
    <FrontImage  size={64}  /></FrontImageHolder1></FrontImageHolder2></FrontImageHolder3>

      <TitleCustom>
     Where to travel?
    </TitleCustom>
        <SearchBarBar
          placeholder="I want to go to..."
          value={searchKeyword}
          autoCapitalize="none"
          onSubmitEditing={() => {
            if (searchKeyword!=""){
            search(searchKeyword,1);
            navigation.push('TripInfoScreen', {
              finalStation: searchKeyword,initialStation:'Addis Ababa'});
            }
          }}
          onChangeText={(text) => {
            setIsShown(true);
            setSearchKeyword(text);
            }}

        /> 

   
   {filteredStations
          .map(station => (
      isShown&&
      <Item>
      {/*<Image source={{ uri: station.photos[0] }} /> */}
      <TouchableOpacity onPress={() =>{
        setIsItemSelected(!isItemSelected); 
        setSearchKeyword(station.stationName);
       setIsShown(false);
      }
        }>
      {isItemSelected ? <Text center variant="label2" numberOfLines={3}>
        {station.stationName}  
      </Text>: <Text center variant="label" numberOfLines={3}>
        {station.stationName}  
      </Text>}
      </TouchableOpacity>
    </Item>
      
      
      ))
      }

    </SearchContainer>

  );
};