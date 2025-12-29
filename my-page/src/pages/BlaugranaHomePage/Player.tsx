import { NavLink } from "react-router"
import type { Players } from "../../data/players"

interface Props{
  player:Players
}
export function Player({player}:Props){
  return(
    
    <NavLink to="/" className="player-conteiner">
          <div className="player-info" style={{
              background: `url(${player.image}) no-repeat center/cover `,
              width: "300px",
            }}>
            <div className="number">{player.shirtNumber}</div>
            <div className="name-surname">
              <div className="name">{player.name}</div>
              <div className="surname">{player.surname}</div>
            </div>
            <div className="position">{player.position}</div>

            <div className="statistic">
              <div className="stat-info matches-played">
                <div className="barca-stat barca-matches">Barca Appearances</div>
                <div className="matches-quantity">{player.appearances}</div>
              </div>
              
              <div className="stat-info goals">
                <div className="barca-stat barca-goals">Barca {player.position === 'goalkeeper'?'clean sheets':'goals'}</div>
                <div className="goals">{player.position === 'goalkeeper'?player.cleanSheets:player.goals}</div>
              </div>
              <div className="stat-info assists">
                <div className="barca-stat barca-assists">Barca {player.position === 'goalkeeper'?'saves':'assists'}</div>
                <div className="assists">{player.position === 'goalkeeper'?player.saves:player.assists}</div>
              </div>
            </div>
          </div>
        </NavLink>
  )
}