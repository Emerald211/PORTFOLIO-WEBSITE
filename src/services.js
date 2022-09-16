import React from "react";
import "./services.css";
import resume from './EMMANUEL ADERIBIGBE (FRONTEND DEV).pdf'

const Services = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 py-20 services ">
      <div className=" flex flex-col">
              <h1   data-aos="fade-up" data-aos-duration="2000" className=" text-white text-5xl">About Me</h1>
              <div  data-aos="fade-up" data-aos-duration="2000" className="skills"></div>
        <h1  data-aos="fade-up" data-aos-duration="3000" className=" mt-3 text-white">
          I'm a Frontend Developer. I have serious passion for building
          intuitive and dynamic user interfaces and experience. Undoubtely
          looking to leverage my knowledge and unique expertise into an active
          field in ICT. Also I am a creative, moral and open personality. So
          lets make something special
              </h1>
              
        <a href={resume} download={resume}>
        <button  data-aos="fade-up" data-aos-duration="3000" className="bg-blue-900 text-white font-bold h-10 rounded-3xl w-32 mt-8">Download CV</button>
             </a>
      </div>
    </div>
  );
};

export default Services;