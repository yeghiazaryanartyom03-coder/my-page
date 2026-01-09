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
              <div className="latest-match-title">
                  Latest Match  
              </div>
              <div className="latest-match-info">
                <div className="latest-match-club">
                  <div className="latest-match-team-img-div">
                    <img src={firstTeamImg} alt="" className="latest-match-team-img" />
                  </div>
                  <div className="latest-match-team-name">
                    {firstTeam}
                  </div>
                </div>  
                <div className="latest-match-score-info">
                  <div className="latest-match-tournament">
                    <img src={tournament} alt="" className="latest-match-tournament-img"/>
                  </div>
                  <div className="latest-match-score">
                    {score}
                  </div>
                  
                </div>
                <div className="latest-match-club">
                  <div className="latest-match-team-img-div">
                    <img src={secondTeamImg} alt="" className="latest-match-team-img" />
                  </div>
                  <div className="latest-match-team-name">
                    {secondTeam}
                  </div>
                </div>
              </div> 
            </div>
          </div>
          <div className="matches-result">
            {<MatchesGrid refTarget={refTarget} />}
          </div>
      </div>
      <div className="matches-footer">
        <Footer />
      </div>
    </>
  )
}