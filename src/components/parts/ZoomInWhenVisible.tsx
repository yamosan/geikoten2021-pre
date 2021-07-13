import React, { useEffect } from "react";
import type { ReactNode, VFC } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

type Props = {
  children: ReactNode;
};

const ZoomInWhenVisible: VFC<Props> = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.6, delay: 0.6 }}
      variants={{
        visible: {
          opacity: 1,
          scale: 1,
        },
        hidden: {
          opacity: 0,
          scale: 0.8,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default ZoomInWhenVisible;
