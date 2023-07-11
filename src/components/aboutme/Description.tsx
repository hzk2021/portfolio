import ProjectDescription from "../projects/Description"
import { ProjectDescription as ProjectDescriptionType } from "../../misc/types/ProjectDescription";

function Description(props : ProjectDescriptionType){
    return (
        <ProjectDescription 
            projName={props.projName}
            projDescription={props.projDescription}>

            {props.children}
        </ProjectDescription>
    )
}

export default Description;