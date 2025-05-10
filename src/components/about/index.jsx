import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            Soham Sachin Kulkarni
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base">
            Full Stack Developer | MERN Stack & Next.js | Smart India Hackathon 2024 Finalist | 2x Hackathon Winner | Open Source Contributor. Built InterviewPrep AI with 300+ active users. Solved 400+ DSA problems. Open to relocation and eager to tackle challenging software engineering problems.
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            400+ <sub className="font-semibold text-base">DSA problems</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2x Hackthon Winner <sub className="font-semibold text-base">2x Runner-Up</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
          Smart India Hackathon 2024 Finalist<sub className="font-semibold text-base"> </sub>
          </p>
        </ItemLayout>
    
        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
  <div className="p-4">
    <h3 className="text-base md:text-lg font-semibold mb-2">Skills</h3>

    <div className="flex flex-wrap gap-2">
      <img src="https://skillicons.dev/icons?i=c" alt="C" className="h-8" loading="lazy" />
      <img src="https://skillicons.dev/icons?i=cpp" alt="C++" className="h-8" loading="lazy" />
      <img src="https://skillicons.dev/icons?i=java" alt="Java" className="h-8" loading="lazy" />
      <img src="https://skillicons.dev/icons?i=js" alt="JavaScript" className="h-8" loading="lazy" />
      <img src="https://skillicons.dev/icons?i=html" alt="HTML" className="h-8" loading="lazy" />
      <img src="https://skillicons.dev/icons?i=react,nextjs,nodejs,express,bootstrap,tailwind" alt="Web Tech" className="h-8" loading="lazy" />
      <img src="https://skillicons.dev/icons?i=mongodb,postgres,mysql" alt="Databases" className="h-8" loading="lazy" />
      <img src="https://skillicons.dev/icons?i=aws,gcp" alt="Cloud" className="h-8" loading="lazy" />
      <img src="https://skillicons.dev/icons?i=docker,kubernetes,terraform,git,github,postman" alt="DevOps" className="h-8" loading="lazy" />
    </div>
  </div>
</ItemLayout>

    


<ItemLayout className={"col-span-full"}>
          <p className="text-sm sm:text-base md:text-lg p-4">
            Open Source: Improved UX in Excalidraw (toolbar spacing) and Forem (timezone clarity for post scheduling).
          </p>
        </ItemLayout>


        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <p className="text-sm sm:text-base md:text-lg p-4">
           SDE Intern @ Dhruvaatma Technologies: Built Multi-Tenant SaaS for import-export firms, optimized backend with Node.js and SQL, and enhanced frontend with React.
          </p>
        </ItemLayout>


      </div>
    </section>
  );
};

export default AboutDetails;