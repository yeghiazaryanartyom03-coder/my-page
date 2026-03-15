import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Player } from "./Player";
import { fetchPlayers } from "../../store/slice/playersSlice";

export function FirstTeamPart() {
  const dispatch = useAppDispatch();
  const { players, error, loading } = useAppSelector((state) => state.players);

  useEffect(() => {
    if (players.length === 0) {
      dispatch(fetchPlayers());
    }
  }, [dispatch, players.length]);

  
  if (loading) return <div>Загрузка матчей...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!players.length) return <div>Нет данных о матчах</div>;

  return (
    <>
      <div
        className="text-[rgb(9,15,45)] text-[22px] font-bold tracking-wider mt-5
                      after:content-['']
                      after:block
                      after:w-18
                      after:h-1
                      after:bg-[#a11]
                      after:mt-2
                      after:mx-auto  
      "
      >
        First-Team
      </div>
      <div className="players-grid flex flex-row gap-2.5 w-[94vw] overflow-x-scroll">
        {players.map((player) => {
          return <Player key={player._id} player={player} variant="home-page" />;
        })}
      </div>
    </>
  );
}
