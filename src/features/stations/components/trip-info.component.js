
import React ,{useContext, useState} from "react";
import styled from "styled-components/native";
import {View} from "react-native";
import { SafeArea } from "../components/utility/safe-area.component";
import  {TripsContext}  from "../../../services/trips/trips.context";
import { StationsContext } from "../../../services/station/stations.context";
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Spacer } from "../../../features/stations/components/spacer/spacer.component";
import {Card, Button, Text,TextInput} from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { CustDateTimePicker } from "./date-time-picker.component";
import {Search} from "../screens/search.component-2";

const TitleCustom=styled.Text`
color:red;
padding-left:20px;
background-color:${(props) => props.theme.colors.bg.primary};
`;

export const ChooseButton = styled(Button).attrs({
  color: colors.bg.primary,
})`
  padding: ${(props) => props.theme.space[1]};
  background-color:${(props) => props.theme.colors.brand.primary};
  width:90%;
  margin-left:auto;
  margin-right:auto;
  z-index: 9;
`;


const FirstContainer = styled(View)`
padding-top:50px;
padding-left:10px;
`;

const SecondContainer = styled(View)`
padding-top:0px;
padding-left:10px;

`;

const ThirdContainer = styled(View)`
padding-top:0px;
padding-left:10px;
`;

const Loading = styled(ActivityIndicator)`
margin-left:-25px;
`;

const FourthContainer = styled(View)`
position:absolute;
bottom:20px;
padding-left:10px;
padding-right:10px;
width:100%;

`;


const CusTextInput = styled(TextInput).attrs({
  color:colors.brand.primary,
})`
width:100%
background-color:${(props) => props.theme.colors.bg.primary};

`;

const TextCustom=styled.Text`
color:${(props) => props.theme.colors.text.inverse};
text-align: center;
padding-left:0px;
padding-bottom:20px;
background-color:rgba(255,255,255,0.1);
font-weight:${(props) => props.theme.fontWeights.bold};
font-size: ${(props) => props.theme.fontSizes.h1};
`;


const CustomCard = styled(Card)`
background-color:${(props) =>props.theme.colors.bg.primary};
margin-bottom: ${(props) => props.theme.space[3]};
`;

const CustomCardCover=styled(Card.Cover)`
padding:${(props) => props.theme.space[3]};
background-color:${(props) => props.theme.colors.bg.primary};
`;


export const TripInfoScreen = ({navigation,route} ) => {

  const [initialStation, setInitialStation] = React.useState(route.params.initialStation);
  const [finalStation, setFinalStation] = React.useState(route.params.finalStation);
  const [busCompany, setBusCompany] = React.useState("All");
  const {isLoading, error, stations, onTripsSearch} = useContext(TripsContext);
  const {boardingTime,keyword3} = useContext(StationsContext);
  
 
  return (
  
  <SafeArea >
      
    <FirstContainer>
       <Search _station="boarding"
       val={initialStation}
       />
    </FirstContainer>

    <SecondContainer> 
    <Search _station="destination" 
    val={finalStation}/>
    </SecondContainer>
    <ThirdContainer> 
    <Search _station="bus" 
    val={busCompany}/>
    </ThirdContainer>


<CustDateTimePicker/>
<FourthContainer>
<ChooseButton onPress={()=>{
  if(initialStation!="station1" &&finalStation!="station2")
  onTripsSearch(initialStation,finalStation,boardingTime,keyword3);
 if(finalStation!=null)
  if(initialStation!=null)
  navigation.navigate('Trip',{destination:finalStation,boarding:initialStation,customer:"new1",bus:keyword3})}}>Find Transportation
</ChooseButton>
</FourthContainer>
  </SafeArea>
);
};
