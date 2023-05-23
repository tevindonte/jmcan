import React from 'react';
import { motion } from 'framer-motion';
import Homeabout from '../components/home/Homeabout';
import Homehero from '../components/home/Homehero';
import Homenav from '../components/home/Homenav';
import Slider from '../components/home/Slider';
import HFooter from '../components/home/HFooter';

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


export default function Home() {
  return (
    <div style={{ overflow: 'hidden' }}>
      <motion.div
        key="blackBox"
        variants={blackBox}
        initial="initial"
        animate="animate"
        className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50"
      >
        <motion.div
          className="relative w-full h-full bg-[#FF001F]"
          variants={blackBox}
        />
      </motion.div>

      <div className="relative bg-[#FF001F] z-0">
        <Homenav />
        <Homehero />
      </div>
      <div className="bg-black z-0">
        <Homeabout />
        <Slider />
        <HFooter />
      </div>
    </div>
  );
}
