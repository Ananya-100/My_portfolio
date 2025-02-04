import logo from "../assets/AnanyaLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Navbar = () =>{
    return (
        <nav className="mb-15 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-12" src={logo} alt="logo" />
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl">
                <a href="https://www.linkedin.com/in/ananya-sadhukhan-b65563255/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin /> 
                </a>
                <a href="https://github.com/Ananya-100" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/c.a.s.s.i.o.p.e.i.a_18/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                
                
                

            </div>
        </nav>

    );
};
export default Navbar;