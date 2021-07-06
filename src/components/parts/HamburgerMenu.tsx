import React, { VFC } from "react";
import clsx from "clsx";

type Props = {
  onClick: () => void;
  isOpen: boolean;
};

const HamburgerMenu: VFC<Props> = ({ onClick, isOpen }) => {
  return (
    <button onClick={onClick} className="text-white w-10 h-10 relative focus:outline-none">
      <div className="absolute left-1/2 top-3.5 transform -translate-x-1/2 -translate-y-1/2">
        <span className="sr-only">Open main menu</span>
        <div className="block w-5">
          <div
            aria-hidden="true"
            className={clsx("absolute h-0.5 w-5 rounded bg-current transform transition duration-500 ease-in-out", {
              "rotate-45": isOpen,
              "translate-y-1.5": !isOpen,
            })}
          ></div>
          <div
            aria-hidden="true"
            className={clsx("absolute h-0.5 w-5 rounded bg-current transform transition duration-500 ease-in-out", {
              "opacity-0": isOpen,
            })}
          ></div>
          <div
            aria-hidden="true"
            className={clsx("absolute h-0.5 w-5 rounded bg-current transform transition duration-500 ease-in-out", {
              "-rotate-45": isOpen,
              "-translate-y-1.5": !isOpen,
            })}
          ></div>
        </div>
      </div>
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2">
        <p className="font-bold text-xxs leading-none">{isOpen ? "CLOSE" : "OPEN"}</p>
      </div>
    </button>
  );
};

export default HamburgerMenu;
