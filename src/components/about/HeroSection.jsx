import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import background from "../../images/about/about_us.png";

export default function HeroSection() {
  return (
    <div>
      <div className="h-80 bg-top bg-cover" style={{ backgroundImage: `url(${background})` }} />
      <div className="text-right py-7 px-5">
          <h1 className="text-4xl font-bold leading-snug text-oxford-blue">
            A Student Chapter of ACM
          </h1>
          <h3 className="text-2xl font-bold leading-normal text-darkish-blue">
            About us
          </h3>
      </div>
    </div>
  )
}
