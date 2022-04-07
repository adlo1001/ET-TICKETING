import {emptyTripsRequest,tripsRequest, stationsTransform} from "./trips.service";
import React from "react";
import {
  useState,
  createContext,
  useCallback,
  useContext,
  useEffect
} from "react"; 
import { StationsContext } from "../station/stations.context";


export const TripsContext = createContext();

export const TripsContextProvider = ({ children }) => {
  const [trips, setTrips] = useState([]);
  const [alltrips, setAllTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const mstations = useContext(StationsContext);
  const[data, setData] = useState(null);
  //const[allData, setAllData] = useState(null);
  //const [boarding, setBoarding]=useState("2021-10-18 15:00:00");
  const {boardingTime,chooseTime, keyword1, keyword2, keyword3 } = useContext(StationsContext);
  const [initial, setInitial]=useState(keyword1);
  const [final_, setFinal_]=useState(keyword2);
  const [bus_, setbus_]=useState(keyword3);

  const retrieveTripNotFound=()=>{
    setIsLoading(true);
    emptyTripsRequest("not found")
    .then((results) => {
      setIsLoading(false);
      setTrips(results);
    })  
  }


  const retrieveStations = (mstat) => {
    setIsLoading(true);
    //setTrips(null);
    setTimeout(() => {
    if(mstat=="Arba Minch") 
    emptyTripsRequest(mstat)
        .then((results) => {
          setIsLoading(false);
          setTrips(results);
     
        })  
        .catch((err) => {
          setIsLoading(false);
          setError(err);

        });
        //else
        //if(initial!=null && final_!=null)
        //tripsRequest(initial,final_, boardingTime,bus_)
    }, 2000);
  
  };
  useEffect(() => {
    retrieveStations(mstations.keyword);
  }, [mstations,keyword1, keyword2, boardingTime,keyword3]);

    const tripsRequest=useCallback((_initial,_final,boardingTime,_bus )=>{
      setInitial(_initial.trim());
      setFinal_(_final.trim());
      setbus_(_bus.trim());

      console.log('http://196.189.91.112:8080/ett/ticketsQuery/?_initial='+ _initial +'&_boarding_time='+boardingTime+'&_final='+_final+'&_bus='+bus_);
      if(_initial!="station1"&&_final!="station2")
      fetch('http://196.189.91.112:8080/ett/ticketsQuery/?_initial='+ _initial +'&_boarding_time='+boardingTime+'&_final='+_final + '&_bus='+bus_)
        .then(response =>response.json())
      .then(data=>
        {
      setIsLoading(false);
      setData(data);
      if(data!="")setTrips(data);
      else {
        retrieveTripNotFound();
      }
      
    })
      .catch((error)=>{setError(error);});
      
        return new Promise((resolve, reject)=>{
          if(data=="") {         
            trips&&retrieveTripNotFound();}
      });  
      },[]);
    

   
      
   const allTripsRequest=useCallback(()=>{
    fetch('http://196.189.91.112:8080/ett/tickets')
   .then(response =>response.json())
    .then(_data=>
      {setAllTrips(_data);}).catch((error)=>{setError(error);console.log(error)});
      return new Promise((resolve, reject)=>{
        if(!alltrips) {
            reject("Tickets Not Found2");
        }
        resolve(alltrips);

    });  

    },[]);    


    useEffect(()=>{
    allTripsRequest()},[]);

  return (
    <TripsContext.Provider
      value={{
        initial,
        final_,
        bus_,
        trips,
        alltrips,
        isLoading,
        onTripsSearch:tripsRequest,
        error,
      }}
    >
      {children}
    </TripsContext.Provider>
  );
};
