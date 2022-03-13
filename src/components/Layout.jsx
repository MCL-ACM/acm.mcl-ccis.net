import React from "react";
import WhiteButton from "./common/buttons/WhiteButton";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";

export default function Layout({ children }) {
	return (
		<main className="min-h-screen relative">
			<Navbar />
			<section className="flex-auto pt-24 pb-[34.8125em]">
				<WhiteButton />
        		{children}
      		</section>
			<Footer />
		</main>
	);
}
