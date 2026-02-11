import { HistoryContent } from "./HistoryContent";
import axios from 'axios'
import {useState, useEffect} from 'react';

interface HistoryProp{
  _id: string;
  image: string,
  title: string,
  startingText: string
}

export function HistoryGrid(){

const [storis, setStoris] = useState<HistoryProp[]>([])

  useEffect(()=>{
    const fetchHistory = async () => {
      try{
        const response = await axios.get('http://localhost:5000/api/history')
        console.log(response.data)
        setStoris(response.data)
        
      }catch(error){
         console.log(error) 
      }
    }

    fetchHistory()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

    console.log(storis)

  return(
    <>
      <div  className="text-center font-extrabold text-[22px] pt-5 text-[rgb(10,15,49)]">HISTORY BY DECADES</div>
        <div className="grid grid-cols-3 place-items-center">
          
          {storis.map((story)=>{
            return ( 
              <HistoryContent  story={story}/> 
            )
          })}
        </div>
    </>
  )
}