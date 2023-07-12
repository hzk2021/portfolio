import { ProjectShowcase } from "../../misc/types/ProjectShowcase";

export default function Showcase(props: ProjectShowcase) {
    return (
      <>
        <div className="phone-screen 
                        relative
                        border 
                        border-2
                        rounded
                        before:flex
                        before:mx-auto
                        before:content-[''] 
                        before:h-2
                        before:absolute
                        flex
                        justify-center
                        before:w-10
                        before:bg-black
                        before:rounded-bl-md
                        before:rounded-br-md
                        rounded-sm 
                        border-black 
                        max-w-[100px]
                        lg:max-w-[100px]
                        w-1/6
                        h-auto
                        aspect-ratio[360/740]">
                          <img src={props.projImagePhone} alt="phone-screen-img" className="object-fill w-full h-full"/>
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
                        lg:w-full
                        w-3/4
                        h-auto
                        aspect-[16/9]
                        min-w-[200px]">
                          <img src={props.projImagePC} alt="pc-screen-img" className="object-fill w-full h-full"/>
                        </div>

      </>
      
    );
  }
  