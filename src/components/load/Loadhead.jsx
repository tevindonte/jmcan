import React from 'react';
import { motion } from 'framer-motion';

export default function Loadhead() {
  const letterVariants = {
    hover: {
      scale: 1.1,
      color: ["#808080", "rgb(255, 255, 255)"],
      transition: {
        duration: 0.3,
        type: 'spring',
        stiffness: 200,
      },
    },
  };

  return (
    <div className='flex flex-col '>
    <nav className="flex items-center text-sm justify-between bg-blackish py-4 px-6">
      <div className="text-white font-Strange">
        <motion.span
          variants={letterVariants}
          whileHover="hover"
          className="inline-block"
        >
          T
        </motion.span>
        <motion.span
          variants={letterVariants}
          whileHover="hover"
          className="inline-block"
        >
          E
        </motion.span>
        <motion.span
          variants={letterVariants}
          whileHover="hover"
          className="inline-block"
        >
          V
        </motion.span>
        <motion.span
          variants={letterVariants}
          whileHover="hover"
          className="inline-block"
        >
          I
        </motion.span>
        <motion.span
          variants={letterVariants}
          whileHover="hover"
          className="inline-block"
        >
          N
        </motion.span>{' '}
        <motion.span
          variants={letterVariants}
          whileHover="hover"
          className="inline-block"
        >
          P
        </motion.span>
        <motion.span
          variants={letterVariants}
          whileHover="hover"
          className="inline-block"
        >
          A
        </motion.span>
        <motion.span
          variants={letterVariants}
          whileHover="hover"
          className="inline-block"
        >
          R
        </motion.span>
        <motion.span
          variants={letterVariants}
          whileHover="hover"
          className="inline-block"
        >
          B
        </motion.span>
        <motion.span
          variants={letterVariants}
          whileHover="hover"
          className="inline-block"
        >
          O
        </motion.span>
        <motion.span
          variants={letterVariants}
          whileHover="hover"
          className="inline-block"
        >
          O
        </motion.span>
        <motion.span
          variants={letterVariants}
          whileHover="hover"
          className="inline-block"
        >
          S
        </motion.span>
        <motion.span
          variants={letterVariants}
          whileHover="hover"
          className="inline-block"
        >
          I
        </motion.span>
        <motion.span
          variants={letterVariants}
          whileHover="hover"
          className="inline-block"
        >
          N
        </motion.span>
        <motion.span
          variants={letterVariants}
          whileHover="hover"
          className="inline-block"
        >
          G
        </motion.span>
        <motion.span
          variants={letterVariants}
          whileHover="hover"
          className="inline-block"
        >
          H
        </motion.span>
      </div>
      <div>
        <motion.a
          href="/contact"
          className="text-white rounded font-Strange px-4 py-2"
          variants={letterVariants}
          whileHover="hover"
        >
          <motion.span
                        variants={letterVariants}
                        whileHover="hover"
                        className="inline-block"
                      >
                        C
                      </motion.span>
                      <motion.span
                        variants={letterVariants}
                        whileHover="hover"
                        className="inline-block"
                      >
                        O
                      </motion.span>
                      <motion.span
                        variants={letterVariants}
                        whileHover="hover"
                        className="inline-block"
                      >
                        N
                      </motion.span>
                      <motion.span
                        variants={letterVariants}
                        whileHover="hover"
                        className="inline-block"
                      >
                        T
                      </motion.span>
                      <motion.span
                        variants={letterVariants}
                        whileHover="hover"
                        className="inline-block"
                      >
                        A
                      </motion.span>
                      <motion.span
                        variants={letterVariants}
                        whileHover="hover"
                        className="inline-block"
                      >
                        C
                      </motion.span>
                      <motion.span
                        variants={letterVariants}
                        whileHover="hover"
                        className="inline-block"
                      >
                        T
                      </motion.span>
                    </motion.a>
                  </div>
                </nav>
                </div>
              );
            }
            
