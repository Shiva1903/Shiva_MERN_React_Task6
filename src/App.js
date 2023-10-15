import React from 'react';
import logo from './logo.svg';
import './App.css'; 
import About from './Components/About';
import Education from './Components/Education';
import Skills from './Components/Skills';
import Achievements from './Components/Achievements';
import Hobbies from './Components/Hobbies';
import Contact from './Components/Contact';
function App() {
  return (
    <div className="App">
    <nav className="navbar">
        <p>Portfolio Website</p>
      </nav>
      <About />
      <Education />
      <Skills />
      <Hobbies />
      <Achievements />
      <Contact></Contact>
    </div>
  );
}

export default App;
