import React from "react";
import Link from "next/link";
import Card from "components/parts/Card";

const CONTENTS = [
  {
    title: "部署紹介",
    href: "/departments",
    isDisabled: false,
  },
  {
    title: "部署チャート",
    href: "/",
    isDisabled: true,
  },
  {
    title: "ムービー",
    href: "/movie",
    isDisabled: false,
  },
  {
    title: "ゲーム",
    href: "/",
    isDisabled: true,
  },
];

const CardList = () => {
  return (
    <nav className="grid grid-cols-2 justify-center justify-items-center gap-6 w-max">
      {CONTENTS.map(({ title, href, isDisabled }, i) => {
        return !isDisabled ? (
          <Link href={href} key={title}>
            <a>
              <Card title={title} batch={(i + 1).toString().padStart(2, "0")} key={i.toString()} />
            </a>
          </Link>
        ) : (
          <Card title={title} batch={(i + 1).toString().padStart(2, "0")} key={i.toString()} />
        );
      })}
    </nav>
  );
};

export default CardList;
