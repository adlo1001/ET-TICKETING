import React ,{useState} from "react";
import { SafeArea } from "../components/utility/safe-area.component";
import { List,TextInput,Card, IconButton, Colors,ActivityIndicator  } from "react-native-paper";
import { ScrollView, View } from "react-native";
import { Spacer } from "../components/spacer/spacer.component";
import styled from "styled-components/native";
import { useNavigation } from '@react-navigation/native';
import { PaymentScreen2 } from "../../../components/pay/pay.component";


const PaymentContainer = styled(View)`
height:100%
padding:10px;
background-color:${(props) => props.theme.colors.bg.primary};
;
`;
const Loading = styled(ActivityIndicator)`
margin-left:-25px;
`;

const CusTextInput = styled(TextInput)`
width:100%
background-color:${(props) => props.theme.colors.bg.primary};
color:${(props) => props.theme.colors.ui.tertiary};
`;

const PaymentButtonContainer = styled(View)`

padding-left:10px;
background-color:${(props) => props.theme.colors.bg.primary};
;
`;


export const PaymentScreen = ({route})=>{

    const navigation = useNavigation();
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
          <CusTextInput
         label="Name"
         value={name}
         underlineColor={(props) => props.theme.colors.brand.primary}
         onChangeText={name => setName(name)}
    /></Spacer>
    <Spacer>
          <CusTextInput
         label="Father's Name"
         value={fname}
         onChangeText={fname => setFname(fname)}
    /></Spacer><Spacer>
          <CusTextInput
         label="Phone"
         value={phone}
         onChangeText={phone => setPhone(phone)}
    /></Spacer><Spacer>
         <CusTextInput
         label="Email"
         value={email}
         onChangeText={email => setEmail(email)}
    /></Spacer><Spacer>
        <CusTextInput
         label="Number of Passengers"
         value={noPass}
         onChangeText={noPass => setNoPass(noPass)}
/></Spacer>
     <PaymentButtonContainer>
       <Spacer>
 <IconButton
    icon="cart-arrow-right"  
    color={Colors.blue300}
    size={50}
    onPress={() => {
    navigation.navigate(PaymentScreen2);

    }}
  /></Spacer>
  </PaymentButtonContainer>
 </PaymentContainer>
    </SafeArea>
);
 };

