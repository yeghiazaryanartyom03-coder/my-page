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
    <div className="footer">
        <div className="footer-grid">
          <div className="bottom-logo">
            <img src={BarcaBottomLogo} className="site-logo" />
            <div className="barca-name">FC Barcelona</div>
          </div>

          <hr />
          <div className="social-media">
            <div className="follow-us">Follow Us On Social Media</div>
            <div className="medias">
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
            <div className="all-players">
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
            <div className="copyright">
              Created By BOMJ
            </div>
          </div>
        </div>
      </div>
  )
}