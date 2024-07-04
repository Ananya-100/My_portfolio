import { HERO_CONTENT } from "../constants";
import Profile_Pic from "../assets/Mypic.jpeg";
const Hero = () => {
    return(
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <h1 className="pb-12 text-4xl font-thin tracking-tight lg:mt-10
                        lg:text-7xl">Ananya Sadhukhan</h1>
                        <span className="bg-gradient-to-r from-pink-300 via-slate-500 
                        to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                            Software Developer
                        </span>
                        <p className="my-2 max-w-xl py-6 font-light tracking-tight">{HERO_CONTENT}</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/6 lg:p-10">
                    <div className="flex justify-center">
                        <img src={Profile_Pic} alt="Ananya" />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Hero;