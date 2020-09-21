import React from 'react';

import './App.css';

import Home from './Contents/Home';

import About from './Contents/About';

import Education from './Contents/Education';

import Experience from './Contents/Experience';

import Projects from './Contents/Projects';

import Skills from './Contents/Skills';

import Contact from './Contents/Contact';

import{
BrowserRouter as Router,
Route,
} from "react-router-dom";

import Navbar from './Components/Navbar';

function App() {
  return (
   <Router>
      <div className="App">
        
        <Navbar />

        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/education">
          <Education />
        </Route>

        <Route path="/projects">
          <Projects />
        </Route>
        
        <Route path="/experience">
          <Experience />
        </Route>

        <Route path="/skills">
          <Skills />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>
      
      </div>
    </Router> 

  )
}

export default App;