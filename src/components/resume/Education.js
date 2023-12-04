import { motion } from 'framer-motion';
import React from 'react';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-12"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[70%] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Bachelor of Social Science"
            subTitle="Jatya Kabi Kazi Nazrul Islam University"
            result="Economics"
            des="Dropped out after 3rd year to start my Tech career. Coding became a passion for me since then."
          />
          <ResumeCard
            title="Higher Secondary School(HSC)"
            subTitle="Phulpur Govt. College"
            result="GPA 4.17"
            des="From 2015-2017, With Science Background"
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">June 2023 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[70%] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack 
            Web Developer Intern (Remote)"
            subTitle="Metricx (June, 23 - August, 23)"
            result="India"
            des="Led a team of three interns in developing a complex project using Next.js, TailwindCSS, and MongoDB, completed 70% of the website and hosted on AWS. References and source code is available."
          />
          <ResumeCard
            title="Web Developer (Remote)"
            subTitle="Softcode Digital Solution (September, 23 - Present)"
            result="Bangladesh"
            des="In a collaborative, friendly setting, I develop web/mobile solutions using diverse technologies. Mentored in Agile(Scrum) with Jira by experienced software engineers for global clients."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education