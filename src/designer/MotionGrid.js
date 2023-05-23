import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import gif1 from '../images/gif (1).gif'
import gif2 from '../images/gif (2).gif'
import gif3 from '../images/gif (3).gif'
import gif4 from '../images/gif (4).gif'
import gif5 from '../images/gif (5).gif'
import gif6 from '../images/gif (6).gif'
import gif7 from '../images/gif (7).gif'
import gif8 from '../images/gif (8).gif'
import gif9 from '../images/gif (9).gif'
import gif10 from '../images/gif (10).gif'
import gif11 from '../images/gif (11).gif'
import gif12 from '../images/gif (12).gif'
import gif13 from '../images/gif (13).gif'
import gif14 from '../images/gif (14).gif'

const MotionGrid = () => {
    const images = [gif1, gif2, gif3, gif4, gif5, gif6, gif7, gif8, gif9, gif10, gif11, gif12, gif13, gif14 /* Add more image URLs here */];
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    useEffect(() => {
        const handleEscape = (event) => {
          if (event.key === 'Escape') {
            handleClose();
          }
        };
    
        const handleClickOutside = (event) => {
            const overlay = document.querySelector('.image-grid-overlay');
            if (overlay && !overlay.contains(event.target)) {
              handleClose();
            }
          };
    
        document.addEventListener('keydown', handleEscape);
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('keydown', handleEscape);
          document.removeEventListener('click', handleClickOutside);
        };
      }, []);

    const handleClick = (image, index) => {
        setSelectedImageIndex(index);
    };

    const handleNext = (event) => {
        event.stopPropagation();
        setSelectedImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      };
      
      const handlePrev = (event) => {
        event.stopPropagation();
        setSelectedImageIndex((prevIndex) =>
          prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
      };
      

    const handleClose = () => {
        setSelectedImageIndex(null);
    };

    return (
        <div>
            <div className="ml-4 mr-4 grid grid-cols-2 md:grid-cols-2 gap-4">
    <div className="grid gap-4">
                    <AnimatePresence>
                        {selectedImageIndex !== null && (
                            <motion.div
                                className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 bg-black"
                                onClick={handleClose}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <motion.img
                                    className="h-auto max-w-full rounded-lg"
                                    src={images[selectedImageIndex]}
                                    alt=""
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    exit={{ scale: 0 }}
                                    transition={{ duration: 0.8 }} // Adjust the duration here (in seconds)
                                    onClick={handleNext}
                                    style={{ cursor: 'pointer' }}
                                />
                                <motion.div
                                    className="absolute top-0 bottom-0 left-0 w-1/2"
                                    onClick={handlePrev}
                                    style={{ cursor: 'pointer' }}
                                />
                                <motion.div
                                    className="absolute top-0 bottom-0 right-0 w-1/2"
                                    onClick={handleNext}
                                    style={{ cursor: 'pointer' }}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
            
            <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={gif1}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(gif1, 0)}
                />
        </div>
        
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={gif2}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(gif2, 1)}
                />
            
        </div>
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={gif3}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(gif3, 2)}
                />
        </div>
    </div>
    <div className="grid gap-4">

        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={gif4}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(gif4, 3)}
                />
        </div>
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={gif5}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(gif5, 4)}
                />
        </div>
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={gif6}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(gif6, 5)}
                />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={gif7}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(gif7, 6)}
                />
        </div>
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={gif8}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(gif8, 7)}
                />
        </div>

        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={gif9}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(gif9, 8)}
                />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={gif10}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(gif10, 9)}
                />
        </div>
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={gif11}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(gif11, 10)}
                />
        </div>
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={gif12}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(gif12, 11)}
                />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={gif13}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(gif13, 12)}
                />
        </div>
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={gif14}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(gif14, 13)}
                />
        </div>
        
    </div>
</div>
        </div>
    );
  };
  
  export default MotionGrid;
  