import React, { createContext, useState } from "react";

export const BookedContext = createContext();

export const BookedContextProvider = ({ children }) => {
  const [booked, setBooked] = useState([]);

  const add = (trip) => {
    setBooked([...booked, trip]);
  };

  const remove = (trip) => {
    const newBooked = booked.filter(
      (x) => x.placeId !== trip.id
    );

    setBooked(newBooked);
  };
  return (
    <BookedContext.Provider
      value={{
        booked,
        addToBooked: add,
        removeFromBooked: remove,
      }}
    >
      {children}
    </BookedContext.Provider>
  );
};