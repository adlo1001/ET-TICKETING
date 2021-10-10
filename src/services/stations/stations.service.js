import { mocks } from "./mock";
import React,{useState} from "react";
import camelize from "camelize";

//const trip="Megenagna 01, Adama 03";
  export const stationsRequest=(trip)=>{
    return new Promise((resolve, reject)=>{
  
     const mock=mocks["Megenagna 01, Adama 03"];
     const _mock = mocks["me, ar"];

    
        if(!mock  ) {
            reject("Not Found");
        }
        else if(trip==="trip")
        resolve(mock);
        else resolve(_mock);

    });   

};
export const stationsTransform = ({ results = [] }) => {
  const mappedResults = results.map((stations) => {
    return {
      ...stations
    };
  });

  return camelize(mappedResults);
};

//stationsRequest("Megenagna 01, Adama 03").then(stationsTransform).then((result) => {console.log(result)}).catch((err)=>{console.log(err);});


