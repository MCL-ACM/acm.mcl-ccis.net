import React from "react";
import { Link } from "gatsby";
import Menu from "./navbar/Menu";
import Logo from "./navbar/Logo";

export default function Navbar() {
  return (
    <nav className="fixed z-10 flex items-center justify-between w-full px-10 bg-white py-7">
      <Link to="/">
        <Logo />
      </Link>
      <Menu />
    </nav>
  );
}
