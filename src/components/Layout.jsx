import React from "react";
import Button from "./common/buttons/Button";
import Footer from "./common/Footer";
import Navbar from "./common/Navbar";

export default function Layout({ children }) {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <section className="flex-auto pt-24 pb-[34.8125em]">
        <Button text="My Button" color="oxford-blue"/>
        {children}
      </section>
      <Footer />
    </main>
  );
}
