import React from 'react';

import Title from '../layouts/Title';
import ProjectsCard from './ProjectsCard';
import { data } from './data';

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
        {data.map((d) => (
          <ProjectsCard
            key={d.id}
          title={d.name}
          des={d.desc}
          src={d.img}
          gitlink={d.gitUrl}
          livesite= {d.liveLink}
        />
        ))}
        <img src='../../assets/images/projects/email_assistant.png' alt=''/>
        {/* 1: Promptopia(Text Summerizer) */}
        {/* <ProjectsCard
          title="Promptopia (Full Stack Text Summerizer with Next 13.4)"
          des="Promptopia is an exceptional project that utilizes OpenAI's chatbot to offer an incredible text summarization feature. Users can summarize texts and share them on the community page. With Google sign-up integration, the web app is built using the latest Next.js 13.4 app directory and incorporates a serverless routing system for optimal performance."
          src={prompt}
          gitlink="https://github.com/Afrin127329/full-stack-next13-ai-app"
          livesite= "https://full-stack-next13-ai-app.vercel.app/"
        /> */}
        {/* 2: Ecommerce website  */}
        {/* <ProjectsCard
          title="Ecommerce website(Full Stack)"
          des="The ecommerce project offers user and admin registration with separate dashboards. Users can add items to their cart and make payments through Stripe. After successful payment, the admin can mark orders as completed or processing. The admin has full control over creating, deleting, and updating categories and products. The homepage includes filters for easy product navigation. (Admin Credentials: email: admin@gmail.com and password: admin"
          src={ecommerce}
          gitlink="https://github.com/Afrin127329/full-stack-ecommerce"
          livesite= "https://vivacious-rose-rabbit.cyclic.app/"
        /> */}
        {/* 3: Fiverr Clone  */}
        {/* <ProjectsCard
          title="Liverr(Full Stack Fiverr Clone)"
          des="The Fiverr clone project offers buyer and seller accounts, enabling sellers to create gigs and buyers to make purchases using Stripe payment. After purchasing a gig, buyers can leave reviews with 5-star ratings. The platform features a page to explore all sellers' gigs, and a chat section allows buyers and sellers to communicate after a gig purchase."
          src={fiverr}
          gitlink="https://github.com/Afrin127329/full-stack-fiverr-app"
          livesite= "https://full-stack-fiverr-app.vercel.app/"
        /> */}
       {/* 4: Email Assistant */}
      {/* <ProjectsCard
          title="Email Assistant(Chrome Extension)"
          des="The innovative Chrome extension boasts a remarkable feature that automates email composition with a single click within the mailbox. Leveraging the power of OpenAI's chatbot, it intelligently completes email lines, saving users valuable time and effort. This seamless integration of the chatbot enhances email productivity and streamlines communication workflows."
          src={assitant}
          gitlink="https://github.com/Afrin127329/email-assistant"
          livesite="https://www.youtube.com/watch?v=waHuG-LUtMQ"
        /> */}
        {/* 5: Gericth  */}
        {/* <ProjectsCard
          title="Gericth Restaurent(Single Page)"
          des="A modern UI/UX (figma) design converted into a live website with Reactjs, following famous BEM methodology in CSS."
          src={gericth2}
          gitlink="https://github.com/Afrin127329/frontend-gericht-restaurent"
          livesite= "https://afrins-gericht-restaurent.netlify.app/"
        /> */}
        {/* 6: Metaversus  */}
        {/* <ProjectsCard
          title="Metaversus"
          des="The website is a single page Application that is built with Next13, Reactjs, TailwindCSS and most importantly Framer Motion for amazing Animation."
          src={metaversus}
          gitlink="https://github.com/Afrin127329/metaversus-nextjs"
          livesite= "https://metaversusbyafrin.netlify.app/"
        /> */}
      </div>
    </section>
  );
}

export default Projects