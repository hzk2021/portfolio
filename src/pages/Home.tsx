import { motion, useScroll } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";
import CustomTextParticles from "../components/CustomTextParticles";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <>
        {/* <motion.div style={{scaleX: scrollYProgress}}/> */}
        <CustomTextParticles text="Zhenkai"/>
        
        
    </>
    
  );
}
