import React from "react";
import QAndAIcon from "components/parts/QAndAIcon";

const QAndAPageLink = () => {
  return (
    <div className="relative flex justify-center items-center bg-black  rounded-md pl-4 ml-5">
      <div className="absolute -left-9">
        <QAndAIcon />
      </div>
      <div className="">
        <p
          className="w-max flex flex-col mx-auto font-bold text-xs text-white text-left py-2.5"
          style={{ fontSize: "min(0.75rem, 3vw)" }}
        >
          どんな部署か知りたい人は、
          <span className="inline-block">↓をタップしてQ＆Aコーナーを見てみよう！</span>
        </p>
      </div>
    </div>
  );
};

export default QAndAPageLink;
