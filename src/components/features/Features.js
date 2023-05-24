import React from 'react';
import { AiFillAppstore } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import { SiProgress } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-20">
        <Card
          title="Front End Development"
          des="Create user interface for website or other interactive media from UI/UX design."
         
        />
        <Card
          title="Backend Web Development"
          des="Work on server-side software that is essential for every scalable application. Focusing on backend logics, queries with NoSQL databases and APIs."
          icon={<AiFillAppstore />}
        />
        <Card
          title="Full Stack Web Development"
          des="Know how to maintain a fully-fledged and functionning platform with databases and servers(MERN)."
          icon={<SiProgress />}
        />
        <Card
          title="Hosting Websites and SEO"
          des="Deep understanding of providing server resources and storage for website accessibility and knowledgeable in optimizing websites."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features;