import React, { VFC } from "react";
import clsx from "clsx";

type Props = {
  color?: "white" | "black" | "primary" | "secondary"; // TODO: Themeを参照したい
  size?: "large" | "small";
};

const Arrow: VFC<Props> = (props) => {
  const classes = clsx({
    "w-8 h-8": props.size === "large",
    "w-4 h-4": props.size === "small",
    "text-white": props.color === "white",
    "text-black": props.color === "black",
    "text-primary": props.color === "primary",
    "text-secondary": props.color === "secondary",
  });
  return (
    <svg className={classes} fill="none" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <circle stroke="currentColor" cx="8" cy="8" r="7.5" />
      <path
        d="M11.2828 8.28284C11.4391 8.12663 11.4391 7.87337 11.2828 7.71716L8.73726 5.17157C8.58105 5.01536 8.32778 5.01536 8.17157 5.17157C8.01536 5.32778 8.01536 5.58105 8.17157 5.73726L10.4343 8L8.17157 10.2627C8.01536 10.419 8.01536 10.6722 8.17157 10.8284C8.32778 10.9846 8.58105 10.9846 8.73726 10.8284L11.2828 8.28284ZM5 8.4L11 8.4V7.6L5 7.6V8.4Z"
        fill="currentColor"
      />
    </svg>
  );
};

Arrow.defaultProps = {
  color: "white",
  size: "small",
};

export default Arrow;
