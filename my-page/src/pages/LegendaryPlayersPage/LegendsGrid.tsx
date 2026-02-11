import { Legend } from "./Legend"
import { useEffect, useState } from "react"
import axios from "axios";

export interface Legend{
    name: string;
  startingText: string;
  image: string;
}

export function LegendsGrid(){
  const [legends, setLegends] = useState<Legend[]>([])

  useEffect(()=>{
    const fetchHistory = async () => {
      try{
        const response = await axios.get('http://localhost:5000/api/legend')
        console.log(response.data)
        setLegends(response.data)
        
      }catch(error){
         console.log(error) 
      }
    }

    fetchHistory()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])


  return(
    <>
      <div className="text-[22px] text-center font-extrabold pt-5 text-[rgb(10,15,49)]">LEGENDARY PLAYERS</div>
              <div className="grid grid-cols-3 place-items-center">
                
                {legends.map((legend)=>{
                  return ( 
                    <>
                    <Legend legend={legend}/>
                    </>
                  )
                })}
              </div>
    </>
  )
}