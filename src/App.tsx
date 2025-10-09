import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-white relative overflow-hidden">
      {/* 3D Animated Background Circles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Large floating circles with 3D effect */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`circle-large-${i}`}
            className="absolute rounded-full animate-float-3d"
            style={{
              width: `${200 + Math.random() * 300}px`,
              height: `${200 + Math.random() * 300}px`,
              left: `${Math.random() * 100}%`,
              top: `${-20 + Math.random() * 40}%`,
              background: i % 2 === 0 
                ? 'radial-gradient(circle, rgba(204, 136, 153, 0.08) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(139, 69, 193, 0.08) 0%, transparent 70%)',
              animationDelay: `${i * 2}s`,
              animationDuration: `${20 + i * 3}s`,
              filter: 'blur(60px)',
            }}
          ></div>
        ))}
      </div>

      {/* Subtle gradient overlay */}
      <div className="fixed inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-transparent to-gray-900/50"></div>
      </div>

      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>

      <style>{`
        /* 3D Float Animation */
        @keyframes float-3d {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          33% {
            transform: translate3d(30px, -40px, 20px) scale(1.1);
          }
          66% {
            transform: translate3d(-30px, 40px, -20px) scale(0.9);
          }
        }

        .animate-float-3d {
          animation: float-3d ease-in-out infinite;
          transform-style: preserve-3d;
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Hide scrollbar but keep functionality */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #000000;
        }

        ::-webkit-scrollbar-thumb {
          background: #cc8899;
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #d696a8;
        }
      `}</style>
    </div>
  );
};

export default App;
