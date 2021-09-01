import React, { createContext, useState } from "react";

export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const add = (trip) => {
    setFavourites([...favourites, trip]);
  };

  const remove = (station) => {
    const newFavourites = favourites.filter(
      (x) => x.placeId !== trip.id
    );

    setFavourites(newFavourites);
  };
  return (
    <FavouritesContext.Provider
      value={{
        favourites,
        addToFavourites: add,
        removeFromFavourites: remove,
      }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};