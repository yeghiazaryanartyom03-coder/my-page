import { Header } from "../Components/Header"
import { Footer } from "../Components/Footer"
import { useEffect, useRef, useState } from "react"
import "./Matches.css"
import { MatchesGrid } from "./MatchesGrid"

export function Matches(){
  const refTarget = useRef<HTMLDivElement | null>(null);
  const [firstTeam,setFirstTeam] = useState('')
  const [secondTeam,setSecondTeam] = useState('')
  const [score,setScore] = useState('')
  const [tournament,setTournament] = useState('')
  const [firstTeamImg, setFirstTeamImg ] = useState('')
  const [secondTeamImg, setSecondTeamImg ] = useState('')
  useEffect(()=>{
    console.log(refTarget.current?.innerHTML)
    if(!refTarget.current?.querySelector('.resullt-match-info')){
      console.log('ne poluchilos')
    }
    setScore(`${refTarget.current?.querySelector('.vs-text')?.textContent}`)
    setFirstTeam(`${refTarget.current?.querySelector('.first-club')?.textContent}`)
    setSecondTeam(`${refTarget.current?.querySelector('.second-club')?.textContent}`)
    setTournament(`${refTarget.current?.querySelector('.tournament-img')?.getAttribute('src')}`)
    setFirstTeamImg(`${refTarget.current?.querySelector('.first-club-img')?.getAttribute('src')}`)
    setSecondTeamImg(`${refTarget.current?.querySelector('.second-team-img')?.getAttribute('src')}`)

  },[])
  console.log(firstTeamImg)
  console.log(secondTeamImg)
  return(
    <>
      <Header />
      <div className="matches-main-content">
          <div className="top-background-matches">
            <div className="latest-match">
              <div className="text-white text-[25px] font-bold pt-5 pl-5">
                  Latest Match  
              </div>
              <div className="h-75 flex items-center justify-between">
                <div className="text-white flex flex-col justify-center items-center w-75">
                  <div className="latest-match-team-img-div">
                    <img src={firstTeamImg} alt="" className="h-30" />
                  </div>
                  <div className="font-bold text-[38px]">
                    {firstTeam}
                  </div>
                </div>  
                <div className="text-white flex flex-col items-center w-50">
                  <div className="latest-match-tournament">
                    <img src={tournament} alt="" className="h-30"/>
                  </div>
                  <div className="latest-match-score font-semibold text-[38px] py-1 my-1 px-2.5
                                  bg-linear-to-b from-[rgba(225,10,50,1)] to-[rgba(10,15,45,1)]">
                    {score}
                  </div>
                  
                </div>
                <div className="text-white flex flex-col justify-center items-center w-75">
                  <div className="latest-match-team-img-div">
                    <img src={secondTeamImg} alt="" className="h-30" />
                  </div>
                  <div className="font-bold text-[38px]">
                    {secondTeam}
                  </div>
                </div>
              </div> 
            </div>
          </div>
          <div className="matches-result w-[95%] h-1890 bg-white mx-auto rounded-tl-[30px] rounded-tr-[30px]">
            {<MatchesGrid refTarget={refTarget} />}
          </div>
      </div>
      <div className="matches-footer">
        <Footer />
      </div>
    </>
  )
}