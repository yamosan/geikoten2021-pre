import React, { VFC } from "react";

type Props = {
  onNextClick: () => void;
  onPrevClick: () => void;
};

const Paginator: VFC<Props> = ({ onNextClick, onPrevClick }) => {
  return (
    <div className="flex justify-between items-center h-0">
      {onPrevClick && (
        <button
          onClick={(e) => {
            e.preventDefault();
            onPrevClick();
          }}
          className="h-10 w-10 flex justify-center items-center"
        >
          <div className="triangle-l"></div>
        </button>
      )}
      {onNextClick && (
        <button
          onClick={(e) => {
            e.preventDefault();
            onNextClick();
          }}
          className="h-10 w-10 flex justify-center items-center"
        >
          <div className="triangle-r"></div>
        </button>
      )}
    </div>
  );
};

export default Paginator;
