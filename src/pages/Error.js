import React from 'react';
import { motion } from 'framer-motion';

export default function Error() {
  const preventSaveImage = (event) => {
    event.preventDefault();
  };
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
    <div>
      <div>
      <motion.div
        className="absolute bg-[#080606] inset-0 flex items-center justify-center"
        initial="initial"
        animate="animate"
        variants={blackBox}
      /></div>
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#FF001F]">
      <div className="relative">
        <img
          src={require('../images/404back.png')}
          alt="404"
          className="w-1/2 mx-auto"
          onContextMenu={preventSaveImage}
        />
        <img
          src={require('../images/404front.png')}
          alt="404"
          className="w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-90-anim"
          onContextMenu={preventSaveImage}
        />
      </div>
      <div className="">
        <p className="text-center font-Strangebold font-bold text-3xl mt-4 text-black">
          The page you are looking for doesn't exist or has been moved. Please go back to the homepage.
        </p>
      </div>
    </div>
    </div>
  );
}

