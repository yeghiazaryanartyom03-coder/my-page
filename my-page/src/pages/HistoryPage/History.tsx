import { Header } from "../Components/Header"
import { Footer } from "../Components/Footer"
import './History.css'
import { HistoryGrid } from "./HistoryGrid"
export function History(){
  return(
    <>
    <Header />
    <div className="middle-section">
      <div className="background-img">
        <div className="title">THE HISTORY OF FC BARCELONA</div>
      </div>

      <div className="history-grid">
        <HistoryGrid />
      </div>
    </div>
    <div className="footer-history">
      <Footer />
    </div>
    
    </>
  )
}