import { useRef, useEffect } from "react";
import './CanvasTwo.css'

const CanvasTwo = props => {
    const ref=useRef();


    useEffect(() => {
        const canvas = ref.current;
    const context = canvas.getContext('2d');
    // context.beginPath();
    // context.strokeStyle = 'red';
    // context.moveTo(0, 0);
    // context.lineTo(0, 500);
    // context.lineTo(500, 500);
    // context.lineTo(500, 0);
    // context.closePath();
    // context.stroke();

    //Circle time
    context.fillStyle = 'purple';
    context.beginPath()
    context.strokeStyle = 'purple';
    context.moveTo(100, 50)
    context.arc( 100, 50, 25, Math.PI, 4 * Math.PI);
    context.moveTo(200, 50);
    context.arc( 200, 50, 25, Math.PI, 4 * Math.PI);
    context.moveTo(150, 100);
    context.arc(150, 100, 50, 0, Math.PI, false)
    context.stroke()
    context.fill()


    //Quadratic curve attempt:

    context.beginPath();
    context.moveTo(100, 200)
    context.quadraticCurveTo(150, 350, 400, 100);
    context.stroke();

    //Box with out Rect method:

    context.beginPath();
    context.strokeStyle = 'teal';
    context.moveTo(250, 300)
    context.lineTo(300, 300)
    context.lineTo(300, 400)
    context.lineTo(250, 400)
    context.lineTo(250, 300)
    context.lineTo(275, 250)
    context.lineTo(300, 300)
    context.moveTo(275, 250)
    context.lineTo(320, 230)
    context.lineTo(350, 275)
    context.lineTo(300, 300)
    context.moveTo(350, 275)
    context.lineTo(350, 350)
    context.lineTo(300, 400)

    context.stroke();
    
    }, [])
    


    return <canvas style={{ border: '5px solid black' }} ref={ref} {...props} />
}


export default CanvasTwo;