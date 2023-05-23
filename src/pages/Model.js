import React from 'react'
import CFooter from '../components/CFooter'
import MNav from '../components/MNav'
import ModelNav from '../components/ModelSpin'
import ModelGall from '../designer/ModelGall'
import ModelHome from '../designer/ModelHome'
import { motion } from 'framer-motion'

export default function Model() {
  const blackBox = {
    initial: {
      height: "100vh",
      bottom: 0,
    },
    animate: {
      height: 0,
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };
  return (
    <div className=''>
     
      <motion.div
        className="absolute bg-white inset-0 flex items-center justify-center"
        initial="initial"
        animate="animate"
        variants={blackBox}  
      />
      <MNav />
      <ModelHome />
      <ModelNav />
      <div className='py-8'>
      <ModelGall />
      </div>
      <CFooter />
      
    </div>
  )
}
