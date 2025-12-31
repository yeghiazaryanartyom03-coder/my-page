import { Header } from "../Components/Header"
import { Footer } from "../Components/Footer"
import "./Matches.css"
import { MatchesGrid } from "./MatchesGrid"

export function Matches(){
  return(
    <>
      <Header />
      <div className="matches-main-content">
          <div className="top-background-matches">

          </div>
          <div className="matches-result">
            {<MatchesGrid />}
          </div>
      </div>
      <div className="matches-footer">
        <Footer />
      </div>
    </>
  )
}