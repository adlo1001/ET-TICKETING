import {MStationsRequest, MStationsTransform} from "./mstations.service";
import React,{useEffect} from "react";

import {
  useState,
  createContext,
  useMemo,
} from "react";


export const MStationsContext = createContext();

export const MStationsContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("trip");
  const [mstations, setMStations] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
   
    MStationsRequest(keyword.toLowerCase())
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
        mstations,
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
