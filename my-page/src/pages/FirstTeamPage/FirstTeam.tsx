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
      <div className="bg-white rounded-tl-4xl rounded-tr-4xl w-[98%] h-1445 mx-auto -translate-y-35 lg:h-1025 xl:h-830">
        <div className="text-center pt-5 text-3xl text-[rgb(4,13,67)] font-bold">FC BARCELONA FIRST TEAM</div>
        <div className="first-team-main">
          <div className="mt-6.25 text-3xl font-semibold text-[rgb(253,197,44)] text-center
                          xl:mb-5 xl:text-4xl">GOALKEEPERS</div>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {players.map((player) => {
              if (player.position === "goalkeeper") {
                return <Player player={player} variant={'first-team'}/>;
              }
            })}
          </div>
          <div className="mt-6.25 text-3xl font-semibold text-[rgb(253,197,44)] text-center
                          xl:mb-5 xl:text-4xl">DEFENDERS</div>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {players.map((player) => {
              if (player.position === "defender") {
                return <Player player={player} variant={'first-team'}/>;
              }
            })}
          </div>
          <div className="mt-6.25 text-3xl font-semibold text-[rgb(253,197,44)] text-center
                          xl:mb-5 xl:text-4xl">MIDFIELDERS</div>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {players.map((player) => {
              if (player.position === "midfielder") {
                return <Player player={player} variant={'first-team'}/>;
              }
            })}
          </div>
          <div className="mt-6.25 text-3xl font-semibold text-[rgb(253,197,44)] text-center
                          xl:mb-5 xl:text-4xl">FORWARDS</div>
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
