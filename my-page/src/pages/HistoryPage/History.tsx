import { Header } from "../Components/Header"
import { Footer } from "../Components/Footer"
import './History.css'
export function History(){
  return(
    <>
    <Header />
    <div className="middle-section">
      <div className="background-img">
        <div className="title">THE HISTORY OF FC BARCELONA</div>
      </div>

      <div className="history-content">
        <div className="grid-title">HISTORY BY DECADES</div>
        <div className="history-grid">
          <div className="history">
            <img src="/pictures/news-images/hug.webp" className="history-img" />
            <div className="history-title">
                parth about title of them
            </div>
          </div>
          <div className="history">
            <img src="/pictures/news-images/hug.webp" className="history-img" />
            <div className="history-title">
                2008-20. The best years in our history
            </div>
          </div>
          <div className="history">
            <img src="/pictures/news-images/hug.webp" className="history-img" />
            <div className="history-title">
                parth about title of theme
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}