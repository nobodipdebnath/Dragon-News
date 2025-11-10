import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import { useLoaderData } from "react-router";

const LatestNews = () => {
  const [news, setNews] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    const braking = data.filter(
      (single) => single.others.is_today_pick === true
    );
    setNews(braking);
  }, [data]);

  return (
    <div className="my-8 flex items-center gap-2 bg-base-200 p-4">
      <h2 className="text-base-100 bg-secondary rounded-sm font-medium cursor-pointer px-10 py-3">
        latest
      </h2>
      <Marquee pauseOnHover={true} className="flex gap-5">
        <div className="flex gap-5 font-bold text-accent">
          {news.map((singleNews, idx) => (
            <p key={idx}>{singleNews.title}</p>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default LatestNews;
