import { useRef, useEffect } from "react";

const Canvas = props => {
    const ref=useRef();


    useEffect(() => {
        const canvas = ref.current;
    const context = canvas.getContext('2d');
    context.fillStyle = 'blue'
    context.fillRect(50, 100, 500, 100)
    
    }, [])
    


    return <canvas ref={ref} {...props} />
}


export default Canvas;