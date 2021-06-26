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
      <a className="block bg-secondary font-medium font-sans text-white text-sm text-center rounded-md max-w-full py-4 px-6 shadow-solid">
        <div className="flex justify-between items-center gap-1">
          <div className="flex-grow">{children}</div>
          <div className="w-max">
            <Triangle />
          </div>
        </div>
      </a>
    </Link>
  );
};

export default LinkButton;
