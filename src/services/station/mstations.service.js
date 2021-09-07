import { stations } from "./stations.mock";
import camelize from "camelize";
import StationsData from "./stationsData";


  export const MStationsRequest=(searchTerm)=>{
    
    return new Promise((resolve, reject)=>{
      const stationMock= stations[searchTerm];
        if(!stationMock) {
            reject("Not Found");
        }
        resolve(stationMock);

    });   

};


const result= MStationsRequest("trip").then((stations)).catch((err)=>{console.log(err);});

export const MStationsTransform = ( result ) => {

const formattedResponse = camelize(result);
const {results ={}} = camelize(formattedResponse.results);
const [initialStation, finalStation] = result;
console.log(result);
//const initialStation= getValues(result);


return initialStation;

};

const getJsonValues = () =>{
    return (
      StationsData.map((data, key) => {
              {data.id +
                " , " +

                data.stationName +

                " ," +

                data.description +

                ", " +

                
                data.subcity
                 +

                ", " +
                
                data.description
                +

               ", " +
               data.city
               +

              ", " +


                data.region}})


        )
}

const getValues = (obj) => {
  const values = Object.values(obj)

  values.forEach(val => 
      val && typeof val === "object" ? getValues(val) : console.log(val))
}

MStationsTransform(result);


