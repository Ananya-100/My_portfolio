
import { educationData } from "../constants";
const Education = () => {
    return (

        <div className="border-b border-neutral-900 pb-8 ">
            <h2 className="my-20 text-center text-4xl">Education</h2>
            <div className="flex justify-center">
            <div className="relative border-l border-cyan-900  ">
                {educationData.map((item, index) => (
                    <div key={index} className="mb-10 ml-4 ">
                        <div className="absolute -left-2 mt-1.5 w-3 h-3 bg-neutral-900 rounded-full"></div>
                        <div className="pl-8">
                            <p className="text-base text-gray-500">{item.year}</p>
                            <h3 className="text-xl font-semibold text-neutral-900">{item.title}</h3>
                            <h4 className="text-lg font-medium text-neutral-700">{item.institution}</h4>
                            <p className="mt-2 text-gray-600">{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
};
export default Education;
