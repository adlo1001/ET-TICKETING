import React from "react";
import { Button, Card} from 'react-native-paper';
import { Platform} from "react-native";
import {Text} from "../../components/typography/text-component";
import { SvgXml } from "react-native-svg";
import star from "../../../assets/star";
import open from "../../../assets/open";
import { StationCard,Info,Open, StationCardTitle,StationCardCover, Rating, Section, SectionEnd,Address  } from "./components/stations-info-card.styles";

export const StationsInfoCard = ({ station = {} }) => {
  const {
    name = "some station",
    icon="",
    photos = ["https://picsum.photos/700"],
    address = "some address",
    StationInfo="",
    isOpenNow = true,
    rating = "2",
    isSeatAvailable = false
  } = station;
  const ratingArray= Array.from(new Array(Math.floor(rating)));
  return (
      <StationCard elevation={5}>
        <StationCardTitle  key={name} title="Trips" subtitle="Bus Transportation"/>
        <StationCardCover source={{ uri: photos[0] }} />
        
        <Info>
        <Text variant="label">{name}</Text>
        <Section>
        <Rating>
    
    {(Platform.OS!='web') ? ratingArray.map(() => (<SvgXml xml={star} width={20} height={20}/>)):(<Rating>???</Rating>)}
   </Rating>
   <SectionEnd>
    {!isSeatAvailable && (<Text variant="error" > SEAT NOT AVAILABLE  </Text>)}
    {isOpenNow && <Open xml={open} width={20} height={20}></Open>}
   </SectionEnd>
   </Section>
        <Card.Actions>
          <Button>Like</Button>
          <Button>Dislike</Button>
        </Card.Actions></Info>
        <Address>
Some Address in Ethiopia
        </Address>
       
      </StationCard>
  );
    
};

