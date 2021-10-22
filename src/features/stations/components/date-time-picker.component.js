import React ,{useState, useContext} from "react";
import { List,TextInput,Card, Button, Colors,ActivityIndicator, IconButton  } from "react-native-paper";
import { ScrollView, View,Text,  Platform } from "react-native";
import styled from "styled-components/native";
import DateTimePicker from '@react-native-community/datetimepicker';
import {colors} from "../../../infrastructure/theme/colors";
import { StationsContext } from "../../../services/station/stations.context";


const PaymentContainer = styled(View)`
height:100%
padding:10px;
background-color:${(props) => props.theme.colors.bg.primary};
;
`;
const Loading = styled(ActivityIndicator)`
margin-left:-25px;
`;

const CusText = styled.Text`
width:100%
background-color:${(props) => props.theme.colors.bg.primary};
padding:10px;
`;

const PaymentButtonContainer = styled(View)`

padding-left:10px;
background-color:${(props) => props.theme.colors.bg.primary};
;
`;

export const CustButton = styled(Button).attrs({
  color: colors.brand.secondary,
})`
  padding: ${(props) => props.theme.space[3]};
  right:10px;
  left:10px;

`;


export const MDateTimePicker = styled(DateTimePicker).attrs({
  color: Colors.red100, 
  
})`
  padding: ${(props) => props.theme.space[4]};
  z-index: 9;
  right:10px;
  left:10px;
  margin-left:auto;
  margin-right:auto;
  width:40%
  background-color:${(props) => props.theme.colors.bg.secondary};

`;

export const Section = styled.View`
flex-direction:row;
align-items:center;
margin-left:auto;
margin-right:auto;
`;

const DateShow=styled.Text`
color:${(props) => props.theme.colors.text.primary};
text-align: center;
padding-left:0px;
padding-bottom:20px;
background-color:rgba(255,255,255,0.1);
font-weight:${(props) => props.theme.fontWeights.bold};
`;

export const CustDateTimePicker = ()=>{
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [tmp, setTmp] = useState(new String (new Date()));
  const {boardingTime,chooseTime } = useContext(StationsContext);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    setTmp(currentDate.toString());
    chooseTime(currentDate);
  };


  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

return (
      <View>
      <View> 
        <Section>
      <IconButton icon="calendar" size={24} />
      <MDateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          margin-left="auto"
          margin-right= "auto"
          onChange={onChange}
          
        /></Section>
      <DateShow>Departure Date: {tmp}</DateShow>

        </View>
        
    </View>

);
 };