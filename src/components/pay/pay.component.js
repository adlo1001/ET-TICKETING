import React ,{useState,useContext} from "react";
import { SafeArea } from "../../features/stations/components/utility/safe-area.component";
import { List,TextInput,Card, Button, Colors,ActivityIndicator  } from "react-native-paper";
import {Text as CusTextOther} from "../../components/typography/text-component";
import { ScrollView, View,Text } from "react-native";
import { Spacer } from "../../features/stations/components/spacer/spacer.component";
import styled from "styled-components/native";
import {AuthButton} from "../../features/account/components/account.styles";
import {CustDateTimePicker} from "./date-time-picker.component";
import {TicketsContext} from "../../services/trips/tickets.context";


const PaymentContainer = styled(View)`
height:100%
padding:10px;
background-color:${(props) => props.theme.colors.bg.primary};
`;
const Loading = styled(ActivityIndicator)`
margin-left:-25px;
`;

const CusTextOtherOther = styled(CusTextOther)`
padding:10px;
`;

const CusText = styled.Text`
width:100%
background-color:${(props) => props.theme.colors.bg.primary};
padding:10px;
font-size:${(props) => props.theme.fontSizes.h5};

`;
const CusTextTitle = styled.Text`
width:100%
background-color:${(props) => props.theme.colors.bg.primary};
padding:10px;
font-size:${(props) => props.theme.fontSizes.h5};
font-weight:${(props) => props.theme.fontWeights.bold};

`;

const PaymentButtonContainer = styled(View)`

padding-left:10px;
background-color:${(props) => props.theme.colors.bg.primary};
;
`;


export const PaymentScreen2 = ({navigation, route})=>{

    const [initialStationExpanded, setInitialStationExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [finalStationExpanded, setFinalStationExpanded] = useState(false);  
  
    const [name, setName] = React.useState('');
    const [fname, setFname] = React.useState('');
    const [phone, setPhone] = React.useState('');
    const [noPass, setNoPass] = React.useState('');
    const [email, setEmail] = React.useState('');

    const {onGetTicket,error, response}=useContext(TicketsContext);


return (
    <SafeArea>

    <Spacer>
    <CusTextTitle >Success! </CusTextTitle></Spacer>
    <Spacer>
    <CusTextTitle>You have Booked!
    </CusTextTitle>
    <CusTextOtherOther variant="label">
      Ticket Number: {route.params.ticket}
      </CusTextOtherOther>
      <CusTextOtherOther variant="label">
      ID: {route.params.id}</CusTextOtherOther>
    <CusTextOtherOther variant="label">
      An SMS and EMAIL contianing ticket number and all your trip informamtion has been sent. 
      If not paid, booking will be invalid two hours from now. 
    
    </CusTextOtherOther>
    <CusTextOtherOther variant="error" >
     Remeber any tickets bought within two hours of boarding are not guaranteed.
    
    </CusTextOtherOther>
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
    </SafeArea>
);
};

