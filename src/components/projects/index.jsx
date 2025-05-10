"use client";
import { motion } from "framer-motion";

// Sample project data
const projects = [
  {
    name: "InterviewPrep AI",
    description: "🚀 I built my own platform, InterviewPrep AI, to transform how we prepare for job interviews using the power of AI voice agents, real-time feedback, and a modern, beautiful interface.",
    //date: "2025-01-10",
    demoLink: "https://github.com/sohamsk13/InterviewPrep-AI",
    imageSrc: "https://cdn.pixabay.com/photo/2024/04/02/10/18/ai-generated-8670525_1280.jpg",
  },
  {
    name: "DroneMedix",
    description: "Drone Medix is an innovative on-demand delivery service that leverages cutting-edge drone technology to bring essential medicines straight to your doorstep.",
    //date: "2025-03-22",
    demoLink: "https://github.com/sohamsk13/DroneMedix",
    imageSrc: "https://media.istockphoto.com/id/1203770153/photo/drone-with-first-aid-kit-on-blue-sky-emergency-medical-care-concept.jpg?s=1024x1024&w=is&k=20&c=MLbB_kywU18ziPH1nV1J0A__-R1-inMwWrUX-7OEL00=",
  },
  
];

// Framer Motion variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 1.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 80 },
  show: { opacity: 1, y: 0 },
};

const ProjectList = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className="w-full px-4 lg:px-12 xl:px-28 max-w-screen-xl mx-auto py-16 flex flex-col items-center space-y-10"
    >
      {projects.map((project, index) => (
        <motion.a
          key={index}
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          variants={item}
          className="group w-full max-w-4xl backdrop-blur-md bg-white/5 border border-white/10 hover:border-cyan-400 rounded-2xl overflow-hidden p-5 md:p-6 shadow-[0_0_20px_rgba(0,255,255,0.1)] hover:shadow-[0_0_30px_rgba(0,255,255,0.3)] transition-all duration-300"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="sm:w-1/3">
              <img
                src={project.imageSrc}
                alt={project.name}
                className="w-full h-48 sm:h-40 object-cover rounded-xl group-hover:brightness-110 transition duration-300"
              />
            </div>
            <div className="sm:w-2/3 space-y-2">
              <h2 className="text-xl md:text-2xl font-semibold text-cyan-300 group-hover:text-cyan-400 transition duration-200">
                {project.name}
              </h2>
              <p className="text-sm md:text-base text-gray-300 line-clamp-3">
                {project.description}
              </p>
              <div className="flex justify-between items-center pt-2">
                
                <span className="text-xs px-3 py-1 bg-cyan-600/20 text-cyan-300 rounded-full">
                  View Project
                </span>
              </div>
            </div>
          </div>
        </motion.a>
      ))}
    </motion.div>
  );
};

export default ProjectList;
