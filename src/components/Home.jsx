/* eslint-disable react/no-unescaped-entities */
import LinkedIn from "../assets/socials/linkedin.svg";
import Twitter from "../assets/socials/twitter.svg";
import GitHub from "../assets/socials/github.svg";
import Books from "../assets/socials/book.svg";
import { TypeAnimation } from "react-type-animation";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="hero my-8 font-serrat md:py-8 px-7 relative" id="home">
      {/* hero info */}
      <div className="h-screen flex items-center justify-center">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="text-center md:w-1/2"
        >
          <h1 className="text-primary text-5xl font-extrabold tracking-wider mb-8">
            HEY, I'M EMMANUEL ADERIBIGBE
          </h1>
          <TypeAnimation
            className="font-semibold text-transparent leading-10 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
            sequence={[
              // Same substring at the start will only be typed once, initially
              "Building World Class Solutions, One Line of Code at a Time.",
              1000,
              "With code as our tool, we architect a tomorrow of possibilities.",
              1000,
              "Solving Problems, One Algorithm at a Time.",
              1000,
              "I Create, You Conquer.",
              1000,
            ]}
            speed={50}
            style={{ fontSize: "2em" }}
            repeat={Infinity}
          />
          {/* hero info */}
          <p className="text-light text-xl my-8">
            Frontend Software Developer with strong skillset in developing and
            maintaining responsive websites while adhering to the latest web
            development practices.
          </p>
          <a
            className="btn py-4 px-16"
            href="/src/assets/Emmanuel Aderibigbe resume.pdf"
            download="Emmanuel Aderibigbe - Frontend Developer Resume"
          >
            DOWNLOAD CV
          </a>
        </motion.div>
      </div>
      {/* hero socials */}
      <div className="bg-white w-20 rounded py-1 px-2 absolute left-0 top-48 hidden md:block">
        <div className="my-1">
          <a
            onClick={() => {
              window.open(
                "https://www.linkedin.com/in/emmanueladeribigbe01",
                "_blank"
              );
            }}
            href="#"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={LinkedIn} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="my-1">
          <a
            onClick={() => {
              window.open(
                "https://twitter.com/Edrums011",
                "_blank"
              );
            }}
            href="#"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={Twitter} alt="" className="w-10 h-10" />
          </a>
        </div>

        <div className="my-1">
          <a
            onClick={() => {
              window.open(
                "https://github.com/Emerald211",
                "_blank"
              );
            }}
            href="#"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={GitHub} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="my-1">
          <a
            
            onClick={() => {
              window.open(
                "https://dev.to/emerald211",
                "_blank"
              );
            }}
            href="#"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={Books} alt="" className="w-10 h-10" />
          </a>
        </div>

       
      </div>
    </div>
  );
};

export default Home;
