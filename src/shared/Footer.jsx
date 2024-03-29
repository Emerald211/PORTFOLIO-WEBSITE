import linkedinIcon from "../assets/icons-white/linkedin-white.png";
import githubIcon from "../assets/icons-white/github-white.png";
import twitterIcon from "../assets/icons-white/twitter-ico.png";
import blogIcon from "../assets/icons-white/blog-ico.png";

const Footer = () => {
  return (
    <div className="bg-black font-serrat md:h-96 px-7">
      <div className="max-w-7xl mx-auto py-20 flex flex-col md:flex-row justify-between">
        {/* logo and description */}
        <div className="md:w-2/5 my-3">
          <h4 className="text-white font-bold text-2xl tracking-wide">
            EMMANUEL ADERIBIGBE
          </h4>
          <p className="mt-5 text-sm leading-7 text-[#eee]">
            Frontend Software Developer with strong skillset in developing and
            maintaining responsive websites while adhering to the latest web
            development practices.
          </p>
        </div>
        {/* social icons */}
        <div className="my-3">
          <h4 className="text-white font-bold text-2xl tracking-wide ">
            SOCIAL
          </h4>
          <div className="mt-5 flex gap-3">
            <a
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/in/emmanueladeribigbe01",
                  "_blank"
                );
              }}
              href=""
              className="ml-1"
            >
              <img src={linkedinIcon} alt="" className="w-7 h-7" />
            </a>
            <a
              onClick={() => {
                window.open("https://github.com/Emerald211", "_blank");
              }}
              href=""
              className="ml-1"
            >
              <img src={githubIcon} alt="" className="w-7 h-7" />
            </a>
            <a
              onClick={() => {
                window.open("https://twitter.com/Edrums011", "_blank");
              }}
              href=""
              className="ml-1"
            >
              <img src={twitterIcon} alt="" className="w-7 h-7" />
            </a>
            <a
              onClick={() => {
                window.open("https://dev.to/emerald211", "_blank");
              }}
              href=""
              className="ml-1"
            >
              <img src={blogIcon} alt="" className="w-7 h-7" />
            </a>
       
          </div>
        </div>
      </div>

      <hr className="text-slate-50 opacity-30 px-7" />

      {/* copyright text */}
      <div>
        <p className="md:my-10 py-10 md:py-0 text-sm leading-7 text-[#eee] text-center">
          © Copyright 2023. Made by{" "}
          <a href="" className="underline">
            Emmanuel Aderibigbe
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
