import React from "react";
import {Text} from "../../../components/typography/text-component";
import { StationCard,Info,Open, StationCardTitle,StationCardCover, Rating, Section, SectionEnd,Address  } from "../components/stations-info-card.styles";
import {Favourite} from "../../../components/favourites/favourite.component";
import {PayButton} from "../../../components/pay/pay.component";
import {Book} from "../../../components/booked/book.component";


export const StationsInfoCard = ({ station = {} , navigation}) => {
  const {
        id=null,
        name='',
        route= null,
        tripTitle='',
        initialTime="2014-01-01T12:00:00.000+00:00",
        finalTime = "2014-01-02T12:00:00.000+00:00",
        tripPeriod=6.0,
         priceAdults=400.0,
        priceKids =200.0,
        transportationMode=null,
        icon = '',
        photos = ['https://picsum.photos/700'],
        address = 'some address',
        StationInfo = '',
        isOpenNow = true,
        rating = '2',
        isSeatAvailable = true
      } = station;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    
    <StationCard elevation={2} >
      <Favourite/>
      <StationCardTitle
        key={name}
        title={"From: "+station.route.initialStation.city +" To: "+ station.route.finalStation.city}
        subtitle= {station.route.description}
      />
      <StationCardCover source={{ uri: "https://www.safaribay.net/wp-content/uploads/2020/04/Zemen-Bus-Ethiopia..jpg" }} />
      <Info>
      <Text variant="label" >{station.priceAdults+" Birr"}</Text>
        <Section>
          {/*<Rating>
            {Platform.OS != 'web' ? (
              ratingArray.map((_, i) => (
                <SvgXml key={`star-${id}-${i}`} xml={star} width={20} height={20} />
              ))
            ) : (
              <Rating>???</Rating>
            )}
          </Rating> */}

          <SectionEnd>
          
          
          <Book station={station} navigation={navigation}/>
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

