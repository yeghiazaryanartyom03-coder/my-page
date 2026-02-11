import "./BlaugranaHomePage.css";
import { Header } from "../Components/Header";
import { FirstTeamPart } from "./FirstTeamPart";
import { MatchesGrid } from "./MatchesGrid";
import { NewsGrid } from "./NewsGrid";
import { Footer } from "../Components/Footer";
import type{ IMatch, IPlayer, INews } from "../../App";



export function BlaugranaHomePage({matches, news, players}:{matches:IMatch[]; news:INews[]; players:IPlayer[]}) {
  console.log(matches)
  
  return (
    <>
      <Header />
      <div className="content">
        <div className="background-container">
          <div className="text-white text-4xl font-bold flex justify-center items-center absolute bottom-52 left-0 right-0 z-1005">MES QUE UN CLUB</div>
        </div>
        <div className="bg-[rgb(9,15,45)] flex flex-col w-full relative ">
          <div className="flex-col flex p-5 bg-white h-[56vh] w-[95vw] rounded-4xl mx-auto px-4  z-1004 transform-">
            <MatchesGrid matches={matches}/>
          </div>
          <div className="flex flex-col items-center justify-center h-full bg-white mx-10 border-t-[3px] border-b-[3px] z-1005 border-[#81040b] xl:justify-start relative">
            <NewsGrid news={news}/>
          </div>

          <div className=" bottom w-[95vw] h-[60vh] bg-white mr-auto rounded-tr-[20px] rounded-br-[20px] grid justify-items-center z-1008" >
            <FirstTeamPart players={players}/>
          </div>
          <div className="sponsers flex gap-6.25 justify-center items-center w-screen h-[30vh]">
            <div className="text-white text-2xl font-extrabold">MAIN PARTNERS</div>
            <div className="w-0.75 h-15 bg-white"></div>
            <img 
              src="/pictures/sponsers-logo/nike.png" 
              className="h-10" />
            <img
              src="/pictures/sponsers-logo/spotify.png"
              className="h-15"
            />
            <img
              src="/pictures/sponsers-logo/philips.png"
              className="h-10"
            />
          </div>
        </div>
      </div>
      <div className="footer-home-page flex-1 max-w-7xl px-auto">
        <Footer />
      </div>
      
    </>
  );
}
