import { RiReactjsLine } from "react-icons/ri";
import { BsFiletypeSql } from "react-icons/bs";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";

const Technology = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-cyan-400"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <BsFiletypeSql className="text-7xl text-orange-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className="text-7xl text-red-800" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaPython className="text-7xl text-sky-400" />
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSpringboot className="text-7xl text-green-600" />
                </div>

            </div>
        </div>
    );
};
export default Technology;
