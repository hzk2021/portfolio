import { ProjectDescription } from "../../misc/types/ProjectDescription";
import { ProjectShowcase } from "../../misc/types/ProjectShowcase";
import Description from "./Description";
import Showcase from "./Showcase";
import { IndexContext } from "../../contexts/IndexContext";
import { useContext, useRef } from "react";

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
        <div className={`${props.className} relative text-center`}>
          <div className="flex flex-col gap-5 justify-center lg:order-first md:justify-center xl:self-auto lg:self-auto md:self-start sm:self-start self-start text-center lg:text-left items-center lg:items-start">
            <Description 
                      projName={props.projName}
                      langIcons={props.langIcons}
                      projDescription={props.projDescription}
                      demoLink={props.demoLink}
                      sourceLink={props.sourceLink}/>
          </div>

          <div className="flex justify-end items-end gap-1 order-first sm:order-first xs:order-first justify-center lg:justify-end">
            
            <Showcase 
                  projImagePhone={props.projImagePhone}
                  projImagePC={props.projImagePC}/>
          </div>

          <button className="p-2 mx-auto border w-min rounded-full self-start xl:static lg:static md:absolute sm:absolute absolute bottom-40 left-[15%]" onClick={minusIndex}>{"Previous"}</button>
          <button className="p-2 mx-auto border w-min rounded-full self-start xl:static lg:static md:absolute sm:absolute absolute bottom-40 left-[75%]" onClick={increaseIndex}>{"Next"}</button>

        </div>
      </>
      
    );
  }
  