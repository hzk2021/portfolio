import { ProjectDescription } from "../../misc/types/ProjectDescription";
import Description from "./Description";
import Showcase from "./Showcase";

interface Props extends ProjectDescription {
    className ?: string
}


export default function Project(props : Props) {
    return (
      <>
        <div className={`${props.className}`}>
          <div className="flex flex-col gap-3 justify-center">
            <Description 
                  projName={props.projName}
                  langIcons={props.langIcons}
                  projDescription={props.projDescription}
                  demoLink={props.demoLink}
                  sourceLink={props.sourceLink}/>
          </div>

          <div className="flex justify-end items-end gap-3">
            <Showcase />
          </div>
        </div>
      </>
      
    );
  }
  