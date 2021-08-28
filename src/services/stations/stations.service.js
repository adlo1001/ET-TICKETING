import { mocks } from "./mock";
import React from "react";
import camelize from "camelize";


  export const stationsRequest=(trip="Megenagna 01, Adama 03")=>{
    console.log(mocks);
    return new Promise((resolve, reject)=>{
      const mock= mocks[trip];
        if(!mock) {
            reject("Not Found");
        }
        resolve(mock);

    });   

};
//stationsRequest().then((result) => {console.log(result)}).catch((err)=>{console.log(err);});

export const stationsTransform = ({ results = [] }) => {
  const mappedResults = results.map((stations) => {
    return {
      ...stations
    };
  });

  return camelize(mappedResults);
};

