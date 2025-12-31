import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import "./FirstTeam.css";
import { players } from "../../data/players";
import { Player } from "../BlaugranaHomePage/Player";

export function FirstTeam() {
  return (
    <>
      <Header />
      <div className="first-team-background"></div>
      <div className="first-team-content">
        <div className="team-title">FC BARCELONA FIRST TEAM</div>
        <div className="first-team-main">
          <div className="first-team-position">GOALKEEPERS</div>
          <div className="first-team-grid">
            {players.map((player) => {
              if (player.position === "goalkeeper") {
                return <Player player={player} variant={'first-team'}/>;
              }
            })}
          </div>
          <div className="first-team-position">DEFENDERS</div>
          <div className="first-team-grid">
            {players.map((player) => {
              if (player.position === "defender") {
                return <Player player={player} variant={'first-team'}/>;
              }
            })}
          </div>
          <div className="first-team-position">MIDFIELDERS</div>
          <div className="first-team-grid">
            {players.map((player) => {
              if (player.position === "midfielder") {
                return <Player player={player} variant={'first-team'}/>;
              }
            })}
          </div>
          <div className="first-team-position">FORWARDS</div>
          <div className="first-team-grid">
            {players.map((player) => {
              if (player.position === "forward") {
                return <Player player={player} variant={'first-team'}/>;
              }
            })}
          </div>
        </div>
      </div>

      <div className="first-team-footer">
        <Footer />
      </div>
    </>
  );
}
