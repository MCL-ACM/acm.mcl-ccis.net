import React from "react";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";

export default function Layout({ children }) {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <section className="pt-24 pb-[34.8125em] mx-5 flex flex-col align-center items-center">
        {children}
      </section>
      <Footer />
    </main>
  );
}
