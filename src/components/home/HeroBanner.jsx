import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import bannerImage from "../../images/home/annie-spratt-MChSQHxGZrQ-unsplash.jpg";
import HeroBannerDecoration from "./HeroBannerDecoration";

export default function HeroBanner() {
  return (
    <div className="relative w-full h-auto">
      <HeroBannerDecoration className="absolute bottom-0" />
      <img src={bannerImage} alt="" />
    </div>
  );
}
