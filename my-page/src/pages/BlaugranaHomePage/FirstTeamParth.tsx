import { players} from "../../data/players";
import { Player } from "./Player";


export function FirstTeamParth() {


  return (
    <>
      <div className="first-team-title">First-Team</div>
      <div className="players-grid">
        {players.map((player)=>{
          return (
            <Player player = {player} variant="home-page"/>
          )
        })}
        
      </div>
    </>
  );
}
