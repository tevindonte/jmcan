import React from 'react';
import { motion } from 'framer-motion';
import PNav from '../components/PNav'
import PHome from '../components/PHome'

export default function Photographer() {
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
    <div style={{ overflow: 'hidden' }} className='bg-[#F8F8F8]'>
    <motion.div
      key="blackBox"
      variants={blackBox}
      initial="initial"
      animate="animate"
      className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50"
    >
      <motion.div
        className="relative w-full h-full bg-[#F8F8F8]"
        variants={blackBox}
      />
    </motion.div>
    <motion.div
      className="absolute bg-[#F8F8F8] inset-0 flex items-center justify-center"
      initial="initial"
      animate="animate"
      variants={blackBox}
    >
    </motion.div>
    <div>
      <PNav />
      <PHome />
    
    </div>
    </div>
  );
}
