import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="app">
      {/* Background Elements */}
      <div className="bg-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>

      {/* Main Content */}
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
      </main>

      {/* Footer */}
      <footer className="footer-simple">
        <div className="footer-simple-content">
          <img src="https://github.com/Xylar-99.png" alt="AQ GitHub Logo" className="footer-simple-logo-img" />
          <p className="footer-simple-tagline">
            Backend Developer & 1337 Student passionate about creating efficient and scalable solutions.
          </p>
          <div className="footer-simple-social">
            <a href="https://github.com/Xylar-99" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            <a href="https://linkedin.com/in/abdelbassat-quaoubai" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="mailto:abdelbassat.quaoubai99@gmail.com"><i className="fas fa-envelope"></i></a>
          </div>
          <div className="footer-simple-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
          </div>
          <div className="footer-simple-copy">
            © 2024 Abdelbassat Quaoubai. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <a href="#home" className="scroll-top" id="scroll-top">
        <i className="fas fa-arrow-up"></i>
      </a>
    </div>
  );
};

export default App;
