import React, { Component } from "react";
import "./Project.css";

class Project extends Component {
  render() {
    return (
      <section className="secc-projects" data-scroll-section>
        <div className="container">
          <div className="projects-titles">
            <h2 className="pt-5 title_proyects title_section" id="projects">
              Proyectos
            </h2>
            <p className="subtitle_proyects">
              Seleccion de proyectos realizadoss
            </p>
          </div>
        </div>
      </section>
    );
  }
}

export default Project;
