import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { afrin12345 } from "../../assets/index";

const ContactLeft = () => {
    return (
        <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
            <img
                className="w-full h-64 object-cover rounded-lg mb-2"
                src={afrin12345}
                alt="contactImg"
            />
            <div className="flex flex-col gap-4">
                <h3 className="text-3xl font-bold text-white">Afrin Nahar</h3>
                <p className="text-lg font-normal text-gray-400">
                    MERN Stack Developer
                </p>
                <p className="text-base text-gray-400 tracking-wide">
                    A passionate coder and problem solver having an ultimate goal of providing the best possible value to the person I work for.
                </p>
                <p className="text-base text-gray-400 flex items-center gap-2">
                    Email: <span className="text-lightText">afrinnahar1999@gmail.com</span>
                </p>
            </div>
            <div className="flex flex-col gap-4">
                <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
                <div className="flex gap-4">
                    <span className="bannerIcon">
                        <a href='https://facebook.com/afrin4me/' ><FaFacebookF /></a>
                    </span>
                    <span className="bannerIcon">
                        <a href='https://twitter.com/AfrinNahar10'><FaTwitter /></a>
                    </span>
                    <span className="bannerIcon">
                        <a href='https://www.linkedin.com/in/afrin-nahar-b849ba1a9/'><FaLinkedinIn /></a>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ContactLeft