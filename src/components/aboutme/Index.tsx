import AboutMeDescription from "./Description";
import {motion} from "framer-motion"
import { useRef } from "react";
import useScrollingEffect from "../../hooks/useScrollingEffect";
import MySkills from "./MySkills";
import { skillSet } from "./Information";
import { icons } from "../../misc/icons";
import { Icons } from "../../misc/enums/Icons";

export default function Index() {
    const container = useRef(null);
    const spring = useScrollingEffect(container);

    return (
      <>
       <div className={`grid min-h-screen lg:grid-cols-[1fr_3fr] md:grid-cols-1 items-center gap-x-10 px-5 relative text-center`} ref={container}>
          <motion.div style={{y : spring}} className="flex flex-col gap-5 self-center justify-center md:justify-center items-center xl:self-center lg:self-center md:self-center sm:self-center self-center lg:text-left items-center lg:items-start">
                <AboutMeDescription 
                    projName="About Me"
                    projDescription="Ut hendrerit feugiat facilisis. Ut faucibus feugiat arcu in volutpat. Mauris quis erat lectus. Mauris porttitor risus a velit ultricies vestibulum. Nullam ut orci vehicula, euismod augue quis, sodales ligula.">
                
                  <button>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.github.com/hzk2021" className="flex underline underline-offset-4 items-center font-bold gap-2">
                      <div className="w-[30px]">
                        {icons[Icons.GitHub]}
                      </div> hzk2021
                    </a>
                  </button>

                </AboutMeDescription>
          </motion.div>

          <motion.div style={{y: spring}} className="flex justify-end items-end gap-1 justify-center lg:justify-end">
            
            <MySkills skills={skillSet}/>

          </motion.div>

        </div>
      </>
      
    );
  }
  