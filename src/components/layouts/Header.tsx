import React, { VFC } from "react";
// import Link from "next/link";
import Logo from "components/parts/Logo";

const Header: VFC = () => {
  return (
    <header className="w-full h-12 flex items-center fixed z-50 top-0 bg-transparent">
      <div className="px-4">
        <Logo />
      </div>
    </header>
  );
};

// const DrawerButton: VFC = () => {
//   return (
//     <div className="w-9 h-9 grid grid-rows-3 grid-cols-3 items-center justify-items-center">
//       {[...Array(9)].map((_, i) => (
//         <div key={i} className="w-2 h-2 rounded bg-black" />
//       ))}
//     </div>
//   );
// };

export default Header;
