import React, { VFC, useState } from "react";
import useBackfaceFixed from "hooks/useBackfaceFixed";
import useOnScrolling from "hooks/useOnScrolling";
import Link from "next/link";
import HamburgerMenu from "components/parts/HamburgerMenu";
import GlobalNavModal from "./GlobalNavModal";
import SiteLogo from "components/parts/SiteLogo";
import clsx from "clsx";

const Header: VFC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen((state) => !state);
  };
  useBackfaceFixed(isOpen);
  const isScrolled = useOnScrolling();
  const transition = clsx("transform transition duration-400 ease-in-out");

  return (
    <>
      <header className="w-full h-16 flex justify-between items-center fixed top-0 left-0 z-50 px-4 bg-transparent">
        <div className="z-50">
          <Link href="/">
            <a className="flex items-center">
              <SiteLogo color={isScrolled ? "black" : "white"} className={transition} />
            </a>
          </Link>
        </div>
        <nav className="z-40 flex items-center">
          <div
            className={clsx(
              {
                "opacity-0": !isOpen,
                "pointer-events-none": !isOpen,
              },
              transition,
              "fixed inset-0 bg-primary"
            )}
          >
            <GlobalNavModal onLinkClick={toggleOpen} isOpen={isOpen} />
          </div>

          <HamburgerMenu
            transition={transition}
            isOpen={isOpen}
            onClick={toggleOpen}
            color={isScrolled ? "black" : "white"}
          />
        </nav>
      </header>
    </>
  );
};

export default Header;
