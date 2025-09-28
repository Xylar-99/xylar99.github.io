import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaServer, FaDocker } from 'react-icons/fa';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4" style={{
      background: 'linear-gradient(135deg, #1a1a1a 0%, #2d1b69 30%, #dc2626 70%, #1a1a1a 100%)'
    }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            About <span className="text-transparent bg-gradient-to-r from-purple-400 to-red-500 bg-clip-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-red-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6" style={{ color: '#dc2626' }}>
              Backend Developer & System Programming Enthusiast
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm <span className="text-white font-semibold">Abdelbassat Quaoubai</span>, 
                a passionate backend developer currently studying at <span style={{ color: '#dc2626' }}>1337 (42 Network)</span>. 
                My journey in programming is driven by curiosity and a love for creating efficient, 
                scalable solutions.
              </p>
              
              <p>
                At 1337, I've developed strong foundations in <span style={{ color: '#dc2626' }}>C++ programming</span>, 
                <span style={{ color: '#dc2626' }}> system architecture</span>, and 
                <span style={{ color: '#dc2626' }}> problem-solving methodologies</span>. 
                The peer-to-peer learning environment has taught me collaboration, 
                code review practices, and how to tackle complex challenges.
              </p>
              
              <p>
                My expertise lies in building robust backend systems, working with containerization 
                technologies like <span style={{ color: '#dc2626' }}>Docker</span>, and creating 
                high-performance web servers. I'm particularly interested in system programming 
                and the intersection of hardware and software optimization.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-black/80 p-6 rounded-lg border border-purple-500/50 card-hover"
                style={{ 
                  boxShadow: '0 0 20px rgba(220, 38, 38, 0.2), 0 0 40px rgba(139, 69, 193, 0.1)' 
                }}
              >
                <FaGraduationCap className="text-3xl mb-4" style={{ color: '#dc2626' }} />
                <h4 className="text-xl font-semibold mb-2">Education</h4>
                <p className="text-gray-400">Student at 1337 (42 Network)</p>
                <p className="text-sm text-gray-500">Peer-to-peer learning</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-black/80 p-6 rounded-lg border border-purple-500/50 card-hover"
                style={{ 
                  boxShadow: '0 0 20px rgba(220, 38, 38, 0.2), 0 0 40px rgba(139, 69, 193, 0.1)' 
                }}
              >
                <FaCode className="text-3xl mb-4" style={{ color: '#dc2626' }} />
                <h4 className="text-xl font-semibold mb-2">Programming</h4>
                <p className="text-gray-400">C++ & System Programming</p>
                <p className="text-sm text-gray-500">Performance-focused</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-black/80 p-6 rounded-lg border border-purple-500/50 card-hover"
                style={{ 
                  boxShadow: '0 0 20px rgba(220, 38, 38, 0.2), 0 0 40px rgba(139, 69, 193, 0.1)' 
                }}
              >
                <FaServer className="text-3xl mb-4" style={{ color: '#dc2626' }} />
                <h4 className="text-xl font-semibold mb-2">Backend</h4>
                <p className="text-gray-400">Web Servers & APIs</p>
                <p className="text-sm text-gray-500">Scalable architecture</p>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-black/80 p-6 rounded-lg border border-purple-500/50 card-hover"
                style={{ 
                  boxShadow: '0 0 20px rgba(220, 38, 38, 0.2), 0 0 40px rgba(139, 69, 193, 0.1)' 
                }}
              >
                <FaDocker className="text-3xl mb-4" style={{ color: '#dc2626' }} />
                <h4 className="text-xl font-semibold mb-2">DevOps</h4>
                <p className="text-gray-400">Docker & Containers</p>
                <p className="text-sm text-gray-500">Infrastructure automation</p>
              </motion.div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-lg border"
              style={{
                background: 'linear-gradient(135deg, rgba(220, 38, 38, 0.1) 0%, rgba(139, 69, 193, 0.1) 100%)',
                borderColor: 'rgba(220, 38, 38, 0.3)'
              }}
            >
              <h4 className="text-xl font-semibold mb-3" style={{ color: '#dc2626' }}>Current Focus</h4>
              <ul className="space-y-2 text-gray-300">
                <li>• Advanced C++ programming techniques</li>
                <li>• Container orchestration with Docker</li>
                <li>• High-performance web server development</li>
                <li>• System-level optimization</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
