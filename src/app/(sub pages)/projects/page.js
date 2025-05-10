import Image from "next/image";
import bg from "../../../../public/background/projects-background.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
// import Staff from "@/components/models/Staff";
import dynamic from "next/dynamic";

const Staff = dynamic(() => import("@/components/models/Staff"), {
  ssr: false,
});

export const metadata = {
  title: "Projects",
};

export default function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full -z-50 bg-black bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] opacity-95">
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-1/4 left-1/3 w-[400px] h-[400px] bg-[#00f2ff] opacity-20 blur-[150px] rounded-full"></div>
    <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-[#ff00ff] opacity-20 blur-[150px] rounded-full"></div>
    <div className="absolute top-10 right-10 w-[200px] h-[200px] bg-[#00ffab] opacity-10 blur-[100px] rounded-full"></div>
  </div>
</div>



      <ProjectList projects={projectsData} />

      <div className="flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
