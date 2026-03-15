import { Legend } from "./Legend";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchLegends } from "../../store/slice/legendsSlice";

export function LegendsGrid() {
  const dispatch = useAppDispatch();
  const { legends, loading, error } = useAppSelector((state) => state.legends);

  useEffect(() => {
    if (!legends.length) {
      dispatch(fetchLegends());
    }
  }, [dispatch, legends.length]);

  if (loading) return <div>Загрузка матчей...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!legends.length) return <div>Нет данных о матчах</div>;

  return (
    <>
      <div className="text-[22px] text-center font-extrabold pt-5 text-[rgb(10,15,49)]">
        LEGENDARY PLAYERS
      </div>
      <div className="grid grid-cols-3 place-items-center">
        {legends.map((legend) => {
          return (
            <>
              <Legend key={legend._id} legend={legend} />
            </>
          );
        })}
      </div>
    </>
  );
}
