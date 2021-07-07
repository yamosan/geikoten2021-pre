import React, { VFC } from "react";
import Image from "components/parts/Image";

type Props = {
  index: string;
  title: string;
};

const FirstView: VFC<Props> = ({ index, title }) => {
  return (
    <div className="relative overflow-hidden">
      <figure className="bg-gray w-full h-60 flex justify-center items-center">
        <Image src="/img/page_thumbnail.png" alt="ページのサムネイル" layout="fill" className="object-cover" />
      </figure>
      <div className="absolute top-0 left-0 right-0 bottom-0 py-1 px-4 flex items-end">
        <div className="w-full flex items-center gap-3">
          {/* FIXME: genuineの高さが合わない */}
          <span className="text-white text-4xl font-genuine pt-2.5">{index}</span>
          <span className="text-white text-2xl font-bold">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default FirstView;
