import { Route } from "react-router";
import { History } from "./History";
import { OnePartOfHistory } from "./OnePartOfHistory/OnePartOfHistory";


export const HistoryRouter = (
  <>
    <Route index element={<History />} />
    <Route path="partofhistory" element={<OnePartOfHistory />} />
  </>
);