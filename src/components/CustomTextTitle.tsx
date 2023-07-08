import { useCanvasEffect } from "../hooks/useCanvasEffect";

interface CustomProps {
    canvasID: string
}


const CustomTextTitle = (props : CustomProps) => {

    const canvasID : string = props.canvasID;
    useCanvasEffect(canvasID);
    
    return (
        <div className="custom-text-title">
            <canvas id={canvasID}></canvas>
        </div>
    );
};


export default CustomTextTitle;