import { Route } from "react-router";
import { LegendPage } from "./LegendPage/LegendPage";
import { LegendaryPlayers } from "./LegendaryPlayers";


export const LegendsRouter = (
  <>
    <Route index element={<LegendaryPlayers />} />
    <Route path="legend" element={<LegendPage />} />
  </>
);