import React from 'react';
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
                    Front End Developer
                </p>
                <p className="text-base text-gray-400 flex items-center gap-2">
                    Email: <span className="text-lightText">afrinnahar1999@gmail.com</span>
                </p>
            </div>
        </div>
    );
}

export default ContactLeft