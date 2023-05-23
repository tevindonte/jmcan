import React from 'react';
import { motion } from 'framer-motion';
import Ticker from 'framer-motion-ticker';
import placeholder from '../images/placeholder.jpg';


export default function ModelSpin() {
  return (
    <div >
      <Ticker duration={20} >
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            style={{
              margin: '1px',
              height: '250px',
              width: '200px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            className='overflow-hidden'
          >
            <motion.img
              src={placeholder}
              alt="Placeholder"
              style={{ maxWidth: '100%', maxHeight: '100%' }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5 }}
              className='object-cover w-full h-full '
            />
          </div>
        ))}
      </Ticker>
    </div>
  );
}
