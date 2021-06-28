import { Department } from "models/department";
import React, { VFC } from "react";
import PictureFrame from "./parts/PictureFrame";

type Props = {
  departments: Pick<Department, "name" | "manager">[];
};

const PictureFrameList: VFC<Props> = ({ departments }) => {
  return (
    <div className="grid grid-cols-2 justify-center justify-items-center gap-3.5">
      {departments.map((v, i) => (
        <PictureFrame title={v.name} subTitle={v.manager.class + "." + v.manager.name} key={i.toString()} />
      ))}
    </div>
  );
};

export default PictureFrameList;
