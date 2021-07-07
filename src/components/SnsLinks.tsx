import React from "react";
import TwitterIcon from "./parts/TwitterIcon";
import InstagramIcon from "./parts/InstagramIcon";

const SnsLinks = () => {
  return (
    <div className="bg-white h-40 flex flex-col justify-center items-center">
      <p className="font-black text-sm text-black">OFFICIAL SNS</p>
      <ul className="flex space-x-4 pt-3">
        <li>
          <a href="https://lin.ee/r9XIORr" target="_blank" rel="noopener noreferrer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
              alt="友だち追加"
              style={{ width: "90px", height: "28px" }}
            />
          </a>
        </li>
        <li>
          <a href="https://twitter.com/geik0" target="_blank" rel="noopener noreferrer">
            <TwitterIcon className="w-7 h-7" />
          </a>
        </li>
        <li>
          <a href="https://instagram.com/geikoten2021" target="_blank" rel="noopener noreferrer">
            <InstagramIcon className="w-7 h-7" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SnsLinks;
