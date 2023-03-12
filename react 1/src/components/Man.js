// function based component
// also calles as context api
import React, {useEffect, useState} from "react"
import axios from 'axios';


      export default function Man({number, list }) {
        const [details, setDetails] = useState({})

        const  fetchDetails = async () =>{
        const {data} =  await axios.get('https://randomuser.me/api/')
        // console.log("RESPONSE", data);
        const details = data.results[0]
        setDetails(details)
        }

        useEffect(() => {
          fetchDetails();
        }, [])
      
      return (
        <div>       
             <h2>hii mr. {number}  </h2>
            {/* /* props .number */ }
               <ul>
              {list.map(l =>(
                <li key={l}>{l}</li>
              ))}
              </ul> 

                {details.name?.first}<br></br>
      <button onClick={fetchDetails}>get details</button>



       
        </div>
             
       )
     }
            
