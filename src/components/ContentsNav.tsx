import React from "react";
import Link from "next/link";
import Card from "components/parts/Card";

const CONTENTS = [
  {
    title: "部署紹介",
    href: "/departments",
    imgSrc: "/img/contents/departments/thumbnail.jpg",
    isDisabled: false,
  },
  {
    title: "適部署チャート",
    href: "/",
    imgSrc: "/img/contents/tekibusyo/thumbnail.jpg",
    isDisabled: true,
  },
  {
    title: "ムービー",
    href: "/movie",
    imgSrc: "/img/contents/movie/thumbnail.jpg",
    isDisabled: false,
  },
  {
    title: "ゲーム",
    href: "/",
    imgSrc: "/img/contents/game/thumbnail.jpg",
    isDisabled: true,
  },
];

const CardList = () => {
  return (
    <nav className="grid grid-cols-2 justify-center justify-items-center gap-6 w-max">
      {CONTENTS.map(({ title, href, imgSrc, isDisabled }, i) => {
        return !isDisabled ? (
          <Link href={href} key={title}>
            <a>
              <Card title={title} batch={(i + 1).toString().padStart(2, "0")} imgSrc={imgSrc} key={i.toString()} />
            </a>
          </Link>
        ) : (
          <Card title={title} batch={(i + 1).toString().padStart(2, "0")} imgSrc={imgSrc} key={i.toString()} />
        );
      })}
    </nav>
  );
};

export default CardList;
