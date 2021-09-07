import React, { useState,useContext, useEffect } from "react";
import { Searchbar,Text, View } from "react-native-paper";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MStationsContext } from "../../../services/station/mstations.context";
import { AntDesign } from "@expo/vector-icons";
import { FadeInView } from "../../../components/animations/fade.animation";

const SearchContainer = styled.View`
  padding: 16px; {/*16px*/}
  padding-top:130px; {/*130px*/}
  background-color:rgba(255,255,255,0.1);
  position: absolute;
  height:100%;
  width:100%;
`;

const TitleCustom=styled.Text`
color:${(props) => props.theme.colors.ui.quaternary};
text-align: center;
padding-left:0px;
padding-bottom:20px;
background-color:rgba(255,255,255,0.1);
font-weight:${(props) => props.theme.fontWeights.bold};
font-size: ${(props) => props.theme.fontSizes.h4};
`;


export const Search = (isFavouritesToggled, onFavouritesToggled) => {
  const { keyword, search } = useContext(MStationsContext);
  const [ searchKeyword, setSearchKeyword ] = useState(keyword);
  useEffect(()=>{ setSearchKeyword(keyword)},[keyword]);
  return (
    <SearchContainer>

     <TitleCustom>
     Where to travel?
    </TitleCustom>
        <Searchbar
          placeholder="I want to go to..."
          value={searchKeyword}
          onSubmitEditing={() => {
            search(searchKeyword);
          }}
          onChangeText={(text) => {
            setSearchKeyword(text);
            }}

        /> 
    </SearchContainer>

  );
};