import React,{useEffect, useState} from "react";
import {Text} from "../../../components/typography/text-component";
import { StationCard,Info,Open, StationCardTitle,StationCardCover, Rating, Section, SectionEnd,Address  } from "../components/stations-info-card.styles";
import {Favourite} from "../../../components/favourites/favourite.component";
import {PayButton} from "../../../components/pay/pay.component";
import {Book} from "../../../components/booked/book.component";


export const StationsInfoCard = ({ trips = {} , navigation}) => {
  const {
        id=null,
        name='',
        route= null,
        tripTitle='',
        initialTime="2014-01-01T12:00:00.000+00:00",
        finalTime = "2014-01-02T12:00:00.000+00:00",
        tripPeriod=6.0,
        grossPriceAmnt=400.0,
        priceKids =200.0,
        transportationMode=null,
        icon = '',
        photos = ['https://picsum.photos/700'],
        address = 'some address',
        StationInfo = '',
        isOpenNow = true,
        rating = '2',
        isSeatAvailable = true
      } = trips;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  const [buses, setBuses]=useState([]);
  const [image_,setImage_]=useState();
  const [isLoading, setIsLoading]=useState(false);
  const [busCompanyCode, setBusCompanyCode]=useState(0);
   {/* 
  useEffect(()=>
  {setIsLoading(true);
    setImage_("http://www.yegnatimes.com/wp-content/uploads/2020/07/Golden-Bus-Ticket-Office.jpg");
    setBuses(
["https://www.safaribay.net/wp-content/uploads/2018/07/Abay-Bus-Ethiopia.jpg"//Abay Bus
,"https://www.safaribay.net/wp-content/uploads/2020/04/Gada-Bus-Sunlong.jpg" //Geda bus
,"http://www.yegnatimes.com/wp-content/uploads/2020/07/Golden-Bus-Ticket-Office.jpg"//Golden bus
,"https://www.safaribay.net/wp-content/uploads/2020/05/Habesha-Bus-Ethiopia.jpg" //Habesha Bus
,"http://www.yegnatimes.com/wp-content/uploads/2020/07/Odaa-Bus-Ticket-Office.jpg" //Odaa Bus
,"http://www.yegnatimes.com/wp-content/uploads/2020/07/Walia-Bus-Ticket-Office.jpg" //Walia Bus
,"http://www.yegnatimes.com/wp-content/uploads/2020/07/yegna-bus-Ticket-Office.jpg"//Yegna Bus
,"http://www.yegnatimes.com/wp-content/uploads/2020/07/Zemen-Bus-Ticket-Office.jpg"//Zemen Bus
,"https://www.safaribay.net/wp-content/uploads/2020/04/Zemen-Bus-Ethiopia..jpg" //Selam bus
,"http://www.yegnatimes.com/wp-content/uploads/2020/07/Sky-Bus-Ticket-Office.jpg" //Sky bus
]);
if(trips.trip.trans==null)setImage_(buses[8]);
else if(trips.trip.trans.owner.id==11001)  setImage_(buses[8]);
else if(trips.trip.trans.owner.id==11002)  setImage_(buses[0]);
else if(trips.trip.trans.owner.id==11003)  setImage_(buses[1]);
else if(trips.trip.trans.owner.id==11004)  setImage_(buses[2]);
else if(trips.trip.trans.owner.id==11005)  setImage_(buses[3]);
else if(trips.trip.trans.owner.id==11006)  setImage_(buses[4]);
else if(trips.trip.trans.owner.id==11007)  setImage_(buses[5]);
else if(trips.trip.trans.owner.id==11008)  setImage_(buses[6]);
else if(trips.trip.trans.owner.id==11009)  setImage_(buses[7]);
else if(trips.ttripsrip.trans.owner.id==11010)  setImage_(buses[9]);
   setIsLoading(false);
  }
);*/}
  
  return (
    <StationCard elevation={2} >
      
      <StationCardTitle
        key={name}
        title={"From: "+trips.trip.route.initialStation.city +" To: "+ trips.trip.route.finalStation.city}
        subtitle= {trips.trip.route.description}
      />
      {<StationCardCover source={{ uri: "http://www.yegnatimes.com/wp-content/uploads/2020/07/Golden-Bus-Ticket-Office.jpg" }} />}
      <Info>
      <Text variant="label" >Price:{trips.grossPriceAmnt+" Birr"}</Text>
      <Text variant="label" >
        Boarding: {   new Date(trips.trip.initialTime).toLocaleTimeString('en-US',{ hour: '2-digit', minute: '2-digit' }) +"  "+ new Date(trips.trip.initialTime).toLocaleDateString('en-GB')}
      
      </Text>
        <Section>

          <SectionEnd>
          <Book trips={trips} navigation={navigation}/>
             {isSeatAvailable && (
              <Text variant="error"> SEAT AVAILABLE </Text>
            )}
          </SectionEnd> 
        </Section>
      </Info>
     {/* <Address>Some Address in Ethiopia</Address>*/}
    </StationCard>
  );
};

