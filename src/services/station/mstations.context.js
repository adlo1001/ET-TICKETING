import {MStationsRequest, MStationsTransform} from "./mstations.service";
import React from "react";

import {
  useState,
  createContext,
  useMemo,
} from "react";


export const MStationsContext = createContext();

export const MStationsContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("trip1");
  const [stations, setStations] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    console.log(searchKeyword);
    setIsLoading(true);
    setKeyword(setKeyword);
    if(!searchKeyword.length)
    { 
      return;
    }
      MStationsRequest(searchKeyword)
      .then(MStationsTransform)
        .then((result) => {
          setIsLoading(false);
          setStations(result);
          
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    
  };
 
  return (
    <MStationsContext.Provider
      value={{
        stations,
        isLoading,
        error,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </MStationsContext.Provider>
  );
};
