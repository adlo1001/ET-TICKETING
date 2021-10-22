
import React , {createContext,useState} from "react";




export const TicketsContext = createContext();



export const TicketsContextProvider=({children})=>{
  const[tmpdata, setTmpData] = useState(null);
  const [error, setError] = useState(null);
   

    const bookTicket=(passengerInfo)=>{
        addPassenger(passengerInfo);
        updateTicket(passengerInfo[0], 1);
    }

    const payTicket=(passengerInfo)=>{
        console.log(passengerInfo);
    }

    const updateTicket=async(id,arg)=>{

      try {    
        const response = await fetch('http://192.168.1.67:8080/tickets/'+id);  
        const _data = await response.json();   
        setTmpData(_data);
         } 
      catch (error) {    console.error(error);  };


      //tmpdata.ticket.status="PENDING";
      fetch('http://192.168.1.67:8080/tickets/', 
      { method: 'POST', 
        headers: {    Accept: 'application/json',    'Content-Type': 'application/json'  }, 
        body: JSON.stringify({   
         tmpdata
       })});


    }
    const addPassenger=(_pass)=>{
      fetch('http://192.168.1.67:8080/passengers/', 
      {  method: 'POST',  
         headers: {    Accept: 'application/json',    'Content-Type': 'application/json'  },  
         body: JSON.stringify({    
         "firstName": _pass[2],
         "middleName": _pass[3],
         "lastName": "NA",
         "_gender": "MALE",
         "age": 30,
         "passengerCLASS": "ECONOMY",
         "disablity_status": null,
         "status": null,
         "addresses": [
           {
             "email": _pass[5],
             "phone1": _pass[4],
             "phone2": null,
             "phone3": null,
             "houseNumber": "0001",
             "streetAddress": "Bole",
             "city": "A.A",
             "country": "ETH"
           }
         ],
         "ticket":{
           "id":_pass[0] 
          
          }        
            })});

    }

    return <TicketsContext.Provider

      value={{
        onBookTicket:bookTicket,
        onPayTicket:payTicket,
      
      }}>
   {children}
    </TicketsContext.Provider>


}