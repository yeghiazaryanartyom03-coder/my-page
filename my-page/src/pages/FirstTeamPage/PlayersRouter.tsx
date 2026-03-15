import { Route } from "react-router";
import { FirstTeam } from "./FirstTeam";
import  PlayerProfile  from "./playarPage/PlayerProfil";



export const PlayersRouter = (
  <>
    <Route index element={<FirstTeam />} />
    <Route path="profil" element={<PlayerProfile />} />
  </>
);