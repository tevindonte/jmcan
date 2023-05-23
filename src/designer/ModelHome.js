import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import SwiperCore, { EffectCoverflow, Pagination } from 'swiper';
import { motion } from 'framer-motion';
import placeholder from '../images/placeholder.jpg';

SwiperCore.use([EffectCoverflow, Pagination]);

export default function ModelHome() {
  return (
    <div className="flex">
      <div className="w-1/2 flex flex-col items-center justify-center">
        <h1 className="text-8xl font-Sans text-center mb-4">Tevin Parboosingh</h1>
        <p className="text-3xl text-center mb-4">Model</p>
        <div className="text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[90px]">
            <div className="">
              <p className="font-bold  text-2xl">Height:</p>
              <p className='mb-5'>6'05"/ 185cm</p>
              <p className="font-bold  text-2xl">Weight:</p>
              <p className='mb-5'>125lbs/57kg</p>
              <p className="font-bold  text-2xl">Shoe Size:</p>
              <p className='mb-5'>8.5 US</p>
              <p className="font-bold  text-2xl">Chest:</p>
              <p className='mb-5'>33"/ 84cm</p>
              <p className="font-bold  text-2xl">Hair:</p>
              <p className='mb-5'>Brown</p>
            </div>
            <div className="">
              <p className="font-bold  text-2xl">Suit:</p>
              <p className='mb-5'>40R Skinny Fit</p>
              <p className="font-bold  text-2xl">Waist:</p>
              <p className='mb-5'>30" / 75cm</p>
              <p className="font-bold  text-2xl">Age Range:</p>
              <p className='mb-5'>17-24</p>
              <p className="font-bold  text-2xl">Eyes:</p>
              <p className='mb-5'>Brown</p>
              <p className="font-bold  text-2xl">Inseam:</p>
              <p className='mb-5'>34'</p>
            </div>
          </div>
        </div>
      </div>
 {/* Left half of the page for details */}
      <div className="w-1/2 mr-3 py-4">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"2"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="w-750 h-1124 relative">
              <motion.img
                src={placeholder}
                alt="Model Photo"
                className="w-full h-full object-cover"
                style={{ zIndex: 1 }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-750 h-1124 relative">
              <motion.img
                src={placeholder}
                alt="Model Photo"
                className="w-full h-full object-cover"
                style={{ zIndex: 1 }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-750 h-1124 relative">
              <motion.img
                src={placeholder}
                alt="Model Photo"
                className="w-full h-full object-cover"
                style={{ zIndex: 1 }}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-750 h-1124 relative ">
              <motion.img
                src={placeholder}
                alt="Model Photo"
                className="w-full h-full object-cover"
                style={{ zIndex: 1 }}
              />
            </div>
          </SwiperSlide>
          {/* Add more SwiperSlide components for additional slides */}
        </Swiper>
      </div>
    </div>
  );
}
