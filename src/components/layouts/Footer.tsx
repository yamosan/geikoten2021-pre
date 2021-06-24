import React from "react";

// TODO: それぞれのSNSアイコンの埋め込み
const Footer = () => {
  return (
    <footer className="">
      <div className="bg-white h-24 pt-2 flex flex-col justify-center items-center">
        <p className="font-bold text-black">OFFICIAL SNS</p>
        <ul className="flex gap-3">
          <li>Line</li>
          <li>Twitter</li>
          <li>Instagram</li>
        </ul>
      </div>
      <p className="bg-black h-8  flex justify-center items-center text-white text-xxs">@2021geikosai</p>
    </footer>
  );
};

export default Footer;
