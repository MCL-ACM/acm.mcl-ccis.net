import React from "react";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";

export default function Layout({ children }) {
	return (
		<main className="flex flex-col h-full">
			<Navbar />
			<section className="h-full flex-auto">
        		{children}
      		</section>
			<Footer />
		</main>
	);
}
