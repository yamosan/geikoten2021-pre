import React, { useCallback, useEffect, useState, VFC } from "react";
import { useRouter } from "next/router";
import SnsLinks from "components/SnsLinks";
import { TEKIBUSYO_CHART_URL, GAME_URL } from "constants/urls";

type Props = {
  onLinkClick: () => void;
  isOpen: boolean;
};

type Link = { text: string; path: string; external?: boolean };

const PATHS: Link[] = [
  { text: "TOP", path: "/" },
  { text: "部署紹介", path: "/departments" },
  { text: "適部署チャート", path: TEKIBUSYO_CHART_URL, external: true },
  { text: "ムービー", path: "/movie" },
  { text: "ゲーム", path: GAME_URL, external: true },
];

const GlobalNavModal: VFC<Props> = (props) => {
  const router = useRouter();
  const [openCount, setOpenCount] = useState(0);

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, link: Link) => {
      e.preventDefault();
      props.onLinkClick();
      if (!link.external) {
        router.push(link.path);
      } else {
        window.location.assign(link.path);
      }
    },
    [props, router]
  );

  useEffect(() => {
    if (props.isOpen === true) {
      setOpenCount((state) => state + 1);
    }
  }, [props.isOpen]);

  // 初めてメニューが開かれたときにプリフェッチ
  useEffect(() => {
    if (openCount === 1) {
      PATHS.forEach(({ path, external }) => {
        if (router.pathname !== path && !external) {
          router.prefetch(path);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [openCount]);

  return (
    <div className="relative w-full h-full flex flex-col justify-center items-center">
      <ul className="flex flex-col items-center space-y-8 pb-24">
        {PATHS.map((link) => (
          <li key={link.text}>
            <button onClick={(e) => handleClick(e, link)} className="font-black text-white text-2xl">
              {link.text}
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
