import React, { ReactNode, useEffect, VFC } from "react";
import Image from "components/parts/Image";
import { motion, useAnimation } from "framer-motion";

type Props = {
  title: string;
  children: ReactNode;
  src: string;
  start: boolean;
};

const PictureFrame: VFC<Props> = ({ title, children, src, start }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (start) {
      controls.start({
        rotate: [0, -3, -3, 3, -2, 1, -1, 0.5, -0.2, 0.1, 0],
        transition: {
          duration: 1.6,
        },
      });
    }
  }, [controls, start]);

  return (
    <div className="flex flex-col items-center">
      <motion.div
        initial={{ rotate: 0 }}
        animate={controls}
        style={{ originX: 0.5, originY: 0 }}
        className="stop-flickering"
      >
        <figure className="relative w-36 h-36 p-2.5 border border-black bg-white flex flex-col items-center">
          <span className="absolute top-1 w-1 h-1 bg-black rounded-full"></span>
          <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
            <Image src={src} alt="" layout="fill" className="object-cover bg-gray p-2" />
          </div>
        </figure>
      </motion.div>
      <div className="flex flex-col items-center">
        <h5 className="text-secondary font-bold text-lg">{title}</h5>
        <div className="flex flex-col items-center">{children}</div>
      </div>
    </div>
  );
};

export default PictureFrame;
