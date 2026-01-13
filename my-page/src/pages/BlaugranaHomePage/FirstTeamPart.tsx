import { players} from "../../data/players";
import { Player } from "./Player";


export function FirstTeamPart() {


  return (
    <>
      <div className="text-[rgb(9,15,45)] text-[22px] font-bold tracking-wider mt-5
                      after:content-['']
                      after:block
                      after:w-18
                      after:h-1
                      after:bg-[#a11]
                      after:mt-2
                      after:mx-auto  
      ">First-Team</div>
      <div className="players-grid flex flex-row gap-2.5 w-[94vw] overflow-x-scroll">
        {players.map((player)=>{
          return (
            <Player player = {player} variant="home-page"/>
          )
        })}
        
      </div>
    </>
  );
}
