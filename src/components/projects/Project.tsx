import { ProjectDescription } from "../../misc/types/ProjectDescription";
import { ProjectShowcase } from "../../misc/types/ProjectShowcase";
import Description from "./Description";
import Showcase from "./Showcase";
import { IndexContext } from "../../contexts/IndexContext";
import { useContext, useRef } from "react";
import AnimatedArrowButton from "../AnimatedArrowButton";
import Direction from "../../misc/enums/Direction";

interface Props extends ProjectDescription, ProjectShowcase{
    className ?: string
}


export default function Project(props : Props) {
  
    const c = useContext(IndexContext);

    function minusIndex() {
      const newIndex = (c.index -1 < 0) ? c.index = c.projectCount - 1: c.index - 1;
      c.setIndex(newIndex);
    }

    function increaseIndex() {
      const newIndex = (c.index + 1 >= c.projectCount) ? c.index = 0 : c.index + 1;
      c.setIndex(newIndex);
    }

    return (
      <>
        <div className={`${props.className} relative text-center gap-y-0 lg:gap-y-10`} id="projects">
          <div className="flex flex-col gap-5 justify-center lg:order-first md:justify-center xl:self-end lg:self-end sm:self-center text-center lg:text-left items-center lg:items-start">
            <Description 
                      projName={props.projName}
                      langIcons={props.langIcons}
                      projDescription={props.projDescription}
                      demoLink={props.demoLink}
                      sourceLink={props.sourceLink}/>
          </div>

          <div className="flex justify-end items-end gap-1 order-first sm:order-first xs:order-first justify-center lg:justify-end self-end">
            <Showcase 
                  projImagePhone={props.projImagePhone}
                  projImagePC={props.projImagePC}/>
          </div>

          <div className="flex w-full justify-around self-start lg:col-span-2 col-span-1 lg:pt-8">
            <AnimatedArrowButton animate={false} direction={Direction.Left} className="rounded-full bg-white/30 p-2 transition duration-300 hover:bg-white/50" onClickEvent={minusIndex}/>
            <AnimatedArrowButton animate={false} direction={Direction.Right} className="rounded-full bg-white/30 p-2 transition duration-300 hover:bg-white/50" onClickEvent={increaseIndex}/>
          </div>

          {/* <AnimatedArrowButton animate={false} direction={Direction.Left} className="p-2 mx-auto border border-transparent bg-[#6198ff] hover:bg-blue-300 duration-500 w-min rounded-full self-start xl:static lg:static md:absolute sm:absolute absolute bottom-[15%] sm:bottom-[35%] md:bottom-[31%] left-[15%]" onClickEvent={minusIndex}/>
          <AnimatedArrowButton animate={false} direction={Direction.Right} className="p-2 mx-auto border border-transparent bg-[#6198ff] hover:bg-blue-300 duration-500 w-min rounded-full self-start xl:static lg:static md:absolute sm:absolute absolute bottom-[15%] sm:bottom-[35%] md:bottom-[31%] left-[75%]" onClickEvent={increaseIndex}/> */}

        </div>
      </>
      
    );
  }
  