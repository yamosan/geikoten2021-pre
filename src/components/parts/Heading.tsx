import React, { VFC, ReactNode, DOMAttributes } from "react";

type TagName = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type Props = DOMAttributes<HTMLHeadingElement> & {
  children: ReactNode;
  as?: TagName;
};

const Heading: VFC<Props> = ({ children, as = "h2", ...rest }) => {
  const Tag = as;

  return (
    <Tag
      {...rest}
      className="bg-white border-black border font-bold text-lg text-black text-center px-6 py-1 min-w-max" // FIXME: 若干上に寄っている
    >
      {children}
    </Tag>
  );
};

export default Heading;
