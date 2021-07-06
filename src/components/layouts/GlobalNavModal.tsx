import React, { useCallback, VFC } from "react";
import router from "next/router";
import SnsLinks from "components/SnsLinks";

type Props = {
  onLinkClick: () => void;
};

const PATHS = [
  { text: "TOP", path: "/" },
  { text: "部署紹介", path: "/departments" },
  { text: "適部署チャート", path: "/" },
  { text: "ムービー", path: "/movie" },
  { text: "ゲーム", path: "/" },
];

const GlobalNavModal: VFC<Props> = (props) => {
  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, path: string) => {
      e.preventDefault();
      props.onLinkClick();
      router.push(path);
    },
    [props]
  );

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center">
      <ul className="flex flex-col items-center gap-8 pb-24">
        {PATHS.map(({ text, path }) => (
          <li key={path}>
            <button onClick={(e) => handleClick(e, path)} className="font-black text-white text-2xl">
              {text}
            </button>
          </li>
        ))}
      </ul>
      <div className="absolute bottom-0 w-full">
        <SnsLinks />
      </div>
    </div>
  );
};

export default GlobalNavModal;
