import React, { VFC } from "react";
// import Link from "next/link";
import Logo from "components/icons/Logo";

const Header: VFC = () => {
  return (
    <header className="w-full h-12 flex items-center fixed top-0 bg-blue-100">
      <div className="px-4">
        <Logo />
      </div>
    </header>
  );
};

export default Header;
