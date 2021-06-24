import React, { VFC } from "react";
import Arrow from "components/parts/Arrow";

type Props = {
  batch?: string;
  title: string;
};

const Card: VFC<Props> = ({ title, batch }) => {
  return (
    <div className="relative h-33 w-33 rounded-lg overflow-hidden">
      {batch && <div className="absolute top-2 left-2 font-genuine text-3xl text-white tracking-wide">{batch}</div>}
      <figure className="bg-gray w-full h-full flex justify-center items-center z-10">
        <img src="/img/content.png" alt="" className="w-full h-full object-cover" />
      </figure>
      <div className="absolute w-full bg-black bottom-0">
        <div className="relative flex justify-center items-center">
          <h3 className="text-white text-sm py-1">{title}</h3>
          <div className="py-1 absolute right-2">
            <Arrow color="white" size="small" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
