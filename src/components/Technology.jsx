import { RiReactjsLine } from "react-icons/ri";
import { BsFiletypeSql } from "react-icons/bs";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { SiPandas } from "react-icons/si"
import { animate, delay, motion } from "framer-motion";

const iconVariants = (duration) =>({
    initial: {y: -10},
    animate: {
        y:[10, -10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat: Infinity,
            repeatType:"reverse"
        },
    },
});

const Technology = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                    variants={iconVariants(2)}
                    initial="initial"
                    animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-6xl text-cyan-400"/>
                </motion.div>
                <motion.div 
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BsFiletypeSql className="text-6xl text-orange-400" />
                </motion.div>
                <motion.div 
                    variants={iconVariants(4)}
                    initial="initial"
                    animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className="text-6xl text-red-800" />
                </motion.div>
                <motion.div
                    variants={iconVariants(2.5)}
                    initial="initial"
                    animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-6xl text-sky-400" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3)}
                    initial="initial"
                    animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSpringboot className="text-6xl text-green-600" />
                </motion.div>
                <motion.div
                    variants={iconVariants(3.5)}
                    initial="initial"
                    animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPandas className="text-6xl text-blue-600" />
                </motion.div>

            </div>
        </div>
    );
};
export default Technology;
