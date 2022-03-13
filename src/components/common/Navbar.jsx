import React from "react";
import { Link } from "gatsby"
import Menu from "./navbar/Menu";
import Logo from "./navbar/Logo";


export default function Navbar() {
	return (
		<nav className="flex justify-between px-10 py-7 fixed top-0 w-full bg-white items-center">
			<Link to="/">
				<Logo/>
			</Link>
			<Menu />
		</nav>
	);
}
