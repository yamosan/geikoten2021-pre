import React from "react";
import Link from "next/link";
import Card from "components/parts/Card";
import { GAME_URL, TEKIBUSYO_CHART_URL } from "constants/urls";

const CONTENTS = [
  {
    title: "部署紹介",
    href: "/departments",
    imgSrc: "/img/contents/departments/thumbnail.jpg",
  },
  {
    title: "適部署チャート",
    href: TEKIBUSYO_CHART_URL,
    imgSrc: "/img/contents/tekibusyo/thumbnail.jpg",
  },
  {
    title: "ムービー",
    href: "/movie",
    imgSrc: "/img/contents/movie/thumbnail.jpg",
  },
  {
    title: "ゲーム",
    href: GAME_URL,
    imgSrc: "/img/contents/game/thumbnail.jpg",
  },
];

const CardList = () => {
  return (
    <nav className="grid grid-cols-2 justify-center justify-items-center gap-6 w-max">
      {CONTENTS.map(({ title, href, imgSrc }, i) => (
        <Link href={href} key={title}>
          <a>
            <Card title={title} batch={(i + 1).toString().padStart(2, "0")} imgSrc={imgSrc} key={i.toString()} />
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default CardList;
