import React, { Component } from "react";
import './Navbar.css'
import pdf from '../documents/CV - Viktor.pdf'

class Navbar extends Component {
  render(){
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top"  data-scroll-sticky>
      <div className="container">
        <a className="navbar-brand fw-bold fst-italic" href="/">
          Viktor González P.
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
          aria-controls="navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <div className="navbar-nav ms-auto">
            <div className="nav-item">
              <a className="nav-link" aria-current="page" href="/" >
                Inicio
              </a>
            </div>
            <div className="nav-item">
              <a className="nav-link" href="#about" data-scroll-to>
                Sobre mí
              </a>
            </div>
            <div className="nav-item">
              <a className="nav-link" href="#contact" data-scroll-to>
                Contacto
              </a>
            </div>
            <div className="nav-item d-flex align-items-center ml-2">
              <a
                href={pdf}
                target="_blank"
                rel="noreferrer"
                className="btn-cv "
              >
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    )
  }
}

export default Navbar
