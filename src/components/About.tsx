import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 relative overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-[#cc8899]/5 rounded-full"
        ></motion.div>
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#cc8899]/5 rounded-full"
        ></motion.div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-wide">
            About
          </h2>
          <div className="w-24 h-px bg-[#cc8899] mx-auto"></div>
        </motion.div>

        {/* Main Content - Centered */}
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="text-center space-y-8">
              <p className="text-gray-400 text-xl md:text-2xl leading-relaxed font-light">
                I'm <span className="text-white">Abdelbassat Quaoubai</span>, a backend developer 
                crafting elegant systems with precision and care.
              </p>
            </div>
          </motion.div>

          {/* Info Grid - Minimal Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            
            {/* School Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative border p-8 transition-all duration-500"
              style={{ borderColor: '#3a3939' }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#cc8899'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#3a3939'}
            >
              <div className="absolute top-0 left-0 w-full h-px bg-[#cc8899] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="text-center space-y-4">
                <div className="text-[#cc8899] text-3xl font-light mb-2">1337</div>
                <p className="text-gray-500 text-sm">42 Network School</p>
              </div>
            </motion.div>

            {/* Education System Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative border p-8 transition-all duration-500"
              style={{ borderColor: '#3a3939' }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#cc8899'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#3a3939'}
            >
              <div className="absolute top-0 left-0 w-full h-px bg-[#cc8899] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="text-center space-y-4">
                <div className="text-white text-lg font-light mb-2">Peer Learning</div>
                <p className="text-gray-500 text-sm">Project-based education</p>
              </div>
            </motion.div>

            {/* Focus Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group relative border p-8 transition-all duration-500"
              style={{ borderColor: '#3a3939' }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#cc8899'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = '#3a3939'}
            >
              <div className="absolute top-0 left-0 w-full h-px bg-[#cc8899] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              
              <div className="text-center space-y-4">
                <div className="text-white text-lg font-light mb-2">Backend</div>
                <p className="text-gray-500 text-sm">System Architecture</p>
              </div>
            </motion.div>

          </div>

          {/* Philosophy Quote - Minimal */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center"
          >
            <div className="max-w-2xl mx-auto relative">
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 h-px bg-[#cc8899]"></div>
                <div className="w-2 h-2 bg-[#cc8899] rounded-full mx-4"></div>
                <div className="w-8 h-px bg-[#cc8899]"></div>
              </div>
              <p className="text-gray-500 italic text-base leading-relaxed">
                Clean code, elegant systems, continuous learning
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
