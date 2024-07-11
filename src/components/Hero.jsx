import { HERO_CONTENT } from "../constants";
import Profile_Pic from "../assets/Mypic.png";
import resume from "../constants/Ananya's-Resume.pdf";

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-6 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-16  text-4xl font-thin tracking-tight lg:mt-15
                        lg:text-7xl">Ananya Sadhukhan</h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 
                        to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            Software Developer
                        </span>
                        <p className="my-2 max-w-xl py-6  font-light tracking-tight">{HERO_CONTENT}</p>
                        
                        <button className="sm:mb-20 text-white bg-gradient-to-r from-purple-500 to-pink-500 
                hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 
                dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center
                 mb-8 ">
                            <a href={resume} download='resume'>Download</a>
                        </button>
                        
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-4">
                    <div className="flex justify-center lg:justify-end">
                        <img className="w-1/2 rounded-full sm:w-1/2 sm:mr-10  lg:mr-30" src={Profile_Pic} alt="kevin" />
                    </div>
                </div>
            
            </div>
        </div>
    );
};
export default Hero;
