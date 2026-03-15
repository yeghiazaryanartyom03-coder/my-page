import { Route } from "react-router";
import { Matches } from "../Matches";
import { OneMatchPage } from "../OneMatchPage/OneMatchPage";


export const MatchRouter = (
  <>
    <Route index element={<Matches />} />
    <Route path="matchinfo" element={<OneMatchPage />} />
  </>
);