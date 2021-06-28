import React, { VFC } from "react";
import clsx from "clsx";

type Props = {
  onClick: () => void;
  isOpen: boolean;
};

const HamburgerMenu: VFC<Props> = ({ onClick, isOpen }) => {
  return (
    <button onClick={onClick} className="text-white w-10 h-10 relative focus:outline-none">
      <div>
        <span className="sr-only">Open main menu</span>
        <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <span
            aria-hidden="true"
            className={clsx(
              "block absolute h-0.5 w-5 rounded bg-current transform transition duration-500 ease-in-out",
              {
                "rotate-45": isOpen,
                "translate-y-1.5": !isOpen,
              }
            )}
          ></span>
          <span
            aria-hidden="true"
            className={clsx(
              "block absolute h-0.5 w-5 rounded bg-current transform transition duration-500 ease-in-out",
              {
                "opacity-0": isOpen,
              }
            )}
          ></span>
          <span
            aria-hidden="true"
            className={clsx(
              "block absolute h-0.5 w-5 rounded bg-current transform transition duration-500 ease-in-out",
              {
                "-rotate-45": isOpen,
                "-translate-y-1.5": !isOpen,
              }
            )}
          ></span>
        </div>
      </div>
    </button>
  );
};

export default HamburgerMenu;
