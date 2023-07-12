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
            <p className="leading-0 project-description 2xl:text-xl xl:text-lg md:text-base">
                {props.projDescription}
            </p>
            <div className="links flex gap-10 lg:mt-5">
                {props.demoLink ? <button className="rounded border px-5 py-2 mx-auto font-bold border border-transparent bg-[#6198ff] hover:bg-blue-300 duration-500 rounded"><a href={props.demoLink}>Live Demo</a></button> : null }
                {props.sourceLink ? <button className="underline underline-offset-4 font-bold"><a target="_blank" rel="noopener noreferrer" href={props.sourceLink}>Source</a></button> : null}
                {props.children}
            </div>
      </>
      
    );
  }
  