import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';


const App: React.FC = () => {
  return (
    <div 
      className="min-h-screen text-white relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #1a0d33 25%, #4c1d95 50%, #2d1b69 75%, #000000 100%)'
      }}
    >
      {/* Purple & Dark Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Purple and dark spiritual pressure */}
        <div 
          className="absolute inset-0 opacity-15"
          style={{
            background: 'radial-gradient(ellipse at 30% 70%, rgba(139, 69, 193, 0.4) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(45, 27, 105, 0.3) 0%, transparent 50%)'
          }}
        />
        
        {/* Purple floating particles */}
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: '3px',
              height: '3px',
              background: 'rgba(139, 69, 193, 0.7)',
              left: `${20 + i * 25}%`,
              top: `${30 + i * 15}%`,
              animation: `float ${25 + i * 5}s infinite ease-in-out`,
              animationDelay: `${i * 3}s`,
              filter: 'blur(0.5px)',
              boxShadow: '0 0 10px rgba(139, 69, 193, 0.5)'
            }}
          />
        ))}
        
        {/* Dark purple floating particles */}
        {[...Array(2)].map((_, i) => (
          <div
            key={i + 3}
            className="absolute rounded-full"
            style={{
              width: '2px',
              height: '2px',
              background: 'rgba(45, 27, 105, 0.6)',
              left: `${40 + i * 20}%`,
              top: `${20 + i * 30}%`,
              animation: `float ${30 + i * 4}s infinite ease-in-out`,
              animationDelay: `${(i + 2) * 2}s`,
              filter: 'blur(0.5px)',
              boxShadow: '0 0 8px rgba(45, 27, 105, 0.4)'
            }}
          />
        ))}
        
        {/* Central reiatsu energy */}
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(139, 69, 193, 0.15) 0%, rgba(45, 27, 105, 0.08) 40%, transparent 70%)',
            borderRadius: '50%',
            animation: 'pulse 20s infinite ease-in-out'
          }}
        />
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
};

export default App;
