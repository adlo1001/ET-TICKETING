import React,{useContext, useEffect, useState} from "react";
import {Text} from "../../../components/typography/text-component";
import { StationCard,Info,Open, StationCardTitle,StationCardCover, Rating, Section, SectionEnd,Address  } from "../components/stations-info-card.styles";
import {Favourite} from "../../../components/favourites/favourite.component";
import {Book} from "../../../components/booked/book.component";



export const StationsInfoCard = ({ trips = {}, navigation}) => {
  const [isLoading, setIsLoading]=useState(false);

  return (
    <StationCard elevation={2} >
      <StationCardTitle
        title={"From: "+trips.trip.route.initialStation.city +" To: "+ trips.trip.route.finalStation.city}
        subtitle= {trips.trip.route.description }
        
      />
   {(trips.trip.trans.owner.id==0)&&<StationCardCover source={require("../../../../assets/buses/selam_bus.jpg")} />}
   {(trips.trip.trans.owner.id==1)&&<StationCardCover source={require("../../../../assets/buses/abay_bus.jpg")} />}
   {(trips.trip.trans.owner.id==5)&&<StationCardCover source={require("../../../../assets/buses/geda_bus.jpg")} />}
   {(trips.trip.trans.owner.id==3)&&<StationCardCover source={require("../../../../assets/buses/golden_bus.jpg")} />}
   {(trips.trip.trans.owner.id==7)&&<StationCardCover source={require("../../../../assets/buses/habesha_bus.jpg")} />}
   {(trips.trip.trans.owner.id==6)&&<StationCardCover source={require("../../../../assets/buses/oda_bus.jpg")} />}
   {(trips.trip.trans.owner.id==9)&&<StationCardCover source={require("../../../../assets/buses/walia.jpg")} />}
   {(trips.trip.trans.owner.id==8)&&<StationCardCover source={require("../../../../assets/buses/sky_bus.jpg")} />}
   {(trips.grossPriceAmnt==999999)&&<StationCardCover source={require("../../../../assets/buses/unknown_bus.jpg")} />}
   {(trips.trip.trans.owner.id==10)&&<StationCardCover source={require("../../../../assets/buses/yegna_bus.jpg")} />}
   {(trips.trip.trans.owner.id==2)&&<StationCardCover source={require("../../../../assets/buses/zemen_bus.jpg")} />}
      <Info>
      <Text variant="label" >Price:{trips.grossPriceAmnt+" Birr"}</Text>
      <Text variant="label" >
        Boarding: {   new Date(trips.trip.initialTime).toLocaleTimeString('en-US',{ hour: '2-digit', minute: '2-digit' }) +"  "+ new Date(trips.trip.initialTime).toLocaleDateString('en-GB')}
      </Text>
      <Text variant="label" >
        Company:{ trips.trip.trans.owner.companyName}
      </Text>
        <Section>

          <SectionEnd>
          {(trips.status=='VALID')&& <Book trips={trips} navigation={navigation}/>}
              <Text variant="error"> 
              {trips.status=='VALID'? trips.trip.trans.owner.companyName:"NOT AVAILABLE"}              
              </Text>
  
          </SectionEnd> 
        </Section>
      </Info>
    </StationCard>
  );
};

