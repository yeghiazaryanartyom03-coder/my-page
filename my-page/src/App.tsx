import { Matches } from './pages/MatchesPage/Matches'
import { Route, Routes } from 'react-router'
import './App.css'
import { BlaugranaHomePage } from './pages/BlaugranaHomePage/BlaugranaHomePage'
import {History} from './pages/HistoryPage/History'
import { FirstTeam } from './pages/FirstTeamPage/FirstTeam'
import { LegendaryPlayers } from './pages/LegendaryPlayersPage/LegendaryPlayers'
import { ShopRouter } from './pages/shopPage/ShopRouter'
function App() {

  return (
    <Routes>
      <Route path="/" element={<BlaugranaHomePage />} />
      <Route path="/history" element={<History />} /> 
      <Route path="/team" element={<FirstTeam />} />
      <Route path="/matches" element={<Matches />} />
      <Route path="/legendary-players" element={<LegendaryPlayers />} />
      <Route path='/shop/*'>
        {ShopRouter}
      </Route>
    </Routes>
  )
  
}

export default App
