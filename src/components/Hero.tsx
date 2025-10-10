import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Main Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <p className="text-[#cc8899] text-sm uppercase tracking-[0.3em] font-light mb-4">
                  Backend Developer
                </p>
                <h1 className="text-5xl md:text-7xl font-light text-white leading-tight mb-6">
                  Abdelbassat
                  <br />
                  <span className="text-[#cc8899]">Quaoubai</span>
                </h1>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-gray-400 text-lg leading-relaxed max-w-lg"
              >
                Building scalable backend systems with clean architecture and elegant code.
              </motion.p>
            </div>

            {/* 1337 Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="inline-flex items-center border border-[#cc8899]/30 px-6 py-3 space-x-3 hover:border-[#cc8899] transition-colors duration-300"
            >
              <div className="w-2 h-2 bg-[#cc8899] rounded-full animate-pulse"></div>
              <span className="text-white text-sm">Student at</span>
              <span className="text-[#cc8899] text-xl font-light tracking-wider">1337</span>
              <span className="text-gray-500 text-xs">/ 42 Network</span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#projects"
                className="group relative px-8 py-4 bg-[#cc8899] text-white overflow-hidden"
              >
                <span className="relative z-10 uppercase text-sm tracking-widest font-light">
                  View Projects
                </span>
                <div className="absolute inset-0 bg-white transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
                <span className="absolute inset-0 flex items-center justify-center uppercase text-sm tracking-widest font-light transition-opacity duration-300 opacity-0 group-hover:opacity-100" style={{ color: '#282727' }}>
                  View Projects
                </span>
              </a>
              
              <a
                href="#contact"
                className="px-8 py-4 border border-[#cc8899]/30 text-gray-400 hover:border-[#cc8899] hover:text-white transition-all duration-300 uppercase text-sm tracking-widest font-light"
              >
                Contact
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            {/* About 1337 */}
            <div className="border p-6 hover:border-[#cc8899]/50 transition-all duration-300 group" style={{ borderColor: '#3a3939' }}>
              <h3 className="text-white text-lg font-light mb-3 tracking-wide">
                About 1337
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Peer-learning school with project-based education. Part of the 42 Network.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              <div className="border p-4 text-center hover:border-[#cc8899]/50 transition-colors duration-300" style={{ borderColor: '#3a3939' }}>
                <div className="text-2xl text-[#cc8899] font-light mb-1">5+</div>
                <div className="text-xs text-gray-600 uppercase tracking-wider">Projects</div>
              </div>
              <div className="border p-4 text-center hover:border-[#cc8899]/50 transition-colors duration-300" style={{ borderColor: '#3a3939' }}>
                <div className="text-2xl text-[#cc8899] font-light mb-1">24/7</div>
                <div className="text-xs text-gray-600 uppercase tracking-wider">Learning</div>
              </div>
              <div className="border p-4 text-center hover:border-[#cc8899]/50 transition-colors duration-300" style={{ borderColor: '#3a3939' }}>
                <div className="text-2xl text-[#cc8899] font-light mb-1">100%</div>
                <div className="text-xs text-gray-600 uppercase tracking-wider">Hands-on</div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <a
            href="#projects"
            className="flex flex-col items-center space-y-2 text-gray-700 hover:text-[#cc8899] transition-colors duration-300"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <FaArrowDown className="animate-bounce" size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
