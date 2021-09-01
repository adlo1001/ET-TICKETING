import React ,{useState} from "react";
import { SafeArea } from "../components/utility/safe-area.component";
import { StationsInfoCard } from "../../stations/components/stations-info-card.component";
import { List } from "react-native-paper";
import { ScrollView } from "react-native";
 


export const TripDetailScreen = ({route})=>{

    const [initialStationExpanded, setInitialStationExpanded] = useState(false);
    const [lunchExpanded, setLunchExpanded] = useState(false);
    const [dinnerExpanded, setDinnerExpanded] = useState(false);
    const [finalStationExpanded, setFinalStationExpanded] = useState(false);  

const {trip} = route.params;
return (
    <SafeArea>
        <StationsInfoCard station={trip}/>
        <ScrollView >
        <List.Accordion
          title="Initial Station"
          left={(props) => <List.Icon {...props} icon="bus-marker" />}
          expanded={initialStationExpanded}
          onPress={() => setInitialStationExpanded(!initialStationExpanded)}
        >
          <List.Item title="City" />
          <List.Item title="Region" />
        </List.Accordion>

        <List.Accordion
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="food-variant" />}
          expanded={lunchExpanded}
          onPress={() => setLunchExpanded(!lunchExpanded)}
        >
          <List.Item title="Burger w/ Fries" />
          <List.Item title="Steak Sandwich" />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>

        <List.Accordion
          title="Final Station"
          left={(props) => <List.Icon {...props} icon="bus-marker" />}
          expanded={finalStationExpanded}
          onPress={() => setFinalStationExpanded(!finalStationExpanded)}
        >
          <List.Item title="City" />
          <List.Item title="Region" />
        </List.Accordion>
      </ScrollView>

    </SafeArea>
);
 };

