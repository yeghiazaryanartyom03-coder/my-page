import { Matches } from "./pages/MatchesPage/Matches";
import { Route, Routes } from "react-router";
import "./App.css";
import { BlaugranaHomePage } from "./pages/BlaugranaHomePage/BlaugranaHomePage";
import { History } from "./pages/HistoryPage/History";
import { LegendaryPlayers } from "./pages/LegendaryPlayersPage/LegendaryPlayers";
import { ShopRouter } from "./pages/shopPage/ShopRouter";
import { PlayersRouter } from "./pages/FirstTeamPage/PlayersRouter";
import { HistoryRouter } from "./pages/HistoryPage/HistoryRouter";
import { LegendsRouter } from "./pages/LegendaryPlayersPage/LegendsRouter";
import { MatchRouter } from "./pages/MatchesPage/MatchRouter/MatchRouter";

function App() {

  return (
    <Routes>
      <Route
        path="/"
        element={
          <BlaugranaHomePage />
        }
      />
      <Route path="/history/*">{HistoryRouter} </Route>
      <Route path="/team/*">{PlayersRouter}</Route>
      <Route path="/matches">{MatchRouter}</Route>
      <Route path="/legendary-players/*">{LegendsRouter} </Route>
      <Route path="/shop/*">{ShopRouter}</Route>
    </Routes>
  );
}

export default App;
