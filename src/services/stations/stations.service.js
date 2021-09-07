import { mocks } from "./mock";
import React from "react";
import camelize from "camelize";


  export const stationsRequest=(trip="Merkato Bus Station 01, Arbaminch 01")=>{
  // console.log(mocks);
    return new Promise((resolve, reject)=>{
      const mock= mocks[trip];
        if(!mock) {
            reject("Not Found ...");
        }
        resolve(mock);

    });   

};


{/*
stationsRequest(trip="Megenagna 01, Adama 03").then((result) => {
  getValues(result);
}).catch((err)=>{console.log(err);});


const getValues = (obj) => {
  const values = Object.values(obj)

  values.forEach(val => 
      val && typeof val === "object" ? getValues(val) : console.log(val))
}
*/}


export const stationsTransform = ({ results = [] }) => {
  //console.log(results);
  const mappedResults = results.map((stations) => {
    return {
      ...stations
    };
  });
  
  return camelize(mappedResults);
};

