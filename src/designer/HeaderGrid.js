import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import header1 from '../images/Header (1).png'
import header2 from '../images/Header (2).jpg'
import header3 from '../images/Header (3).jpg'
import header4 from '../images/Header (4).jpg'
import header5 from '../images/Header (5).jpg'
import header6 from '../images/Header (6).jpg'
import header7 from '../images/Header (7).jpg'
import header8 from '../images/Header (8).jpg'
import header9 from '../images/Header (9).jpg'
import header10 from '../images/Header (10).jpg'
import header11 from '../images/Header (11).jpg'
import header12 from '../images/Header (12).jpg'

const HeaderGrid = () => {
    const images = [header1, header2, header3, header4, header5, header6, header7, header8, header9, header10, header11, header12 /* Add more image URLs here */];
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
            <div className="bg-[black] ml-4 mr-4 grid grid-cols-2 md:grid-cols-2 gap-4">
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
                  src={header1}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(header1, 0)}
                />
        </div>
        
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={header2}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(header2, 1)}
                />
            
        </div>
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={header3}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(header3, 2)}
                />
        </div>
    </div>
    <div className="grid gap-4">

        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={header4}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(header4, 3)}
                />
        </div>
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={header5}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(header5, 4)}
                />
        </div>
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={header6}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(header6, 5)}
                />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={header7}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(header7, 6)}
                />
        </div>
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={header8}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(header8, 7)}
                />
        </div>

        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={header9}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(header9, 8)}
                />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={header10}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(header10, 9)}
                />
        </div>
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={header11}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(header11, 10)}
                />
        </div>
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={header12}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(header12, 11)}
                />
        </div>
    </div>
</div>
        </div>
    );
  };
  
  export default HeaderGrid;
  