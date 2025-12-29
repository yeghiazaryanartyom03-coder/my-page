import type { News } from "../../data/news";

interface NewsProp{
  news:News
}

export function News({news}:NewsProp) {
  return (
    <div className="news-container">
      <img src={news.image} alt="" className="news-img" />
      <div className="news-info">
        <div className="news-title">{news.title}</div>
        <div className="other-info">
          <div className="news-creater">{news.auther}</div>
          <div className="middle-point">·</div>
          <div className="vews">{news.vews} vews</div>
        </div>
      </div>
    </div>
  );
}
