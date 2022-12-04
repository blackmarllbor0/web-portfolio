import { projectsData } from "../../Data/ProjectsData";
import { Slider } from "../Slider/Slider";
import "./Projects.scss";

export const Projects = () => {
  return (
    <section className="projects">
      <h1>Мои проекты</h1>
      <Slider projects={projectsData} />
    </section>
  );
};
