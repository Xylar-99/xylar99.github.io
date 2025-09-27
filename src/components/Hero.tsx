import React from 'react';
import { motion } from 'framer-motion';
import { FaCode } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-4">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-accent text-lg mb-4 font-mono"
            >
              Hi, my name is
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-5xl lg:text-7xl font-medium mb-4"
            >
              <span className="text-white font-normal">Abdelbassat</span>
              <br />
              <span className="gradient-text font-semibold">Quaoubai</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl lg:text-4xl text-gray-400 mb-6 font-mono"
            >
              Backend Developer & 1337 Student
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="text-gray-300 text-lg max-w-2xl mb-8 leading-relaxed"
            >
              I'm a passionate backend developer studying at 1337 (42 Network). 
              I specialize in creating robust server-side applications with C++, 
              Docker containers, and system programming. Currently working on 
              innovative projects including web servers, containerization, and 
              interactive applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-wrap gap-4"
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300"
              >
                <FaCode className="mr-2" />
                View My Work
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-3 reiatsu-button text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative">
              {/* Floating Code Cards */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 2, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 0
                  }}
                  className="bg-primary border border-accent/30 rounded-lg p-4 backdrop-blur-sm"
                >
                  <div className="text-accent text-2xl mb-2">⚡</div>
                  <div className="text-sm text-white font-mono">C++</div>
                  <div className="text-xs text-muted">System Programming</div>
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, -2, 0]
                  }}
                  transition={{ 
                    duration: 3.5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                  className="bg-primary border border-highlight/30 rounded-lg p-4 backdrop-blur-sm"
                >
                  <div className="text-highlight text-2xl mb-2">🐳</div>
                  <div className="text-sm text-white font-mono">Docker</div>
                  <div className="text-xs text-muted">Containers</div>
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, -12, 0],
                    rotate: [0, 1.5, 0]
                  }}
                  transition={{ 
                    duration: 3.8, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="bg-primary border border-zanpakuto/30 rounded-lg p-4 backdrop-blur-sm"
                >
                  <div className="text-zanpakuto text-2xl mb-2">🌐</div>
                  <div className="text-sm text-white font-mono">HTTP</div>
                  <div className="text-xs text-muted">Web Servers</div>
                </motion.div>

                <motion.div
                  animate={{ 
                    y: [0, -8, 0],
                    rotate: [0, -1.5, 0]
                  }}
                  transition={{ 
                    duration: 4.2, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                  className="bg-primary border border-danger/30 rounded-lg p-4 backdrop-blur-sm"
                >
                  <div className="text-danger text-2xl mb-2">🐧</div>
                  <div className="text-sm text-white font-mono">Linux</div>
                  <div className="text-xs text-muted">System Admin</div>
                </motion.div>
              </div>

              {/* Central Energy Orb */}
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut"
                }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <div className="w-32 h-32 bg-gradient-to-r from-accent via-highlight to-zanpakuto rounded-full opacity-20 blur-2xl"></div>
              </motion.div>

              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [-20, -40, -20],
                    x: [0, Math.sin(i) * 20, 0],
                    opacity: [0.3, 0.8, 0.3]
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.8
                  }}
                  className="absolute w-2 h-2 bg-accent rounded-full"
                  style={{
                    left: `${20 + i * 12}%`,
                    top: `${30 + (i % 2) * 40}%`
                  }}
                />
              ))}

              {/* Stats Display */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="mt-8 bg-secondary/80 backdrop-blur-sm rounded-lg p-6 border border-accent/20"
              >
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-accent">3+</div>
                    <div className="text-sm text-muted">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-zanpakuto">1337</div>
                    <div className="text-sm text-muted">School</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-highlight">C++</div>
                    <div className="text-sm text-muted">Expert</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-danger">24/7</div>
                    <div className="text-sm text-muted">Coding</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
