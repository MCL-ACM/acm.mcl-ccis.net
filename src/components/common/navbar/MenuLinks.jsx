import React from "react";
import { motion } from "framer-motion";
import MenuLink from "./MenuLink";

const links = [
  {
    page: "Home",
    slug: "/",
    key: 1,
  },
  {
    page: "About us",
    slug: "/about",
    key: 2,
  },
  {
    page: "Events",
    slug: "/events",
    key: 3,
  },
  {
    page: "Members",
    slug: "/members",
    key: 4,
  },
  {
    page: "Contact Us",
    slug: "/contact-us",
    key: 5,
  },
];

const sliding = {
  open: {
    transition: { staggerChildren: 0.04, delayChildren: 0.1 },
  },
  closed: {
    transition: { staggerChildren: 0.04, staggerDirection: -1 },
  },
};

export default function MenuLinks() {
  return (
    <motion.ul variants={sliding} className="pl-0 ">
      {links.map(({ page, slug, key }) => (
        <MenuLink page={page} slug={slug} key={key} />
      ))}
    </motion.ul>
  );
}
