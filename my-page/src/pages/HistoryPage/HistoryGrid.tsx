import { historis } from "../../data/historys";
import { HistoryContent } from "./HistoryContent";

export function HistoryGrid(){
  return(
    <>
      <div className="text-center font-extrabold text-[22px] pt-5 text-[rgb(10,15,49)]">HISTORY BY DECADES</div>
        <div className="grid grid-cols-3 place-items-center">
          
          {historis.map((history)=>{
            return ( 
              <HistoryContent  history={history}/> 
            )
          })}
        </div>
    </>
  )
}