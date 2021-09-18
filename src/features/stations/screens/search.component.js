import React, { useState,useContext, useEffect } from "react";
import { Searchbar,Text, View,Button } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MStationsContext } from "../../../services/station/mstations.context";
import { AntDesign } from "@expo/vector-icons";
import { Avatar } from 'react-native-paper';
import {TripInfoScreen} from "../../stations/components/trip-info.component";
import { useNavigation } from '@react-navigation/native';

const SearchBarBar = styled(Searchbar)`
 margin-left:auto;
 margin-right:auto;
 width:100%;
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


const FrontImage = styled(Avatar.Image).attrs({
  source:require('../../../../assets/splash_old.png'),
  size:96
})`
margin-left: auto;
margin-right: auto;
background-color:${(props) => props.theme.colors.brand.primary};

`;

export const Search = (isFavouritesToggled, onFavouritesToggled) => {
  const { keyword, search } = useContext(MStationsContext);
  const [ searchKeyword, setSearchKeyword ] = useState(keyword);
  //useEffect(()=>{ setSearchKeyword(keyword)},[keyword]);
  const navigation= useNavigation();
  useEffect(()=>{ search(searchKeyword);   
  },[]);


  return (
    <SearchContainer>

<FrontImage  size={64}  />

      <TitleCustom>
     Where to travel?
    </TitleCustom>
        <SearchBarBar
          placeholder="I want to go to..."
          value={searchKeyword}
          autoCapitalize="none"
          onSubmitEditing={() => {
            console.log("KeyWord_>"+searchKeyword);
            search(searchKeyword);
            navigation.push('TripInfoScreen', {
              finalStation: searchKeyword,initialStation:'Addis Ababa'});
           
          }}
          onChangeText={(text) => {
            setSearchKeyword(text);
          
            }}

        /> 
    </SearchContainer>

  );
};