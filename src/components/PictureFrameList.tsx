import React, { VFC } from "react";
import PictureFrame from "./parts/PictureFrame";

type Props = {
  departments: {
    department: string;
    manager: string;
  }[];
};

const PictureFrameList: VFC<Props> = ({ departments }) => {
  return (
    <div className="grid grid-cols-2 justify-center justify-items-center gap-3.5">
      {departments.map((v, i) => (
        <PictureFrame title={v.department} subTitle={v.manager} key={i.toString()} />
      ))}
    </div>
  );
};

export default PictureFrameList;
