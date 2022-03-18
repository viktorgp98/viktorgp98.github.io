import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Project from "./components/projects/Project";
import About from "./components/about-me/About";
import Contact from "./components/contact-me/Contact";
import React from "react";
import LocomotiveScroll from 'locomotive-scroll';

class App extends React.Component {
  componentDidMount() {
    const scroll = new LocomotiveScroll({
      el: document.querySelector(".App"),
      smooth: true
    });
  }
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="sections">
          <Home />
          <Project/>
          <About />
          <Contact />
        </div>
      </div>
    );
  }
}

export default App;
