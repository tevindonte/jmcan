import React from 'react'
import DesignNav from './DesignNav'
import ImageGrid from './LogoGrid'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';
export default function Logo() {
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
    <div className='bg-black h-screen'>
      <motion.div
      key="blackBox"
      variants={blackBox}
      initial="initial"
      animate="animate"
      className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50"
    >
      <motion.div
        className="relative w-full h-full bg-black"
        variants={blackBox}
      />
    </motion.div>
      <DesignNav />
      <div className="flex bg-black underline font-Aeonik items-center justify-center py-4 md:py-8 flex-wrap">
      <Link to="/designer/header" className="text-white border border-white hover:border-redish dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800 bg-transparent">HEADER</Link>
      <Link to="/designer/motion" className="text-white border border-white hover:border-redish dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800 bg-transparent">MOTION</Link>
      <Link to="/designer/package" className="text-white border border-white hover:border-redish dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800 bg-transparent">PACKAGE</Link>
      <Link to="/designer/intro" className="text-white border border-white hover:border-redish dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800 bg-transparent">INTRO</Link>
      <Link to="/designer/logo" className="text-[#FF001F] text-sm hover:text-white border border-[#FF001F] bg-white hover:bg-[#FF001F] focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full  font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800 bg-transparent">LOGO</Link>
      <Link to="/designer/misc" className="text-white border border-white hover:border-redish dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800 bg-transparent">MISC</Link>
      <Link to="/designer/web" className="text-white border border-white hover:border-redish dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800 bg-transparent">WEB</Link>
      <Link to="/designer/art" className="text-white border border-white hover:border-redish dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-sm font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800 bg-transparent">ART</Link>
    </div>
      <ImageGrid/>
      <footer className="bg-black rounded-lg dark:bg-white">
        <div className="w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
          <span className="text-sm text-[#FF001F] font-Strange sm:text-center dark:text-gray-400 ml-0">
            © 2023 <a href="https://jmcanboy.com" className="hover:underline">Tevin Parboosingh</a>. All Rights Reserved
          </span>
        </div>
      </footer>
    </div>

  )
}
