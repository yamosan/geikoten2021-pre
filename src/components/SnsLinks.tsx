import React from "react";
import TwitterIcon from "./parts/TwitterIcon";
import InstagramIcon from "./parts/InstagramIcon";
import { LINE_ICON_URL, LINE_URL, TWITTER_URL, INSTAGRAM_URL } from "constants/urls";

const SnsLinks = () => {
  return (
    <div className="bg-white h-40 flex flex-col justify-center items-center">
      <p className="font-black text-sm text-black">OFFICIAL SNS</p>
      <ul className="flex space-x-4 pt-3">
        <li>
          <a href={LINE_URL} target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={LINE_ICON_URL} alt="友だち追加" style={{ width: "90px", height: "28px" }} />
          </a>
        </li>
        <li>
          <a href={TWITTER_URL} target="_blank" rel="noopener noreferrer">
            <TwitterIcon className="w-7 h-7" />
          </a>
        </li>
        <li>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="w-7 h-7" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SnsLinks;
