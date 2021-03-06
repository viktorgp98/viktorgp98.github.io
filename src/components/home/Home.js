import React, { Component } from "react";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <section data-scroll-section>
        <div className="container home p-4 pb-4">
          <div className="home_texts container-md pt-5 pb-5">
            <h1 className="home_title row text-center">
              <span>PROGRAMADOR</span>
              <span>WEB</span>
            </h1>
            <p className="text-center home_subtitle">FREELANCE</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
