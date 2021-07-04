import React from "react";
import Link from "next/link";
import SnsLinks from "components/SnsLinks";

const GlobalNavModal = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center">
      <ul className="flex flex-col items-center gap-8 font-medium text-white text-2xl pb-24">
        <li>
          <Link href="/">
            <a>TOP</a>
          </Link>
        </li>
        <li>
          <Link href="/departments">
            <a>部署紹介</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>適部署チャート</a>
          </Link>
        </li>
        <li>
          <Link href="/movie">
            <a>ムービー</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>ゲーム</a>
          </Link>
        </li>
      </ul>
      <div className="absolute bottom-0 w-full">
        <SnsLinks />
      </div>
    </div>
  );
};

export default GlobalNavModal;