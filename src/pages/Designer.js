import React from 'react'
import DesignFoot from '../components/DesignFoot'
import DesignDetails from '../designer/DesignDetails'
import MainDesignNav from '../designer/MainDesignNav'
import TextSpin from '../designer/TextSpin'
import { motion } from 'framer-motion';
export default function Designer() {
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
    <div className='bg-[#EEEEEE]'>
      <motion.div
        className="absolute bg-[#EEEEEE] inset-0 flex items-center justify-center"
        initial="initial"
        animate="animate"
        variants={blackBox}
      />
      <MainDesignNav />
      <TextSpin />
      <DesignDetails />
      
      <DesignFoot />
      
    </div>
  )
}
