import React ,{useState} from "react";
import { SafeArea } from "../components/utility/safe-area.component";
import { List,TextInput,Card, IconButton, Colors,ActivityIndicator  } from "react-native-paper";
import { ScrollView, View } from "react-native";
import { Spacer } from "../components/spacer/spacer.component";
import styled from "styled-components/native";
import { useNavigation } from '@react-navigation/native';
import { PaymentScreen2 } from "../../../components/pay/pay.component";
import { CustDateTimePicker } from "../components/date-time-picker.component";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/typography/text-component";


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
    const [noPass, setNoPass] = React.useState('1');
    const [email, setEmail] = React.useState('');

    const [error1, setError1] = React.useState('');
    const [error2, setError2] = React.useState('');
    const [error3, setError3] = React.useState('');
    const [error4, setError4] = React.useState('');
    const [error5, setError5] = React.useState('');

return (
    <SafeArea>
      <PaymentContainer>
      <Spacer>
          <CusTextInput
         label="Name"
         value={name}
         underlineColor={colors.brand.primary}
         selectionColor={colors.brand.primary}
         outlineColor={colors.brand.primary}
         onChangeText={name => setName(name)}
    />
          <Spacer size="large">
            <Text variant="error">{error1}</Text>
          </Spacer>
        
    </Spacer>
    
    <Spacer>
          <CusTextInput
         label="Father's Name"
         value={fname}
         underlineColor={colors.brand.primary}
         selectionColor={colors.brand.primary}
         outlineColor={colors.brand.primary}
         onChangeText={fname => setFname(fname)}
    />
      <Spacer size="large">
            <Text variant="error">{error2}</Text>
          </Spacer>
    
    </Spacer><Spacer>
          <CusTextInput
         label="Phone"
         value={phone}
         underlineColor={colors.brand.primary}
         selectionColor={colors.brand.primary}
         outlineColor={colors.brand.primary}
         onChangeText={phone => setPhone(phone)}
    />
      <Spacer size="large">
            <Text variant="error">{error3}</Text>
          </Spacer>
    </Spacer><Spacer>
         <CusTextInput
         label="Email"
         value={email}
         underlineColor={colors.brand.primary}
         selectionColor={colors.brand.primary}
         outlineColor={colors.brand.primary}
         onChangeText={email => setEmail(email)}
    />
      <Spacer size="large">
            <Text variant="error">{error4}</Text>
          </Spacer>
    </Spacer><Spacer>
        <CusTextInput
         label="Number of Passengers"
         value={noPass}
         underlineColor={colors.brand.primary}
         selectionColor={colors.brand.primary}
         outlineColor={colors.brand.primary}
         onChangeText={noPass => setNoPass(noPass)}
/>
<Spacer size="large">
            <Text variant="error">{error5}</Text>
          </Spacer>
</Spacer>
     <PaymentButtonContainer>
       <Spacer>
 <IconButton
    icon="cart-arrow-right"  
    color={colors.brand.primary}
    size={48}
    onPress={() => {       
      if (!name) setError1("Please enter firstname!");
      else if (!fname) setError2("Please enter secondname!");
      else if (!phone) setError3("Please enter phone number!");
      else if (!email) setError4("Please enter email!");
      else if (!email.includes("@")) {setError4("Please enter valid email!");setEmail("");}
      else if (!noPass) setError5("Please enter number of Passengers!");
      else if (isNaN(noPass)) setError5("Please enter valid number!");
      else if(name&&fname&&phone&&email&&noPass)
      navigation.navigate(PaymentScreen2);  
    }}
  /></Spacer>
  </PaymentButtonContainer>
 </PaymentContainer>
    </SafeArea>
);
 };

