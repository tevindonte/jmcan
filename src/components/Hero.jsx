import { Button } from 'flowbite-react';
import React from 'react'
import Typed from 'react-typed';
import { Link } from 'react-router-dom';
import history from './histore/history.jsx';
import { useScroll, useTransform, motion  } from "framer-motion";



export default function Hero() {
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 3]);

  return (
    <div name='home' className='text-white'>
        <div className='max-w-[1900px] mt-[-96px] w-full h-[700px] mx-auto text-center flex flex-col justify-center'  style={{ overflowX: 'hidden' }}>
            

            <motion.div className="font-Strangebold md:text-7xl sm:text-6xl text-4xl font-bold md:py-6" style={{ x, scale }}>
            Tevin Parboosingh
            </motion.div>


            <div className='flex justify-center items-center '>
            <Typed className='text-[#1E1D19] md:text-5xl sm:text-4xl text-xl font-bold font-Strange md:pl-4 pl-2' strings={['FrontEnd Chef', 'Data Analyst','Software Developer','Data Engineer']} typeSpeed={120} backSpeed={130} loop/>
            </div>
            
        </div>
    </div>

  )
}
