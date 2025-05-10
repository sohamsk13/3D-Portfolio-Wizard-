import { motion } from "framer-motion";
import Link from "next/link";

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 0 },
};

const ProjectLink = motion(Link);

const ProjectLayout = ({ name, description, date, demoLink, imageSrc }) => {
  return (
    <ProjectLink
      variants={item}
      href={demoLink}
      target={"_blank"}
      className="group text-sm md:text-base flex flex-col sm:flex-row items-center justify-between w-full relative rounded-lg overflow-hidden p-4 md:p-6 custom-bg shadow-lg transition-transform transform hover:scale-105"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full">
        <div className="w-full sm:w-1/3">
          <img
            src={imageSrc}
            alt={name}
            className="w-full h-auto rounded-lg object-cover group-hover:opacity-80 transition-opacity"
          />
        </div>
        <div className="w-full sm:w-2/3 flex flex-col justify-between mt-4 sm:mt-0">
          <h2 className="text-foreground text-xl font-semibold">{name}</h2>
          <p className="text-muted text-sm sm:text-base line-clamp-2">{description}</p>
          <div className="mt-4 sm:mt-auto flex justify-between items-center">
            <p className="text-muted sm:text-foreground text-xs sm:text-sm">
              {new Date(date).toDateString()}
            </p>
            <div className="self-end flex-1 mx-2 mb-1 bg-transparent border-b border-dashed border-muted" />
          </div>
        </div>
      </div>
    </ProjectLink>
  );
};

export default ProjectLayout;
