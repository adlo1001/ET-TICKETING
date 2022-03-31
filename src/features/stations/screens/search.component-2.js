import React, { useState,useContext,useCallback, useEffect } from "react";
import { Searchbar,Text, View,Button } from "react-native-paper";
import { TouchableOpacity, ScrollView } from "react-native";
import styled from "styled-components/native";
import { StationsContext } from "../../../services/station/stations.context";


const Scroll = styled(ScrollView)`
height:60%;
`;


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
  align-items: flex-start;
`;

export const Search = ({_station, val1, val2}) => {
  
  const {keyword1, keyword2, search, keyword ,mstations,type, stationList,busList,keyword3 } = useContext(StationsContext);
  const [ searchKeyword1, setSearchKeyword1 ] = useState("Megenagna 2");
  const [ searchKeyword2, setSearchKeyword2 ] = useState(keyword2);
  const [ searchKeyword3, setSearchKeyword3 ] = useState(keyword3);
  const [isShown, setIsShown] = useState(false);
  const [isItemSelected, setIsItemSelected]= useState(false);

    useEffect(()=>{ 
      setSearchKeyword2(keyword);
     // setSearchKeyword3(keyword3);
     console.log("keyword"+ searchKeyword3);
      if({_station}._station==="boarding")
                      {search(searchKeyword1,2); }
                    else if({_station}._station==="destination") 
                    {search(searchKeyword2,3);}
                    else if({_station}._station==="bus") 
                    {
                      search(searchKeyword3,4);}
                
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
    ).sort((a, b) => a.stationName > b.stationName ? 1 : -1);
    const filteredStations2 = stationList.filter(
      item => {
        if(searchKeyword2!=null)
        return (
          item.stationName.toLowerCase().includes(searchKeyword2.toLowerCase()) ||
          item.city.toLowerCase().includes(searchKeyword2.toLowerCase()) ||
          item.subcity.toLowerCase().includes(searchKeyword2.toLowerCase())
        )
      }
    ).sort((a, b) => a.stationName > b.stationName ? 1 : -1);
    const filteredStations3 = busList.filter(
      item => {
        
        if(searchKeyword3!=null)
        return (
          item.companyName.toLowerCase().includes(searchKeyword3.toLowerCase())

        )
      }
    ).sort((a, b) => a.companyName > b.companyName ? 1 : -1);
  
    return (
    (_station==="boarding"&&_station!="bus")? <SearchContainer > 
     <SearchBarBar
          placeholder="FROM:"
          value={searchKeyword1}
          autoCapitalize="none"
          onSubmitEditing={() => {
            if (searchKeyword1!=""&&searchKeyword1!="station1"){
            setIsShown(false);
            //search(searchKeyword1,2);
            }
          }}
          onChangeText={(text) => {
            setIsShown(true);
            setSearchKeyword1(text);
  
            }}

      /> 

 
{isShown&&<Scroll>
{filteredStations1
          .map(station => (
     
      <Item>
      {/*<Image source={{ uri: station.photos[0] }} /> */}
      <TouchableOpacity onPress={() =>{
        setIsItemSelected(!isItemSelected); 
        setSearchKeyword1(station.stationName);
        //search(station.stationName,2);
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
      }</Scroll>}
    </SearchContainer>:
    
    (
    
      (_station==="destination")?
    <SearchContainer>
     <SearchBarBar
          placeholder="TO:"
          value={searchKeyword2}
          autoCapitalize="none"
          onSubmitEditing={() => {
            if (searchKeyword2!="" &&searchKeyword2!=="station2"){
            setIsShown(false);
            search(searchKeyword2,3);
            }
          }}
          onChangeText={(text) => {
            setIsShown(true);
            setSearchKeyword2(text);
           }}

      /> 

{isShown&&<Scroll>
    {filteredStations2
          .map(station => (
    
      <Item>
      {/*<Image source={{ uri: station.photos[0] }} /> */}
      <TouchableOpacity onPress={() =>{
        setIsItemSelected(!isItemSelected); 
        setSearchKeyword2(station.stationName);
        //search(station.stationName,3);
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
      }</Scroll>}
    </SearchContainer>:
    //Choose Bus
    (
      <SearchContainer>
     <SearchBarBar
          placeholder="BUS"
          value={searchKeyword3}
          autoCapitalize="none"
          onSubmitEditing={() => {
            if (searchKeyword3!=""){
            setIsShown(false);
            }
          }}
          onChangeText={(text) => {
            setIsShown(true);     
            setSearchKeyword3(text);
           }}

      /> 

{isShown&&<Scroll>
    {filteredStations3
          .map(station => (
    
      <Item>
      <TouchableOpacity onPress={() =>{
        setIsItemSelected(!isItemSelected); 
        setSearchKeyword3(station.companyName);
        search(station.companyName,4);
      
       setIsShown(false);
      }
        }>
      {isItemSelected ? <Text center variant="label2" numberOfLines={3}>
        {station.companyName}  
      </Text>: <Text center variant="label" numberOfLines={3}>
        {station.companyName}  

      </Text>}
      </TouchableOpacity>
    </Item>
      
      
      ))
      }</Scroll>}
    </SearchContainer>
    )
    
    )
    

  );
};