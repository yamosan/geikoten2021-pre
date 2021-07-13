import React from "react";

const HeroFrame = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute top-0 left-0 w-16 h-16 border-white border-l-8 border-t-8"></div>
      <div className="absolute top-0 right-0 w-16 h-16 border-white border-r-8 border-t-8"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 border-white border-l-8 border-b-8"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-white border-r-8 border-b-8"></div>
    </div>
  );
};

export default HeroFrame;
