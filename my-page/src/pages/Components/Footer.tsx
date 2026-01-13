import BarcaBottomLogo from "../../assets/icons/barca-bottom-icon.png";
import FacebookLogo from "../../assets/icons/facebook-icon.png";
import InstagramLogo from "../../assets/icons/instagram-icon.png";
import XLogo from "../../assets/icons/x-icon.png";
import YoutubeLogo from "../../assets/icons/youtube-icon.png";
import TiktokLogo from "../../assets/icons/tik-tok-icon.png";
import { players } from "../../data/players";
import './Footer.css'
import { PlayerName } from "./PlayerName";

export function Footer(){
  return(
    <div className="footer w-screen h-155 bg-[rgb(24,23,51)] absolute">
        <div className="footer-grid relative">
          <div className="flex items-center">
            <img src={BarcaBottomLogo} className="h-25 ml-5 mr-2 mt-5 mb-5" />
            <div className="ml-2.5 text-3xl text-white font-bold">FC Barcelona</div>
          </div>

          <hr className="w-[95vw] h-1 bg-[rgb(253,197,44)] border-none mx-auto"/>
          <div className="flex flex-col items-center">
            <div className="text-white text-2xl font-bold">Follow Us On Social Media</div>
            <div className="flex mt-3">
              <a href="" className="facebook">
                <img src={FacebookLogo} className="media-logo" />
              </a>
              <a href="" className="instagram">
                <img src={InstagramLogo} alt="" className="media-logo" />
              </a>
              <a href="" className="x">
                <img src={XLogo} className="media-logo" />
              </a>
              <a href="" className="youtube">
                <img src={YoutubeLogo} className="media-logo" />
              </a>
              <a href="" className="tik-tok">
                <img src={TiktokLogo} className="media-logo" />
              </a>
            </div>
            <div className="flex gap-7.5 mt-3.75">
              <div className="position-players">
                <div className="position-name">Goalkeepers</div>
                {players.map((player)=>{
                if(player.position === 'goalkeeper')
                    return (
                      <PlayerName name={player.name} surname={player.surname}/>
                    )
                })}
                
              </div>
              <div className="position-players">
                <div className="position-name">Defender</div>
                  {players.map((player)=>{
                if(player.position === 'defender')
                    return (
                      <PlayerName name={player.name} surname={player.surname}/>
                    )
                })}
              </div>
              <div className="position-players">
                <div className="position-name">Midfielders</div>
                {players.map((player)=>{
                if(player.position === 'midfielder')
                    return (
                      <PlayerName name={player.name} surname={player.surname}/>
                    )
                })}
              </div>
              <div className="position-players">
                <div className="position-name">Forwards</div>
                  {players.map((player)=>{
                if(player.position === 'forward')
                    return (
                      <PlayerName name={player.name} surname={player.surname}/>
                    )
                })}
              </div>
            </div>
            <div className="text-white text-2xl absolute font-bold -bottom-20 left-8">
              Created By BOMJ
            </div>
          </div>
        </div>
      </div>
  )
}