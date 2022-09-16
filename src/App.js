import "./App.css";
import AOS from 'aos'

import Navbar from "./navbar";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

import Services from "./services";
import Skills from "./skills";
import Project from "./project";
import { useState } from "react";
import { useEffect } from "react";





function App() {
  const form = useRef();


  const ref = useRef(null)

  useEffect(() => {
    AOS.init();
  })

  const [done, setdone] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x1xb88n', 'template_vswwvhp', form.current, 'mESjxZ_og4PkWRGaA')
      .then((result) => {
        console.log(result.text);

        setdone(true)
      }, (error) => {
          console.log(error.text);
      });
    

  };


  return (
    <div className="App  px-12">
      <Navbar />

      <div className=" grid md:grid-cols-2 mt-24 about grid-cols-1">
        <div className="flex flex-col ">
          <div data-aos="fade-up" data-aos-duration="3000">
            <h1 className=" text-5xl  text-white">Hi, I Am</h1>
            <h1 className=" text-5xl text-white">Emmanuel Aderibigbe</h1>
            <h1 className=" text-xl text-white mt-1 font-extrabold">Frontend Developer from Nigeria</h1>
          </div>

          <button onClick={() => {
            
    ref.current?.scrollIntoView({behavior: 'smooth'});
  
          }}  data-aos="fade-up" data-aos-duration="3000" className=" w-40 mt-5 py-2 hover:bg-none text-white rounded-3xl shadow-sm shadow-slate-700 bg-blue-900">Hire me</button>

          <div  data-aos="fade-up" data-aos-duration="3000" className="flex mt-12 text-5xl text-blue-900  gap-3">
            <a href="https://www.linkedin.com/in/emmanuel-aderibigbe-1ab984235?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKzvZ2VJKSZuF0vFES8mIDQ%3D%3D"><FaLinkedin /></a>
            <a href="https://github.com/Emerald211"> <FaGithub /></a>
            <a href="https://www.instagram.com/emmanueladeribigbe01"> <FaInstagram /></a>
           
          </div>
        </div>

        <div  data-aos="fade-up" data-aos-duration="3000" className=" px-3 flex relative md:mt-0 mt-12  justify-center">
          <div className="circle bg-blue-900  md:w-72 absolute top-0 md:h-72 w-64 h-64 rounded-full"></div>
          <div style={{ borderRadius: "0%" }} className=" rounded-full profile-bg  top-0 "></div>
        </div>
     
      </div>

      <Services ref={ref} />
      <Skills />
      <Project />
      <div ref={ref} className="grid lg:px-24 mt-24 px-0 md:grid-cols-2 grid-cols-1">
        <div>
          <h1 className=" text-4xl mb-3 text-white">Get in Touch</h1>
  
        </div>
        <div>
          <form  ref={form} onSubmit={sendEmail} className=" text-white flex flex-col" action="">
            <label className=" text-white mb-3" htmlFor="" >Name</label>
            <input name="user_name" className=" w-full h-12 rounded-3xl bg-none " required type="text" />
            <label className="text-white" htmlFor=""> Email</label>
            <input name="user_email" className=" w-full h-12 rounded-3xl bg-none" required type="email" />
            <label className=" text-white mb-3" htmlFor="" >Message</label>
            <textarea name="message" id="" cols="30" rows="10" required></textarea>
            <button className=" bg-blue-900 text-white w-full h-12 rounded-3xl mt-3" type="submit">{ done ? "Thanks for Contacting me" : "Send" }</button>
          </form>
        </div>
      </div>

      <div className=" mt-24 flex text-white text-xl justify-center items-center gap-4">

      <a href="https://www.linkedin.com/in/emmanuel-aderibigbe-1ab984235?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BKzvZ2VJKSZuF0vFES8mIDQ%3D%3D"><FaLinkedin /></a>
            <a href="https://github.com/Emerald211"> <FaGithub /></a>
            <a href="https://www.instagram.com/emmanueladeribigbe01"> <FaInstagram /></a>
      </div>
    </div>
  );
}

export default App;
