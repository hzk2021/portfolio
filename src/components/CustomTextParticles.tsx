import { TextParticles } from "react-text-particles";

interface CustomProps {
    text: string
}

const CustomTextParticles = (props : CustomProps) => {

    return (
        <TextParticles text={props.text} topSpeed={500} textSize={160} canvas={{width: window.screen.width, height: window.screen.height, bg: "#161c1e"}}/>


    );
};


export default CustomTextParticles;