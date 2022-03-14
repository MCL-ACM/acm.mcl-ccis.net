import * as React from "react";
import SectionItem from "./SectionItem";
import Button from "../common/buttons/Button";

export default function AboutSection() {
  return (
    <section>
      <SectionItem
        header="Nurturing Excellence"
        subheader="About Us"
        body="Malayan Colleges Laguna ACM Student Chapter is a student organization
        chartered by the Association for Computing Machinery that aims to
        promote a greater interest in modern computing and its applications."
        buttonText="Read about us"
        buttonLink="/"
        align="left"
      />
    </section>
  );
}
