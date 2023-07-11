import { ProjectDescription } from "../../misc/types/ProjectDescription";

export default function Description(props : ProjectDescription) {
    return (
      <>
            <h1 className="project-name text-xl 2xl:text-6xl xl:text-5xl md:text-4xl sm:text-xl font-bold">{props.projName}</h1>
            <div className="programming-languages flex gap-x-3">
                {
                    props.langIcons?.map(icon => {
                        return <div className="w-6"> {icon} </div>
                    })
                }
            </div>
            <p className="project-description 2xl:text-xl xl:text-lg md:text-base">
                {props.projDescription}
            </p>
            <div className="links flex gap-10 mt-0 xl:mt-10 lg:mt-8">
                {props.demoLink ? <button className="rounded border p-2"><a href={props.demoLink}>Live Demo</a></button> : null }
                {props.sourceLink ? <button className="underline underline-offset-4"><a href={props.sourceLink}>Source</a></button> : null}
                {props.children}
            </div>
      </>
      
    );
  }
  