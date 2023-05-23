import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useTransform } from 'framer-motion';
import pic1 from './mebl.jpg';
import pic2 from './over.png';
import Slider from './Slider';

const recognitions = [
    'TSTT Lois Bronz Scholar',
  'Iona University Dean\'s List',
  
  
  'Academic Scholarship - Iona University',
  'Iona Scholar\'s Day Participant - Citibike',
  'Over 150+ Tutoring Sessions - Iona University',
];

const texts = ['Text 1', 'Text 2', 'Text 3', 'Text 4'];

const Homeabout = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const handleScroll = () => {
    setScrollY(window.scrollY);
    // Rest of your scroll handling logic...
  };
  
  useEffect(() => {
    const handleScroll = () => {
      const containerTop = containerRef.current.offsetTop;
      const containerBottom = containerTop + containerRef.current.offsetHeight;
      const scrollPosition = window.scrollY + window.innerHeight;

      if (scrollPosition > containerTop && scrollPosition < containerBottom) {
        if (!isVisible) {
          setIsVisible(true);
        }
      } else {
        if (isVisible) {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible]);

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, isVisible]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="flex items-center justify-between bg-black">
      <div className="p-8">
        <div className="relative">
          <motion.img
            src={pic1}
            alt="My Picture"
            className="w-[3000px]"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
            transition={{ duration: 0.6 }}
          />
<motion.h1
          className="text-4xl font-Strange mt-6 text-[#FF001F] hover:text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6 }}
        >
          Collaborations
        </motion.h1>
                  <img src={pic2} alt="Smiley Face Overlay" className="absolute inset-0 w-full h-full" />
        </div>
      </div>
      
      <div ref={containerRef} className="p-8 text-white">
        <motion.h1
          className="text-4xl font-Strange mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6 }}
        >
          A sneak peek into
        </motion.h1>
        <motion.h1
          className="text-2xl font-Strange mb-4 text-[#FF001F] hover:text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6 }}
        >
          what I do
        </motion.h1>
        <motion.p
          className="text-md font-Aeonik"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6 }}
        >
          A New York-based developer and data enthusiast. As for creativity, I am a well-seasoned motion and graphic designer with 5+ years of experience.
          Coming to the United States from Jamaica was what sparked my design journey. Somehow finding a balance in my life, I am a senior mathematics major at Iona University.
        </motion.p>
  
        <motion.h1
          className="text-4xl font-Strange mt-12 mb-4 text-[#FF001F] hover:text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6 }}
        >
          Any more?
        </motion.h1>
        

        <motion.p
          className="text-md font-Aeonik"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.6 }}
        >
          In addition, I am a Level 2 Tutor at Iona University and actively participate in the Computer Science and Soccer club.
          I also serve as a mentor for CodePath and NPower because I enjoy helping others.
        </motion.p>
  
        <h1 className="text-4xl font-Strange mt-12 mb-4 text-[#FF001F] hover:text-white">Recognitions</h1>
        <div className="text-md">
          {recognitions.map((recognition, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={controls}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="flex items-center  font-Aeonik mt-4"
            >
              <div className="w-4 h-4 bg-white  rounded-full mr-4"></div>
              <p>{recognition}</p>
            </motion.div>
          ))}
        </div>
        
        
      </div>
    </div>
  );
          }  


          export default Homeabout;