import { Matches } from './pages/MatchesPage/Matches'
import { Route, Routes } from 'react-router'
import { useEffect, useState } from 'react'
import './App.css'
import { BlaugranaHomePage } from './pages/BlaugranaHomePage/BlaugranaHomePage'
import { History } from './pages/HistoryPage/History'
import { FirstTeam } from './pages/FirstTeamPage/FirstTeam'
import { LegendaryPlayers } from './pages/LegendaryPlayersPage/LegendaryPlayers'
import { ShopRouter } from './pages/shopPage/ShopRouter'
import axios from 'axios'

export interface IMatch{
  _id: string,
  apponent: string,
  stadium?: string,
  tournament: string,
  image: string,
  isInHome: boolean,
  date: string,
  goalBarca?: number,
  goalApponent?: number,
}

export interface INews{
  _id: string,
  title: string,
  auther: string,
  vews: number,
  image: string,
}

export interface IPlayer{
  _id: string,
  name: string,
  surname: string,
  shirtNumber: number,
  appearances: number,
  position: string,
  image: string,
  goals?: number,
  assists?: number,
  cleanSheets?: number,
  saves?:number,
}

function App() {
  const [matches, setMatches] = useState<IMatch[]>([])
  const [news, setNews] = useState<INews[]>([])
  const [players, setPlayers] = useState<IPlayer[]>([])

  useEffect(()=>{
    const fetchAll = async () => {
      try{
        let response = await axios.get('http://localhost:5000/api/match')
        setMatches(response.data)
        response = await axios.get('http://localhost:5000/api/news')
        setNews(response.data)
        response = await axios.get('http://localhost:5000/api/player')
        setPlayers(response.data)
      }catch(error){
        console.log(error)
      }
    }

    fetchAll()
  },[])

  
  return (
    <Routes>
      <Route path="/" element={<BlaugranaHomePage matches={matches} news={news} players={players}/>} />
      <Route path="/history" element={<History />} /> 
      <Route path="/team" element={<FirstTeam />} />
      <Route path="/matches" element={<Matches/>} />
      <Route path="/legendary-players" element={<LegendaryPlayers />} />
      <Route path='/shop/*'>
        {ShopRouter}
      </Route>
    </Routes>
  )
  
}

export default App
