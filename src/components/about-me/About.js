import React, { Component } from "react";
import "./About.css";
import foto from '../documents/fotoviktor.jpg'

class About extends Component {
  render() {
    return (
      <section data-scroll-section className="about pt-5" id="about">
        <div className="container p-4">
          <div className="row justify-content-top">
            <div className="col-6">
            <h1 className="title_section">Sobre mí</h1>
              <p>
                Hola mi nombre es Viktor González, soy Analista Programador. <br/>
                Me especializo en la programación web.
              </p>
            </div>
            <div className="col-6 pt-4" >
              <figure className="about_photo " data-scroll  data-scroll-speed="3">
                <img className="about_photo_image" alt="foto" src={foto}/>
              </figure>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default About;
