import * as React from "react";
import SectionItem from "./SectionItem";

export default function MembersSection() {
  return (
    <section>
      <SectionItem
        header="Passionate and Dedicated"
        subheader="Our Members"
        body="MCL-ACM take pride in its organization members. Led by the Executive Committee, its members work together and strive to build an excellent community and execute meaningful initiatives. "
        buttonText="Explore our members"
        buttonLink="/"
        align="right"
      />
    </section>
  );
}
