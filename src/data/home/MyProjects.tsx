import { useEffect, useState } from "react";
import CardProject from "./CardProject";
import { IoMdAdd } from "react-icons/io";


interface Project {
    name: string;
    description: string;
    contents_url: string;
    html_url: string;
}

export default function MyProjects() {
    const [projects, Setprojects] = useState<Project[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/Projetos-React/repos')
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao tentar recuperar as informações");
                }
                return response.json();
            })
            .then((data) => Setprojects(data));
    }, [])
    const url_image = (project_name: string) => {
        return `https://raw.githubusercontent.com/Projetos-React/${project_name}/main/src/assets/background_projeto.gif`
    }
    return (
        <section id="MyProjects" className="section">
            <h1 className="projectsTitle">Meus Projetos</h1>
            <section className="sectionProjects">
                {projects.map((project, cont = 0) => {
                    if (cont < 3) {
                        return (
                            <CardProject title={project.name}
                                description={project.description}
                                src_image={url_image(project.name)}
                                src_project={project.html_url}
                            />
                        )
                        cont++;
                    }
                })}
            </section>
            <div className="sectionMore">
                <button className="moreProjects"><a href="https://github.com/orgs/Projetos-React/repositories"
                target="blank"></a>Veja mais <IoMdAdd className='more' /></button>
            </div>
        </section>
    )
}