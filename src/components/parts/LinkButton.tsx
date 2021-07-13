import React, { ReactNode, VFC } from "react";
import type { LinkProps } from "next/link";
import Link from "next/link";
import Triangle from "components/parts/Triangle";

type Props = LinkProps & {
  children?: ReactNode;
  className?: string;
};

const LinkButton: VFC<Props> = ({ children, ...linkProps }) => {
  return (
    <Link {...linkProps}>
      <a className="block bg-secondary rounded-md max-w-full py-4 px-6 shadow-solid">
        <div className="flex justify-between items-center space-x-1">
          <div className="flex-grow font-bold text-white text-sm text-center">{children}</div>
          <div className="w-max">
            <Triangle />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default LinkButton;
