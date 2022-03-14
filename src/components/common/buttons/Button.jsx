import React from 'react'
import { motion } from 'framer-motion'
export default function Button({glow, textColor ,color, text, icon, callback}) {

  let isGlowing = glow ? "shadow-button-glow-white" : "shadow-lg"

  return (
    <motion.button 
      onClick={callBack}
      whileHover={{
        y:'-6%'
      }}
      whileTap ={{
        y:'0%'
      }}
      className={ isGlowing + " " + textColor + " " + color + " " + "py-[6px] px-6 flex flex-row justify-center align-middle items-center rounded-full"}> 
        {icon}
        <p className='pl-3 text-lg'>{text}</p>
        
    </motion.button>
  )
}
