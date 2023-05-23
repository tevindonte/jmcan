import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import fashionpic from '../images/fashion (2).jpg';
import journalisticpic from '../images/journa.jpg';
import land14 from '../images/land (14).jpg';
import Spacing2 from './load/Spacing2';

export default function PHome() {
  return (
    <div className="container mx-auto ">
        
      <h1 className="text-center text-4xl font font-Sans my-8">Photography Portfolio</h1>
      <Spacing2 />
      <div className="flex justify-center space-x-4">
        <Link to="/photographer/fashion" className="relative w-1/3 border border-gray-300 rounded overflow-hidden h-[360px] filter grayscale hover:grayscale-0">
          <motion.img
            src={fashionpic}
            alt="Fashion"
            className="object-cover w-full h-full filter brightness-75"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute top-0 font-Sans left-0 p-4 text-white ">
            Fashion
          </div>
        </Link>
        <Link to="/photographer/landscape" className="relative w-1/3 border border-gray-300 rounded overflow-hidden h-[360px] filter grayscale hover:grayscale-0">
          <motion.img
            src={land14}
            alt="Landscape"
            className="object-cover w-full h-full filter brightness-75"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute top-0 left-0 p-4 text-white font-Sans">
            Landscape
          </div>
        </Link>
        <Link to="/photographer/journalistic" className="relative w-1/3 border border-gray-300 rounded overflow-hidden h-[360px] filter grayscale hover:grayscale-0">
          <motion.img
            src={journalisticpic}
            alt="Journalistic"
            className="object-cover w-full h-full filter brightness-75"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute top-0 left-0 p-4 text-white font-Sans">
            Journalistic
          </div>
        </Link>
      </div>
      
      <Spacing2 />

      <footer className="bg-[#F8F8F8] rounded-lg dark:bg-[#F8F8F8]">
        <div className="w-full max-w-screen-xl p-4 md:[#F8F8F8] flex md:items-center md:justify-between">
          <span className="text-sm text-black font-Strange sm:text-center dark:text-gray-400 ml-0">
            © 2023 <a href="https://jmcanboy.com" className="hover:underline">Tevin Parboosingh</a>. All Rights Reserved
          </span>
        </div>
      </footer>
    </div>
  );
}
