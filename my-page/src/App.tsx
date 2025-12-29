
import { Route, Routes } from 'react-router'
import './App.css'
import { BlaugranaHomePage } from './pages/BlaugranaHomePage/BlaugranaHomePage'
import {History} from './pages/HistoryPage/History'
function App() {

  return (
    <Routes>
      <Route path="/" element={<BlaugranaHomePage />} />
      <Route path="/history" element={<History />} /> 
    </Routes>
  )
  
}

export default App
