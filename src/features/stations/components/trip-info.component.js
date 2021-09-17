
import React ,{useContext, useState} from "react";
import styled from "styled-components/native";
import { FlatList, TouchableOpacity, View} from "react-native";
import { StationsInfoCard } from "../../stations/components/stations-info-card.component";
import { SafeArea } from "../components/utility/safe-area.component";
import  {StationsContext}  from "../../../services/stations/stations.context";
import { ActivityIndicator, Colors } from 'react-native-paper';
import { Spacer } from "../../../features/stations/components/spacer/spacer.component";
import {Card, Button, Text,TextInput} from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";


const TitleCustom=styled.Text`
color:red;
padding-left:20px;
background-color:${(props) => props.theme.colors.bg.primary};
`;

export const ChooseButton = styled(Button).attrs({
  color: colors.brand.primary
})`
  padding: ${(props) => props.theme.space[1]};
  z-index: 9;
`;


const FirstContainer = styled(View)`
padding-top:50px;
padding-left:10px;
`;

const SecondContainer = styled(View)`
padding-top:20px;
padding-left:10px;

z-index: 9;
`;
const Loading = styled(ActivityIndicator)`
margin-left:-25px;
`;

const ThirdContainer = styled(View)`
position:absolute;
bottom:20px;
padding-left:10px;
padding-right:10px;
width:100%;

`;


const CusTextInput = styled(TextInput)`
width:100%
background-color:${(props) => props.theme.colors.bg.primary};
color:${(props) => props.theme.colors.ui.tertiary};
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

const CustomCardTitle=styled(Card.Title)`
color:red;
`;


export const TripInfoScreen = ({navigation, initial, final} ) => {

  const {isLoading, error, stations} = useContext(StationsContext);
  const [isToggled, setIsToggled] = useState(false);
  
  
 
  return (

  <SafeArea >
      
    <FirstContainer>
   
    <CusTextInput 
        label="From ..."
        value="Addis Ababa"
        underlineColor={(props) => props.theme.colors.brand.primary} 
    /></FirstContainer>

    <SecondContainer>
   
      <CusTextInput
       label="To ..."
       value="Hawassa"
        underlineColor={(props) => props.theme.colors.brand.primary}
    />
   

   <TouchableOpacity
              onPress={() => console.log("Press me")}
            >
<CustomCard elevation={2} >
      <CustomCardTitle
        title="Traveller"
        subtitle= "Adult"
      />
      </CustomCard>
     
</TouchableOpacity>
    </SecondContainer>

 <ThirdContainer>
    <ChooseButton 
      mode="contained"
      onPress={() => navigation.navigate("DateTimePicker")}
    >Choose Departure</ChooseButton></ThirdContainer>

  </SafeArea>
);
};


