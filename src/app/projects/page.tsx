import Google from "@/components/Google";
import ProjectCard from "@/components/ProjectCard";
import Image from "next/image";

const projects = [
  {id: 1,image: 'https://pratik-portfolio-snowy.vercel.app/',name: 'pratik-portfolio',description:'https://pratik-portfolio',source_code:'https://github.com/PratikPradhan987/Pratik_portfolio',demo:'https://pratik-portfolio-snowy.vercel.app/'},
  {id: 2,image: 'https://native-notify-dummy-project.vercel.app/',name: 'native-notify-dummy-project',description:'https://native-notify-dummy-project',source_code:'https://github.com/PratikPradhan987/Native-Notify-dummy-project',demo:'https://native-notify-dummy-project.vercel.app/',},
  {id: 2,image: 'https://rise-share-ideas.vercel.app/',name: 'rise-share-ideas',description:'https://rise-share-ideas',source_code:'https://github.com/PratikPradhan987/Rise_Share_ideas',demo:'https://rise-share-ideas.vercel.app/',},
]

const Project = () => {
    return (
      <>
      <h3>Stuff {"I've"} Built So Far</h3>
      <div className='p-5 grid gap-6 my-6 grid-cols-[repeat(auto-fit,minmax(240px,1fr))]'>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Google />
    </>
    );
  };
  
  
  export default Project;