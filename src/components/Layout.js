import React from "react";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";

export default function Layout({ children }) {
	return (
		<div className="flex flex-col h-full">
			<Navbar/>
			<main className="h-full flex-auto">
        {children}
      </main>
			<Footer/>
		</div>
	);
}
