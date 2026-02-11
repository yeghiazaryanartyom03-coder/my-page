import { useState, useRef, useEffect } from "react";
import type { IMatch } from "../../App";
import { Match } from "./Match";
import axios from "axios";
import BarcaIcon from '../../assets/icons/barca-logo.png'

function getTournament(match: IMatch) {
    if (match.tournament === "La Liga") {
      return "la-liga";
    } else if (match.tournament === "Champions League") {
      return "champions-league";
    } else if (match.tournament === "Supercopa de Espana") {
      return "supercopa-de-espana";
    } else {
      return "copa-del-rey";
    }
  }

export function MatchesGrid() {
  
  const [matchedMatch,setMatchedMatch] = useState<IMatch | null>(null)
  const [matches,setMatches] = useState<IMatch[]>([])
  const refTarget = useRef<HTMLDivElement | null>(null);
  
  

  useEffect(()=>{
      const fetchMatches = async () => {
        try{
          const response = await axios.get('http://localhost:5000/api/match')
          console.log(response.data)
          setMatches(response.data)
          
        }catch(error){
           console.log(error) 
        }
      }
      
      fetchMatches()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const findLatestMatch = ():IMatch | null =>{
    for(let i = 0;i < matches.length;i++){
      if(matches[i].goalApponent === undefined){
        return matches.length?matches[--i]:null
      }
    }

    return matches[0]
  }
  useEffect(()=>{
    if(!matches.length) return
    const latest = findLatestMatch()
    setMatchedMatch(latest)
  },[matches])  
  if(!matchedMatch){
    return <div>loading...</div>
  }
  return (
        <>
          <div className="top-background-matches">
            <div className="latest-match">
              <div className="text-black text-[25px] font-bold pt-5 pl-5">
                  Latest Match  
              </div>
              <div className="h-75 flex items-center justify-between">
                <div className="text-white flex flex-col justify-center items-center w-75">
                  <div className="latest-match-team-img-div">
                    <img src={matchedMatch.isInHome ? BarcaIcon : matchedMatch.image } alt="" className="h-30" />
                  </div>
                  <div className="font-bold text-[38px]">
                    {matchedMatch.isInHome ? "Barcelona" : matchedMatch.apponent}
                  </div>
                </div>  
                <div className="text-white flex flex-col items-center w-50">
                  <div className="latest-match-tournament">
                    <img src={`/pictures/club-logos/${getTournament(matchedMatch)}.png`} alt="" className="h-30"/>
                  </div>
                  <div className="latest-match-score font-semibold text-[38px] py-1 my-1 px-2.5
                                  bg-linear-to-b from-[rgba(225,10,50,1)] to-[rgba(10,15,45,1)]">
                    {matchedMatch.isInHome ?`${matchedMatch.goalBarca} : ${matchedMatch.goalApponent}` :`${matchedMatch.goalApponent} : ${matchedMatch.goalBarca}` }
                  </div>
                  
                </div>
                <div className="text-white flex flex-col justify-center items-center w-75">
                  <div className="latest-match-team-img-div">
                    <img src={matchedMatch.isInHome ?  matchedMatch.image : BarcaIcon } alt="" className="h-30" />
                  </div>
                  <div className="font-bold text-[38px]">
                    {matchedMatch.isInHome ? matchedMatch.apponent : "Barcelona" }
                  </div>
                </div>
              </div> 
            </div>
          </div>
      <div>
        <div className="text-[30px] font-bold text-[rgb(10,15,55)] text-center pt-5">TEAM CALENDAR</div>
        <div className="grid grid-cols-1">
          
          {matches.map((match,index)=>{
              return <Match matches={matches} index={index} match={match} refTarget={refTarget}/>
            
          }) }
        </div>
      </div>
    </>
  );
}
