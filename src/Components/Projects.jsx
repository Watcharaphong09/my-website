import 'aos/dist/aos.css';
import { RiShareBoxFill, RiGithubFill } from "react-icons/ri";
import wachxanfolio from "../assets/wachxanfolio.png";
import wachxantodo from "../assets/wachxantodo.png";
import schedule from "../assets/schedule.png";

const Projects = () => {

    return (
        <div id="Projects" className="p-20 flex flex-col items-center justify-center dark:bg-swhite">
            <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-cyan-300 dark:text-yellow-300 underline decoration-wavy decoration-white dark:decoration-black decoration-4 underline-offset-4">Projects</h1>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-around gap-20">
                <div data-aos="fade-up" className="text-[26px] flex flex-col items-center justify-center rounded-3xl p-4 border-2 border-cyan-500 dark:border-yellow-500 shadow-bglow dark:shadow-wglow">
                    <img className="rounded-md mb-2" src={wachxanfolio} />
                    <p className="underline underline-offset-4 text-white dark:text-black font-bold">wachxanfolio</p>
                    <div className='flex items-center justify-between gap-10 text-white mt-5 font-bold'>
                        <a href="https://github.com/Watcharaphong09/MyPortfolio" target="_blank" className='flex items-center bg-slate-500 p-1 rounded-md hover:bg-slate-600'>
                            Code <RiGithubFill />
                        </a>
                        <a href="https://wachxanfolio.netlify.app"
                            target="_blank"
                            className="flex items-center bg-slate-500 p-1 rounded-md hover:bg-slate-600">
                            Live Demo <RiShareBoxFill />
                        </a>
                    </div>
                </div>
                <div data-aos="fade-up" className="text-[26px] flex flex-col items-center justify-center rounded-3xl p-4 border-2 border-cyan-500 dark:border-yellow-500 shadow-bglow dark:shadow-wglow">
                    <img className="rounded-md mb-2" src={wachxantodo} />
                    <p className="underline underline-offset-4 text-white dark:text-black font-bold">Todo List</p>
                    <div className='flex items-center justify-between gap-10 text-white mt-5 font-bold'>
                        <a href="https://github.com/Watcharaphong09/DoSomeThing" target="_blank" className='flex items-center bg-slate-500 p-1 rounded-md hover:bg-slate-600'>
                            Code <RiGithubFill />
                        </a>
                        <a href="https://wachxantodo.vercel.app/"
                            target="_blank"
                            className="flex items-center bg-slate-500 p-1 rounded-md hover:bg-slate-600">
                            Live Demo <RiShareBoxFill />
                        </a>
                    </div>
                </div>
                <div data-aos="fade-up" className="text-[26px] flex flex-col items-center justify-center rounded-3xl p-4 border-2 border-cyan-500 dark:border-yellow-500 shadow-bglow dark:shadow-wglow">
                    <img className="rounded-md mb-2" src={schedule} />
                    <p className="underline underline-offset-4 text-white dark:text-black font-bold">Calendar</p>
                    <div className='flex items-center justify-between gap-10 text-white mt-5 font-bold'>
                        <a href="https://github.com/Watcharaphong09/schedule" target="_blank" className='flex items-center bg-slate-500 p-1 rounded-md hover:bg-slate-600'>
                            Code <RiGithubFill />
                        </a>
                        <a href="https://schedule-alpha.vercel.app/"
                            target="_blank"
                            className="flex items-center bg-slate-500 p-1 rounded-md hover:bg-slate-600">
                            Live Demo <RiShareBoxFill />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;