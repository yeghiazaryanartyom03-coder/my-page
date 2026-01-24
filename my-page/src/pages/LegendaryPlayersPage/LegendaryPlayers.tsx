import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { LegendsGrid } from "./LegendsGrid";
import './LegendaryPlayers.css'

export function LegendaryPlayers() {
  return (
    <>
      <Header />
      <div className="middle-section">
        <div className="legends-background-img">
          <div className="text-[rgb(210,215,245)] text-[34px] font-bold">THE LEGACY OF FC BARCELONA</div>
        </div>

        <div className="bg-white rounded-tl-4xl rounded-tr-4xl w-[95%] h-1120 mx-auto -translate-y-35
                        xl:h-1220">
          <LegendsGrid />
        </div>
      </div>
      <div className="legendary-players-footer">
        <Footer />
      </div>
    </>
  );
}
