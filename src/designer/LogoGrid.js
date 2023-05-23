import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'
import logo1 from '../images/logo (1).jpg';
import logo2 from '../images/logo (2).jpg';
import logo3 from '../images/logo (3).jpg';
import logo4 from '../images/logo (4).jpg';
import logo5 from '../images/logo (5).jpg';
import logo6 from '../images/logo (6).jpg';
import logo7 from '../images/logo (7).jpg';
import logo8 from '../images/logo (8).jpg';
import logo9 from '../images/logo (9).jpg';
import logo10 from '../images/logo (10).jpg';
import logo11 from '../images/logo (11).jpg';
import logo12 from '../images/logo (12).jpg';
import logo13 from '../images/logo (13).jpg';
import logo14 from '../images/logo (14).jpg';
import logo15 from '../images/logo (15).jpg';
import logo16 from '../images/logo (16).jpg';
import logo17 from '../images/logo (17).jpg';
import logo18 from '../images/logo (18).jpg';
import logo19 from '../images/logo (19).jpg';
import logo20 from '../images/logo (20).jpg';



const ImageGrid = () => {
    const images = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20 /* Add more image URLs here */];
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
            <div className="ml-4 mr-4 grid grid-cols-2 md:grid-cols-4 gap-4">
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
                  src={logo1}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(logo1, 0)}
                />
        </div>
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={logo2}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(logo2, 1)}
                />
        </div>
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={logo3}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(logo3, 2)}
                />
            
        </div>
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={logo4}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(logo4, 3)}
                />
        </div>
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={logo5}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(logo5, 4)}
                />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={logo6}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(logo6, 5)}
                />
        </div>
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={logo7}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(logo7, 6)}
                />
        </div>
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={logo8}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(logo8, 7)}
                />
        </div>
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={logo9}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(logo9, 8)}
                />
        </div>
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={logo10}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(logo10, 9)}
                />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={logo11}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(logo11, 10)}
                />
        </div>
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={logo12}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(logo12, 11)}
                />
        </div>
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={logo13}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(logo13, 12)}
                />
        </div>
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={logo14}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(logo14, 13)}
                />
        </div>
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={logo15}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(logo15, 14)}
                />
        </div>
    </div>
    <div className="grid gap-4">
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={logo16}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(logo16, 15)}
                />
        </div>
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={logo17}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(logo17, 16)}
                />
        </div>
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={logo18}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(logo18, 17)}
                />
        </div>
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={logo19}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(logo19, 18)}
                />
        </div>
        <div>
        <motion.img
                  className="h-auto max-w-full rounded-lg hover:brightness-125"
                  src={logo20}
                  alt=""
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }} // Adjust the duration here (in seconds)
                  onClick={()=>handleClick(logo20, 19)}
                />
        </div>
    </div>
</div>
        </div>
    );
  };
  
  export default ImageGrid;
  