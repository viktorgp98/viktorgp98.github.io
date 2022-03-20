import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about-me/About";
import Contact from "./components/contact-me/Contact";
import React from "react";
import LocomotiveScroll from "locomotive-scroll";
import ProjectsList from "./components/projects-list/ProjectsList";

class App extends React.Component {
  componentDidMount() {
    const scroll = new LocomotiveScroll({
      el: document.querySelector(".App"),
      smooth: true,
      repeat: false,
      getDirection: true,
      direction: "vertical",
      tablet: {
        smooth: false,
        direction: "vertical",
      },
      smartphone: {
        smooth: false,
        direction: "vertical",
      },
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="sections">
          <Home />
          <ProjectsList/>
          <About />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
