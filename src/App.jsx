import classes from './App.module.css';
import MenuBar from './MenuBar';


function App() { 
    const upperMenuBarItems= ['Convert', 'Replace'];
    const lowerMenuBarItems = ['Weight', 'Size', 'Temperature'];

    return <main> 
        <div >
            <h1>On-Screen Converter</h1>
        </div>
        <MenuBar fontSize={"6vmin"} backgroundColor={"#E4EFF3"} items={upperMenuBarItems}/>

        <MenuBar fontSize={"4vmin"} backgroundColor={"#C0D8E0"} items={lowerMenuBarItems}/> 
        {/* have a show toggle for this ^ for when convert is selected */}

    </main>;
    
    
  }
  
  export default App;