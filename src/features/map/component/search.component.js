import React, { useState, useContext, useEffect } from "react";
import { Searchbar,Text, View  } from "react-native-paper";
import styled from "styled-components/native";
import { MStationsContext } from "../../../services/station/mstations.context";

const SearchContainer = styled.View`
  padding: 16px;
  background-color: white;
`;

const SearchBarContainer = styled.View`
  padding: 1px;
  background-color: white;
`;

const TitleCustom=styled.Text`
color:red;
padding-left:20px;
background-color:${(props) => props.theme.colors.bg.primary};
`;
const PickDateContainer = styled.View`
padding: 16px;
background-color: white;
`;

export const Search = () => {
  //const { keyword, search } = useContext(MStationsContext);
  const [ searchKeyword, setSearchKeyword ] = useState(keyword);
   
  //useEffect(()=>{ setSearchKeyword(keyword)},[keyword]);

  return (
    <SearchContainer>
      <SearchBarContainer>
        <Searchbar
          placeholder="Search for Station "
          icon="map"
          value={searchKeyword}
          onSubmitEditing={() => {
            search(searchKeyword);
          }}
          onChangeText={(text) => {
            setSearchKeyword(text);
          }}

        
        />
      </SearchBarContainer>
    </SearchContainer>

  );
};