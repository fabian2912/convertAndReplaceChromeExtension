import classes from './App.module.css';
import MenuBar from '../MenuBar/MenuBar';
import {features} from '../config';


function App() { 
    const upperMenuBarItems= ['Convert', 'Replace'];
    const lowerMenuBarItems = ['Weight', 'Size', 'Temperature'];


    // if convertMenu && weightTab, show weightPanel
    // if convertMenu && sizeTab, show sizePanel
    // if convertMenu && temperatureTab, show temperaturePanel
    // if replaceMenu, show replacePanel



    return <main> 
        <div >
            <h1>On-Screen Converter</h1>
        </div>
        <MenuBar fontSize={"6vmin"} backgroundColor={"#E4EFF3"} items={upperMenuBarItems} upperOrLowerMenuBar={'upper'}/>

        <div></div>
        <MenuBar fontSize={"4vmin"} backgroundColor={"#C0D8E0"} items={lowerMenuBarItems} upperOrLowerMenuBar={'lower'}/> 
        {/* have a show toggle for this ^ for when convert is selected */}

    </main>;
    
    
  }
  
  export default App;