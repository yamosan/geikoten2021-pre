import React, { VFC } from "react";

type Props = {
  onNextClick: () => void;
  onPrevClick: () => void;
};

const Paginator: VFC<Props> = ({ onNextClick, onPrevClick }) => {
  return (
    <div className="flex justify-between items-center">
      {onPrevClick && (
        <button onClick={onPrevClick} className="h-10 w-10 flex justify-center items-center">
          <div className="triangle-l"></div>
        </button>
      )}
      {onNextClick && (
        <button onClick={onNextClick} className="h-10 w-10 flex justify-center items-center">
          <div className="triangle-r"></div>
        </button>
      )}
    </div>
  );
};

export default Paginator;
