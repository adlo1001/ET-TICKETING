import React, { useState,useContext,useCallback, useEffect } from "react";
import styled from "styled-components/native";
import WebView from "react-native-webview";
import { Platform } from "react-native";
import { useNavigation } from '@react-navigation/native';

import { Text } from "../../../components/typography/text-component";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MStationsContext } from "../../../services/station/mstations.context";
const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const CompactWebview = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 100px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
`;

const isAndroid = Platform.OS === "android";

export const CompactStationInfo = ({ station, id}) => {
  const Image = isAndroid ? CompactWebview : CompactImage;
  const [isItemSelected, setIsItemSelected]= useState(false);
  const { keyword, search } = useContext(MStationsContext);
  const [ searchKeyword, setSearchKeyword ] = useState(keyword);
  const navigation= useNavigation();



  //  useEffect(()=>{ search(searchKeyword);
   // },[]);
  

  return (
    <Item>
      {/*<Image source={{ uri: station.photos[0] }} /> */}
      <TouchableOpacity onPress={() =>{
        setIsItemSelected(!isItemSelected); 
        setSearchKeyword(station.stationName);
        search(searchKeyword);
      if(id==1)  navigation.push('TripInfoScreen', {
          finalStation: station.stationName,initialStation:'Addis Ababa'});
      else if(id==2) {console.log("Init:"+station.stationName)}
      else if(id==3)  {console.log("Dest:"+station.stationName)}
          
      }
        }>
      {isItemSelected ? <Text center variant="label2" numberOfLines={3}>
        {station.stationName}  
      </Text>: <Text center variant="label" numberOfLines={3}>
        {station.stationName}  
      </Text>}
      </TouchableOpacity>
    </Item>
  );
};
