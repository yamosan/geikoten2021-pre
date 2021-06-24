import React, { VFC } from "react";
import Arrow from "components/parts/Arrow";

type Props = {
  text: string;
  date: string;
};

const News: VFC<Props> = ({ text, date }) => {
  return (
    <div className="flex justify-between items-end bg-white px-6 py-3">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <span className="bg-primary text-white px-3 rounded-full text-xxs inline-block">お知らせ</span>
          <time className="text-sm">{date}</time>
        </div>
        <p className="text-sm">{text}</p>
      </div>
      <div className="flex-shrink-0 px-2">
        <Arrow color="primary" size="large" />
      </div>
    </div>
  );
};

export default News;
