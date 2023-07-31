import { motion, useScroll, useSpring } from "framer-motion";
// import ParticlesBackground from "../components/ParticlesBackground";
import CustomTextTitle from "../components/CustomTextTitle";
import AnimatedArrowButton from "../components/AnimatedArrowButton";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Direction from "../misc/enums/Direction";
import Projects from "../components/projects/Index";
import AboutMe from "../components/aboutme/Index";
import { useRef } from "react";
import useScrollingEffect from "../hooks/useScrollingEffect";

export default function Home() {
  const container = useRef(null);
  const spring = useScrollingEffect(container);

  const {scrollYProgress} = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <>
        {/* <ParticlesBackground /> */}

        <motion.div style={{ scaleX }} className="progress-bar"/>

        <div ref={container} className="flex min-h-screen h-full w-100 items-center justify-center relative">
          <motion.div style={{y: spring}}>
            <CustomTextTitle canvasID="canvas"/>

            <AnimatedArrowButton animate={true} direction={Direction.Down} className="absolute bottom-5 left-1/2 translate-x-[-50%]"/>
          </motion.div>
        </div>

        <main className="container mx-auto">
          <Projects />
          <AboutMe />
        </main>
    </>
    
  );
}
