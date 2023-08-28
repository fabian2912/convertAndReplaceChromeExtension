import classes from './App.module.css';
import MenuBar from '../MenuBar/MenuBar';
import {features} from '../config';
import React from 'react';


function App() { 
    const upperMenuBarItems= ['Convert', 'Replace'];
    const lowerMenuBarItems = ['Weight', 'Size', 'Temperature'];

    // notes to myself:
    // if convertMenu && weightTab, show weightPanel
    // if convertMenu && sizeTab, show sizePanel
    // if convertMenu && temperatureTab, show temperaturePanel
    // if replaceMenu, show replacePanel

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

    return <main> 
       <div>
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
      </div>
        <MenuBar fontSize={"6vmin"} backgroundColor={"#E4EFF3"} items={upperMenuBarItems} upperOrLowerMenuBar={'upper'}/>

        <div></div>
        <MenuBar fontSize={"4vmin"} backgroundColor={"#C0D8E0"} items={lowerMenuBarItems} upperOrLowerMenuBar={'lower'}/> 
        {/* have a show toggle for this ^ for when convert is selected */}

    </main>;
  }

  const colorWheelHexadecimals = [
    '#FF0000', '#FFA500', '#FFFF00', '#008000', '#0000FF', '#4B0082',
    '#9400D3', '#800080', '#FF1493', '#FF69B4', '#FFC0CB', '#FFD700',
    '#FFFFE0', '#00FF00', '#00FFFF', '#000000', '#808080', '#C0C0C0',
    '#FFFFFF'
  ];
  
  export default App;