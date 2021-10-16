import {stationsRequest,tripsRequest, stationsTransform} from "./stations.service";
import React from "react";
import {
  useState,
  createContext,
  useCallback,
  useContext,
  useEffect
} from "react"; 
import { MStationsContext } from "../station/mstations.context";
import { colors } from "../../infrastructure/theme/colors";


export const TripsContext = createContext();

export const TripsContextProvider = ({ children }) => {
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const mstations = useContext(MStationsContext);
  const[data, setData] = useState(null);


  const retrieveStations = (mstat) => {
    setIsLoading(true);
    setTrips([]);
    setTimeout(() => {
      if(mstat=="trip") stationsRequest(mstat)
        .then((results) => {
          setIsLoading(false);
          setTrips(results);
        })  
        .catch((err) => {
          setIsLoading(false);
          setError(err);
        });
        else
        tripsRequest()
          .then((results) => {
            setIsLoading(false);
            setTrips(results);
            console.log(trips);
            
    
          })  
          .catch((err) => {
            setIsLoading(false);
            setError(err)
          });
    }, 2000);
  };
  useEffect(() => {
    retrieveStations(mstations.keyword);

  }, [mstations]);
 


    const tripsRequest=useCallback(()=>{
      //fetch('http://192.168.1.67:8080/trip/trips')
      fetch('http://192.168.1.67:8080/tickets')
      .then(response =>response.json())
      .then(data=>
        {setData(data)}).catch((error)=>setError(error));
        return new Promise((resolve, reject)=>{
          if(!data) {
              reject("Not Found");
          }
          resolve(data);
  
      });  

      },[]);
   useEffect(()=>{tripsRequest()},[]);
  
  

  return (
    <TripsContext.Provider
      value={{
        trips,
        isLoading,
        error,
      }}
    >
      {children}
    </TripsContext.Provider>
  );
};
