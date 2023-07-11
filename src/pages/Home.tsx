import { motion, useScroll } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";
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
  return (
    <>
        <ParticlesBackground />

        <div ref={container} className="flex min-h-screen items-center justify-center">
          <motion.div style={{y: spring}}>
            <CustomTextTitle canvasID="canvas"/>

            <AnimatedArrowButton direction={Direction.Down}/>
          </motion.div>
        </div>

        <main className="container mx-auto">
          <Projects />
          <AboutMe />
        </main>
    </>
    
  );
}
