import React ,{useState} from "react";
import { SafeArea } from "../../features/stations/components/utility/safe-area.component";
import { List,TextInput,Card, Button, Colors,ActivityIndicator  } from "react-native-paper";
import { ScrollView, View,Text,  Platform } from "react-native";
import { Spacer } from "../../features/stations/components/spacer/spacer.component";
import styled from "styled-components/native";
import {AuthButton} from "../../features/account/components/account.styles"
import DateTimePicker from '@react-native-community/datetimepicker';
import {colors} from "../../infrastructure/theme/colors";


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
  color: colors.brand.secondary
})`
  padding: ${(props) => props.theme.space[2]};
  background-color:${(props) => props.theme.colors.brand.primary};
  width:100%;
  top: 10px;
  right: 10px;
  left:10px;
  z-index: 9;
  

`;

export const CustDateTimePicker = ()=>{

  
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
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
        <CustButton 
        icon="camera"
        size={24}
          mode="contained" onPress={showDatepicker} > Choose Departure Date</CustButton>
      </View>
      
      {show && (
        <Spacer>
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          style={{flex:1, padding:40, left:100}}
        /></Spacer>
      )}
    </View>

);
 };

