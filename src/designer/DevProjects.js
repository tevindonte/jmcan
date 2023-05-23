import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import pr1 from '../images/project (1).JPG'
import pr2 from '../images/Project.png'
import pr3 from '../images/project (2).jpg'
import pr4 from '../images/project (2).png'
import pr5 from '../images/project (3).png'


export default function Developer() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [prevMousePosition, setPrevMousePosition] = useState({ x: 0, y: 0 });
  const imageRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPrevMousePosition({ x: mousePosition.x, y: mousePosition.y });
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    if (isHovered) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered, mousePosition]);

  const handleMouseEnter = (index) => {
    setIsHovered(true);
    gsap.to(imageRefs.current[index], {
      duration: 0.3,
      opacity: 1,
      scale: 1,
      rotation: 0,
      x: 0,
      y: 0,
    });
  };

  const handleMouseLeave = (index) => {
    setIsHovered(false);
    gsap.to(imageRefs.current[index], { duration: 0.3, opacity: 0, scale: 0 });
  };

  useEffect(() => {
    if (isHovered) {
      const calculateAnimationProps = () => {
        const velocity = {
          x: mousePosition.x - prevMousePosition.x,
          y: mousePosition.y - prevMousePosition.y,
        };

        const rotationSpeed = 0.5; // Adjust the rotation speed factor as needed
        const distortionAmount = Math.abs(velocity.x) + Math.abs(velocity.y);

        const rotation = velocity.x * rotationSpeed; // Adjust the rotation factor as needed

        gsap.to(imageRefs.current, {
          duration: 0.5,
          x: velocity.x * 0.05,
          y: velocity.y * 0.05,
          rotation,
          scaleX: 1 + distortionAmount * 0.01,
          scaleY: 1 - distortionAmount * 0.01,
          ease: 'power2.out',
        });
      };

      calculateAnimationProps();
    } else {
      gsap.to(imageRefs.current, { duration: 0.3, opacity: 0, scale: 0 });
    }
  }, [isHovered, mousePosition, prevMousePosition]);

  const handleDivClick = (url) => {
    window.open(url, '_blank');
  };

  const imageStyle = {
    position: 'fixed',
    top: mousePosition.y,
    left: mousePosition.x,
    opacity: 0,
    transformOrigin: 'center center',
  };
  

  return (
    <div className="flex flex-col mr-3 items-end font-Strange bg-[#E7AA2C]">
      <hr className="w-[1000px] h-px my-8 bg-[#1E1D19] border-0 dark:bg-gray-700" />

      <div className="flex-grow text-right mb-4">
        <a
          href="https://medium.com/@tparboosingh84/citibike-exploratory-analysis-scholars-day-research-project-5c54612101da"
          className="text-6xl font-bold"
          onMouseEnter={() => handleMouseEnter(0)}
          onMouseLeave={() => handleMouseLeave(0)}
        >
          ¹ Scholar's Day Exploratory Project
        </a>
        <p className="text-sm my-4">2022 | Python, NumPy, Matplotlib, Pandas, Geopy, Plotly, Seaborn, Folium, Geopy, GeoPandas</p>
      </div>
      <hr className="w-[1000px] h-px my-8 bg-[#1E1D19] border-0 dark:bg-gray-700" />

      <div className="flex-shrink-0">
        <img src={pr1} alt="Art" style={{
          ...imageStyle,
          display: isHovered && imageRefs.current[0] ? 'block' : 'none',
        }} ref={(el) => (imageRefs.current[0] = el)} />
      </div>

      <div className="flex-grow text-right mb-4">
        <a
          href="https://medium.com/@tparboosingh84/tuition-assistance-program-relationship-between-sector-types-and-groups-3bea481056ac"
          className="text-6xl font-bold"
          onMouseEnter={() => handleMouseEnter(1)}
          onMouseLeave={() => handleMouseLeave(1)}
        >
          ² Tuition Assistance Analysis
        </a>
        <p className="text-sm my-4">2023 | Python, Matplotlib, Pandas, Seaborn, Sklearn, Numpy, Scipy</p>
      </div>
      <hr className="w-[1000px] h-px my-8 bg-[#1E1D19] border-0 dark:bg-gray-700" />

      <div className="flex-shrink-0">
        <img src={pr2} alt="Art" style={{
          ...imageStyle,
          display: isHovered && imageRefs.current[1] ? 'block' : 'none',
        }} ref={(el) => (imageRefs.current[1] = el)} />
      </div>

      <div className="flex-grow text-right mb-4">
        <a
          href="https://blog.devgenius.io/mental-awareness-data-pipeline-analysis-202c81b6ee51"
          className="text-6xl font-bold"
          onMouseEnter={() => handleMouseEnter(2)}
          onMouseLeave={() => handleMouseLeave(2)}
        >
          ³ Mental Health Research
        </a>
        <p className="text-sm my-4">2022 | Python, PySpark, PowerBI, Boto3, Airflow, AWS EC2, S3 & Snowflake</p>
      </div>
      <hr className="w-[1000px] h-px my-8 bg-[#1E1D19] border-0 dark:bg-gray-700" />

      <div className="flex-shrink-0">
        <img src={pr3} alt="Art" style={{
          ...imageStyle,
          display: isHovered && imageRefs.current[2] ? 'block' : 'none',
        }} ref={(el) => (imageRefs.current[2] = el)} />
      </div>

      <div className="flex-grow text-right mb-4">
        <a
          href="https://Jmcanboy.com"
          className="text-6xl font-bold"
          onMouseEnter={() => handleMouseEnter(3)}
          onMouseLeave={() => handleMouseLeave(3)}
        >
          ⁴ Personal Portfolio
        </a>
        <p className="text-sm my-4">2023 | React, TailwindCSS, Framer Motion, Axios, Emailjs, React Router DOM, GSAP</p>
      </div>
      <hr className="w-[1000px] h-px my-8 bg-[#1E1D19] border-0 dark:bg-gray-700" />

      <div className="flex-shrink-0">
        <img src={pr4} alt="Art" style={{
          ...imageStyle,
          display: isHovered && imageRefs.current[3] ? 'block' : 'none',
        }} ref={(el) => (imageRefs.current[3] = el)} />
      </div>

      <div className="flex-grow text-right mb-4">
        <a
          href="https://verbalitfront.onrender.com/"
          className="text-6xl font-bold"
          onMouseEnter={() => handleMouseEnter(4)}
          onMouseLeave={() => handleMouseLeave(4)}
        >
          ⁵ Verbal-It
        </a>
        <p className="text-sm my-4 max-w-[700px]">2022 | React, Express.js, Node.js, MongoDB, TailwindCSS, JWT, Bcrypt, Axios, Mongoose, Nodemailer</p>
      </div>

      <div className="flex-shrink-0">
        <img src={pr5} alt="Art" style={{
          ...imageStyle,
          display: isHovered && imageRefs.current[4] ? 'block' : 'none',
        }} ref={(el) => (imageRefs.current[4] = el)} />
      </div>
    </div>
  );
}
