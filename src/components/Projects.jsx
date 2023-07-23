import Headline from "../shared/Headline";
import projects from "../../public/projects.js";

// motion
import { motion } from "framer-motion";
// variants
import { fadeIn } from "../variants";


const Projects = () => {
    return (
        <div className='max-w-7xl font-serrat mx-auto md:py-8 px-7' id="projects">
            <Headline title={'PROJECTS'} subtitle={'Here you will find some of the personal and clients projects that I created with each project containing its own case study'}/>

            <div>
                {projects.map((project) => <div key={project.id}>
                    <motion.div 
                    variants={fadeIn("up", 0.3)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.2 }}
                    className="projects items-center gap-5 my-20">
                        <div className="">
                        <img src={project.image} alt="" className="" />
                        </div>
                        <div className="md:w-10/12 text-center md:text-left px-2">
                        <h4 className="text-2xl font-bold mb-6">{project.name}</h4>
                            <p className="text-lg text-[#666] leading-6 mb-6">{project.description}</p>
                            <div className=" flex gap-4">

                                <button onClick={() => {

                                    window.open(project.github, '_blank')
                                }} className="btn py-3 px-7">Github</button>
                                <button onClick={() => {
                                    window.open(project.link, '_blank')
                                }} className="btn py-3 px-7">View Live</button>
                            </div>
                        </div>
                    </motion.div>
                </div>)}
            </div>
        </div>
    );
};

export default Projects;