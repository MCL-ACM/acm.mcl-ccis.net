import './src/styles/global.css'
import React from 'react'
import { AnimatePresence } from 'framer-motion'
import Layout from './src/components/Layout'

export const wrapPageElement= ({element}) => {
   return <Layout>{element}</Layout>
}