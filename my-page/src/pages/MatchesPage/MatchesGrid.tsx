import { matches } from "../../data/matches";
import { Match } from "./Match";
import type { RefObject } from "react";

interface MatchesGridProps {
  refTarget:RefObject<HTMLDivElement | null>
}

export function MatchesGrid({refTarget}:MatchesGridProps) {
  
  return (
    <>
      <div className="text-[30px] font-bold text-[rgb(10,15,55)] text-center pt-5">TEAM CALENDAR</div>
      <div className="grid grid-cols-1">
        
        {matches.map((match,index)=>{
             return <Match index={index} match={match} refTarget={refTarget}/>
          
        }) }
      </div>
    </>
  );
}
