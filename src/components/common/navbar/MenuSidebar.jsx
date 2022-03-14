import React from "react";
import { motion } from "framer-motion";
import MenuLinks from "./MenuLinks";

const sidebar = {
  open: {
    x: "0%",
    boxShadow: "0 25px 50px -12px rgb(173 216 255 / 0.25)",
    transition: {
      type: "tween",
    },
  },

  closed: {
    x: "100%",
    transition: {
      delay: 0.2,
      type: "tween",
    },
  },
};

export default function MenuSidebar() {
  return (
    <motion.nav
      variants={sidebar}
      className="z-50 fixed pt-20 top-0 h-3/4 right-0 overflow-x-hidden w-[12rem] bg-white border-[1px] rounded-tl-2xl rounded-bl-2xl border-[#D1DCE4]"
    >
      <MenuLinks />
    </motion.nav>
  );
}
