import type { News } from "../../data/news";

interface NewsProp{
  news:News
}

export function News({news}:NewsProp) {
  return (
    <div className="news-container flex flex-col items-center mb-20 relative">
      <img src={news.image} alt="" className="aspect-video object-cover h-37.5 w-[90%]" />
      <div className="bg-[rgb(247,247,247)] min-h-[12vh] w-68 rounded-2xl transition-all  duration-200 ease-in-out absolute top-25 left-5 z-1000 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
        <div className="text-xl font-bold mx-3 mt-3">{news.title}</div>
        <div className="text-[15px] flex gap-2.5 mx-3 mt-0 text-[#777777]">
          <div className="news-creater">{news.auther}</div>
          <div className="middle-point">·</div>
          <div className="vews">{news.vews} vews</div>
        </div>
      </div>
    </div>
  );
}
