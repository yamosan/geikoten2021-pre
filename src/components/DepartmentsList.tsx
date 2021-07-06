import { Department } from "models/department";
import React, { VFC } from "react";
import PictureFrame from "./parts/PictureFrame";

type Props = {
  departments: Pick<Department, "name" | "managers">[];
};

const PictureFrameList: VFC<Props> = ({ departments }) => {
  return (
    <div className="grid grid-cols-2 justify-center justify-items-center gap-3.5">
      {departments.map((v, i) => (
        <PictureFrame title={v.name} key={i.toString()}>
          {v.managers.map((manager, j) => (
            <h6 key={j.toString()} className="text-black font-bold text-xs">
              {manager.class + "." + manager.name}
            </h6>
          ))}
        </PictureFrame>
      ))}
    </div>
  );
};

export default PictureFrameList;
