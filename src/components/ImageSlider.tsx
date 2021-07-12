import React, { useEffect, useState } from "react";
import Image from "components/parts/Image";
// import { motion, AnimatePresence, useAnimation } from "framer-motion";
import clsx from "clsx";

const IMAGES = ["/img/hero/slide1.jpg", "/img/hero/slide2.jpg", "/img/hero/slide3.jpg", "/img/hero/slide4.jpg"];

const ImageSlider = () => {
  const [currentImageId, setCurrentImageId] = useState(0);

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCurrentImageId((state) => (state + 1) % IMAGES.length);
    }, 5000);

    return () => {
      clearInterval(timeoutId);
    };
  }, []);

  return (
    <div>
      {IMAGES.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt="メインビジュアル"
          layout="fill"
          priority={true}
          className={clsx(
            "object-cover transition transform duration-1000",
            i === currentImageId ? "opacity-1 scale-100" : "opacity-0 scale-110"
          )}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
