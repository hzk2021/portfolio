import { motion, useScroll } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";
import CustomTextTitle from "../components/CustomTextTitle";
import AnimatedArrowButton from "../components/AnimatedArrowButton";
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Direction from "../misc/enums/Direction";
import Projects from "../components/projects/Index";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <>
        {/* <motion.div style={{scaleX: scrollYProgress}}/> */}
        {/* <ParticlesBackground />
        <CustomTextTitle canvasID="canvas"/>

        <AnimatedArrowButton direction={Direction.Down}/> */}

        <main className="container mx-auto">
          <Projects />

        </main>
    </>
    
  );
}
