import { MatchHomePage } from "./MatchHomePage";
import { matches } from "../../data/matches";
export function MatchesGrid() {
  return (
    <>
      <div className="text-3xl font-bold text-[rgb(9,15,45)]">Next Matches</div>
      <div className="matches mt-6 flex flex-row justify-around gap-2.5 overflow-x-auto">
        {matches.map((match)=>{
          if(match.goalApponent === undefined){
            return <MatchHomePage match={match} />
          }else{
            return ''  
          }
            
        })}
        
      </div>
    </>
  );
}
