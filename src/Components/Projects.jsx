import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import wachxanfolio from "../assets/wachxanfolio.png";
import wachxantodo from "../assets/wachxantodo.png";


const Projects = () => {

    return (
        <div id="Projects" className="p-20 flex flex-col items-center justify-center dark:bg-swhite">
            <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-cyan-300 dark:text-yellow-300 underline decoration-wavy decoration-white dark:decoration-black decoration-4 underline-offset-4">Projects</h1>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-around gap-20">
                <a href="https://wachxanfolio.netlify.app" 
                target="_blank" data-aos="fade-up"
                className="group/folio text-[26px] flex flex-col items-center justify-center font-black text-black rounded-3xl p-4 border-2 border-cyan-500 dark:border-yellow-500 shadow-bglow dark:shadow-wglow"><img className="rounded-md mb-2" src={wachxanfolio} />
                    <p className="absolute invisible group-hover/folio:visible underline underline-offset-4 decoration-dashed bg-cyan-500 rounded-3xl p-4 text-white border-solid border-2 border-black">wachxanfolio</p>
                </a>
                <a href="https://wachxantodo.vercel.app" 
                target="_blank" data-aos="fade-up"
                className="group/todo text-[26px] flex flex-col items-center justify-center font-black text-black rounded-3xl p-4 border-2 border-cyan-500 dark:border-yellow-500 shadow-bglow dark:shadow-wglow"><img className="rounded-md mb-2" src={wachxantodo} />
                    <p className="absolute invisible group-hover/todo:visible underline underline-offset-4 decoration-dashed bg-cyan-500 rounded-3xl p-4 text-white border-solid border-2 border-black">wachxantodo</p>
                </a>
            </div>
        </div>
    );
};

export default Projects;