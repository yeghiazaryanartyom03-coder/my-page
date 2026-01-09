import { NavLink } from "react-router"
import { type Players } from "../../data/players"

interface Props{
  player:Players
  variant:string
}
export function Player({player,variant}:Props){
  return(
    
    <NavLink to="/" className={`player-conteiner-${variant}`}>
          <div className={`player-info-${variant}`} style={{
              background: `url(${player.image}) no-repeat center/cover `,
              
            }}>
            <div className="number">{player.shirtNumber}</div>
            <div className="name-surname">
              <div className="name">{player.name}</div>
              <div className="surname">{player.surname}</div>
            </div>
            <div className="position">{player.position}</div>

            <div className="statistic">
              <div className="stat-info matches-played">
                <div className={`barca-stat-${variant} barca-matches`}>Barca Appearances</div>
                <div className="matches-quantity">{player.appearances}</div>
              </div>
              
              <div className="stat-info goals">
                <div className={`barca-stat-${variant} barca-goals ${player.position}`}>Barca {player.position === 'goalkeeper'?'clean sheets':'goals'}</div>
                <div className="goals">{player.position === 'goalkeeper'?player.cleanSheets:player.goals}</div>
              </div>
              <div className="stat-info assists">
                <div className={`barca-stat-${variant} barca-assists`}>Barca {player.position === 'goalkeeper'?'saves':'assists'}</div>
                <div className="assists">{player.position === 'goalkeeper'?player.saves:player.assists}</div>
              </div>
            </div>
          </div>
        </NavLink>
  )
}