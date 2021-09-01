import React from "react";
import {Text} from "../../../components/typography/text-component";
import { StationCard,Info,Open, StationCardTitle,StationCardCover, Rating, Section, SectionEnd,Address  } from "../components/stations-info-card.styles";
import {Favourite} from "../../../components/favourites/favourite.component";
import {Book} from "../../../components/booked/book.component";

export const StationsInfoCard = ({ station = {} }) => {
  const {
    name = '',
    icon = '',
    photos = ['https://picsum.photos/700'],
    address = 'some address',
    StationInfo = '',
    isOpenNow = true,
    rating = '2',
    isSeatAvailable = true,
    id,
  } = station;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <StationCard elevation={2} >
      <Favourite/>
      <StationCardTitle
        key={name}
        title="Trips"
        subtitle="Bus Transportation"
      />
      <StationCardCover source={{ uri: photos[0] }} />
      <Info>
      <Text variant="label" >{name}</Text>
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
          <Book/>
             {isSeatAvailable && (
              <Text variant="label"> SEAT AVAILABLE </Text>
            )}
          </SectionEnd> 
        </Section>
      </Info>
     {/* <Address>Some Address in Ethiopia</Address>*/}
    </StationCard>
  );
};

