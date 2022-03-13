import React from "react";
import { Link } from "gatsby"
import Menu from "./navbar/Menu";
import Logo from "./navbar/Logo";


export default function Navbar() {
	return (
		<nav className="fixed flex justify-between px-10 py-7 w-full bg-white items-center z-10">
			<Link to="/">
				<Logo/>
			</Link>
			<Menu />
		</nav>
	);
}
