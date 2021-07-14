import React, { VFC, useEffect, useState } from "react";
import Link from "next/link";
import { Department } from "models/department";
import PictureFrame from "./parts/PictureFrame";

type Props = {
  departments: Pick<Department, "name" | "displayName" | "managers">[];
};

// 「min <= n < max」となる n を返す
function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const PictureFrameList: VFC<Props> = ({ departments }) => {
  const [selectedId, setSelectedId] = useState<number>();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSelectedId(getRandomInt(0, departments.length));
    }, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, [departments.length]);

  return (
    <div className="grid grid-cols-2 justify-center justify-items-center gap-3.5">
      {departments.map((v, i) => (
        <Link href={`/departments/${v.name}`} key={i.toString()}>
          <a>
            <PictureFrame
              title={v.displayName}
              src={`/img/contents/departments/${v.name}/frame.jpg`}
              start={i === selectedId}
            >
              {v.managers.map((manager, j) => (
                <h6 key={j.toString()} className="text-black font-bold text-xs">
                  {manager.class + "・" + manager.name}
                </h6>
              ))}
            </PictureFrame>
          </a>
        </Link>
      ))}
    </div>
  );
};

export default PictureFrameList;
