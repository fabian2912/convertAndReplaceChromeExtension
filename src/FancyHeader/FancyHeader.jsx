import React from 'react';
import classes from './FancyHeader.module.css';

const FancyHeader = () => {

    const text = 'On-Screen Converter';
    const getColorForIndex = index => colorWheelHexadecimals[index % colorWheelHexadecimals.length];
    const colorWheelHexadecimals = [
        '#FF0000', '#FF4500', '#FFA500', '#FFD700', '#FFFF00', '#ADFF2F',
        '#00FF00', '#32CD32', '#00FFFF', '#4682B4', '#0000FF', '#800080'
      ];

      const handleMouseEnter = (event) => {
        const index = event.target.getAttribute('data-index');
        event.target.style.transform = 'translateY(-5px)';
        event.target.style.color = getColorForIndex(index);
      };
      
      const handleMouseLeave = (event) => {
        event.target.style.transform = 'translateY(0)';
        event.target.style.color = 'black';
      };
      
    return (
        <h1 className={classes["colorful-text"]}> 
          {[...text].map((char, index) => (
            <span
              key={index}
              className={classes["colorful-letter"]}
              style={{
                transition: 'transform 0.2s, color 0.2s',
                '--assigned-color': colorWheelHexadecimals[index % colorWheelHexadecimals.length],
              }}
              data-index={index}
              onMouseEnter={(e) => handleMouseEnter(e)}
              onMouseLeave={(e) => handleMouseLeave(e)}
            >
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </h1>
    )
}

export default FancyHeader;