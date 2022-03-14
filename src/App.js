import './App.css';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Project from './components/projects/Project';
import About from './components/about-me/About';
import Contact from './components/contact-me/Contact'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Project/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
