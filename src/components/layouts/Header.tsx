import React, { VFC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import HamburgerMenu from "components/parts/HamburgerMenu";
import GlobalNavModal from "./GlobalNavModal";

const Header: VFC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen((state) => !state);
  };

  return (
    <header className="w-full h-16 flex justify-between items-center fixed top-0 left-0 z-50 px-4 bg-transparent">
      <div className="z-50">
        <Link href="/">
          <a className="flex items-center">
            <Image src="/img/site_logo.png" alt="サイトロゴ" width={161} height={16} layout="fixed" />
          </a>
        </Link>
      </div>
      <nav className="z-40">
        {isOpen && (
          <div className="fixed inset-0 bg-primary">
            <GlobalNavModal onLinkClick={toggleOpen} />
          </div>
        )}
        <HamburgerMenu isOpen={isOpen} onClick={toggleOpen} />
      </nav>
    </header>
  );
};

export default Header;
