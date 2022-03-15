import * as React from "react";
import Button from "../common/buttons/Button";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "gatsby";

export default function ContactSection() {
  return (
    <section className="flex flex-col items-center gap-12 px-5 my-12 text-center">
      <h1 className="font-bold text-7xl text-oxford-blue">Reach us out</h1>
      <p className="text-3xl font-light text-oxford-blue">
        We're always looking forward to making connections. So feel free to drop
        us a message.
      </p>
      <Link to="/contact-us">
        <Button
          text="Send a message"
          textColor="text-white"
          icon={<FiArrowRight size="1.3em" />}
          color="bg-darkish-blue"
        />
      </Link>
    </section>
  );
}
