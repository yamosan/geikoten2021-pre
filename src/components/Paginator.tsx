import React, { VFC } from "react";
import Link from "next/link";

type Props = {
  next: string;
  prev: string;
};

const Paginator: VFC<Props> = ({ next, prev }) => {
  return (
    <div className="flex justify-between items-center">
      {prev && (
        <Link href={prev}>
          <a className="h-10 w-10 flex justify-center items-center">
            <div className="triangle-l"></div>
          </a>
        </Link>
      )}
      {next && (
        <Link href={next}>
          <a className="h-10 w-10 flex justify-center items-center">
            <div className="triangle-r"></div>
          </a>
        </Link>
      )}
    </div>
  );
};

export default Paginator;
