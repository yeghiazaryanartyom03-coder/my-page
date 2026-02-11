import { Header } from "../Components/Header"
import { Footer } from "../Components/Footer"
import "./Matches.css"
import { MatchesGrid } from "./MatchesGrid"



export function Matches(){
  return(
    <>
      <Header />
      <div className="matches-main-content pt-10">
          <div className="matches-result w-[95%] h-1990 bg-white mx-auto rounded-tl-[30px] rounded-tr-[30px]">
            {<MatchesGrid/>}
          </div>
      </div>
      <div className="matches-footer">
        <Footer />
      </div>
    </>
  )
}