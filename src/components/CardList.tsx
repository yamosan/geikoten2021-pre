import React, { VFC } from "react";
import Card from "components/parts/Card";

type Props = {
  titles: string[];
};

const CardList: VFC<Props> = ({ titles }) => {
  return (
    <div className="grid grid-cols-2 justify-center justify-items-center gap-6 w-max">
      {titles.map((title, i) => (
        <Card title={title} batch={(i + 1).toString().padStart(2, "0")} key={i.toString()} />
      ))}
    </div>
  );
};

export default CardList;
