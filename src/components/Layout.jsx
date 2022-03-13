import React from "react";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";

export default function Layout({ children }) {
	return (
		<main className="min-h-screen relative">
			<Navbar />
			<section className="flex-auto px-5 pb-[34.8125em]">
        		{children}
      		</section>
			<Footer />
		</main>
	);
}
