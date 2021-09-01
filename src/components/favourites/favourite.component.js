import React, { useContext } from "react";
import styled from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

import { FavouritesContext } from "../../services/favourites/favourites.context";

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9;
`;

export const Favourite = (station) => {
    const { favourites, addToFavourites, removeFromFavourites } = useContext(
      FavouritesContext
    );
  
    const isFavourite = favourites.find((r) => r.placeId === station.id);
  
    return (
      <FavouriteButton
        onPress={() =>
          !isFavourite
            ? addToFavourites(station)
            : removeFromFavourites(station)
        }
      >
        <AntDesign
          name={isFavourite ? "heart" : "hearto"}
          size={24}
          color={isFavourite ? "green" : "grey"}
        />
      </FavouriteButton>
    );
  };