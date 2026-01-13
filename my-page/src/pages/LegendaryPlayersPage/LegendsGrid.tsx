import { legends } from "../../data/legends"
import { Legend } from "./Legend"


export function LegendsGrid(){
  return(
    <>
      <div className="grid-title">LEGENDARY PLAYERS</div>
              <div className="history-content">
                
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