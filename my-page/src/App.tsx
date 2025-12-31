import { Matches } from './pages/MatchesPage/Matches'
import { Route, Routes } from 'react-router'
import './App.css'
import { BlaugranaHomePage } from './pages/BlaugranaHomePage/BlaugranaHomePage'
import {History} from './pages/HistoryPage/History'
import { FirstTeam } from './pages/FirstTeamPage/FirstTeam'
function App() {

  return (
    <Routes>
      <Route path="/" element={<BlaugranaHomePage />} />
      <Route path="/history" element={<History />} /> 
      <Route path="/team" element={<FirstTeam />} />
      <Route path="/matches" element={<Matches />} />
    </Routes>
  )
  
}

export default App
