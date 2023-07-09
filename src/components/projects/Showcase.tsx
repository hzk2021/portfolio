import { ProjectShowcase } from "../../misc/types/ProjectShowcase";

export default function Showcase(props: ProjectShowcase) {
    return (
      <>
        <div className="phone-screen 
                        border 
                        before:flex
                        before:mx-auto
                        before:content-[''] 
                        before:h-3
                        before:w-10
                        before:bg-black
                        before:rounded-bl-md
                        before:rounded-br-md
                        rounded-sm 
                        border-black 
                        w-[15%] 
                        h-44">
                          <img src={props.projImagePhone}></img>
                        </div>

        <div className="pc-screen  
                        before:flex
                        before:content-[''] 
                        before:h-3
                        before:w-full 
                        before:bg-black
                        border 
                        border-8
                        rounded-md 
                        border-black 
                        w-7/12 
                        h-72"></div>
      </>
      
    );
  }
  