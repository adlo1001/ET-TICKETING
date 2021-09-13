import {stationsRequest, stationsTransform} from "./stations.service";
import React from "react";
import {
  useState,
  createContext,
  useEffect,
  useMemo,
} from "react"; 
import { useContext } from "react/cjs/react.development";
import { MStationsContext } from "../station/mstations.context";


export const StationsContext = createContext();

export const StationsContextProvider = ({ children }) => {
  const [stations, setStations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const mstations = useContext(MStationsContext);

  const retrieveStations = (mstat) => {
    setIsLoading(true);
    setStations([]);
    setTimeout(() => {
      stationsRequest(mstat)
        .then((results) => {
          setIsLoading(false);
          setStations(results);
          //console.log(results);
        })  
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
  useEffect(() => {
    //const infoString =`${mstations.keyword}`;
    retrieveStations(mstations.keyword);

  }, [mstations]);
 
  return (
    <StationsContext.Provider
      value={{
        stations,
        isLoading,
        error,
      }}
    >
      {children}
    </StationsContext.Provider>
  );
};
