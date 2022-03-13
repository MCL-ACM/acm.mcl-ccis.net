import React from "react";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";

export default function Layout({ children }) {
	return (
		<main className="">
			<Navbar />
			<section className="h-full flex-auto px-5">
        		{children}
      		</section>
			<Footer />
		</main>
	);
}
