import React, {useEffect, useState} from 'react';
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
      const [initialAnimationComplete, setInitialAnimationComplete] = useState(false);

      useEffect(() => {
        // Animate letters initially
        if (!initialAnimationComplete) {
          animateInitialLetters();
        }
      }, [initialAnimationComplete]);
    
      const animateInitialLetters = () => {
        const letterSpans = document.querySelectorAll(`.${classes["colorful-letter"]}`);
    
        letterSpans.forEach((span, index) => {
          setTimeout(() => {
            requestAnimationFrame(() => {
              span.style.transition = 'transform 0.33s ease, color 0.33s ease';
              span.style.transform = 'translateY(-5px)';
              span.style.color = getColorForIndex(index);
            });
    
            setTimeout(() => {
              requestAnimationFrame(() => {
                span.style.transform = 'translateY(0)';
                span.style.color = 'black';
              });
            }, 2000);
          }, index * 33);
        });
    
        setTimeout(() => {
          setInitialAnimationComplete(true);
        }, text.length * 33);
      };

    return (
        <h1 className={classes["colorful-text"]}> 
          {[...text].map((char, index) => (
            <span
              key={index}
              className={classes["colorful-letter"]}
              style={{
                transition: 'transform 0.15s, color 0.2s',
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