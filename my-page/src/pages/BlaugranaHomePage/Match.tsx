import dayjs from "dayjs";
import type { Match } from "../../data/matches";
import BarcaIcon from '../../assets/icons/barca-logo.png'
import { NavLink } from "react-router";
interface MatchProps {
  match: Match
}

export function MatchInfo({match}:MatchProps){
  return (
    <NavLink to='/' className="match-conteiner">
          <div className="prevew">
            
            <div className="left-team">
              <img src={match.isInHome?BarcaIcon : match.image} className="match-logo" />
              <div className="team-name">{match.isInHome?'Barcelona' : match.apponent}</div>
            </div>

            <p className="vs">VS</p>
            <div className="right-team">
              <img src={match.isInHome? match.image : BarcaIcon} alt="" className="match-logo" />
              <div className="team-name">{match.isInHome? match.apponent : 'Barcelona'}</div>
            </div>
          </div>
          <div className="match-info">
            <div className="match-date">
              {dayjs(match.date).format("MMMM, dddd D, H:mm")}
            </div>
            <div className="turnament-info">{match.tournament}</div>
            <div className="stadium-info">{match.stadium}</div>
          </div>
        </NavLink>
  )
}