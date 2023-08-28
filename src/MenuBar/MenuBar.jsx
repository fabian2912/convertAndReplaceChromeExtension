import React from 'react';
import styles from './MenuBar.module.css';
import {features} from '../config';


const MenuBar = ({fontSize, backgroundColor, items, upperOrLowerMenuBar}) => {

  if (!items || items.length === 0) {
    console.error("no items");
  }

  const menuBarClass = upperOrLowerMenuBar === 'lower' ? styles.lower : styles.upper;

  // if upperMenuBar && Convert, show C

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