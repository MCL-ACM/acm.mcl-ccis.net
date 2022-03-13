import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";

const linkAnimation = {
  open: {
    x: "0",
  },
  closed: {
    x: "100%",
  },
};

export default function MenuLink({ page, slug }) {
  return (
    <motion.li
      variants={linkAnimation}
      className="font-light mb-7"
      whileHover={{ scale: 1.1, fontWeight: "normal" }}
      whileTap={{ scale: 0.95, fontWeight: "normal" }}
    >
      <Link to={slug} className="text-xl text-oxford-blue">
        {page}
      </Link>
    </motion.li>
  );
}
