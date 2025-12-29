import { news } from "../../data/news";
import { News } from "./News";

export function NewsGrid() {
  return (
    <>
      <div className="part-title">BARCELONA NEWS</div>
      <div className="news-content">
        {news.map((newsRegular)=>{
          return <News news={newsRegular}/>
        })}
      </div>
    </>
  );
}
