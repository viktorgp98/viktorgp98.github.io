import React from "react";
import "./ProjectsList.css";
import Project from "../project/Project";
import {proyectos} from '../../data'

class ProjectsList extends React.Component{
  render() {
    return (
      <section className="secc-projects p-5" data-scroll-section>
        <div className="container">
          <div className="projects-titles">
            <h2 className="pt-5 title_proyects title_section" id="projects">
              Proyectos
            </h2>
            <p className="subtitle_proyects">
              Seleccion de proyectos realizadoss
            </p>
            <div className="project_list row my-4 text-center">
              {proyectos.map((item)=>(
                <Project key={item.id} title={item.title} desc={item.description} desc_large={item.description_large} url={item.url} img={item.img}/>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ProjectsList;
