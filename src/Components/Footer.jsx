import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-slate-800 text-white lg:px-48 px-4 py-20'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 '>
                <div className='mb-4 md:mb-0'>
                    <span className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Logo</span>
                </div>
                <div className='mb-4 md:mb-0'>
                    <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>Contacts</h2>
                    <p className='text-[16px] '>Email: csmos11450qw@gmail.com</p>
                    <p></p>
                </div>
                <div>
                <h2 className='text-[22px] font-semibold text-fuchsia-800 py-2 uppercase'>FOLLOW ME</h2>
                <div className='flex space-x-4'>
                    <a className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out' href="">
                        <AiFillInstagram />
                    </a>
                    <a className='text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out' href="">
                        <FaFacebook />
                    </a>
                </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;