import React, { VFC } from "react";
import Link from "next/link";
import { Department } from "models/department";
import PictureFrame from "./parts/PictureFrame";

type Props = {
  departments: Pick<Department, "name" | "displayName" | "managers">[];
};

const PictureFrameList: VFC<Props> = ({ departments }) => {
  return (
    <div className="grid grid-cols-2 justify-center justify-items-center gap-3.5">
      {departments.map((v, i) => (
        <Link href={`/departments/${v.name}`} key={i.toString()}>
          <a>
            <PictureFrame title={v.displayName}>
              {v.managers.map((manager, j) => (
                <h6 key={j.toString()} className="text-black font-bold text-xs">
                  {manager.class + "." + manager.name}
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
