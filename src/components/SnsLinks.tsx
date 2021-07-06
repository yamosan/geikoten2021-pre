import React from "react";
import Image from "next/image";
import TwitterIcon from "./parts/TwitterIcon";
import InstagramIcon from "./parts/InstagramIcon";

const SnsLinks = () => {
  return (
    <div className="bg-white h-40 flex flex-col justify-center items-center">
      <p className="font-bold text-sm text-black">OFFICIAL SNS</p>
      <ul className="flex gap-4 pt-3">
        <li>
          <a href="https://lin.ee/r9XIORr">
            <Image
              src="https://scdn.line-apps.com/n/line_add_friends/btn/ja.png"
              alt="友だち追加"
              className="h-7"
              width={90}
              height={28}
            />
          </a>
        </li>
        <li>
          <TwitterIcon className="w-7 h-7" />
        </li>
        <li>
          <InstagramIcon className="w-7 h-7" />
        </li>
      </ul>
    </div>
  );
};

export default SnsLinks;
