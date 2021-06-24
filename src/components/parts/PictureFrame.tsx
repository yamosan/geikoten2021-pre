import React, { VFC } from "react";
import Image from "next/image";

type Props = {
  title: string;
  subTitle: string;
};

const PictureFrame: VFC<Props> = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col items-center">
      <figure className="relative w-36 h-36 p-2.5 border border-gray flex flex-col items-center ">
        <span className="absolute top-1 w-1 h-1 bg-black rounded-full"></span>
        <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
          <Image src="/img/400x250.png" alt="" layout="fill" className="object-cover bg-gray p-2" />
        </div>
      </figure>
      <div className="flex flex-col items-center">
        <h5 className="text-secondary font-bold text-lg">{title}</h5>
        <h6 className="text-black font-bold text-xs">{subTitle}</h6>
      </div>
    </div>
  );
};

export default PictureFrame;
