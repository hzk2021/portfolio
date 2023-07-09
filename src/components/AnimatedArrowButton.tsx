import { motion, useScroll } from "framer-motion";
import { type } from "os";
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { faArrowUp, faArrowDown, faArrowLeft, faArrowRight, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import Direction from "../misc/enums/Direction";
  

interface Definition {
    direction: Direction
}

const AnimatedArrowButton = (props : Definition) => {

    let arrowIcon : IconDefinition;

    switch (props.direction) {
        case Direction.Up:
            arrowIcon = faArrowUp;
            break;
        case Direction.Down:
            arrowIcon = faArrowDown;
            break;
        case Direction.Left:
            arrowIcon = faArrowLeft;
            break;
        case Direction.Right:
            arrowIcon = faArrowRight;
            break;
        default:
            arrowIcon = faArrowDown;
            break;
    }

    return (
        <div className="custom-arrow-button absolute bottom-5 left-1/2">
            <motion.div animate={{y: "50%"}} transition={{ease: "easeOut", duration: 0.5, repeat: Infinity, repeatType: "mirror"}}>
                <FontAwesomeIcon icon={arrowIcon}/>
                
            </motion.div>
        </div>
    );
};


export default AnimatedArrowButton;