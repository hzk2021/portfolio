import { motion, useScroll } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";
import CustomTextTitle from "../components/CustomTextTitle";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <>
        {/* <motion.div style={{scaleX: scrollYProgress}}/> */}
        <ParticlesBackground />
        <CustomTextTitle canvasID="canvas"/>
        
        
    </>
    
  );
}
