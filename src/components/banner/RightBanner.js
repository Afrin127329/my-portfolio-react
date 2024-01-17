import React from 'react';
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center relative">
   
      <div className="w-[350px] h-[300px] lgl:w-[400px] lgl:h-[400px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center">
      <img
        className="w-full h-full z-10 object-contain"
        src={bannerImg}
        alt="bannerImg"
      />
      </div>
    </div>
  );
}

export default RightBanner