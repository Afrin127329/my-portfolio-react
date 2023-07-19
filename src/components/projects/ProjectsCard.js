import Slider from 'infinite-react-carousel';
import React from 'react';
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectsCard = ({ title, des, src, gitlink, livesite }) => {
  console.log(src);
    return (
      <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
        <div className="w-full h-[80%] overflow-hidden rounded-lg">
          <Slider dots slidesToShow={1}>
          {src.map(s=>(
            <img
              key={Math.random()}
            className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
            src={s}
            alt="src"
            />
          ))}
        </Slider>
        
        
        </div>
  
  
        <div className="w-full mt-5 flex flex-col  gap-6">
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-base uppercase text-designColor font-normal">
                {title}
              </h3>
              <div className="flex gap-2">
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                  <a target='_blank' rel='noreferrer' href={gitlink}><BsGithub /></a>
                </span>
                <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
                  <a target='_blank' rel='noreferrer' href={livesite}><FaGlobe /></a>
                </span>
              </div>
            </div>
            <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
              {des}
            </p>
          </div>
        </div>
      </div>
    );
  }


  
// const ProjectsCard = ({ title, des, src, gitlink, livesite }) => {
//   return (
//     <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg shadow-shadowOne flex flex-col bg-gradient-to-r from-bodyColor to-[#202327] group hover:bg-gradient-to-b hover:from-gray-900 hover:gray-900 transition-colors duration-1000">
//       <div className="w-full h-[80%] overflow-hidden rounded-lg">
//       <Slider dots slidesToShow={1}>
//         <img
//           className="w-full h-60 object-cover group-hover:scale-110 duration-300 cursor-pointer"
//           src={src}
//           alt="src"
//         />
//       </Slider>
//       </div>


//       <div className="w-full mt-5 flex flex-col  gap-6">
//         <div>
//           <div className="flex items-center justify-between">
//             <h3 className="text-base uppercase text-designColor font-normal">
//               {title}
//             </h3>
//             <div className="flex gap-2">
//               <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
//                 <a target='_blank' rel='noreferrer' href={gitlink}><BsGithub /></a>
//               </span>
//               <span className="text-lg w-10 h-10 rounded-full bg-black inline-flex justify-center items-center text-gray-400 hover:text-designColor duration-300 cursor-pointer">
//                 <a target='_blank' rel='noreferrer' href={livesite}><FaGlobe /></a>
//               </span>
//             </div>
//           </div>
//           <p className="text-sm tracking-wide mt-3 hover:text-gray-100 duration-300">
//             {des}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

export default ProjectsCard