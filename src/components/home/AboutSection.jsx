import * as React from "react";
import SectionItem from "./SectionItem";
import Button from "../common/buttons/Button";
import aboutImage from "../../images/home/Home-About.jpg";

export default function AboutSection() {
  return (
    <section className="px-5">
      <img src={aboutImage} alt="" className="mb-8"/>
      <SectionItem
        header="Nurturing Excellence"
        subheader="About Us"
        body="Malayan Colleges Laguna ACM Student Chapter is a student organization
        chartered by the Association for Computing Machinery that aims to
        promote a greater interest in modern computing and its applications."
        buttonText="Read about us"
        buttonLink="/about"
        align="left"
      />
    </section>
  );
}
