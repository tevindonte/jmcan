import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Ticker from 'framer-motion-ticker';

const Loadhero = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const images = [
    {
      url: 'https://res.cloudinary.com/dagk5z05h/image/upload/v1683659752/home_bsiggg.gif',
      link: '/home',
      section: 'HOME',
    },
    {
      url: 'https://res.cloudinary.com/dagk5z05h/image/upload/v1683661469/2323_unkgin.jpg',
      link: '/model',
      section: 'MODEL',
    },
    {
      url: 'https://res.cloudinary.com/dagk5z05h/image/upload/v1683660498/1_MptjiGxY9vSRW4ZC9S7Isw_cnqcqq.gif',
      link: '/designer',
      section: 'DESIGNER',
    },
    {
      url: 'https://res.cloudinary.com/dagk5z05h/image/upload/v1683660539/booting-up-developer-economy-how-tech-startups-are-helping-coders-build-and-test-software-faster_wswrmc.gif',
      link: '/developer',
      section: 'DEVELOPER',
    },
    {
      url: 'https://res.cloudinary.com/dagk5z05h/image/upload/v1683659719/ezgif.com-gif-maker_4_tztbgm.gif',
      link: '/photographer',
      section: 'PHOTOGRAPHER',
    },
  ];

  const [selectedSection, setSelectedSection] = useState('');

  const handleHover = (section) => {
    setSelectedSection(section);
  };

  const handleMouseLeave = () => {
    setSelectedSection('');
  };

  useEffect(() => {
    const animateElements = () => {
      const elements = document.getElementsByClassName('fade-in');
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i];
        element.style.opacity = 1;
        element.style.transform = 'translateY(0)';
      }
    };

    animateElements();
  }, []);

  return (
    <div className='bg-blackish '>
      <Ticker
        duration={15}
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
        isPlaying={isPlaying}
      >
        {images.map((image, index) => (
          <a
            key={index}
            href={image.link}
            onMouseEnter={() => handleHover(image.section)}
            onMouseLeave={handleMouseLeave}
          >
            <motion.div
              className='fade-in'
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3, ease: 'easeOut' }}
              whileHover={{ scale: 1.1 }}
              style={{
                backgroundImage: `url(${image.url})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                margin: '15px',
                height: '360px',
                width: '270px',
                borderRadius: '3%',
                overflow: 'hidden',
              }}
            />
            <AnimatePresence>
            {selectedSection === image.section && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="text-center mt-8 font-Sans text-white text-sm fade-in"
                    onMouseEnter={() => handleHover(image.section)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {selectedSection.split('').map((letter, index) => (
                      <motion.span
                        key={index}
                        style={{ display: 'inline-block' }}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ delay: index * 0.1 }} // Delay each letter animation
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </motion.div>
                )}
            </AnimatePresence>
          </a>
        ))}
      </Ticker>
    </div>
  );
};

export default Loadhero;

