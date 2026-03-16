import { MatchHomePage } from "./MatchHomePage";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { fetchMatches } from "../../store/slice/matchesSlice";

export function MatchesGrid() {
  const dispatch = useAppDispatch()
  const {matches, loading, error} = useAppSelector((state)=>state.matches)

  useEffect(()=>{
    if(matches.length === 0){
      dispatch(fetchMatches());
    }
  },[matches.length,dispatch]);

  
  if (loading) return <div>Загрузка матчей...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!matches.length) return <div>Нет данных о матчах</div>;

  return (
    <>
      <div className="text-3xl font-bold text-[rgb(9,15,45)]">Next Matches</div>
      <div className="matches mt-6 flex flex-row justify-around gap-2.5 overflow-x-auto">
        {matches.map((match) => {
          if (match.goalOpponent === undefined) {
            return <MatchHomePage key={match._id} match={match} />;
          } else {
            return "";
          }
        })}
      </div>
    </>
  );
}
