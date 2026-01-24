import { legends } from "../../data/legends"
import { Legend } from "./Legend"


export function LegendsGrid(){
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