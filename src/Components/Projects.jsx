import wachxan from "../assets/wachxanfolio.png";

const Projects = () => {
    return (
        <div id="Projects" className="p-20 flex flex-col items-center justify-center dark:bg-swhite">
            <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-cyan-300 dark:text-yellow-300 underline decoration-wavy decoration-white dark:decoration-black decoration-4 underline-offset-4">Projects</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
                <a href="https://wachxanfolio.netlify.app" target="_blank" data-aos="fade-up" className="text-[26px] flex flex-col items-center justify-center font-black text-black rounded-3xl p-4 border-2 border-cyan-500 dark:border-yellow-500 shadow-bglow dark:shadow-wglow relative"><img className="rounded-md mb-2" src={wachxan} alt="" />
                    <p className="absolute opacity-0 hover:opacity-100 backdrop-blur p-8 underline decoration-dashed">wachxanfolio</p>
                </a>
                <a href="" data-aos="fade-down" className="text-[26px] flex flex-col items-center justify-center font-semibold text-black rounded-3xl p-4 border-2 border-cyan-500 dark:border-yellow-500 shadow-bglow dark:shadow-wglow"><img className="rounded-md mb-2" src={wachxan} alt="" />
                    <p className="absolute opacity-0 hover:opacity-100 backdrop-blur p-8 underline decoration-dashed">wachxanfolio</p>
                </a>
                <a href="" data-aos="fade-up" className="text-[26px] flex flex-col items-center justify-center font-semibold text-black rounded-3xl p-4 border-2 border-cyan-500 dark:border-yellow-500 shadow-bglow dark:shadow-wglow"><img className="rounded-md mb-2" src={wachxan} alt="" /> </a>
                <a href="" data-aos="fade-down" className="text-[26px] flex flex-col items-center justify-center font-semibold text-black rounded-3xl p-4 border-2 border-cyan-500 dark:border-yellow-500 shadow-bglow dark:shadow-wglow"><img className="rounded-md mb-2" src={wachxan} alt="" /> </a>
            </div>
        </div>
    );
};

export default Projects;