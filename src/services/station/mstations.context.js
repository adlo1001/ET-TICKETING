import {MStationsRequest,MStationsRequest2, MStationsTransform} from "./mstations.service";
import React,{useEffect,useCallback} from "react";
import DateTimePicker from '@react-native-community/datetimepicker';
import {
  useState,
  createContext,
  useMemo
} from "react";


export const MStationsContext = createContext();

export const MStationsContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("Arba Minch");
  const [keyword1, setKeyword1] = useState("station1");
  const [keyword2, setKeyword2] = useState("station2");
  const [boardingTime, setBoardingTime]=useState(new String(new Date()));
  const [mstations, setMStations] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const [stationList, setStationList]=useState([]);


  const onSearch = (searchKeyword,id) => {
    setIsLoading(true);
    if(id==1){setKeyword(searchKeyword);setKeyword1(null);setKeyword2(null)}
    else if(id==2) {setKeyword1(searchKeyword);setKeyword(null);setKeyword2(null)}
    else if (id==3){setKeyword2(searchKeyword);setKeyword(null);setKeyword1(null)}
   

    MStationsRequest(keyword&&keyword.toLowerCase()||keyword1&&keyword1.toLowerCase()||keyword2&&keyword2.toLowerCase())
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
    fetchData()
      .then((result) => {
        setStationList(result);
      
      })
      .catch((err) => {
        console.log(err);
      });
   
       
  };

  const onChooseTime = (_time) =>  {
  setBoardingTime(_time); 
  };
   
    const fetchData=useCallback(()=>{
      fetch('http://192.168.1.66:8080/stations')
      .then(response =>response.json())
      .then(data=>
        {setStationList(data); setData(data);}).catch((err)=>console.log(err))

        return new Promise((resolve, reject)=>{
          
          if(!data) {

            reject("Stations Not Found");
        }
  
        resolve(data);
        }
          
          );
    
      },[]);

      useEffect(()=>{fetchData()},[]);
  return (
    <MStationsContext.Provider
      value={{
        mstations,
        isLoading,
        error,
        search: onSearch,
        chooseTime:onChooseTime,
        boardingTime,
        keyword,
        keyword1,
        keyword2,
        type: onType,
        stationList,
      }}
    >
      {children}
    </MStationsContext.Provider>
  );
};
