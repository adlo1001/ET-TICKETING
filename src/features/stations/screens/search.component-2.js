import React, { useState,useContext,useCallback, useEffect } from "react";
import { Searchbar,Text, View,Button } from "react-native-paper";
import { TouchableOpacity, ScrollView } from "react-native";
import styled from "styled-components/native";
import { MStationsContext } from "../../../services/station/mstations.context";
import { AntDesign } from "@expo/vector-icons";
import { Avatar } from 'react-native-paper';
import {TripInfoScreen} from "../components/trip-info.component";
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

  background-color:rgba(255,255,255,0.1);
  width:100%;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

export const Search = ({_station, val1, val2}) => {
  
  const {keyword1, keyword2, search, keyword ,mstations,type, stationList } = useContext(MStationsContext);
  const [ searchKeyword1, setSearchKeyword1 ] = useState("Addis Ababa");
  const [ searchKeyword2, setSearchKeyword2 ] = useState(keyword2);
  const [destinationQuery, setDestinationQuery] = useState(val2);
  const [boardingQuery, setBoardingQuery] = useState(val1);
  const navigation= useNavigation();
  const [isShown, setIsShown] = useState(false);
  const [isItemSelected, setIsItemSelected]= useState(false);

    useEffect(()=>{ 
      setSearchKeyword2(keyword);
      if({_station}==="boarding")
                      {search(searchKeyword1,2); }
                    else if({_station}==="destination") 
                    {search(searchKeyword2,3);}
      type();
    },[]);
  
   
    const filteredStations1 = stationList.filter(
      item => {
        if(searchKeyword1!=null)
        return (
          item.stationName.toLowerCase().includes(searchKeyword1.toLowerCase()) ||
          item.city.toLowerCase().includes(searchKeyword1.toLowerCase()) ||
          item.subcity.toLowerCase().includes(searchKeyword1.toLowerCase())
        )
      }
    )
    const filteredStations2 = stationList.filter(
      item => {
        if(searchKeyword2!=null)
        return (
          item.stationName.toLowerCase().includes(searchKeyword2.toLowerCase()) ||
          item.city.toLowerCase().includes(searchKeyword2.toLowerCase()) ||
          item.subcity.toLowerCase().includes(searchKeyword2.toLowerCase())
        )
      }
    )
    return (
    (_station==="boarding")? <SearchContainer >
     <SearchBarBar
          placeholder={_station}
          value={searchKeyword1}
          autoCapitalize="none"
          onSubmitEditing={() => {
            if (searchKeyword1!=""){
            setIsShown(false);
            //search(searchKeyword1,2);
            }
          }}
          onChangeText={(text) => {
            setIsShown(true);
            setSearchKeyword1(text);
  
            }}

      /> 

 
{isShown&&<ScrollView>
{filteredStations1
          .map(station => (
     
      <Item>
      {/*<Image source={{ uri: station.photos[0] }} /> */}
      <TouchableOpacity onPress={() =>{
        setIsItemSelected(!isItemSelected); 
        setSearchKeyword1(station.stationName);
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
      }</ScrollView>}
    </SearchContainer>:
    <SearchContainer>
     <SearchBarBar
          placeholder={_station}
          value={searchKeyword2}
          autoCapitalize="none"
          onSubmitEditing={() => {
            if (searchKeyword2!=""){
            setIsShown(false);
            //search(searchKeyword2,3);
            }
          }}
          onChangeText={(text) => {
            setIsShown(true);
            setSearchKeyword2(text);
           }}

      /> 

{isShown&&<ScrollView>
    {filteredStations2
          .map(station => (
    
      <Item>
      {/*<Image source={{ uri: station.photos[0] }} /> */}
      <TouchableOpacity onPress={() =>{
        setIsItemSelected(!isItemSelected); 
        setSearchKeyword2(station.stationName);
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
      }</ScrollView>}
    </SearchContainer>

  );
};