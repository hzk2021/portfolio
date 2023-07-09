import { ProjectDescription } from "../../misc/types/ProjectDescription";

export default function Description(props : ProjectDescription) {
    return (
      <>
            <h1 className="project-name text-5xl font-bold">{props.projName}</h1>
            <div className="programming-languages w-8">
                {
                    props.langIcons.map(icon => {
                        return icon
                    })
                }
            </div>
            <p className="project-description">
                {props.projDescription}
            </p>
            <div className="links flex gap-5">
                <button className="rounded border p-2"><a href={props.sourceLink}>Live Demo</a></button>
                <button className="underline underline-offset-4"><a href={props.sourceLink}>Source</a></button>
            </div>
      </>
      
    );
  }
  