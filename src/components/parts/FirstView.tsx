import React, { VFC } from "react";
import Image from "components/parts/Image";

type Props = {
  index: string;
  title: string;
  src: string;
};

const FirstView: VFC<Props> = ({ index, title, src }) => {
  return (
    <div className="relative overflow-hidden">
      <figure className="bg-gray w-full">
        <Image
          src={src}
          alt={`${title}ページのサムネイル`}
          width={375}
          height={300}
          layout="responsive"
          priority={true}
        />
      </figure>
      <div className="absolute top-0 left-0 right-0 bottom-0 py-1 px-4 flex items-end">
        <div className="w-full flex items-center space-x-3">
          {/* FIXME: genuineの高さが合わない */}
          <span className="text-white text-4xl font-genuine pt-2.5 text-bg-blur">{index}</span>
          <span className="text-white text-2xl font-bold text-bg-blur">{title}</span>
        </div>
      </div>
    </div>
  );
};

export default FirstView;
