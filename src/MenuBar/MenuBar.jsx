import React, {useState} from 'react';
import styles from './MenuBar.module.css';
import {featuresUpper, featuresLower, setFeatureToggle} from '../config';


const MenuBar = ({fontSize, backgroundColor, items, upperOrLowerMenuBar}) => {

  if (!items || items.length === 0) {
    console.error("no items");
  }

    // weightTab: true, // when on, displays the weightPanel and highlights the weight option
    // sizeTab: false, // when on, displays the sizePanel and highlights the size option
    // temperatureTab: false // when on, displays the temperaturePanel and highlights the temperature option

  const [clickedItem, setClickedItem] = useState(null);
  const handleItemClickForUpperMenuBar = (itemClicked) => {
    setClickedItem(itemClicked);
    switch (itemClicked) {
      case 'Convert':
        setClickedItem(itemClicked);
        featuresUpper.flickFeatureToggle(featuresUpper.convertMenu);
        break;
      case 'Replace':
        setClickedItem(itemClicked);
        featuresUpper.flickFeatureToggle(featuresUpper.convertMenu);
        break;
      default:
        setClickedItem(null);
    }
  };
  const handleItemClickForLowerMenuBar = (itemClicked) => {
    setClickedItem(itemClicked);
    switch (itemClicked) {
      case 'Weight':
        setClickedItem(itemClicked);
        featuresLower.flickFeatureToggle(featuresLower.convertMenu);
        break;
      case 'Size':
        setClickedItem(itemClicked);
        featuresLower.flickFeatureToggle(featuresLower.convertMenu);
        break;
        case 'Temperature':
        setClickedItem(itemClicked);
        featuresLower.flickFeatureToggle(featuresLower.convertMenu);
        break;
      default:
        setClickedItem(null);
    }
  };

  const menuBarClass = upperOrLowerMenuBar === 'lower' ? styles.lower : styles.upper;

  // implement onClick logic with styling of 'convert', 'replace', 'weight' etc.
  // maybe have different className depending on onClick, which links to CSS

  return (
    <div className={`${styles['menu-bar']} ${menuBarClass}`} style={{ backgroundColor: backgroundColor }}>
        <ul>
          {items.map((item, index) => (
            <li key={index} style={{'font-size': `${fontSize}`}}>{item}</li>
          ))}
        </ul>
    </div>
  );
}

export default MenuBar;