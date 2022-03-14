import * as React from "react";
import SectionItem from "./SectionItem";
import membersImage from "../../images/home/Home-Members.jpg";

export default function MembersSection() {
  return (
    <section className="px-5">
      <img src={membersImage} alt="" className="mb-8" />
      <SectionItem
        header="Passionate and Dedicated"
        subheader="Our Members"
        body="MCL-ACM take pride in its organization members. Led by the Executive Committee, its members work together and strive to build an excellent community and execute meaningful initiatives. "
        buttonText="Explore our members"
        buttonLink="/members"
        align="right"
      />
    </section>
  );
}
