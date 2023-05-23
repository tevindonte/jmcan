import React from 'react';
import { motion } from 'framer-motion';

export default function Homehero() {
  return (
    <div className='text-black bg-[#FF001F] relative'>

      <p className='text-[200px] font-Aeonik absolute  text-[white] text-right  top-[48%] backdrop-invert-0 right-1/2 transform -translate-x-1/2 fixed hover:text-[#2B2290]'>Of</p>
      <p className='text-[13px] font-Aeonik text-[black] text-left absolute top-[15%] right-3/4 transform -translate-x-1/2 fixed hover:text-white'>Jamaica <br/> 18.4462°, 78.0167°</p>
      <div className='bg w-full h-screen mx-auto text-center flex flex-col justify-center relative'>
      <div class="text-9xl font-Cigra relative">
  Welcome    <span class="text-white text-8xl font-Sharp">to </span> the <br /> Play<span className='text-white text-8xl font-Sharp'>gr</span>ound
</div>

        
        <p className='text-[13px] font-Aeonik text-[white] text-right absolute top-[30%] right-1/2 transform -translate-x-1/3 fixed  hover:text-white'>Software Developer</p>
        <p className='text-[13px] font-Aeonik text-[black] text-right absolute top-[69%] right-1/4 transform -translate-x-1/2 fixed  hover:text-white'>Model <br/> Photographer</p>

        <div className='text-6xl font-Sharp py-8 text-[black]'>
          TEVIN PARBOOSINGH
        </div>


        <p className='text-[13px] font-Aeonik text-[white] text-right absolute top-[25%] right-1/4 transform -translate-x-1/3 fixed hover:text-white'>New York <br/> 40.9115° 73.7824°</p>
        <p className='text-[13px] font-Aeonik text-[black] text-right absolute top-[69%] right-1/2 transform -translate-x-1/3 fixed hover:text-white'>Data Analyst <br/> Data Engineer</p>
        <p className='text-[230px] font-Fat text-[black] text-right absolute  top-[59%] right-1/3 transform -translate-x-3/4  hover:text-white'>!</p>
        <p className='text-[13px] font-Aeonik text-[white] text-left absolute top-[79%] right-2/3 transform -translate-x-1/3 fixed hover:text-white'>Mathematics <br/> Iona University</p>
      </div>

    </div>
  );
}
