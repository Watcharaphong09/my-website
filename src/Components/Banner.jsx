import { AiFillGithub } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { BsLine } from "react-icons/bs";

const Banner = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 750
        });
    },[]);

    return (
        <div className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
            <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
                <h1 data-aos="fade-right" className="text-[52px] font-semibold mb-8 leading-normal ">Welcome To <span className="text-cyan-300">My Website</span></h1>
                <p data-aos="fade-left" className='font-itim text-xl'>สวัสดีครับ ผมชื่อนายวัชรพงศ์ มาลัง ชื่อเล่นนาย </p>
                <div data-aos="fade-up" className="flex mt-8 gap-2">
                    <div className="flex items-center justify-center">
                        <div className="flex space-x-2">
                            <a href="https://github.com/Watcharaphong09" className="text-cyan-300 hover:text-cyan-500 rounded-full glow p-2">
                                <AiFillGithub className="text-[28px]" />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=100069537291054" className="text-cyan-300 hover:text-cyan-500 rounded-full glow p-2">
                                <FaFacebook className="text-[28px]" />
                            </a>
                            <a href="https://www.instagram.com/wa.chxan/" className="text-cyan-300 hover:text-cyan-500 rounded-full glow p-2">
                                <AiFillInstagram className="text-[28px]" />
                            </a>
                            <a href="https://line.me/ti/p/4TZVm1vTj_" className="text-cyan-300 hover:text-cyan-500 rounded-full glow p-2">
                                <BsLine className="text-[28px]" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <img src="" width={290} height={290} className='rounded-full border-2 p-1 border-fuchsia-500 img_glow' alt="" /> */}
        </div>
    );
};

export default Banner;