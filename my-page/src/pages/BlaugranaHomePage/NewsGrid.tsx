import { news } from "../../data/news";
import { News } from "./News";

export function NewsGrid() {
  return (
    <>
      <div className="part-title text-[rgb(9,15,45)] text-xl font-bold tracking-wide mt-2.5  relative
    after:content-['']
    after:block
    after:w-18
    after:h-1
    after:bg-[#a11]
    after:mt-3
    after:mx-auto">BARCELONA NEWS</div>
      <div className="news-content grid  grid-cols-2 gap-y-5 gap-x-1.5 
                      -mt-2.5 w-[90%] max-h-125 mb-15
                      translate-y-7.5 transition-transform duration-500 ease-in-out overflow-y-scroll 
                      lg:grid-cols-3 lg: scale-95 
                      xl:grid-cols-4 xl:scale-105 xl:mt-15 xl:h-125">
        {news.map((newsRegular)=>{
          return <News news={newsRegular}/>
        })}
      </div>
    </>
  );
}
