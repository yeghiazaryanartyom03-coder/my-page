import { matches } from "../../data/matches";
import { Match } from "./Match";
import type { RefObject } from "react";

interface MatchesGridProps {
  refTarget:RefObject<HTMLDivElement | null>
}

export function MatchesGrid({refTarget}:MatchesGridProps) {
  
  return (
    <>
      <div className="matches-title">TEAM CALENDAR</div>
      <div className="matches-grid">
        
        {matches.map((match,index)=>{
             return <Match index={index} match={match} refTarget={refTarget}/>
          
        }) }
      </div>
    </>
  );
}
