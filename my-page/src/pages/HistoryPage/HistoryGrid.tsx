import { HistoryContent } from "./HistoryContent";
import { useEffect} from 'react';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchHistories } from "../../store/slice/historySlice";

export function HistoryGrid(){
  const dispatch = useAppDispatch()
  const {histories, loading, error} = useAppSelector((state) => state.histories)

  useEffect(()=>{
    if(histories.length === 0){
      dispatch(fetchHistories())
    }
  },[dispatch, histories.length])

  if (loading) return <div>Загрузка матчей...</div>;
  if (error) return <div>Ошибка: {error}</div>;
  if (!histories.length) return <div>Нет данных о матчах</div>;  

return(
    <>
      <div  className="text-center font-extrabold text-[22px] pt-5 text-[rgb(10,15,49)]">HISTORY BY DECADES</div>
        <div className="grid grid-cols-3 place-items-center">
          
          {histories.map((story)=>{
            return ( 
              <HistoryContent key={story._id} story={story}/> 
            )
          })}
        </div>
    </>
  )
}