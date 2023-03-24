import React from 'react';
import { gericth2, gpt3, hoobank, metaversus } from "../../assets/index";
import Title from '../layouts/Title';
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-14">
        <ProjectsCard
          title="Gericth Restaurent"
          des="A modern UI/UX (figma) design converted into a live website with Reactjs, following famous BEM methodology in CSS."
          src={gericth2}
          gitlink="https://github.com/Afrin127329/frontend-gericht-restaurent"
          livesite= "https://afrins-gericht-restaurent.netlify.app/"
        />
        <ProjectsCard
          title="Metaversus"
          des="The website is a single page Application that is built with Next13, Reactjs, TailwindCSS and most importantly Framer Motion for amazing Animation."
          src={metaversus}
          gitlink="https://github.com/Afrin127329/metaversus-nextjs"
          livesite= "https://metaversusbyafrin.netlify.app/"
        />
        <ProjectsCard
          title="Modern UI/UX design GPT3"
          des="Fully Responsive Reactjs webstie."
          src={gpt3}
          gitlink="https://github.com/Afrin127329/gpt3-modern-ui-ux-react"
          livesite= "https://gpt3byafrin.netlify.app/"
        />
        <ProjectsCard
          title="HooBank"
          des="A fully responsive UI/UX design of a Bank built with ReactJs, TailwindCSS and PostCSS."
          src={hoobank}
          gitlink="https://github.com/Afrin127329/hoobank-modern-ui-ux-figma"
          livesite= "https://hoobankbyafrin.netlify.app/"
        />
      </div>
    </section>
  );
}

export default Projects