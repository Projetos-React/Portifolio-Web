import { IoArrowBack } from "react-icons/io5";
import CardProject from "./CardProject";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
interface Project {
  name: string;
  description: string;
  contents_url: string;
  html_url: string;
}
export default function AllProjects() {
  const [projects, Setprojects] = useState<Project[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/Projetos-React/repos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao tentar recuperar as informações");
        }
        return response.json();
      })
      .then((data) => Setprojects(data));
  }, []);
  const url_image = (project_name: string) => {
    return `https://raw.githubusercontent.com/Projetos-React/${project_name}/main/src/assets/background_projeto.gif`;
  };
  return (
    <section className="section"  style={{marginTop: '50px'}}>
    <h1 className="projectsTitle">Meus Projetos</h1>
      <section className="sectionProjects">
        {projects.map((project) => {
          return (
            <CardProject
              title={project.name}
              description={project.description}
              src_image={url_image(project.name)}
              src_project={project.html_url}
            />
          );
        })}
      </section>
      <div className="sectionMore">
        <button className="moreProjects" style={{float: 'left'}}>
          <Link to="/"><IoArrowBack/>Home</Link>
        </button>
      </div>
    </section>
  );
}
