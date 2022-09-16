import React from "react";
import lillies from "./LILLIES FOOD.png";
import game from "./GAME.png";
import infinite from "./INFINITE.png";
import music from "./MUSIC PLAYER.png";
import joke from "./JOKE TELLER.png";
import note from "./NOTE.png";
import quote from "./QUOTE.png";


const Project = () => {

  return (
      <div className=" mt-24">
          <h1  data-aos="fade-up" data-aos-duration="2000" className="text-5xl text-white">Projects</h1>
          <div className="skills text-xl mt-3"></div>
              <div className=" grid md:grid-cols-2 lg:px-24 px-0 mt-12 gap-4 grid-cols-1">
      <div  data-aos="fade-right" data-aos-duration="3000" className="relative  px-6 flex flex-col justify-center items-center text-center skills bg-slate-400 py-6 ">
        <img className="w-1/2" src={lillies} alt="" />
        <div>
          <h1 className=" text-3xl mt-3 text-white">LILLIES FOOD APP</h1>
          <h3 className=" text-white">
            This is an E-commerce Website built with React.js and as well as
            Fake Rest API (JSON-SERVER) deployed on Heroku for CRUD operations.
            Its User Friendly and as well a multi user applications as it stores
            your data across all devices
          </h3>
        </div>
        <div className=" mt-5 flex gap-5">
          <button className=" bg-blue-900 text-white text-lg px-4 py-3 rounded-2xl">
            <a href="https://lilliesfoods.netlify.app/"> View live</a>
          </button>
          <button className="bg-blue-900 text-white text-lg px-4 py-3 rounded-2xl">
           <a href="https://github.com/Emerald211/LILLIES-FOOD-APP">Github</a>
          </button>
        </div>
          </div>
          
          <div  data-aos="fade-left" data-aos-duration="3000" className="relative px-6 flex flex-col justify-center items-center text-center skills bg-slate-400 py-6 ">
        <img className="w-1/2" src={note} alt="" />
        <div>
          <h1 className=" text-3xl mt-3 text-white">NOTE APP</h1>
          <h3 className=" text-white">
          This is a simple notepad app built with react js and session storage to save infromation
          </h3>
        </div>
        <div className=" mt-5 flex gap-5">
          <button className=" bg-blue-900 text-white text-lg px-4 py-3 rounded-2xl">
           <a href="https://emmanuel-notepad-app.netlify.app/"> View live</a>
          </button>
          <button className="bg-blue-900 text-white text-lg px-4 py-3 rounded-2xl">
     <a href="https://github.com/Emerald211/NOTEPAD-APP">Github</a>
          </button>
        </div>
          </div>
          
             
          <div  data-aos="fade-right" data-aos-duration="3000" className="relative  px-6 flex flex-col justify-center items-center text-center skills bg-slate-400 py-6 ">
        <img className="w-1/2" src={game} alt="" />
        <div>
          <h1 className=" text-3xl mt-3 text-white">GAMING WEBSITE</h1>
          <h3 className=" text-white">
          This is a simple gaming website built with vanilla js. This is a User Friendly Application
          </h3>
        </div>
        <div className=" mt-5 flex gap-5">
          <button className=" bg-blue-900 text-white text-lg px-4 py-3 rounded-2xl">
           <a href="https://gamingweb3.netlify.app/">View live</a>
          </button>
          <button className="bg-blue-900 text-white text-lg px-4 py-3 rounded-2xl">
            <a href="https://github.com/Emerald211/Gaming-Website">Github</a>
          </button>
        </div>
          </div>
          
             
          <div  data-aos="fade-left" data-aos-duration="3000" className="relative  px-6 flex flex-col justify-center items-center text-center skills bg-slate-400 py-6 ">
        <img className="w-1/2" src={joke} alt="" />
        <div>
          <h1 className=" text-3xl mt-3 text-white">JOKE TELLER</h1>
          <h3 className=" text-white">
          This is a JOKE TELLER APP built with vanilla js. Fetch Data from JOKES API and also intergrated text to speech function for audio speech
          </h3>
        </div>
        <div className=" mt-5 flex gap-5">
          <button className=" bg-blue-900 text-white text-lg px-4 py-3 rounded-2xl">
         <a href="https://emerald211.github.io/JOKE-TELLER/">View live</a>
          </button>
          <button className="bg-blue-900 text-white text-lg px-4 py-3 rounded-2xl">
         <a href="https://github.com/Emerald211/JOKE-TELLER">Github</a>
          </button>
        </div>
          </div>
          
             
          <div  data-aos="fade-right" data-aos-duration="3000" className="relative  px-6 flex flex-col justify-center items-center text-center skills bg-slate-400 py-6 ">
        <img className="w-1/2" src={music} alt="" />
        <div>
          <h1 className=" text-3xl mt-3 text-white">MUSIC PLAYER</h1>
          <h3 className=" text-white">
          This is a simple music player built with vanilla js
          </h3>
        </div>
        <div className=" mt-5 flex gap-5">
          <button className=" bg-blue-900 text-white text-lg px-4 py-3 rounded-2xl">
            <a href="https://emeraldmusic.netlify.app/">View live</a>
          </button>
          <button className="bg-blue-900 text-white text-lg px-4 py-3 rounded-2xl">
            <a href="https://github.com/Emerald211/MUSIC-PLAYER">Github</a>
          </button>
        </div>
          </div>
          
             
          <div  data-aos="fade-left" data-aos-duration="3000" className="relative  px-6 flex flex-col justify-center items-center text-center skills bg-slate-400 py-6 ">
        <img className="w-1/2" src={infinite} alt="" />
        <div>
          <h1 className=" text-3xl mt-3 text-white">INFINTE SCROLL</h1>
          <h3 className=" text-white">
          This is an infinite scroll app built with vanilla js. Fetch Data from Unsplash API
          </h3>
        </div>
        <div className=" mt-5 flex gap-5">
          <button className=" bg-blue-900 text-white text-lg px-4 py-3 rounded-2xl">
  <a href="https://emerald211.github.io/infinite-scroll/">View live</a>
          </button>
          <button className="bg-blue-900 text-white text-lg px-4 py-3 rounded-2xl">
            <a href="https://github.com/Emerald211/infinite-scroll">Github</a>
          </button>
        </div>
          </div>
          
             
          <div  data-aos="fade-up" data-aos-duration="3000" className="relative px-6 flex flex-col justify-center items-center text-center skills bg-slate-400 py-6 ">
        <img className="w-1/2" src={quote} alt="" />
        <div>
          <h1 className=" text-3xl mt-3 text-white">QUOTE GENERATOR</h1>
          <h3 className=" text-white">
          This is an random quote generator  built with vanilla js. Fetch Data from RAPID API
          </h3>
        </div>
        <div className=" mt-5 flex gap-5">
          <button className=" bg-blue-900 text-white text-lg px-4 py-3 rounded-2xl">
            <a href="https://emerald211.github.io/quote-generator/">View live</a>
          </button>
          <button className="bg-blue-900 text-white text-lg px-4 py-3 rounded-2xl">
            <a href="https://github.com/Emerald211/quote-generator">Github</a>
          </button>
        </div>
      </div>
    </div>
</div>
  );
};

export default Project;
