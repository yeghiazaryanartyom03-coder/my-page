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
        <div className="text-[rgb(210,215,245)] text-4xl font-bold">THE HISTORY OF FC BARCELONA</div>
      </div>

      <div className="bg-white rounded-tl-[30px] rounded-tr-[30px] w-[95%] h-335 mx-auto -translate-y-35 xl:h-362.5">
        <HistoryGrid />
      </div>
    </div>
    <div className="footer-history">
      <Footer />
    </div>
    
    </>
  )
}