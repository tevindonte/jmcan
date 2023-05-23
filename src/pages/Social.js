import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Social() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '-50px 0px',
  });

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="text-right p-4 text-3xl">
      <motion.a
        href="https://medium.com/@tparboosingh84"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={textVariants}
        transition={{ duration: 0.6 }}
      >
        Medium
      </motion.a>
      <motion.a
        href="https://github.com/tevindonte?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        className="underline ml-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        ref={ref}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={textVariants}
        transition={{ duration: 0.6 }}
      >
        Github
      </motion.a>
    </div>
  );
}
