import React ,{useState} from "react";
import { SafeArea } from "../../features/stations/components/utility/safe-area.component";
import { List,TextInput,Card, Button, Colors,ActivityIndicator  } from "react-native-paper";
import { ScrollView, View,Text } from "react-native";
import { Spacer } from "../../features/stations/components/spacer/spacer.component";
import styled from "styled-components/native";
import {AuthButton} from "../../features/account/components/account.styles"


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


export const PaymentScreen2 = ()=>{

    const [initialStationExpanded, setInitialStationExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [finalStationExpanded, setFinalStationExpanded] = useState(false);  

    const [name, setName] = React.useState('');
    const [fname, setFname] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [noPass, setNoPass] = React.useState('');
    const [email, setEmail] = React.useState('');

return (
    <SafeArea>
      <PaymentContainer>
      <Spacer>
          <CusText>Success! </CusText></Spacer>
    <Spacer>
    <CusText>You have Booked! 
      An SMS and EMAIL contianing ticket number and all your trip informamtion has been sent. 
      Booking will be invalid two hours from now. Remeber any tickets bought within two hours of boarding are not guarnteed.
    </CusText>
    </Spacer>
     <PaymentButtonContainer>
       <Spacer>
 <AuthButton
    icon="check-box-outline"
    size={24}
    mode="contained"
    onPress={() => {
    console.log("Pressed!");
    }}
  /></Spacer>
  </PaymentButtonContainer>
 </PaymentContainer>
     
    </SafeArea>
);
 };

