import { stations } from "./stations.mock";
import camelize from "camelize";
import { mocks } from "../trips/mock";
import { useState,useCallback } from "react";


  export const MStationsRequest=(searchTerm)=>{
   
    return new Promise((resolve, reject)=>{
      const stationMock= stations[searchTerm];
 
        if(!stations) {
            reject("Not Found");
        }
        resolve(stations);

    });   

};

export const MStationsRequest2=()=>{
  const fetchdata=useCallback(()=>{
    const[data, setData] = useState(null);
    const[err,setErr] = useState();
    fetch('http://192.168.1.67:8080/stations')
    .then(response =>response.json())
    .then(data=>
      {setData(data)}).catch((error)=>setErr(error));
  
    },[]);
   
  return new Promise((resolve, reject)=>{

      if(!data) {
          reject("Not Found");
      }

      resolve(data);

  });   

};




export const MStationsTransform = ({ result }) => {
const formattedResponse = camelize(result);
const {trip ={}} = camelize(formattedResponse.results)[0];
const [intialStation, finalStation] = trip;

return {intialStation, finalStation};

};


