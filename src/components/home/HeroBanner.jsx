import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";

export default function HeroBanner() {
  return (
    <div>
      <StaticImage
        src="../../images/home/annie-spratt-MChSQHxGZrQ-unsplash.jpg"
        alt=""
        width={20}
        height={20}
      />
    </div>
  );
}
