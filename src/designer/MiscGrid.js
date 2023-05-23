import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import misc1 from '../images/misc (1).jpg'
import misc2 from '../images/misc (2).jpg'
import misc3 from '../images/misc (3).jpg'
import misc4 from '../images/misc (4).jpg'
import misc5 from '../images/misc (5).jpg'



const MiscGrid = () => {
    const images = [misc1, misc2, misc3, misc4, misc5 /* Add more image URLs here */];
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
                  src={misc1}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(misc1, 0)}
                />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={misc2}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(misc2, 1)}
                />
        </div>
      
    </div>
    <div className="grid gap-4">
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={misc3}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(misc3, 2)}
                />
        </div>

    </div>
    <div className="grid gap-4">
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={misc4}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(misc4, 3)}
                />
        </div>

    </div>
    <div className="grid gap-4">
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={misc5}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(misc5, 4)}
                />
        </div>

    </div>
</div>
        </div>
    );
  };
  
  export default MiscGrid;
  