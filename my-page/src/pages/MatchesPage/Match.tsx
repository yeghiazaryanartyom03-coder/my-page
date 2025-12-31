import  {type Match, matches } from "../../data/matches";
import BarcaLogo from "../../assets/icons/barca-logo.png";
import { useEffect, useRef } from "react";
interface Prop {
  match: Match;
  index: number;
}
export function Match({ match, index }: Prop) {
  const refTarget = useRef<HTMLDivElement | null>(null);
  useEffect(()=>{
    refTarget.current?.scrollIntoView({
      behavior: "auto",
      block: "start"
    })
  },[])

  function getTournament(match:Match){
    if(match.tournament === "La Liga"){
      return "la-liga"
    }else if(match.tournament === "Champions League"){
      return "champions-league"
    }else if(match.tournament === 'Supercopa de Espana'){
      return "supercopa-de-espana"
    }else{
      return "copa-del-rey"
    }
  }

  function getScore(match: Match) {
    if (match.goalBarca !== undefined && match.isInHome) {
      return <>{`${match.goalBarca} : ${match.goalApponent}`}</>;
    } else if (match.goalBarca !== undefined && !match.isInHome) {
      return <>{`${match.goalApponent} : ${match.goalBarca}`}</>;
    } else {
      return "VS";
    }
  }
  
  return (
    <>
      <div ref = {matches[index].goalBarca !== undefined && matches[++index].goalBarca === undefined 
        ? refTarget
        : null
      } className="result-match-info">
        <div className="club first-club">
          <img
            src={match.isInHome === true ? BarcaLogo : match.image}
            className="club-img first-club-img"
          />
          <div className="club-name">{match.isInHome?'FC Barcelona':match.apponent}</div>
        </div>
        <div className="vs-info">
          <div className="club tournament-img-div">
            <img
              src={`/pictures/club-logos/${getTournament(match)}.png`}
              className="tournament-img"
            />
          </div>
          <div className="vs-text">{getScore(match)}</div>
        </div>
        <div className="club second-club">
          <img
            src={match.isInHome === true ? match.image : BarcaLogo}
            className="club-img second-team-img"
          />
          <div className="club-name">{match.isInHome?match.apponent:'FC Barcelona'}</div>
        </div>
      </div>
    </>
  );
}
