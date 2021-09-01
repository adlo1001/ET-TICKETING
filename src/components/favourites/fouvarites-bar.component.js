
import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Spacer } from "../../features/stations/components/spacer/spacer.component";
import { CompactStationInfo } from "../../features/stations/screens/compact-station-info.screen";
import { Text } from "../../components/typography/text-component";
import { Searchbar, View } from "react-native-paper";


const FavouritesWrapper = styled.View`
  padding: 10px;
`;

const FacouriteBarContainer = styled.View`
  padding: 0px; {/*16px*/}
  padding-top:0px; {/*130px*/}
  background-color: white;
  z-index:9;
`;

export const FavouriteBarHolder = (isFavouritesToggled, onFavouritesToggle) => {
    return (
      <FacouriteBarContainer>
          <Searchbar
           icon ={isFavouritesToggled? "heart":"heart-outline"}
           onIconPress={onFavouritesToggle}
          /> 
          
      </FacouriteBarContainer>
  
    );
  };

export const FavouritesBar = ({ favourites, onNavigate }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer variant="left.large">
        <Text variant="caption">Favourites</Text>
      </Spacer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favourites.map((station) => {
          const key = station.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity
                onPress={() =>
                  onNavigate("TripDetail", {
                    station,
                  })
                }
              >
                <CompactStationInfo station={station} />
              </TouchableOpacity>
            </Spacer>
          );
        })}
      </ScrollView>
    </FavouritesWrapper>
  );
};