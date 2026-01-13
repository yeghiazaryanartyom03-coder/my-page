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
          <div className="legends-title">THE LEGACY OF FC BARCELONA</div>
        </div>

        <div className="legends-grid">
          <LegendsGrid />
        </div>
      </div>
      <div className="legendary-players-footer">
        <Footer />
      </div>
    </>
  );
}
