
import { PROJECTS } from "../constants";

const Project = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl">Projects</h2>
            <div>
                {PROJECTS.map(project,inedex) = (
                    <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
                        <div></div>
                    </div>
                )
                
                }
            </div>
        </div>
        
    );
};
export default Project;
