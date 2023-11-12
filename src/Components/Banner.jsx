import { AiFillGithub } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { BsLine } from "react-icons/bs";
import TextAnimation from './TextAnimation';

const Banner = () => {
    useEffect(() => {
        AOS.init({
            easing: 'ease-out-quart',
            delay: 0,
            duration: 2000,
        });
    }, []);

    return (
        <>
            <div className="px-5 lg:py-0 py-20 text-center flex items-center dark:bg-swhite justify-center transition duration-500">
                <div className="h-full lg:py-40 flex flex-col justify-center items-center text-white dark:text-sblack">
                    <div className='flex gap-1'>
                        <h1 data-aos="fade-right" className="md:text-[52px] text-[20px] font-semibold mb-8 overflow-none ">Hi,I'm </h1>
                        <span className="text-cyan-300 dark:text-yellow-300 font-semibold md:text-[52px] text-[20px]"> <TextAnimation /></span>
                    </div>
                    <p data-aos="fade-left" className='font-itim md:text-xl max-w-3xl text-[16px] break-all'>สวัสดีครับ ผมชื่อนายวัชรพงศ์ มาลัง ชื่อเล่นนาย ความฝันของผมคือการที่ได้เป็น full stack dev</p>
                    <div data-aos="fade-up" className="flex mt-8 gap-2">
                        <div className="flex items-center justify-center">
                            <div className="flex space-x-2">
                                <a href="https://github.com/Watcharaphong09" target='_blank' className="text-cyan-300 dark:text-yellow-300 rounded-full hover:shadow-b-iglow dark:hover:shadow-w-iglow transition-all p-2">
                                    <AiFillGithub className="text-[28px]" />
                                </a>
                                <a href="https://www.facebook.com/profile.php?id=100069537291054" target='_blank' className="text-cyan-300 dark:text-yellow-300 rounded-full hover:shadow-b-iglow dark:hover:shadow-w-iglow transition-all p-2">
                                    <FaFacebook className="text-[28px]" />
                                </a>
                                <a href="https://www.instagram.com/wa.chxan/" target='_blank' className="text-cyan-300 dark:text-yellow-300 rounded-full hover:shadow-b-iglow dark:hover:shadow-w-iglow transition-all p-2">
                                    <AiFillInstagram className="text-[28px]" />
                                </a>
                                <a href="https://line.me/ti/p/4TZVm1vTj_" target='_blank' className="text-cyan-300 dark:text-yellow-300 rounded-full hover:shadow-b-iglow dark:hover:shadow-w-iglow transition-all p-2">
                                    <BsLine className="text-[28px]" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='h-[1px] dark:bg-black' />
        </>
    );
};

export default Banner;