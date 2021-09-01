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

  const retrieveStations = () => {
    setIsLoading(true);
    setTimeout(() => {
      stationsRequest()
      .then(stationsTransform)
        .then((results) => {
          setIsLoading(false);
          setStations(results);
        })  
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };
  useEffect(() => {
    retrieveStations(mstations);
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
