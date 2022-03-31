import { mocks } from "./mock";
import React,{useState,useCallback, useEffect} from "react";
import camelize from "camelize";

//const trip="Megenagna 01, Adama 03";
  export const emptyTripsRequest=(trip)=>{

    return new Promise((resolve, reject)=>{
     const mock=mocks["Megenagna 01, Adama 03"];
     const _mock = mocks["me, ar"];
     const _mock_ = mocks["me, ad"];
    
        if(!mock  ) {
            reject("Local Not Found");
        }
        else if(trip==="Arba Minch")
        resolve(_mock);
        else if(trip==="not found") resolve(_mock_);
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


