import { useState, useEffect } from "react";
import CanvasTwo from "./CanvasTwo/CanvasTwo";
import CanvasThree from "./CanvasThree/CanvasThree";

function Body(){



    return(
        <>
        <CanvasTwo width="500" height="500" />
        <CanvasThree width= "400" height="400" />
        
        
        
        </>
    )
}

export default Body;