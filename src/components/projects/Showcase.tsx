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
                        xl:w-[15%] 
                        max-w-[100px]
                        xl:h-44
                        overflow-hidden
                        lg:w-[16%]
                        max-h-32
                        min-h-[150px]
                        xs:w-[5%]
                        xs:h-10">
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
                        w-3/4
                        max-h-[200px]
                        
                        overflow-hidden">
                          <img src={props.projImagePC} alt="pc-screen-img" className="object-fill w-full h-full"/>
                        </div>

      </>
      
    );
  }
  