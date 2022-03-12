import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import logo from "../../../images/navbar/acm_logo.png"
export default function Logo() {
  return (
    <img src={logo} alt="website logo" width={78} height={40}/>
  )
}
