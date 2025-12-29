import { MatchInfo } from "./Match";
import { matches } from "../../data/matches";
export function MatchesGrid() {
  return (
    <>
      <div className="title-section-matches">Next Matches</div>
      <div className="matches">
        {matches.map((match)=>{
          if(match.goalApponent === undefined){
            return <MatchInfo match={match} />
          }else{
            return ''  
          }
            
        })}
        
      </div>
    </>
  );
}
