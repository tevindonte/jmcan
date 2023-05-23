import React from 'react';
import Ticker from 'framer-motion-ticker';

function Slider() {
  const texts = ['Travelers', 'TSTT', 'Fourplay', 'Dev Genius', 'Grace New Life Center','CodePath', 'Iona University', 'NPower', 'Chronic'];

  return (
    <div className="App">
      <Ticker
        animate={true}
        interval={2000000} // Set the interval (in milliseconds) for each slide transition
        motionConfig={{
          damping: 0, // Adjust the motion damping for slide transition
        }}
      >
        {texts.map((text, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'black',
              margin: '10px',
              height: '1px',
              width: '230px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '16px',
              color: '#ffffff',
            }}
            className='font-Strange'
          >
            {text}
          </div>
        ))}
      </Ticker>
    </div>
  );
}

export default Slider;
