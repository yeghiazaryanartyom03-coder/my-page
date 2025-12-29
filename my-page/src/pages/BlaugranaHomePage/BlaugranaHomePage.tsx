import "./BlaugranaHomePage.css";
import { Header } from "../Components/Header";
import { FirstTeamParth } from "./FirstTeamParth";
import { MatchesGrid } from "./MatchesGrid";
import { NewsGrid } from "./NewsGrid";
import { Footer } from "../Components/Footer";
export function BlaugranaHomePage() {
  return (
    <>
      <Header />
      <div className="content">
        <div className="background-container">
          <div className="slogan">MES QUE UN CLUB</div>
        </div>
        <div className="main-content">
          <div className="white-background-wide top">
            <MatchesGrid />
          </div>
          <div className="white-background-narrow">
            <NewsGrid />
          </div>

          <div className=" bottom">
            <FirstTeamParth />
          </div>
          <div className="sponsers">
            <div className="main-partners">MAIN PARTNERS</div>
            <div className="vertical-line"></div>
            <img src="/pictures/sponsers-logo/nike.png" className="partner" />
            <img
              src="/pictures/sponsers-logo/spotify.png"
              className="partner spotify"
            />
            <img
              src="/pictures/sponsers-logo/philips.png"
              className="partner"
            />
          </div>
        </div>
      </div>
      <div className="footer-home-page">
        <Footer />
      </div>
      
    </>
  );
}
