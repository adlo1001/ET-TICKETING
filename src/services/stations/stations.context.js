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
  const [initial, setInitial]=useState("Megenagna");
  const [final_, setFinal_]=useState("Arba Minch");
  const [boarding, setBoarding]=useState("2021-10-18 15:00:00");


  const retrieveStations = (mstat) => {
    setIsLoading(true);
    setTrips([]);
    setTimeout(() => {
      if(mstat=="Arba Minch") 
      stationsRequest(mstat)
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
            //console.log(trips);
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
 
    const tripsRequest=useCallback((_initial,_final,_boarding_time)=>{
     // fetch('http://192.168.1.66:8080/tickets')
     //_initial="Megenagna";
     //_boarding_time="2021-10-18%2015:00:00"
     //_final="Arba Minch";
      fetch('http://192.168.1.66:8080/ticketsQuery/?_initial='+ _initial +'&_boarding_time=2021-10-18%2015:00:00&_final='+_final)
      //fetch('http://192.168.1.66:8080/ticketsQuery/?_initial=Megenagna&_boarding_time=2021-10-18%2015:00:00&_final=Arba%20Minch')
      .then(response =>response.json())
      .then(data=>
        {setData(data)}).catch((error)=>{setError(error);console.log(error)});
        return new Promise((resolve, reject)=>{
          if(!data) {
              reject("Tickets Not Found");
          }
          resolve(data);
  
      });  

      },[]);
   useEffect(()=>{tripsRequest(initial,final_, boarding)},[mstations]);

    

  return (
    <TripsContext.Provider
      value={{
        trips,
        isLoading,
        onTripsSearch:tripsRequest,
        error,
      }}
    >
      {children}
    </TripsContext.Provider>
  );
};
