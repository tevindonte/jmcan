import React from 'react';
import CFooter from '../components/CFooter';
import CNav from '../components/CNav';
import Contactt from '../components/Contactt';
import { motion } from 'framer-motion';

export default function Contact() {
  const blackBox = {
    initial: {
      height: "120vh",
      width: "130vw",
      bottom: 0,
      borderRadius: 0, // Set initial border-radius to 0
    },
    animate: {
      height: 0,
      borderRadius: "70%", // Set final border-radius to create a curved shape
      transition: {
        duration: 1.5,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };

  return (
    <div>
      <motion.div
        className="absolute bg-white inset-0 flex items-center justify-center"
        initial="initial"
        animate="animate"
        variants={blackBox}
      />
      <CNav />
      <Contactt />
      <CFooter />
    </div>
  );
}