import React from 'react';
import styles from './MenuBar.module.css';
// import { Link } from 'react-router-dom'; // If using React Router for navigation

// Props that we want:
/* 
height
items

*/

// function Item(item, fontSize) {
//   return <li style={{'font-size': `${fontSize}`}}>{item}</li>
// }

const MenuBar = ({fontSize, backgroundColor, items}) => {
  // const listItems = items.map((item) => <li style={{'font-size': `${fontSize}`}}>{item.name}</li>);
  // const itemsList=[items];
  if (!items || items.length === 0) {
    console.info("no items");
  }
  return (
    <div className={styles['menu-bar']} style={{'background-color':`${backgroundColor}`}}>
        <ul>
          {items.map((item, index) => (
            <li key={index} style={{'font-size': `${fontSize}`}}>{item}</li>
          ))}
          {/* {listItems} */}
          {/* {itemsList?.map((i) => <Item item={i} fontSize={fontSize} />)} */}
        </ul>
    </div>
  );
}

export default MenuBar;

 {/* <li style={{'font-size': `${fontSize}`}}>Convert</li>
          <li style={{'font-size': `${fontSize}`}}>Replace</li>
          <li style={{'font-size': `${fontSize}`}}>Donate</li> */}