import React from 'react';
import { motion } from 'framer-motion';
import Loader from '../components/load/Loader';
import Loadhead from '../components/load/Loadhead';
import Loadhero from '../components/load/Loadhero';
import Logo3D from '../components/load/Logo3D';
import Spacing from '../components/load/Spacing';

const blackBox = {
  initial: {
    height: '100vh',
    bottom: 0,
  },
  animate: {
    height: 0,
    transition: {
      duration: 1.5,
      ease: [0.87, 0, 0.13, 1],
      when: 'afterChildren',
    },
  },
};

const textContainer = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 0,
    transition: {
      duration: 0.25,
      when: 'afterChildren',
    },
  },
};

const text = {
  initial: {
    y: 40,
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

export default function Load() {
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
          className="absolute z-50 flex items-center justify-center w-full bg-black"
          initial="initial"
          animate="animate"
          variants={blackBox}
        >
          <motion.svg className="absolute z-50 flex">
            <pattern
              id="pattern"
              patternUnits="userSpaceOnUse"
              width={750}
              height={800}
              className="text-white"
            >
              <rect className="w-full h-full fill-current" />
              <motion.rect
                variants={text}
                className="w-full h-full text-[#FF001F] fill-current"
              />
            </pattern>
            <motion.text
              variants={text}
              className="text-4xl text-[#FF001F] font-Strangebold"
              textAnchor="middle"
              x="50%"
              y="50%"
              style={{ fill: 'url(#pattern)' }}
            >
              Welcome!
            </motion.text>
          </motion.svg>
        </motion.div>
      </motion.div>

      <div
        key="content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="h-screen bg-blackish"
      >
        {/* Your other components here */}
        <Loadhead />
        <Loader />
        <Logo3D />
        <Loadhero />
        <Spacing />
      </div>
    </div>
  );
}
