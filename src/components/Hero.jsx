import { HERO_CONTENT } from "../constants";
import Profile_Pic from "../assets/Mypic.png";
import resume from "../constants/Ananya's-Resume.pdf";
import { delay, motion } from "framer-motion";

const container = (delay) => ({
    hidden : {x:-100, opacity :0},
    visible :{
        x:0,
        opacity:1,
        transition: {duration: 0.5, delay: delay},
    },
});
const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-6 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start lg:pl-12" >
                        <motion.h1 
                        variants={container(0)}
                        initial = "hidden"
                        animate = "visible"
                        className="pb-16  text-4xl font-thin tracking-tight lg:mt-15
                        lg:text-6xl lg:px-8 ">Ananya Sadhukhan</motion.h1>
                        <motion.span 
                            variants={container(0.5)}
                            initial="hidden"
                            animate="visible"
                        className="bg-gradient-to-r from-pink-300 via-slate-500 
                        to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent lg:px-8 ">
                            Software Developer
                        </motion.span>
                        <motion.p 
                            variants={container(1.0)}
                            initial="hidden"
                            animate="visible"
                        className="my-4 max-w-7xl py-6 lg:pl-8  font-light tracking-tight">{HERO_CONTENT}</motion.p>
                        
                        <div className="lg:px-8">
                        <motion.button 
                            variants={container(1.5)}
                            initial="hidden"
                            animate="visible"
                        className="sm:mb-20 text-white bg-gradient-to-r from-purple-500 to-pink-500 
                hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 
                dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                 mb-8  ">
                            <a href={resume} download='resume'>Resume</a>
                        </motion.button>
                        
                    </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-4">
                    <div className="flex justify-center">
                        <motion.img 
                        initial={{x:100, opacity:0}}
                        animate={{x:0, opacity:1}}
                        transition={{ duration:1, delay:1.2}}
                        className="w-1/2 rounded-full sm:w-1/2 sm:mr-10  lg:mr-30 " src={Profile_Pic} alt="kevin" />
                    </div>
                </div>
            
            </div>
        </div>
    );
};
export default Hero;
