import MenuBar from '../MenuBar/MenuBar';
import {features} from '../config';
import React from 'react';
import FancyHeader from '../FancyHeader/FancyHeader';


function App() { 
    const upperMenuBarItems= ['Convert', 'Replace'];
    const lowerMenuBarItems = ['Weight', 'Size', 'Temperature'];

    return <main> 
       <div> 
        <FancyHeader />
      </div>
        <MenuBar fontSize={"6vmin"} backgroundColor={"#E4EFF3"} items={upperMenuBarItems} upperOrLowerMenuBar={'upper'}/>

        <div></div>
        <MenuBar fontSize={"4vmin"} backgroundColor={"#C0D8E0"} items={lowerMenuBarItems} upperOrLowerMenuBar={'lower'}/> 
        {/* have a show toggle for this ^ for when convert is selected */}

    </main>;
  }
  
  export default App;