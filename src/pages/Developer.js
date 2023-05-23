import React from 'react'
import DevFooter from '../components/DevFooter'
import Hero from '../components/Hero'
import Spacing from '../components/load/Spacing'
import DevNav from '../designer/DevNav'
import DevProjects from '../designer/DevProjects'
import DevSpin from '../designer/DevSpin'
import ScrollText from '../designer/ScrollText'
import TextSpin2 from '../designer/TextSpin2'
import DevSpacing from '../designer/DevSpacing'
import Social from './Social'
import { motion } from 'framer-motion';
export default function Developer() {
  const content = [
    "I am actively seeking freelance opportunities,",
    "as well as keenly interested in internships ",
    "and gaining valuable work experience!",
"Interested in seeing more of my work?",
"Check out my Blog and Github below!",
  ];
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
    
    <div className='bg-[#E7AA2C]'>
      <motion.div
        className="absolute bg-[#E7AA2C] inset-0 flex items-center justify-center"
        initial="initial"
        animate="animate"
        variants={blackBox}
      />
      <DevNav />
      <Hero />
      <DevSpin />
      <TextSpin2 />
      <DevSpacing />
      <hr class="w-64 h-px my-3 mx-auto bg-[#1E1D19] border-0 dark:bg-gray-700"/>      <DevSpacing />
      <DevProjects />
      <hr class="w-64 h-px my-3 mx-auto bg-[#1E1D19] border-0 dark:bg-gray-700"/>      <DevSpacing />
      <ScrollText content={content} />
      <Social />
      <DevSpacing />
      <DevFooter />
    </div>
  )
}
