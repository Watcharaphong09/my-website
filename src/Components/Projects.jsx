import wachxan from "../assets/wachxanfolio.png";

const Projects = () => {
    return (
        <div id="Projects" className="p-20 flex flex-col items-center justify-center">
            <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-cyan-300">Projects</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
                <a href="https://wachxanfolio.netlify.app" target="_blank" data-aos="fade-up" className="text-[26px] flex flex-col items-center justify-center font-semibold text-cyan-500 rounded-3xl p-4 border-2 border-cyan-500 b_glow"><img className="rounded-md mb-2"  src={wachxan} alt="" />Wachxanfolio</a>
                <a href="" data-aos="fade-down" className="text-[26px] flex flex-col items-center justify-center font-semibold text-cyan-500 rounded-3xl p-4 border-2 border-cyan-500 b_glow"><img className="rounded-md mb-2"  src={wachxan} alt="" />Wachxanfolio</a>
                <a href="" data-aos="fade-up" className="text-[26px] flex flex-col items-center justify-center font-semibold text-cyan-500 rounded-3xl p-4 border-2 border-cyan-500 b_glow"><img className="rounded-md mb-2"  src={wachxan} alt="" />Wachxanfolio</a>
                <a href="" data-aos="fade-down" className="text-[26px] flex flex-col items-center justify-center font-semibold text-cyan-500 rounded-3xl p-4 border-2 border-cyan-500 b_glow"><img className="rounded-md mb-2"  src={wachxan} alt="" />Wachxanfolio</a>
            </div>
        </div>
    );
};

export default Projects;