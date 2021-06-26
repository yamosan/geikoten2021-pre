import React, { VFC } from "react";
import clsx from "clsx";

type Props = {
  color?: "white" | "black" | "primary" | "secondary"; // TODO: Themeを参照したい
  size?: "large" | "small";
};

const Triangle: VFC<Props> = (props) => {
  const classes = clsx({
    "w-8 h-8": props.size === "large",
    "w-4 h-4": props.size === "small",
    "text-white": props.color === "white",
    "text-black": props.color === "black",
    "text-primary": props.color === "primary",
    "text-secondary": props.color === "secondary",
  });

  return (
    <svg className={classes} fill="none" viewBox="0 0 13 16" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.6842 6.36588C12.8134 7.16269 12.8134 8.83731 11.6842 9.63411L3.65311 15.3013C2.32826 16.2362 0.500001 15.2887 0.500001 13.6672L0.500002 2.33283C0.500002 0.711334 2.32826 -0.23617 3.65312 0.698716L11.6842 6.36588Z"
        fill="currentColor"
      />
    </svg>
  );
};

Triangle.defaultProps = {
  color: "white",
  size: "small",
};

export default Triangle;
