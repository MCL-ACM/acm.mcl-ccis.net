import React from 'react'
import { motion, useCycle } from 'framer-motion'
import MenuButton from './MenuButton'
import MenuSidebar from './MenuSidebar';

export default function Menu() {

  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <motion.nav initial={false} animate={isOpen ? "open" : "closed"} className="text-center align-center justify-center">
        <MenuSidebar />
        <MenuButton toggle={() => toggleOpen()} />
    </motion.nav>
  )
}
