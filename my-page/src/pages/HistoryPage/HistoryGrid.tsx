import { historis } from "../../data/historys";
import { HistoryContent } from "./HistoryContent";

export function HistoryGrid(){
  return(
    <>
      <div className="grid-title">HISTORY BY DECADES</div>
        <div className="history-content">
          
          {historis.map((history)=>{
            return ( 
              <HistoryContent  history={history}/> 
            )
          })}
        </div>
    </>
  )
}