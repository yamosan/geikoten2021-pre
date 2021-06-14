import React, { VFC } from "react";
import Link from "next/link";

const Header: VFC = () => {
  return (
    <header>
      <nav>
        <Link href="/">
          <a>TOP</a>
        </Link>
        <Link href="/departments">
          <a>Departments</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
