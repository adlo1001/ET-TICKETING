import {MStationsRequest,MStationsRequest2, MStationsTransform} from "./mstations.service";
import React,{useEffect,useCallback} from "react";

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
  const [stationList, setStationList]=useState([]);

  const onSearch = (searchKeyword) => {
    setIsLoading(true);
    setKeyword(searchKeyword);
   
    MStationsRequest(keyword.toLowerCase())
      .then((result) => {
        setIsLoading(false);
        setMStations(result);   
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
   
       
  };

  const onType = () =>  {
    MStationsRequest2()
      .then((result) => {
        setStationList(result);

      
      })
      .catch((err) => {
        console.log(err);
      });
   
       
  };
   
  const fetchData=useCallback(()=>{
    fetch('./stations.json')
    .then(response =>response.json())
    .then(data=>
      {setStationList(data)}).catch((err)=>{console.log(err);})
  
    },[]);



  return (
    <MStationsContext.Provider
      value={{
        mstations,
        isLoading,
        error,
        search: onSearch,
        keyword,
        type: onType,
        stationList,
      }}
    >
      {children}
    </MStationsContext.Provider>
  );
};
