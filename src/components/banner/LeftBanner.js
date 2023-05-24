import React from 'react';
import { DiJavascript1, DiMongodb, DiSass } from "react-icons/di";
import { FaFacebookF, FaLinkedinIn, FaReact, FaTwitter } from "react-icons/fa";
import { SiExpress, SiNextdotjs, SiOpenai, SiTailwindcss } from "react-icons/si";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Coder.", "Full Stack Developer.", "Front End Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Afrin Nahar</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        A self-taught programmer with 1 year of dedicated experience in Front End Web Development. Finally I am confident enough to break through the tech industry to implement my skills. I am a passionate programmern to explore new challenges and dedicated to manage any challenging work from start.
        
        </p>
      </div>
      <div className="flex flex-col  gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
            <a target='_blank' rel="noreferrer" href='https://facebook.com/afrin4me/' ><FaFacebookF /></a>
            </span>
            <span className="bannerIcon">
            <a target='_blank' rel="noreferrer" href='https://twitter.com/AfrinNahar10'><FaTwitter /></a>
            </span>
            <span className="bannerIcon">
            <a target='_blank' rel="noreferrer" href='https://www.linkedin.com/in/afrin-nahar-b849ba1a9/'><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
        <br />
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <DiSass />
            </span>
            <span className="bannerIcon">
              <DiJavascript1/>
            </span>
            <span className="bannerIcon">
              <SiExpress/>
            </span>
            <span className="bannerIcon">
              <DiMongodb/>
            </span>
            <span className="bannerIcon">
              <SiOpenai/>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftBanner