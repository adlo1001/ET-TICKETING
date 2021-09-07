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
  const [stations, setStations] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(setKeyword);
       
  };
 
  useEffect(() => {
    if(!keyword.length)
    { 
      return;
    }

      MStationsRequest(keyword.toLocaleLowerCase())
      .then(MStationsTransform)
        .then((result) => {
          setIsLoading(false);
          setStations(result);
      
        })
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
     

  }, [keyword]);

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
