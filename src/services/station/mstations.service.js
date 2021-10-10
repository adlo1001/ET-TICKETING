import { stations } from "./stations.mock";
import camelize from "camelize";
import { mocks } from "../stations/mock";


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
   
  return new Promise((resolve, reject)=>{
    const stationMock= mocks["allstations"];
      if(!stationMock) {
          reject("Not Found");
      }

      resolve(stationMock);

  });   

};



export const MStationsTransform = ({ result }) => {
const formattedResponse = camelize(result);
const {trip ={}} = camelize(formattedResponse.results)[0];
const [intialStation, finalStation] = trip;

return {intialStation, finalStation};

};


