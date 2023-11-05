import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoReact, BiLogoJavascript } from "react-icons/bi";


const About = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 750
        });
    },[]);
    
    return (
           <div id="About" className="p-20 h-full flex flex-col items-center justify-center">
            <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-cyan-300">About Me</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
                <h2 data-aos="fade-up" className="text-7xl flex items-center justify-center font-semibold text-cyan-500 rounded-3xl h-36 w-44 border-2 border-cyan-500 b_glow"> <AiFillHtml5 /> </h2>
                <h2 data-aos="fade-down" className="text-7xl flex items-center justify-center font-semibold text-cyan-500 rounded-3xl h-36 w-44 border-2 border-cyan-500 b_glow"> <BiLogoCss3 /> </h2>
                <h2 data-aos="fade-up" className="text-7xl flex items-center justify-center font-semibold text-cyan-500 rounded-3xl h-36 w-44 border-2 border-cyan-500 b_glow"> <BiLogoJavascript /> </h2>
                <h2 data-aos="fade-down" className="text-7xl flex items-center justify-center font-semibold text-cyan-500 rounded-3xl h-36 w-44 border-2 border-cyan-500 b_glow"> <BiLogoReact /> </h2>
            </div>
           </div>
    );
};

export default About;