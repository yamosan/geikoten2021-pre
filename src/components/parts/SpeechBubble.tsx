import clsx from "clsx";
import React, { ReactNode, VFC } from "react";

type Props = {
  children?: ReactNode;
  outline?: "white" | "black" | "primary" | "secondary";
  reversed?: boolean;
};

const SpeechBubble: VFC<Props> = (props) => {
  const classes = clsx(
    {
      "text-white": props.outline === "white",
      "text-black": props.outline === "black",
      "text-primary": props.outline === "primary",
      "text-secondary": props.outline === "secondary",
    },
    {
      "speech-bubble": props.reversed === false,
      "speech-bubble--reversed": props.reversed === true,
    }
  );

  return (
    <>
      <div className={classes}>
        <p className="text-black text-sm table m-auto text-left">{props.children}</p>
      </div>
    </>
  );
};

SpeechBubble.defaultProps = {
  outline: "black",
  reversed: false,
};

export default SpeechBubble;
