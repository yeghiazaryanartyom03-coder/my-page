import { type Match, matches } from "../../data/matches";
import BarcaLogo from "../../assets/icons/barca-logo.png";
import { useEffect, type RefObject } from "react";
interface Prop {
  match: Match;
  index: number;
  refTarget: RefObject<HTMLDivElement | null>;
}
export function Match({ match, index, refTarget }: Prop) {
  useEffect(() => {
    refTarget.current?.scrollIntoView({
      behavior: "auto",
      block: "start",
    });
  }, []);

  function getTournament(match: Match) {
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

  function getScore(match: Match) {
    if (match.goalBarca !== undefined && match.isInHome) {
      return <>{`${match.goalBarca} : ${match.goalApponent}`}</>;
    } else if (match.goalBarca !== undefined && !match.isInHome) {
      return <>{`${match.goalApponent} : ${match.goalBarca}`}</>;
    } else {
      return "VS";
    }
  }

  return (
    <>
      <div className="after:content-['']
                   after:flex after:w-[90%] after:h-0.5 after:bg-[rgb(10,15,55)] after:mx-auto after:mt-5">
        <div
          ref={
            matches[index].goalBarca !== undefined &&
            matches[++index].goalBarca === undefined
              ? refTarget
              : null
          }
          className="flex flex-row justify-around items-center gap-10 mt-10
                   "
        >
          <div className="flex flex-col items-center w-25 first-club">
            <img
              src={match.isInHome === true ? BarcaLogo : match.image}
              className="h-15 first-club-img"
            />
            <div className="font-semibold text-[rgb(10,15,55)] text-center">
              {match.isInHome ? "FC Barcelona" : match.apponent}
            </div>
          </div>
          <div className=" flex flex-col items-center -translate-y-3">
            <div className=" flex flex-col items-center w-25 tournament-img-div">
              <img
                src={`/pictures/club-logos/${getTournament(match)}.png`}
                className="h-12.5"
              />
            </div>
            <div className="text-xl font-semibold pb-7  text-white bg-[rgb(10,15,55)] h-7.5 w-12.5 pt-1 text-center flex justify-center bg-linear-to-b from-[rgba(34,61,210,0.8)] to-[rgba(10,15,45,1)]">{getScore(match)}</div>
          </div>
          <div className="flex flex-col items-center w-25 second-club">
            <img
              src={match.isInHome === true ? match.image : BarcaLogo}
              className="h-15 second-team-img"
            />
            <div className="font-semibold text-[rgb(10,15,55)] text-center">
              {match.isInHome ? match.apponent : "FC Barcelona"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
