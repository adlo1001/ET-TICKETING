import React,{useContext, useEffect, useState} from "react";
import {Text} from "../../../components/typography/text-component";
import { StationCard,Info,Open, StationCardTitle,StationCardCover, Rating, Section, SectionEnd,Address  } from "../components/stations-info-card.styles";
import {Favourite} from "../../../components/favourites/favourite.component";
import {PayButton} from "../../../components/pay/pay.component";
import {Book} from "../../../components/booked/book.component";



export const StationsInfoCard = ({ trips = {}, navigation}) => {
  const [isLoading, setIsLoading]=useState(false);
  
  return (
    <StationCard elevation={2} >
      <StationCardTitle
        title={"From: "+trips.trip.route.initialStation.city +" To: "+ trips.trip.route.finalStation.city}
        subtitle= {trips.trip.route.description}
      />
   {(trips.trip.trans.owner.id==11001)&&<StationCardCover source={require("../../../../assets/buses/selam_bus.jpg")} />}
   {(trips.trip.trans.owner.id==11002)&&<StationCardCover source={require("../../../../assets/buses/abay_bus.jpg")} />}
   {(trips.trip.trans.owner.id==11003)&&<StationCardCover source={require("../../../../assets/buses/geda_bus.jpg")} />}
   {(trips.trip.trans.owner.id==11004)&&<StationCardCover source={require("../../../../assets/buses/golden_bus.jpg")} />}
   {(trips.trip.trans.owner.id==11005)&&<StationCardCover source={require("../../../../assets/buses/habesha_bus.jpg")} />}
   {(trips.trip.trans.owner.id==11006)&&<StationCardCover source={require("../../../../assets/buses/oda_bus.jpg")} />}
   {(trips.trip.trans.owner.id==11007)&&<StationCardCover source={require("../../../../assets/buses/selam_bus.jpg")} />}
   {(trips.trip.trans.owner.id==11008)&&<StationCardCover source={require("../../../../assets/buses/yegna_bus.jpg")} />}
      {(trips.trip.trans.owner.id==11009)&&<StationCardCover source={require("../../../../assets/buses/zemen_bus.jpg")} />}
      <Info>
      <Text variant="label" >Price:{trips.grossPriceAmnt+" Birr"}</Text>
      <Text variant="label" >
        Boarding: {   new Date(trips.trip.initialTime).toLocaleTimeString('en-US',{ hour: '2-digit', minute: '2-digit' }) +"  "+ new Date(trips.trip.initialTime).toLocaleDateString('en-GB')}
      </Text>
        <Section>

          <SectionEnd>
          <Book trips={trips} navigation={navigation}/>
              <Text variant="error"> SEAT AVAILABLE </Text>
          </SectionEnd> 
        </Section>
      </Info>
     {/* <Address>Some Address in Ethiopia</Address>*/}
    </StationCard>
  );
};

