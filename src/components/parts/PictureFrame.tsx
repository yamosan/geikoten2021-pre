import React, { ReactNode, VFC } from "react";
import Image from "components/parts/Image";

type Props = {
  title: string;
  children: ReactNode;
};

const PictureFrame: VFC<Props> = ({ title, children }) => {
  return (
    <div className="flex flex-col items-center">
      <figure className="relative w-36 h-36 p-2.5 border border-black flex flex-col items-center ">
        <span className="absolute top-1 w-1 h-1 bg-black rounded-full"></span>
        <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
          <Image src="/img/400x250.png" alt="" layout="fill" className="object-cover bg-gray p-2" />
        </div>
      </figure>
      <div className="flex flex-col items-center">
        <h5 className="text-secondary font-bold text-lg">{title}</h5>
        <div className="flex flex-col items-center">{children}</div>
      </div>
    </div>
  );
};

export default PictureFrame;
