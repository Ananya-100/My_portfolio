import { animate, delay, motion } from "framer-motion";
import { educationData } from "../constants";
const Education = () => {
    return (

        <div className="border-b border-neutral-700 pb-8 ">
            <motion.h2 
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 1.5 }}
            className="my-20 text-center text-4xl">Academics</motion.h2>
            <div className="flex justify-center">
            <div className="relative border-l border-fuchsia-200  ">
                {educationData.map((item, index) => (
                    <div key={index} className="mb-10 ml-4 ">
                        <div className="absolute -left-2 mt-1.5 w-3 h-3 bg-fuchsia-200 rounded-full"></div>
                        <motion.div
                            whileInView={{ opacity: 1, x: 0 }}
                            initial={{ opacity: 0, x: 100 }}
                            transition={{ duration: 1 }}
                        className="pl-8">
                            <p className="text-base text-fuchsia-300">{item.year}</p>
                            <h3 className="text-lg font-semibold text-grey-700">{item.title}</h3>
                            <h4 className="text-md font-medium text-purple-200">{item.institution}</h4>
                            <p className="mt-2 text-purple-100">{item.description}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};
export default Education;
