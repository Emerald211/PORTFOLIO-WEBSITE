import React from "react";
import "./skills.css";
import { FaHtml5, FaCss3, FaBootstrap, FaJs, FaReact, FaGitSquare, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      logo: <FaHtml5 />,
      name: "Html5",
    },
    {
      logo: <FaCss3 />,
      name: "Css3",
    },
    {
      logo: <FaBootstrap />,
      name: "BootStrap",
    },
    {
      logo: <FaJs />,
      name: "Javascript",
    },
    {
      logo: <FaReact />,
      name: "React",
      },
      {
          logo: <SiTailwindcss />,
          name: "TailwindCss"   
      },
      {
          logo: <FaGitSquare />,
          name: "Git"
      },
      {
          logo: <FaGithub />,
          name: "Github"
      }
      

  ];
  return (
    <div>
      <h1 className="text-white text-5xl">Skills</h1>
      <div className="skills mt-2"></div>

      <div className="grid md:grid-cols-2 gap-2 grid-cols-1 mt-3">
        {skills.map((eachskills) => {
          return (
            <div  data-aos="fade-up" data-aos-duration="3000" className=" flex gap-3 skills py-5 px-3 text-3xl text-white">
              {eachskills.logo}
              <h1>{eachskills.name}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
