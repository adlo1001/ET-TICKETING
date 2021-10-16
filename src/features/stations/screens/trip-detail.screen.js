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

const trip = route.params.station;

return (
    <SafeArea>
        <StationsInfoCard trips={trip} />
        <ScrollView >
        <List.Accordion
          title="Boarding Station"
          left={(props) => <List.Icon {...props} icon="bus-marker" />}
          expanded={initialStationExpanded}
          onPress={() => setInitialStationExpanded(!initialStationExpanded)}
        >
          <List.Item title={trip.trip.route.initialStation.stationName +"-"+trip.trip.route.initialStation.description}  />
          <List.Item title={trip.trip.route.initialStation.city}/>
          <List.Item title={"Trip Period: "+trip.trip.tripPeriod +" hours"} />
          <List.Item title=
          { "Boarding Time:"+  new Date(trip.trip.finalTime).toLocaleTimeString('en-US',{ hour: '2-digit', minute: '2-digit' }) +"  "+ new Date(trip.trip.finalTime).toLocaleDateString('en-GB')} 
        />
          
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
          title="Destination "
          left={(props) => <List.Icon {...props} icon="bus-marker" />}
          expanded={finalStationExpanded}
          onPress={() => setFinalStationExpanded(!finalStationExpanded)}
        >
         <List.Item title={trip.trip.route.finalStation.stationName +"-"+trip.trip.route.finalStation.description}  />
         <List.Item title=
          { "Arrival:"+  new Date(trip.trip.finalTime).toLocaleTimeString('en-US',{ hour: '2-digit', minute: '2-digit' }) +"  "+ new Date(trip.trip.finalTime).toLocaleDateString('en-GB')} 
        />
        </List.Accordion>
      </ScrollView>

    </SafeArea>
);
 };

