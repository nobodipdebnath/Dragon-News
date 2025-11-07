import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="my-8 flex items-center gap-2 bg-base-200 p-4">
      <h2 className="text-base-100 bg-secondary rounded-sm font-medium cursor-pointer px-10 py-3">latest</h2>
      <Marquee pauseOnHover={true} className="flex gap-5">
        <p className="font-semibold text-accent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, repellat?</p>
        <p className="font-semibold text-accent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, repellat?</p>
        <p className="font-semibold text-accent">Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, repellat?</p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
