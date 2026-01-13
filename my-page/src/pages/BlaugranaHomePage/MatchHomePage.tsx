import dayjs from "dayjs";
import type { Match } from "../../data/matches";
import BarcaIcon from '../../assets/icons/barca-logo.png'
import { NavLink } from "react-router";
interface MatchProps {
  match: Match
}

export function MatchHomePage({match}:MatchProps){
  return (
    <NavLink to='/' className="match-conteiner w-70 h-77 text-white flex flex-col justify-end items-center rounded-3xl gap-y-10 bg-[rgb(9,15,45)] no-underline z-1020 ">
          <div className="prevew flex flex-row items-center gap-7.5 transition-transform duration-500 ease-in-out">
            
            <div className="left-team flex flex-col items-center">
              <img src={match.isInHome?BarcaIcon : match.image} className="match-logo w-12 h-12" />
              <div className="team-name">{match.isInHome?'Barcelona' : match.apponent}</div>
            </div>

            <p className="vs">VS</p>
            <div className="right-team flex flex-col items-center">
              <img src={match.isInHome? match.image : BarcaIcon} alt="" className="match-logo w-12 h-12" />
              <div className="team-name">{match.isInHome? match.apponent : 'Barcelona'}</div>
            </div>
          </div>
          <div className="match-info transition-height duration-500 ease-in-out bg-[rgb(253,197,44)] w-70 h-[23vh] flex flex-col rounded-b-3xl">
            <div className="match-date text-lg font-bold ml-2.5 mt-2.5">
              {dayjs(match.date).format("MMMM, dddd D, H:mm")}
            </div>
            <div className="text-sm ml-2.5 mt-0.5">{match.tournament}</div>
            <div className="text-sm ml-2.5 mt-0.5">{match.stadium}</div>
          </div>
        </NavLink>
  )
}