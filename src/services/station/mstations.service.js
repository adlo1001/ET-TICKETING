import { stations } from "./stations.mock";
import camelize from "camelize";


  export const MStationsRequest=(searchTerm)=>{
   
    return new Promise((resolve, reject)=>{
      const stationMock= stations[searchTerm];
      console.log("KeyWord____________>"+searchTerm);
        if(!stations) {
            reject("Not Found");
        }
        resolve(stations);

    });   

};

export const MStationsTransform = ({ result }) => {
const formattedResponse = camelize(result);
const {trip ={}} = camelize(formattedResponse.results)[0];
const [intialStation, finalStation] = trip;

return {intialStation, finalStation};

};


