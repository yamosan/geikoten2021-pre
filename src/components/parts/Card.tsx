import React, { VFC } from "react";
import Image from "components/parts/Image";
import Arrow from "components/parts/Arrow";

type Props = {
  batch?: string;
  title: string;
  imgSrc: string;
};

const Card: VFC<Props> = ({ title, batch, imgSrc }) => {
  return (
    <div className="relative h-33 w-33 rounded-lg overflow-hidden">
      <figure className="bg-gray w-full h-full flex justify-center items-center">
        <Image src={imgSrc} alt="コンテンツのサムネイル" layout="fill" className="object-cover" />
      </figure>
      {batch && (
        <div className="absolute top-2 left-2 font-genuine text-3xl text-white text-bg-blur-sm tracking-wide z-10">
          {batch}
        </div>
      )}
      <div className="absolute w-full bg-black bottom-0 z-10">
        <div className="relative flex justify-center items-center">
          <h3 className="font-medium text-white text-xs py-1 -ml-1">{title}</h3>
          <div className="py-1 absolute right-2">
            <Arrow color="white" size="small" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
