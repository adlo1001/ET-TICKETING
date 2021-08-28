import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Searchbar,Text, View,  } from "react-native-paper";
import styled from "styled-components/native";
import { MStationsContext } from "../../services/station/mstations.context";

const SearchContainer = styled.View`
  padding: 16px;
  background-color: white;
`;

const SearchBarContainer = styled.View`
  padding: 16px;
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
  const { keyword, search } = useContext(MStationsContext);
  const [ searchKeyword, setSearchKeyword ] = useState(keyword);

  useEffect(() => {
    search(searchKeyword);
  }, []);

  return (
    <SearchContainer>
        <TitleCustom>
      <Text>ET-TICKETING</Text>
    </TitleCustom>    
      <SearchBarContainer>
        <Searchbar
          placeholder="From "
          value={searchKeyword}
          onSubmitEditing={() => {
            search(searchKeyword);
          }}
          onChangeText={(text) => {
            setSearchKeyword(text);
          }}

        
        />
      </SearchBarContainer>
      <SearchBarContainer>
        <Searchbar
          placeholder="To "
        />
      </SearchBarContainer>
      
    <PickDateContainer>
      <TitleCustom> Pick-Date </TitleCustom>
     
      </PickDateContainer>
    
    </SearchContainer>

  );
};