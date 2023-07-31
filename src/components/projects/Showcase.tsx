import { ProjectShowcase } from "../../misc/types/ProjectShowcase";
import { AnimatePresence, motion } from "framer-motion";

export default function Showcase(props: ProjectShowcase) {
    return (
      <>

      {
        props.projImagePhone === "" ? null
        :
        <AnimatePresence>

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
                        lg:h-[200px]
                        aspect-ratio[360/740]">
                            <motion.img 
                            initial={{opacity: 0}} 
                            animate={{opacity: 1}} 
                            alt="phone-screen-img" 
                            src={props.projImagePhone} 
                            key={props.projImagePhone} 
                            className="object-fill w-full h-full duration-100"/>
                        </div>
        </AnimatePresence>

      }

      {props.projImagePC === "" ? null
      :
      <AnimatePresence>
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
                            <motion.img 
                            initial={{opacity: 0}} 
                            animate={{opacity: 1}} 
                            key={props.projImagePC} 
                            src={props.projImagePC} 
                             alt="pc-screen-img" 
                            className="object-fill w-full h-full duration-100"/>
                            
                        </div>
      </AnimatePresence>

      }

      </>
      
    );
  }
  