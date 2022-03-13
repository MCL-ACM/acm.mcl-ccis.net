import { StaticImage } from "gatsby-plugin-image";
import React from "react";

export default function Logo() {
  return (
    <StaticImage
      src="../../../images/navbar/acm_logo.png"
      alt="MCL-ACM logo"
      width={78}
      height={40}
    />
  );
}
