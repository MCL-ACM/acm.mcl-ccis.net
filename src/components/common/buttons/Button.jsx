import React from 'react'
import { motion } from 'framer-motion'
export default function Button({color, text, icon, callback}) {
  return (
    <motion.button>
        <i>{icon}</i>
        <p>{text}</p>
        
    </motion.button>
  )
}
