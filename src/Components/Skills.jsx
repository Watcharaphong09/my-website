import 'aos/dist/aos.css';
import Html from "../assets/Icons/html.png";
import Css from "../assets/Icons/css.png";
import JavaScript from "../assets/Icons/javascript.png";
import React from "../assets/Icons/react.png";
import Tailwindcss from "../assets/Icons/tailwindcss.png";
import Sass from "../assets/Icons/sass.png";
import Github from "../assets/Icons/github.png";

const About = () => {

    return (
        <>
            <div id="Skills" className="pb-20 h-full flex flex-col items-center justify-center dark:bg-swhite">
                <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-cyan-300 dark:text-yellow-300 underline decoration-wavy decoration-white dark:decoration-black decoration-4 underline-offset-4">Skills</h1>
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-around gap-10 md:gap-20">
                    <h2 data-aos="fade-up" className="text-7xl flex items-center justify-center font-semibold text-cyan-500 dark:text-yellow-300 rounded-3xl md:h-36 md:w-44 h-32 w-32 border-2 border-cyan-500 dark:border-yellow-500 shadow-bglow dark:shadow-wglow"><img src={Html} /></h2>
                    <h2 data-aos="fade-down" className="text-7xl flex items-center justify-center font-semibold text-cyan-500 dark:text-yellow-300 rounded-3xl md:h-36 md:w-44 h-32 w-32 border-2 border-cyan-500 dark:border-yellow-500 shadow-bglow dark:shadow-wglow"><img src={Css} /></h2>
                    <h2 data-aos="fade-up" className="text-7xl flex items-center justify-center font-semibold text-cyan-500 dark:text-yellow-300 rounded-3xl md:h-36 md:w-44 h-32 w-32 border-2 border-cyan-500 dark:border-yellow-500 shadow-bglow dark:shadow-wglow"><img src={JavaScript} /></h2>
                    <h2 data-aos="fade-down" className="text-7xl flex items-center justify-center font-semibold text-cyan-500 dark:text-yellow-300 rounded-3xl md:h-36 md:w-44 h-32 w-32 border-2 border-cyan-500 dark:border-yellow-500 shadow-bglow dark:shadow-wglow"><img src={React} /></h2>
                    <h2 data-aos="fade-up" className="text-7xl flex items-center justify-center font-semibold text-cyan-500 dark:text-yellow-300 rounded-3xl md:h-36 md:w-44 h-32 w-32 border-2 border-cyan-500 dark:border-yellow-500 shadow-bglow dark:shadow-wglow"><img src={Tailwindcss} /></h2>
                    <h2 data-aos="fade-down" className="text-7xl flex items-center justify-center font-semibold text-cyan-500 dark:text-yellow-300 rounded-3xl md:h-36 md:w-44 h-32 w-32 border-2 border-cyan-500 dark:border-yellow-500 shadow-bglow dark:shadow-wglow"><img src={Sass} /></h2>
                    <h2 data-aos="fade-up" className="text-7xl flex items-center justify-center font-semibold text-cyan-500 dark:text-yellow-300 rounded-3xl md:h-36 md:w-44 h-32 w-32 border-2 border-cyan-500 dark:border-yellow-500 shadow-bglow dark:shadow-wglow"><img src={Github} /></h2>
                </div>
            </div>
            <hr className='h-[1.5px] dark:bg-black' />
        </>
    );
};

export default About;