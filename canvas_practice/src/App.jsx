import { useRef, useState } from "react";
import Canvas from "./Header/Canvas";
import CanvasTwo from "./CanvasTwo/CanvasTwo";
import Header from "./Header";
import Body from "./Body";
import CanvasThree from "./CanvasThree/CanvasThree";


function App() {


  return (
    <>
      <div className="App">
        <header className="App-header">
        <Header />
          
        
        </header>
        {/* <Canvas width="800" height="500" /> */}
        {/* <Body /> */}
      <CanvasThree />
      
      
      </div>
    </>
  );
}

export default App;
