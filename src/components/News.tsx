import React, { VFC } from "react";
import Arrow from "components/parts/Arrow";
import Link, { LinkProps } from "next/link";

type Props = {
  text: string;
  date: string;
} & LinkProps;

const News: VFC<Props> = ({ text, date, ...rest }) => {
  return (
    <Link {...rest}>
      <div className="flex justify-between items-end bg-white px-6 py-3">
        <div className="flex flex-col space-y-1">
          <div className="flex items-center space-x-2">
            <span className="bg-primary font-medium text-white px-3 rounded-full text-xxs inline-block">お知らせ</span>
            <time className="font-medium text-sm text-black">{date}</time>
          </div>
          <p className="font-medium text-sm text-black">{text}</p>
        </div>
        <div className="flex-shrink-0 px-2">
          <Arrow color="primary" size="large" />
        </div>
      </div>
    </Link>
  );
};

export default News;
