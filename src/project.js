import React from "react";
import lillies from "./LILLIES FOOD.png";
import game from "./GAME.png";
import joke from "./JOKE TELLER.png";
import chat from "./CHAT.png";

const Project = () => {
  return (
    <div className=" mt-24">
      <h1
        data-aos="fade-up"
        data-aos-duration="2000"
        className="text-5xl text-white"
      >
        Projects
      </h1>
      <div className="skills text-xl mt-3"></div>
      <div className=" grid md:grid-cols-2 lg:px-24 px-0 mt-12 gap-4 grid-cols-1">
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className="relative  px-6 flex flex-col justify-center items-center text-center skills bg-slate-400 py-6 "
        >
          <img className="w-1/2" src={lillies} alt="" />
          <div>
            <h1 className=" text-3xl mt-3 text-white">LILLIES FOOD APP</h1>
            <h3 className=" text-white">
              This is an E-commerce Website built with React.js and as well as
              Fake Rest API (JSON-SERVER) deployed on Heroku for CRUD
              operations. Its User Friendly and as well a multi user
              applications as it stores your data across all devices
            </h3>
          </div>
          <div className=" mt-5 flex gap-5">
            <button className=" bg-blue-900 text-white text-lg px-4 py-3 rounded-2xl">
              <a href="https://lilliesfoods.netlify.app/"> View live</a>
            </button>
            <button className="bg-blue-900 text-white text-lg px-4 py-3 rounded-2xl">
              <a href="https://github.com/Emerald211/LILLIES-FOOD-APP">
                Github
              </a>
            </button>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className="relative px-6 flex flex-col justify-center items-center text-center skills bg-slate-400 py-6 "
        >
          <img className="w-1/2" src={chat} alt="" />
          <div>
            <h1 className=" text-3xl mt-3 text-white">LET'S CHAT</h1>
            <h3 className=" text-white">
              This is a chat APPLICATION built with REACT.js and Firebase. This is a Multi user web application that allows authenticated users to chat freely. 
            </h3>
          </div>
          <div className=" mt-5 flex gap-5">
            <button className=" bg-blue-900 text-white text-lg px-4 py-3 rounded-2xl">
              <a href="http://letschatnow1.netlify.app/"> View live</a>
            </button>
            <button className="bg-blue-900 text-white text-lg px-4 py-3 rounded-2xl">
              <a href="https://github.com/Emerald211/CHATAPP">Github</a>
            </button>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className="relative px-6 flex flex-col justify-center items-center text-center skills bg-slate-400 py-6 "
        >
          <img className="w-1/2" src={game} alt="" />
          <div>
            <h1 className=" text-3xl mt-3 text-white">EMERALD GAMES HUB</h1>
            <h3 className=" text-white">
              This is a gaming website with HTML CSS and JAVASCRIPT. This is a user friendly application. 
            </h3>
          </div>
          <div className=" mt-5 flex gap-5">
            <button className=" bg-blue-900 text-white text-lg px-4 py-3 rounded-2xl">
              <a href="https://gamingweb3.netlify.app/"> View live</a>
            </button>
            <button className="bg-blue-900 text-white text-lg px-4 py-3 rounded-2xl">
              <a href="https://github.com/Emerald211">Github</a>
            </button>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className="relative px-6 flex flex-col justify-center items-center text-center skills bg-slate-400 py-6 "
        >
          <img className="w-1/2" src={joke} alt="" />
          <div>
            <h1 className=" text-3xl mt-3 text-white">JOKE TELLER</h1>
            <h3 className=" text-white">
              This is a simple joke telling robot built with javascript. This is a user friendly app with integrated spech to audio API for better experience. 
            </h3>
          </div>
          <div className=" mt-5 flex gap-5">
            <button className=" bg-blue-900 text-white text-lg px-4 py-3 rounded-2xl">
              <a href="https://emerald211.github.io/JOKE-TELLER/"> View live</a>
            </button>
            <button className="bg-blue-900 text-white text-lg px-4 py-3 rounded-2xl">
              <a href="https://github.com/Emerald211/JOKE-TELLER">Github</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
