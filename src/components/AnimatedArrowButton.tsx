import { animate, motion, useScroll } from "framer-motion";
import { type } from "os";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon, FontAwesomeIconProps} from '@fortawesome/react-fontawesome'
import { faAnglesUp, faAnglesDown, faAnglesLeft, faAnglesRight, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import Direction from "../misc/enums/Direction";
  

interface Definition {
    direction: Direction,
    onClickEvent?: Function,
    className?: string,
    animate : true | false
}

const AnimatedArrowButton = (props : Definition) => {

    let arrowIcon : IconDefinition;
    const size : SizeProp = "2x";

    switch (props.direction) {
        case Direction.Up:
            arrowIcon = faAnglesUp;
            break;
        case Direction.Down:
            arrowIcon = faAnglesDown;
            break;
        case Direction.Left:
            arrowIcon = faAnglesLeft;
            break;
        case Direction.Right:
            arrowIcon = faAnglesRight;
            break;
        default:
            arrowIcon = faAnglesDown;
            break;
    }

    return (
        <div className={`$hover:cursor-pointer ${props.className}`}>
            {
                props.animate ? 
                <motion.div animate={{y: "50%"}} transition={{ease: "easeOut", duration: 0.5, repeat: Infinity, repeatType: "mirror"}}>
                    <a href="#projects">
                        <FontAwesomeIcon icon={arrowIcon} size={size} style={{color: "white"}} className="border border-transparent rounded-full hover:bg-blue-300 p-4 duration-200"/>

                    </a>
                </motion.div>
                :
                
                <button onClick={props.onClickEvent?.bind(this)}>
                    <FontAwesomeIcon icon={arrowIcon} size={size} style={{color: "white"}}/>
                    
                </button>
            }
        </div>
    );
};


export default AnimatedArrowButton;