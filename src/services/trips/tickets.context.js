
import React , {createContext,useState} from "react";




export const TicketsContext = createContext();



export const TicketsContextProvider=({children})=>{
  const[tmpdata, setTmpData] = useState(null);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
   

    const bookTicket=(passengerInfo)=>{
        addPassenger(passengerInfo).then((response)=>{setResponse("SUCCESS")}).catch((error)=>{setError(error);setResponse("ERROR")});
        updateTicket(passengerInfo[0]);
    }

    const payTicket=(passengerInfo)=>{
        //console.log(passengerInfo);
    }

    const updateTicket=async(id)=>{

      //tmpdata.ticket.status="PENDING";
      fetch('http://196.189.91.112:8080/ett/tickets/'+id, 
      { method: 'PATCH', 
        headers: {    Accept: 'application/json',    'Content-Type': 'application/json'  }, 
     });
    }

     const getTicket=async(id)=>{

      //tmpdata.ticket.status="PENDING";
      fetch('http://196.189.91.112:8080/ett/tickets/'+id, 
      { method: 'GET', 
        headers: {    Accept: 'application/json',    'Content-Type': 'application/json'  }, 
     });
    }
    

    const addPassenger=(_pass)=>{
      return  fetch('http://196.189.91.112:8080/ett/passengers/', 
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
        error,
        response,
        onBookTicket:bookTicket,
        onPayTicket:payTicket,
        onGetTicket:getTicket,

      
      }}>
   {children}
    </TicketsContext.Provider>
}