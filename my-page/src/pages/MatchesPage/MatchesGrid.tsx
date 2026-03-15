import { useRef, useEffect, useMemo } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchMatches } from "../../store/slice/matchesSlice";
import type { IMatch } from "../../types";
import { Match } from "./Match";
import BarcaIcon from "../../assets/icons/barca-logo.png";

function getTournament(match: IMatch) {
  if (match.tournament === "La Liga") {
    return "la-liga";
  } else if (match.tournament === "Champions League") {
    return "champions-league";
  } else if (match.tournament === "Supercopa de Espana") {
    return "supercopa-de-espana";
  } else {
    return "copa-del-rey";
  }
}

export function MatchesGrid() {
  const dispatch = useAppDispatch();
  const { matches, loading, error } = useAppSelector((state) => state.matches);
  const refTarget = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (matches.length === 0) {
      dispatch(fetchMatches());
    }
  }, [dispatch, matches.length]);

  const latestMatch = useMemo(() => {
    if (!matches.length) return null;
    for (let i = 0; i < matches.length; i++) {
      if (matches[i].goalOpponent === undefined) {
        return matches[--i];
      }
    }
    return null;
  }, [matches]);

  if (loading) return <div>Загрузка матчей...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!latestMatch) return <div> hello</div>;
  if (!matches.length) return <div>Нет данных о матчах</div>;

  return (
    <>
      <div className="top-background-matches">
        <div className="latest-match">
          <div className="text-black text-[25px] font-bold pt-5 pl-5">
            Latest Match
          </div>
          <div className="h-75 flex items-center justify-between">
            <div className="text-white flex flex-col justify-center items-center w-75">
              <div className="latest-match-team-img-div">
                <img
                  src={latestMatch.isInHome ? BarcaIcon : latestMatch.image}
                  alt=""
                  className="h-30"
                />
              </div>
              <div className="font-bold text-[38px]">
                {latestMatch.isInHome ? "Barcelona" : latestMatch.opponent}
              </div>
            </div>
            <div className="text-white flex flex-col items-center w-50">
              <div className="latest-match-tournament">
                <img
                  src={`/pictures/club-logos/${getTournament(latestMatch)}.png`}
                  alt=""
                  className="h-30"
                />
              </div>
              <div
                className="latest-match-score font-semibold text-[38px] py-1 my-1 px-2.5
                                  bg-linear-to-b from-[rgba(225,10,50,1)] to-[rgba(10,15,45,1)]"
              >
                {latestMatch.isInHome
                  ? `${latestMatch.goalBarca} : ${latestMatch.goalOpponent}`
                  : `${latestMatch.goalOpponent} : ${latestMatch.goalBarca}`}
              </div>
            </div>
            <div className="text-white flex flex-col justify-center items-center w-75">
              <div className="latest-match-team-img-div">
                <img
                  src={latestMatch.isInHome ? latestMatch.image : BarcaIcon}
                  alt=""
                  className="h-30"
                />
              </div>
              <div className="font-bold text-[38px]">
                {latestMatch.isInHome ? latestMatch.opponent : "Barcelona"}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-[30px] font-bold text-[rgb(10,15,55)] text-center pt-5">
          TEAM CALENDAR
        </div>
        <div className="grid grid-cols-1">
          {matches.map((match, index) => {
            return (
              <Match
                key={match._id}
                matches={matches}
                index={index}
                match={match}
                refTarget={refTarget}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}
