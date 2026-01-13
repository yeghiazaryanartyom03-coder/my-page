import { NavLink } from "react-router"
import { type Players } from "../../data/players"

interface Props{
  player:Players
  variant:string
}
export function Player({player,variant}:Props){
  return(
    
    <NavLink to="/" className="mt-2.5 w-75 h-[50vh] shrink-0 no-underline overflow-hidden group">
          <div className={`player-info-${variant} h-[40vh] flex relative flex-col items-center justify-center`} style={{
              background: `url(${player.image}) no-repeat center/cover `,
              
            }}>
            <div className="text-white text-[160px] opacity-40">{player.shirtNumber}</div>
            <div className="absolute bottom-7.5 flex gap-1.25 font-bold text-white items-end transition-transform duration-350 ease-in-out group-hover:-translate-y-13.75">
              <div className="text-[18px] pb-0.75">{player.name}</div>
              <div className="text-3xl">{player.surname}</div>
            </div>
            <div className="text-white text-[15px] font-bold absolute bottom-2.5 opacity-70
                            transition-transform duration-350 ease-in-out
                            group-hover:-translate-y-13.75">{player.position}</div>

            <div className="
                            w-full
                            h-12.5
                            absolute
                            bottom-4.25
                            flex
                            flex-rowjustify-center
                            items-center
                            text-white
                            opacity-0
                            translate-y-full
                            transition-all 
                            duration-350
                            ease-in-out 
                            group-hover:translate-y-0
                            group-hover:opacity-100">
              <div className="matches-played flex flex-col items-center justify-center">
                <div className={`barca-stat-${variant} barca-matches`}>Barca Appearances</div>
                <div className="matches-quantity">{player.appearances}</div>
              </div>
              
              <div className="flex flex-col items-center justify-center goals">
                <div className={`barca-stat-${variant} barca-goals ${player.position}`}>Barca {player.position === 'goalkeeper'?'clean sheets':'goals'}</div>
                <div className="goals">{player.position === 'goalkeeper'?player.cleanSheets:player.goals}</div>
              </div>
              <div className="flex flex-col items-center justify-center assists">
                <div className={`barca-stat-${variant} barca-assists`}>Barca {player.position === 'goalkeeper'?'saves':'assists'}</div>
                <div className="assists">{player.position === 'goalkeeper'?player.saves:player.assists}</div>
              </div>
            </div>
          </div>
        </NavLink>
  )
}