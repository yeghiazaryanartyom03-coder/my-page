import { matches } from "../../data/matches";
import { Match } from "./Match";

export function MatchesGrid() {
  
  return (
    <>
      <div className="matches-title">TEAM CALENDAR</div>
      <div className="matches-grid">
        
        {matches.map((match,index)=>{
             return <Match index={index} match={match}/>
          
        }) }
      </div>
    </>
  );
}
