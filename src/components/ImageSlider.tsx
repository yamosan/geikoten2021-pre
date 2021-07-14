import React, { useEffect, useState } from "react";
import Image from "components/parts/Image";
import clsx from "clsx";

const IMAGES = ["/img/hero/slide1.png", "/img/hero/slide2.png", "/img/hero/slide3.png", "/img/hero/slide4.png"];

const ImageSlider = () => {
  const [currentImageId, setCurrentImageId] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setCurrentImageId((state) => (state + 1) % IMAGES.length);
    }, 1000);
    const intervalId = setInterval(() => {
      setCurrentImageId((state) => (state + 1) % IMAGES.length);
    }, 5000);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
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
          objectFit="cover"
          priority={true}
          className={clsx(
            "transition transform duration-1000",
            i === currentImageId ? "opacity-1 scale-100" : "opacity-0 scale-110"
          )}
        />
      ))}
    </div>
  );
};

export default ImageSlider;
