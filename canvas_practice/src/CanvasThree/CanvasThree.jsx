import { useRef, useState } from "react";

const CanvasThree = (props) => {
    const [startX, setStartX] = useState(1);
    const [startY, setStartY] = useState(1);
    const ref = useRef();

    const DrawGraph = () => {
        const canvas = ref.current;
        const context = canvas.getContext("2d");

        // Clear the canvas before drawing
        context.clearRect(-canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);

        // Apply translation to center the coordinates
        context.translate(canvas.width / 2, canvas.height / 2);
        
        // Call the draw line function
        DrawLine(startX, startY);
    };

    const DrawLine = (lineX, lineY) => {
        const canvas = ref.current;
        const context = canvas.getContext("2d");

        if (context) {
            context.beginPath();
            context.moveTo(0, 0); // Start at the center
            context.lineTo(lineX, lineY); // End at the specified coordinates
            context.stroke();
        }
    };

    return (
        <>
            <canvas
                style={{ border: "5px solid blue" }}
                ref={ref}
                {...props}
                width={500}
                height={500}
            />
            <input
                placeholder="Set value for x"
                type="number"
                onChange={(e) => setStartX(Number(e.target.value))}
            />
            <input
                placeholder="Set value for y"
                type="number"
                onChange={(e) => setStartY(Number(e.target.value))}
            />
            <button onClick={DrawGraph}>Draw a Line</button>
            <p>x={startX}, y={startY}</p>
        </>
    );
};

export default CanvasThree;