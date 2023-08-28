import React, {useState} from 'react';
import styles from './MenuBar.module.css';
import {featuresUpper, featuresLower, flickFeatureToggle} from '../config';


const MenuBar = ({fontSize, backgroundColor, items, upperOrLowerMenuBar}) => {

  if (!items || items.length === 0) {
    console.error("no items");
  }

  const [clickedItem, setClickedItem] = useState(null);
  const handleItemClick = (itemClicked) => {
    setClickedItem(itemClicked);
    switch (itemClicked) {
      case 'Convert':
        setClickedItem(itemClicked);
        flickFeatureToggle(featuresUpper.convertMenu);
        break;
      case 'Replace':
        setClickedItem(itemClicked);
        flickFeatureToggle(featuresUpper.replaceMenu);
        break;
      case 'Weight':
        setClickedItem(itemClicked);
        flickFeatureToggle(featuresLower.weightTab);
        break;
      case 'Size':
        setClickedItem(itemClicked);
        flickFeatureToggle(featuresLower.sizeTab);
        break;
        case 'Temperature':
        setClickedItem(itemClicked);
        flickFeatureToggle(featuresLower.temperatureTab);
        break;
      default:
        setClickedItem(null);
    }
  };

  const menuBarClass = upperOrLowerMenuBar === 'lower' ? styles.lower : styles.upper;

  // To-do:
  // implement onClick logic with styling of 'convert', 'replace', 'weight' etc.
  // maybe have different className depending on onClick, which links to CSS

  return (
    <div className={`${styles['menu-bar']} ${menuBarClass}`} style={{ backgroundColor: backgroundColor }}>
        <ul>
          {items.map((item, index) => (
            <li 
              key={index} 
              style={{'font-size': `${fontSize}`}}
              className={`${clickedItem === item ? styles.clicked : ''}`}
              onClick={() => handleItemClick(item)}
              // onClick={() => handleItemClickForLowerMenuBar(item)} 
              >
                {item}
            </li>
          ))}
        </ul>
    </div>
  );
}

export default MenuBar;