import { RiReactjsLine } from "react-icons/ri";
import { BsFiletypeSql } from "react-icons/bs";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { PROJECTS } from "../constants";

const Project = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">Project</h2>
            <div>
                {PROJECTS}.map((project,index) = (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div className="">
                        <img src={Project.image} alt={Project.title} />
                        </div>
                    </div>
                ))
            </div>
        </div>
        
    );
};
export default Project;
