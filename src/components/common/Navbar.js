import React from "react";
import { Link } from "gatsby"
import Menu from "./navbar/Menu";
import Logo from "./navbar/Logo";


export default function Navbar() {
	return (
		<div className="h-full flex justify-between px-5 py-7">
			<Link to="/">
				<Logo/>
			</Link>
			<Menu />
		</div>
	);
}
